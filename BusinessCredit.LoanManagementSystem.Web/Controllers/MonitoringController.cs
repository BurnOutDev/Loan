using BusinessCredit.Core;
using BusinessCredit.Core.LoanCalculator;
using BusinessCredit.Domain;
using BusinessCredit.Domain.Enums;
using BusinessCredit.LoanManagementSystem.Web.Models;
using BusinessCredit.LoanManagementSystem.Web.Models.Json;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize(Roles = "Monitoring")]
    public class MonitoringController : Controller
    {
        #region Databases
        private BusinessCreditContext _centralDb;

        public BusinessCreditContext CentralDb
        {
            get
            {
                if (_centralDb == null)
                    _centralDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Head_BusinessCreditDbConnectionString"].ConnectionString);
                return _centralDb;
            }
        }

        private BusinessCreditContext _isaniDb;

        public BusinessCreditContext IsaniDb
        {
            get
            {
                if (_isaniDb == null)
                    _isaniDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Isani_BusinessCreditDbConnectionString"].ConnectionString);
                return _isaniDb;
            }
        }

        private BusinessCreditContext _okribaDb;

        public BusinessCreditContext OkribaDb
        {
            get
            {
                if (_okribaDb == null)
                    _okribaDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Okriba_BusinessCreditDbConnectionString"].ConnectionString);
                return _okribaDb;
            }
        }

        private BusinessCreditContext _liloDb;

        public BusinessCreditContext LiloDb
        {
            get
            {
                if (_liloDb == null)
                    _liloDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Lilo_BusinessCreditDbConnectionString"].ConnectionString);
                return _liloDb;
            }
        }

        private BusinessCreditContext _eliavaDb;

        public BusinessCreditContext EliavaDb
        {
            get
            {
                if (_eliavaDb == null)
                    _eliavaDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Eliava_BusinessCreditDbConnectionString"].ConnectionString);
                return _eliavaDb;
            }
        }

        private BusinessCreditContext _vagzaliDb;

        public BusinessCreditContext VagzaliDb
        {
            get
            {
                if (_vagzaliDb == null)
                    _vagzaliDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Vagzali_BusinessCreditDbConnectionString"].ConnectionString);
                return _vagzaliDb;
            }
        }

        private BusinessCreditContext _gugaDb;

        public BusinessCreditContext GugaDb
        {
            get
            {
                if (_gugaDb == null)
                    _gugaDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Central_Guga_BusinessCreditDbConnectionString"].ConnectionString);
                return _gugaDb;
            }
        }

        private BusinessCreditContext _sandroDb;

        public BusinessCreditContext SandroDb
        {
            get
            {
                if (_sandroDb == null)
                    _sandroDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Sandro_Head_BusinessCreditDbConnectionString"].ConnectionString);
                return _sandroDb;
            }
        }

        public ICollection<BusinessCreditContext> Databases
        {
            get
            {
                return new List<BusinessCreditContext>() { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb, GugaDb, SandroDb };
            }
        }

        #endregion

        public ApplicationUser CurrentUser
        {
            get
            {
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
                return manager.FindById(User.Identity.GetUserId());
            }
        }

        #region Payments
        public ActionResult Payments(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            if (loanId.HasValue)
                ViewData.Add("loanId", loanId.Value);

            ViewData.Add("fromDate", fromDate);
            ViewData.Add("toDate", toDate);
            ViewData.Add("branch", branch);

            return View();
        }
        public JsonResult PaymentsJson(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            var database = Databases.ElementAt(branch);

            DateTime dailyFromDate = DateTime.Today;
            DateTime dailyToDate = DateTime.Today;

            if (!string.IsNullOrEmpty(fromDate) && !string.IsNullOrEmpty(toDate))
            {
                dailyFromDate = DateTime.Parse(fromDate);
                dailyToDate = DateTime.Parse(toDate);
            }
            if (loanId == null)
            {
                //nothing
                var res = database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList();

                if (fromDate != null)
                    return Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList()), JsonRequestBehavior.AllowGet);

                return Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList()), JsonRequestBehavior.AllowGet);
            }
            if (loanId != null)
                return Json(PaymentsToJson(database.Loans.Find(loanId).Payments.ToList()), JsonRequestBehavior.AllowGet);

            return Json(new List<Payment>(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult EditPaymentForm(int paymentId = 0, int branch = 0)
        {
            var pmt = Databases.ElementAt(branch).Payments.FirstOrDefault(x => x.PaymentID == paymentId);

            ViewData["paymentId"] = paymentId;
            ViewData["branch"] = branch;
            ViewData["currentPmt"] = pmt.CurrentPayment;
            ViewData["accruingPenalty"] = pmt.AccruingPenalty;
            ViewData["loanBalance"] = pmt.LoanBalance;
            ViewData["payableInterest"] = pmt.PayableInterest;
            ViewData["order"] = pmt.TaxOrderID;

            return View();
        }

        public string EditPayment(string order, double? currentPmt, double? accruingPenalty, double? loanBalance, double? payableInterest, int paymentId = 0, int branch = 0)
        {
            bool first = true;

            var db = Databases.ElementAt(branch);
            if (paymentId == 0)
            {
                return "გადახდის მითითებული იდენტიფიკატორი არასწორია!";
            }

            var pmt1 = db.Payments.FirstOrDefault(x => x.PaymentID == paymentId);
            var loanId = pmt1.Loan.LoanID;

            var payments = pmt1.Loan.Payments.Where(x => x.PaymentDate >= pmt1.PaymentDate).ToList();

            db.Payments.RemoveRange(payments);
            db.SaveChanges();

            foreach (var payment in payments)
            {
                var pmt = Databases.ElementAt(branch).Payments.Create();

                pmt.CurrentPayment = payment.CurrentPayment;
                pmt.TaxOrderID = payment.TaxOrderID;

                if (first == true)
                {
                    #region CurrentPayment
                    if (currentPmt.HasValue)
                        pmt.CurrentPayment = currentPmt.Value;
                    else
                        pmt.CurrentPayment = payment.CurrentPayment;
                    #endregion

                    #region AccruingPenalty
                    if (accruingPenalty.HasValue)
                        pmt._accruingPenalty = accruingPenalty.Value;
                    #endregion

                    #region LoanBalance
                    if (loanBalance.HasValue)
                        pmt._loanBalance = loanBalance.Value;
                    #endregion

                    #region PayableInterest
                    if (payableInterest.HasValue)
                        pmt._payableInterest = payableInterest.Value;
                    #endregion

                    #region Order
                    if (!string.IsNullOrWhiteSpace(order))
                        pmt.TaxOrderID = order;
                    #endregion

                    first = false;
                }

                pmt.Loan = Databases.ElementAt(branch).Loans.Find(loanId);
                pmt.PaymentDate = payment.PaymentDate;
                pmt.CreditExpert = Databases.ElementAt(branch).CreditExperts.FirstOrDefault();
                pmt.CashCollectionAgent = Databases.ElementAt(branch).CashCollectionAgents.FirstOrDefault();

                Databases.ElementAt(branch).Payments.Add(pmt);
            }

            db.SaveChanges();

            return "Edited successfully.";
        }

        #endregion

        #region Loans

        public ActionResult Loans(string date, int branch = 0)
        {
            ViewData["branch"] = branch;
            ViewData["date"] = date;

            return View();
        }

        public JsonResult IndexJson(string date, int branch = 0)
        {
            var db = Databases.ElementAt(branch);

            List<Loan> result;

            result = db.Loans.OrderBy(x => x.LoanID).ToList();

            if (date != null)
            {
                var startDate = DateTime.Parse(date);
                result = result.Where(x => x.LoanStartDate == startDate.Date).ToList();
            }

            var resultJson = new List<LoanJson>();

            foreach (var loan in result)
            {
                resultJson.Add(new LoanJson
                {
                    AccountAccountID = loan.Account.AccountID,
                    AccountAccountNumber = loan.Account.AccountNumber,
                    AccountLastName = loan.Account.LastName,
                    AccountName = loan.Account.Name,
                    AccountNumberMobile = loan.Account.NumberMobile,
                    AccountPrivateNumber = loan.Account.PrivateNumber,
                    Agreement = loan.Agreement,
                    AgreementDate = loan.AgreementDate.ToShortDateString(),
                    AmountToBePaidAll = Math.Round(loan.AmountToBePaidAll, 2),
                    AmountToBePaidDaily = Math.Round(loan.AmountToBePaidDaily, 2),
                    CourtAndEnforcementFee = Math.Round(loan.CourtAndEnforcementFee, 2),
                    DateOfEnforcement = loan.DateOfEnforcement.HasValue ? loan.DateOfEnforcement.Value.ToShortDateString() : null,
                    DaysOfGrace = loan.DaysOfGrace,
                    EffectiveInterestRate = Math.Round(loan.EffectiveInterestRate * 100, 4),
                    LoanAmount = Math.Round(loan.LoanAmount, 2),
                    LoanDailyInterestRate = Math.Round(loan.LoanDailyInterestRate * 100, 4),
                    LoanEndDate = loan.LoanEndDate.ToShortDateString(),
                    LoanID = loan.LoanID,
                    LoanNotificationLetter = loan.LoanNotificationLetter.HasValue ? loan.LoanNotificationLetter.Value.ToShortDateString() : null,
                    LoanPenaltyRate = Math.Round(loan.LoanPenaltyRate * 100, 4),
                    LoanPurpose = loan.LoanPurpose,
                    LoanStartDate = loan.LoanStartDate.ToShortDateString(),
                    LoanStatus = loan.LoanStatus.ToString(),
                    LoanTermDays = loan.LoanTermDays,
                    NetworkDays = loan.NetworkDays,
                    ProblemManager = loan.ProblemManager,
                    ProblemManagerDate = loan.ProblemManagerDate.HasValue ? loan.ProblemManagerDate.Value.ToShortDateString() : null,
                    AccountBusinessPhysicalAddress = loan.Account.BusinessPhysicalAddress,
                    AccountGender = loan.Account.Gender == Gender.Male ? "მამრ." : "მდედრ.",
                    AccountPhysicalAddress = loan.Account.PhysicalAddress,
                    AccountStatus = loan.Account.Status.ToString(),
                    BranchID = loan.BranchID,
                    CreditExpertID = loan.CreditExpert.EmployeeID,
                    CreditExpertLastName = loan.CreditExpert.LastName,
                    CreditExpertName = loan.CreditExpert.Name,
                    GuarantorName = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorName,
                    GuarantorLastName = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorLastName,
                    GuarantorPhoneNumber = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorPhoneNumber,
                    GuarantorPhysicalAddress = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorPhysicalAddress,
                    GuarantorPrivateNumber = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorPrivateNumber,
                    GuarantorsCount = loan.Guarantors.Count
                });
            }

            return Json(resultJson, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GuarantorsJson(int loanId, int branch)
        {
            var db = Databases.ElementAt(branch);

            var result = new List<GuarantorJson>();

            foreach (var g in db.Guarantors.Where(x => x.Loan.LoanID == loanId).ToList())
            {
                result.Add(new GuarantorJson
                {
                    GuarantorName = g.GuarantorName,
                    GuarantorLastName = g.GuarantorLastName,
                    GuarantorPhoneNumber = g.GuarantorPhoneNumber,
                    GuarantorPhysicalAddress = g.GuarantorPhysicalAddress,
                    GuarantorPrivateNumber = g.GuarantorPrivateNumber
                });
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        #region EditLoan

        #region Loan Edit Static Properties
        public ActionResult LoanEditStaticProperties(int? id, int? branch)
        {
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var loan = Databases.ElementAt(branch.Value).Loans.FirstOrDefault(x => x.LoanID == id.Value);

            var resultLoan = new LoanStaticPropertiesModel()
            {
                branch = branch.Value,
                LoanID = id.Value,
                Comment = loan.Comment,
                LoanAgreement = loan.Agreement,
                LoanAgreementDate = loan.AgreementDate,
                LoanPurpose = loan.LoanPurpose,
                NotificationLetterDate = loan.LoanNotificationLetter,
                ProblemManager = loan.ProblemManager,
                ProblemManagerDate = loan.ProblemManagerDate
            };

            return View(resultLoan);
        }

        [HttpPost]
        public ActionResult LoanEditStaticProperties(LoanStaticPropertiesModel loanStatic)
        {
            var db = Databases.ElementAt(loanStatic.branch);
            var dbloan = db.Loans.FirstOrDefault(x => x.LoanID == loanStatic.LoanID);

            dbloan.LoanPurpose = loanStatic.LoanPurpose;
            dbloan.Comment = loanStatic.Comment;
            dbloan.AgreementDate = loanStatic.LoanAgreementDate.Value;
            dbloan.Agreement = loanStatic.LoanAgreement;
            dbloan.LoanNotificationLetter = loanStatic.NotificationLetterDate;
            dbloan.ProblemManagerDate = loanStatic.ProblemManagerDate;
            dbloan.ProblemManager = loanStatic.ProblemManager;

            db.SaveChanges();
            return View();
        }
        #endregion

        #region RePlan Loan

        public ActionResult RePlanLoan(int? id, int? branch)
        {
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var loan = Databases.ElementAt(branch.Value).Loans.FirstOrDefault(x => x.LoanID == id.Value);

            var rePlanModel = new RePlanLoanModel()
            {
                branch = branch.Value,
                LoanID = id.Value,
                DailyInterestRate = loan.LoanDailyInterestRate,
                LoanAmount = loan.LoanAmount,
                LoanStartDate = loan.LoanStartDate,
                LoanTermDays = loan.LoanTermDays
            };

            return View(rePlanModel);
        }

        [HttpPost]
        public ActionResult RePlanLoan(RePlanLoanModel loan)
        {
            var db = Databases.ElementAt(loan.branch);

            var dbloan = db.Loans.FirstOrDefault(x => x.LoanID == loan.LoanID);

            var loanCalculated = new LoanModel()
            {
                Amount = loan.LoanAmount,
                DailyInterestRate = loan.DailyInterestRate,
                DaysOfGrace = 0,
                StartDate = loan.LoanStartDate,
                TermDays = loan.LoanTermDays
            };

            loanCalculated = LoanCalculator.Calculate(loanCalculated);

            dbloan.AmountToBePaidAll = loanCalculated.Payments.Sum(p => p.PaymentAmount);
            dbloan.AmountToBePaidDaily = loanCalculated.Payments.First().PaymentAmount;
            dbloan.EffectiveInterestRate = (loanCalculated.Payments.Sum(p => p.Interest) / loanCalculated.TermDays * 30) / loanCalculated.Amount;
            dbloan.LoanEndDate = loan.LoanStartDate.AddDays(loan.LoanTermDays);
            dbloan.LoanAmount = loanCalculated.Amount;
            dbloan.LoanDailyInterestRate = loanCalculated.DailyInterestRate;
            dbloan.LoanStartDate = loanCalculated.StartDate;
            dbloan.LoanTermDays = loanCalculated.TermDays;


            dbloan.PaymentsPlanned.Clear();

            for (int i = 0; i < loanCalculated.Payments.Count(); i++)
            {
                dbloan.PaymentsPlanned.Add(new PaymentPlanned()
                {
                    EndingBalance = loanCalculated.Payments.ElementAt(i).EndingBalance,
                    Interest = loanCalculated.Payments.ElementAt(i).Interest,
                    PaymentAmount = loanCalculated.Payments.ElementAt(i).PaymentAmount,
                    PaymentDate = loanCalculated.StartDate.AddDays(i + 1),
                    PaymentID = loanCalculated.Payments.ElementAt(i).PaymentID,
                    Principal = loanCalculated.Payments.ElementAt(i).Principal,
                    StartingBalance = loanCalculated.Payments.ElementAt(i).StartingBalance
                });
            }

            ///////////////////////////////////////////////////////////
            var firstPmtDate = loanCalculated.StartDate;

            var pmts = dbloan.Payments.ToList();

            foreach (var pmt in pmts)
            {
                var expertId = pmt.CreditExpert.EmployeeID;
                var collectorId = pmt.CashCollectionAgent.CashCollectionAgentID;

                db.Payments.Remove(pmt);
                db.SaveChanges();

                var paymentNew = db.Payments.Create();
                paymentNew.Loan = db.Loans.FirstOrDefault(l => l.LoanID == loan.LoanID);
                paymentNew.CurrentPayment = pmt.CurrentPayment;
                paymentNew.PaymentDate = firstPmtDate;
                paymentNew.TaxOrderID = pmt.TaxOrderID;
                paymentNew.CreditExpert = db.CreditExperts.FirstOrDefault(x => x.EmployeeID == expertId);
                paymentNew.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault(x => x.CashCollectionAgentID == collectorId);

                db.Payments.Add(paymentNew);
                db.SaveChanges();

                if (paymentNew.WholeDebt.Value <= 0)
                {
                    paymentNew.Loan.LoanStatus = LoanStatus.Closed;
                    db.SaveChanges();
                }

                firstPmtDate = firstPmtDate.AddDays(1);
            }

            db.SaveChanges();

            return View();
        }

        #endregion

        #region Edit Enforcement Loan
        public ActionResult EditEnforcementLoan(int? id, int? branch)
        {
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var loan = Databases.ElementAt(branch.Value).Loans.FirstOrDefault(x => x.LoanID == id.Value);

            var enforcementModel = new EditEnforcementLoanModel()
            {
                branch = branch.Value,
                EnforcementAndCourtFee = loan.CourtAndEnforcementFee,
                LoanEnforcementDate = loan.DateOfEnforcement,
                LoanID = id.Value
            };

            return View(enforcementModel);
        }

        [HttpPost]
        public ActionResult EditEnforcementLoan(EditEnforcementLoanModel loan)
        {
            var db = Databases.ElementAt(loan.branch);
            var dbloan = db.Loans.FirstOrDefault(x => x.LoanID == loan.LoanID);

            dbloan.CourtAndEnforcementFee = loan.EnforcementAndCourtFee;
            dbloan.DateOfEnforcement = loan.LoanEnforcementDate;

            var pmts = dbloan.Payments.Where(x => x.PaymentDate >= loan.LoanEnforcementDate).ToList();

            foreach (var pmt in pmts)
            {
                var expertId = pmt.CreditExpert.EmployeeID;
                var collectorId = pmt.CashCollectionAgent.CashCollectionAgentID;

                db.Payments.Remove(pmt);
                db.SaveChanges();

                var paymentNew = db.Payments.Create();
                paymentNew.Loan = db.Loans.FirstOrDefault(l => l.LoanID == loan.LoanID);
                paymentNew.CurrentPayment = pmt.CurrentPayment;
                paymentNew.PaymentDate = pmt.PaymentDate;
                paymentNew.TaxOrderID = pmt.TaxOrderID;
                paymentNew.CreditExpert = db.CreditExperts.FirstOrDefault(x => x.EmployeeID == expertId);
                paymentNew.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault(x => x.CashCollectionAgentID == collectorId);

                db.Payments.Add(paymentNew);
                db.SaveChanges();

                if (paymentNew.WholeDebt.Value <= 0)
                {
                    paymentNew.Loan.LoanStatus = LoanStatus.Closed;
                    db.SaveChanges();
                }
            }

            db.SaveChanges();

            return View();
        }

        #endregion

        #region Edit Guarantor

        public ActionResult EditGuarantor(int? id, int? branch)
        {
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var loan = Databases.ElementAt(branch.Value).Loans.FirstOrDefault(x => x.LoanID == id.Value);
            var guarantor = loan.Guarantors.FirstOrDefault();

            var guarantorModel = new GuarantorEditModel()
            {
                branch = branch.Value,
                GuarantorID = guarantor.GuarantorID,
                GuarantorLastName = guarantor.GuarantorLastName,
                GuarantorName = guarantor.GuarantorName,
                GuarantorPhoneNumber = guarantor.GuarantorPhoneNumber,
                GuarantorPhysicalAddress = guarantor.GuarantorPhysicalAddress,
                GuarantorPrivateNumber = guarantor.GuarantorPrivateNumber,
                Comment = guarantor.Comment
            };

            return View(guarantorModel);
        }

        [HttpPost]
        public ActionResult EditGuarantor(GuarantorEditModel guarantor)
        {
            var db = Databases.ElementAt(guarantor.branch);
            var guarantordb = db.Guarantors.FirstOrDefault(x => x.GuarantorID == guarantor.GuarantorID);

            guarantordb.Comment = guarantor.Comment;
            guarantordb.GuarantorLastName = guarantor.GuarantorLastName;
            guarantordb.GuarantorName = guarantor.GuarantorName;
            guarantordb.GuarantorPhoneNumber = guarantor.GuarantorPhoneNumber;
            guarantordb.GuarantorPhysicalAddress = guarantor.GuarantorPhysicalAddress;
            guarantordb.GuarantorPrivateNumber = guarantor.GuarantorPrivateNumber;

            db.SaveChanges();

            return View();
        }

        #endregion

        #endregion

        #endregion

        #region Daily

        public ActionResult Daily(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            if (loanId.HasValue)
                ViewData.Add("loanId", loanId.Value);

            ViewData.Add("fromDate", fromDate);
            ViewData.Add("toDate", toDate);
            ViewData.Add("branch", branch);

            return View();
        }
        public JsonResult DailyJson(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            var database = Databases.ElementAt(branch);

            DateTime dailyFromDate = DateTime.Today;
            DateTime dailyToDate = DateTime.Today;

            if (!string.IsNullOrEmpty(fromDate) && !string.IsNullOrEmpty(toDate))
            {
                dailyFromDate = DateTime.Parse(fromDate);
                dailyToDate = DateTime.Parse(toDate);
            }
            if (loanId == null)
            {
                //nothing
                var res = database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList();

                if (fromDate != null)
                    return Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList()), JsonRequestBehavior.AllowGet);

                return Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList()), JsonRequestBehavior.AllowGet);
            }
            if (loanId != null)
                return Json(PaymentsToJson(database.Loans.Find(loanId).Payments.ToList()), JsonRequestBehavior.AllowGet);

            return Json(new List<Payment>(), JsonRequestBehavior.AllowGet);
        }

        #endregion

        #region Comment

        public ActionResult Comment(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            if (loanId.HasValue)
                ViewData.Add("loanId", loanId.Value);

            ViewData.Add("fromDate", fromDate);
            ViewData.Add("toDate", toDate);
            ViewData.Add("branch", branch);

            return View();
        }

        public JsonResult CommentsByLoan(int loanId = 0, int branch = 0)
        {
            if (loanId == 0 || branch > Databases.Count || branch < 0)
                return Json(null, JsonRequestBehavior.AllowGet);

            var db = Databases.ElementAt(branch);

            var dbMon = new MonitoringDB();

            var payments = db.Payments.Where(x => x.Loan.LoanID == loanId).OrderBy(x => x.PaymentDate).ToList();

            var commentedPayments = new List<CommentPaymentModel>();

            for (int i = 0; i < payments.Count; i++)
            {
                var payment = payments[i];
                var comment = dbMon.Comments.FirstOrDefault(x => x.PaymentDate == payment.PaymentDate & x.LoanID == payment.Loan.LoanID);

                if (comment == null)
                {
                    comment = dbMon.Comments.Add(new Comment()
                    {
                        Branch = Branch.ოკრიბა,
                        CommentDate = DateTime.Today,
                        Content = "asdsd",
                        LoanID = payment.Loan.LoanID,
                        PaymentDate = payment.PaymentDate,
                        Type = Domain.Enums.CommentType.სხვა
                    });
                }

                commentedPayments.Add(
                    new CommentPaymentModel()
                    {
                        ClientID = payment.Loan.Account.AccountID,
                        LoanID = payment.Loan.LoanID,
                        Agreement = payment.Loan.Agreement,
                        BusinessAdress = payment.Loan.Account.BusinessPhysicalAddress,
                        CurrentDebt = payment.CurrentDebt.Value,
                        CurrentPayment = payment.CurrentPayment,
                        LastName = payment.Loan.Account.LastName,
                        Name = payment.Loan.Account.Name,
                        OverdueAmount = payment.ScheduleCatchUp.Value,
                        PaymentDate = payment.PaymentDate.ToShortDateString(),
                        PhoneNumber = payment.Loan.Account.NumberMobile,
                        PMT = payment.Loan.AmountToBePaidDaily,
                        PrivateNumber = payment.Loan.Account.PrivateNumber,
                        WholeDebt = payment.WholeDebt.Value,
                        Comment = comment.Content,
                        CommentID = comment.CommentID,
                        CommentType = comment.Type.ToString()
                    });
            }

            return Json(commentedPayments, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CommentJson(int branch = 0)
        {
            var date = DateTime.Today.AddDays(-1);

            if (date.DayOfWeek == DayOfWeek.Sunday)
                date = date.AddDays(-1);

            if (branch < 0 || branch > Databases.Count)
                return Json("", JsonRequestBehavior.AllowGet);

            var db = Databases.ElementAt(branch);

            var dbMon = new MonitoringDB();

            var payments = db.Payments.Where(x => x.PaymentDate == date).ToList();

            var commentedPayments = new List<CommentPaymentModel>();

            for (int i = 0; i < payments.Count; i++)
            {
                var payment = payments[i];
                var comment = dbMon.Comments.FirstOrDefault(x => x.PaymentDate == payment.PaymentDate & x.LoanID == payment.Loan.LoanID);

                if (comment == null)
                {
                    comment = dbMon.Comments.Add(new Comment()
                        {
                            Branch = Branch.ოკრიბა,
                            CommentDate = DateTime.Today,
                            Content = "Test",
                            LoanID = payment.Loan.LoanID,
                            PaymentDate = payment.PaymentDate,
                            Type = Domain.Enums.CommentType.სხვა
                        });
                }

                commentedPayments.Add(
                    new CommentPaymentModel()
                    {
                        ClientID = payment.Loan.Account.AccountID,
                        LoanID = payment.Loan.LoanID,
                        Agreement = payment.Loan.Agreement,
                        BusinessAdress = payment.Loan.Account.BusinessPhysicalAddress,
                        CurrentDebt = payment.CurrentDebt.Value,
                        CurrentPayment = payment.CurrentPayment,
                        LastName = payment.Loan.Account.LastName,
                        Name = payment.Loan.Account.Name,
                        OverdueAmount = payment.ScheduleCatchUp.Value,
                        PaymentDate = payment.PaymentDate.ToShortDateString(),
                        PhoneNumber = payment.Loan.Account.NumberMobile,
                        PMT = payment.Loan.AmountToBePaidDaily,
                        PrivateNumber = payment.Loan.Account.PrivateNumber,
                        WholeDebt = payment.WholeDebt.Value,
                        Comment = comment.Content,
                        CommentID = comment.CommentID,
                        CommentType = comment.Type.ToString()
                    });
            }

            return Json(commentedPayments, JsonRequestBehavior.AllowGet);
        }

        #endregion

        public List<PaymentJson> PaymentsToJson(List<Payment> payments)
        {
            var resultJson = new List<PaymentJson>();

            foreach (var pmt in payments.OrderBy(x => x.PaymentDate))
            {
                var jsonPayment = new PaymentJson
                {
                    AccruingInterestPayment = pmt.AccruingInterestPayment.HasValue ? Math.Round(pmt.AccruingInterestPayment.Value, 2) : 0,
                    AccruingOverdueInterest = pmt.AccruingOverdueInterest.HasValue ? Math.Round(pmt.AccruingOverdueInterest.Value, 2) : 0,
                    AccruingOverduePrincipal = pmt.AccruingOverduePrincipal.HasValue ? Math.Round(pmt.AccruingOverduePrincipal.Value, 2) : 0,
                    AccruingPenalty = pmt.AccruingPenalty.HasValue ? Math.Round(pmt.AccruingPenalty.Value, 2) : 0,
                    AccruingPenaltyPayment = pmt.AccruingPenaltyPayment.HasValue ? Math.Round(pmt.AccruingPenaltyPayment.Value, 2) : 0,
                    AccruingPrincipalPayment = pmt.AccruingPrincipalPayment.HasValue ? Math.Round(pmt.AccruingPrincipalPayment.Value, 2) : 0,
                    CurrentDebt = pmt.CurrentDebt.HasValue ? Math.Round(pmt.CurrentDebt.Value, 2) : 0,
                    CurrentInterestPayment = pmt.CurrentInterestPayment.HasValue ? Math.Round(pmt.CurrentInterestPayment.Value, 2) : 0,
                    CurrentOverdueInterest = pmt.CurrentOverdueInterest.HasValue ? Math.Round(pmt.CurrentOverdueInterest.Value, 2) : 0,
                    CurrentOverduePrincipal = pmt.CurrentOverduePrincipal.HasValue ? Math.Round(pmt.CurrentOverduePrincipal.Value, 2) : 0,
                    CurrentPayment = Math.Round(pmt.CurrentPayment, 2),
                    CurrentPenalty = pmt.CurrentPenalty.HasValue ? Math.Round(pmt.CurrentPenalty.Value, 2) : 0,
                    CurrentPrincipalPayment = pmt.CurrentPrincipalPayment.HasValue ? Math.Round(pmt.CurrentPrincipalPayment.Value, 2) : 0,
                    LoanAccountAccountID = pmt.Loan.Account.AccountID,
                    LoanAccountLastName = pmt.Loan.Account.LastName,
                    LoanAccountName = pmt.Loan.Account.Name,
                    LoanAccountPrivateNumber = pmt.Loan.Account.PrivateNumber,
                    LoanBalance = pmt.LoanBalance.HasValue ? Math.Round(pmt.LoanBalance.Value, 2) : 0,
                    LoanLoanID = pmt.Loan.LoanID,
                    LoanStatus = pmt.Loan.LoanStatus.ToString(),
                    PaidInterest = pmt.PaidInterest.HasValue ? Math.Round(pmt.PaidInterest.Value, 2) : 0,
                    PaidPenalty = pmt.PaidPenalty.HasValue ? Math.Round(pmt.PaidPenalty.Value, 2) : 0,
                    PaidPrincipal = pmt.PaidPrincipal.HasValue ? Math.Round(pmt.PaidPrincipal.Value, 2) : 0,
                    PayableInterest = pmt.PayableInterest.HasValue ? Math.Round(pmt.PayableInterest.Value, 2) : 0,
                    PayablePrincipal = pmt.PayablePrincipal.HasValue ? Math.Round(pmt.PayablePrincipal.Value, 2) : 0,
                    PaymentDate = pmt.PaymentDate.ToShortDateString(),
                    PaymentID = pmt.PaymentID,
                    PlannedBalance = Math.Round(pmt.PlannedBalance, 2),
                    PrincipalPrepaid = pmt.PrincipalPrepaid.HasValue ? Math.Round(pmt.PrincipalPrepaid.Value, 2) : 0,
                    PrincipalPrepaymant = pmt.PrincipalPrepaymant.HasValue ? Math.Round(pmt.PrincipalPrepaymant.Value, 2) : 0,
                    StartingBalance = pmt.StartingBalance.HasValue ? Math.Round(pmt.StartingBalance.Value, 2) : 0,
                    StartingPlannedBalance = pmt.StartingPlannedBalance.HasValue ? Math.Round(pmt.StartingPlannedBalance.Value, 2) : 0,
                    TaxOrderID = pmt.TaxOrderID,
                    WholeDebt = pmt.WholeDebt.HasValue ? Math.Round(pmt.WholeDebt.Value, 2) : 0,
                    LoanStartDate = pmt.Loan.LoanStartDate.ToShortDateString(),
                    LoanEndDate = pmt.Loan.LoanEndDate.ToShortDateString(),
                    LoanProblemManager = pmt.Loan.ProblemManager,
                    LoanEnforcementAndCourtFee = Math.Round(pmt.Loan.CourtAndEnforcementFee, 2),
                    Agreement = pmt.Loan.Agreement,
                    CashCollectorID = pmt.CashCollectionAgent.CashCollectionAgentID,
                    CashCollectorLastName = pmt.CashCollectionAgent.LastName,
                    CashCollectorName = pmt.CashCollectionAgent.Name,
                    LoanDateOfEnforcement = pmt.Loan.DateOfEnforcement.HasValue ? pmt.Loan.DateOfEnforcement.Value.ToShortDateString() : null,
                    LoanLoanNotificationLetter = pmt.Loan.LoanNotificationLetter.HasValue ? pmt.Loan.LoanNotificationLetter.Value.ToShortDateString() : null,
                    LoanProblemManagerDate = pmt.Loan.ProblemManagerDate.HasValue ? pmt.Loan.ProblemManagerDate.Value.ToShortDateString() : null,
                    PMT = Math.Round(pmt.Loan.AmountToBePaidDaily, 2),
                    EnforcementAndCourtFee = Math.Round(pmt.EnforcementAndCourtFee),
                    EnforcementAndCourtFeeEndingBalance = pmt.EnforcementAndCourtFeeEndingBalance.HasValue ? Math.Round(pmt.EnforcementAndCourtFeeEndingBalance.Value, 2) : 0,
                    EnforcementAndCourtFeePayment = pmt.EnforcementAndCourtFeePayment.HasValue ? Math.Round(pmt.EnforcementAndCourtFeePayment.Value, 2) : 0,
                    EnforcementAndCourtFeeStartingBalance = pmt.EnforcementAndCourtFeeStartingBalance.HasValue ? Math.Round(pmt.EnforcementAndCourtFeeStartingBalance.Value, 2) : 0,
                    TotalEnforcementAndCourtFee = pmt.TotalEnforcementAndCourtFee.HasValue ? Math.Round(pmt.TotalEnforcementAndCourtFee.Value, 2) : 0,
                    TotalEnforcementAndCourtFeePayment = pmt.TotalEnforcementAndCourtFeePayment.HasValue ? Math.Round(pmt.TotalEnforcementAndCourtFeePayment.Value, 2) : 0,
                    ScheduleCatchUp = pmt.ScheduleCatchUp.HasValue ? Math.Round(pmt.ScheduleCatchUp.Value, 2) : 0,
                    Comment = pmt.Comment,
                    BusinessPhysicalAddress = pmt.Loan.Account.BusinessPhysicalAddress,
                    LoanAgreement = pmt.Loan.Agreement,
                    NumberMobile = pmt.Loan.Account.NumberMobile
                };

                resultJson.Add(jsonPayment);
            }
            return resultJson.ToList();
        }

        public string EditComment(string paymentDate, string comment, int loanId = 0, int branch = 0, string type = "სხვა")
        {
            try
            {
                if (branch < 0)
                    return "BranchID can't be 0.";
                if (string.IsNullOrWhiteSpace(paymentDate))
                    return "PaymentDate can't be empty.";

                var dbLMS = Databases.ElementAt(branch);
                var dbMon = new MonitoringDB();
                var loan = dbLMS.Loans.FirstOrDefault(x => x.LoanID == loanId);
                var payment = loan.Payments.FirstOrDefault(p => p.PaymentDate == DateTime.Parse(paymentDate));

                if (payment == null)
                    return "Payment not found.";

                var dbcomment = dbMon.Comments.FirstOrDefault(x => x.LoanID == loanId && x.PaymentDate == payment.PaymentDate);

                if (dbcomment == null)
                {
                    dbcomment = dbMon.Comments.Add(
                        new Comment()
                        {
                            Branch = (Branch)branch,
                            PaymentDate = payment.PaymentDate,
                            LoanID = loanId,
                            CommentDate = DateTime.Today,
                            Content = comment,
                            Type = CommentType.სხვა
                        });
                }
                else
                {
                    dbcomment.Content = comment;
                    dbcomment.CommentDate = DateTime.Today;
                }

                dbMon.SaveChanges();
            }
            catch (NullReferenceException ex)
            {
                return ex.ToString();
            }

            return "Operation completed successfully.";
        }
    }
}