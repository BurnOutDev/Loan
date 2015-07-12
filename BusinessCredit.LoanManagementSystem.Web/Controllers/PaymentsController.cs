using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BusinessCredit.Core;
using BusinessCredit.Domain;
using BusinessCredit.LoanManagementSystem.Web.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.IO;
using Ionic.Zlib;
using Ionic.Zip;
using BusinessCredit.Core.TaxOrders;
using System.IO.Compression;
using System.Configuration;
using System.Web.Security;
using Newtonsoft.Json;
using BusinessCredit.LoanManagementSystem.Web.Models.Json;
using System.Web.UI;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class PaymentsController : Controller
    {
        #region Properties
        #region Databases
        private BusinessCreditContext _centralDb;

        public BusinessCreditContext CentralDb
        {
            get
            {
                if (_centralDb == null)
                    _centralDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Central_BusinessCreditDbConnectionString"].ConnectionString);
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
        #endregion

        public ICollection<BusinessCreditContext> Databases
        {
            get
            {
                return new List<BusinessCreditContext>() { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb };
            }
        }

        private BusinessCreditContext _db;

        public BusinessCreditContext db
        {
            get
            {
                if (CurrentUser.ConnectionString == null)
                    return CentralDb;
                if (_db == null)
                    _db = new BusinessCreditContext(CurrentUser.ConnectionString);
                return _db;
            }
        }

        public ApplicationUser CurrentUser
        {
            get
            {
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
                return manager.FindById(User.Identity.GetUserId());
            }
        }
        #endregion

        public ActionResult Index(int? loanId, string fromDate, string toDate)
        {
            ViewData.Add("loanId", loanId);
            ViewData.Add("fromDate", fromDate);
            ViewData.Add("toDate", toDate);

            return View();
        }

        public JsonResult IndexJson(int? loanId, string fromDate, string toDate)
        {
            var a = ViewData["loanId"];

            var t = db.Payments.ToList();

            db.Payments.Include(x => x.Loan).Load();
            db.Loans.Include("Payments").Load();

            var result = db.Payments.Include(x => x.Loan).ToList();
            if (loanId != null)
                result = result.Where(l => l.Loan.LoanID == loanId).ToList();
            else if (loanId == null && fromDate != null && toDate != null)
                result = result.Where(l => l.PaymentDate >= DateTime.Parse(fromDate) && l.PaymentDate <= DateTime.Parse(toDate)).ToList();

            var resultJson = new List<PaymentJson>();

            foreach (var pmt in result)
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
                        CashCollectorID = pmt.Loan.CreditExpert.EmployeeID,
                        CashCollectorLastName = pmt.Loan.CreditExpert.LastName,
                        CashCollectorName = pmt.Loan.CreditExpert.Name,
                        LoanDateOfEnforcement = pmt.Loan.DateOfEnforcement.HasValue ? pmt.Loan.DateOfEnforcement.Value.ToShortDateString() : null,
                        LoanLoanNotificationLetter = pmt.Loan.LoanNotificationLetter.HasValue ? pmt.Loan.LoanNotificationLetter.Value.ToShortDateString() : null,
                        LoanProblemManagerDate = pmt.Loan.ProblemManagerDate.HasValue ? pmt.Loan.ProblemManagerDate.Value.ToShortDateString() : null,
                        PMT = pmt.Loan.AmountToBePaidDaily,
                        EnforcementAndCourtFee = pmt.EnforcementAndCourtFee,
                        EnforcementAndCourtFeeEndingBalance = pmt.EnforcementAndCourtFeeEndingBalance.HasValue ? pmt.EnforcementAndCourtFeeEndingBalance.Value : 0,
                        EnforcementAndCourtFeePayment = pmt.EnforcementAndCourtFeePayment.HasValue ? pmt.EnforcementAndCourtFeePayment.Value : 0,
                        EnforcementAndCourtFeeStartingBalance = pmt.EnforcementAndCourtFeeStartingBalance.HasValue ? pmt.EnforcementAndCourtFeeStartingBalance.Value : 0,
                        TotalEnforcementAndCourtFee = pmt.TotalEnforcementAndCourtFee.HasValue ? pmt.TotalEnforcementAndCourtFee.Value : 0,
                        TotalEnforcementAndCourtFeePayment = pmt.TotalEnforcementAndCourtFeePayment.HasValue ? pmt.TotalEnforcementAndCourtFeePayment.Value : 0
                    };

                resultJson.Add(jsonPayment);

            }

            return Json(resultJson, JsonRequestBehavior.AllowGet);
        }

        [Authorize(Roles = "Administrator")]
        public ActionResult IndexAdmin(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            var dbList = new List<BusinessCreditContext>() { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb };
            var database = dbList[branch];

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
                    return View(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList());

                return View(database.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList());
            }
            if (loanId != null)
                return View(database.Loans.Find(loanId).Payments.ToList());

            return View(new List<Payment>());

            //var resultList = new List<Payment>();
            //DateTime dailyFromDate = DateTime.Today;
            //DateTime dailyToDate = DateTime.Today;

            //if (!string.IsNullOrEmpty(fromDate) && !string.IsNullOrEmpty(toDate))
            //{
            //    dailyFromDate = DateTime.Parse(fromDate);
            //    dailyToDate = DateTime.Parse(toDate);
            //}
            //if (loanId == null)
            //{
            //    //nothing
            //    //var res = db.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList();

            //    if (fromDate != null)
            //    {
            //        foreach (var database in Databases)
            //            resultList.AddRange(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList());
            //        return View(resultList);
            //    }

            //    foreach (var database in Databases)
            //        resultList.AddRange(database.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList());
            //    return View(resultList);
            //}
            //if (loanId != null)
            //{
            //    foreach (var database in Databases)
            //        resultList.AddRange(database.Loans.Find(loanId).Payments.ToList());
            //    return View(resultList);
            //}

            //return View(new List<Payment>());
        }

        public ActionResult Details(int? id, int? branch)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion
            var roles = manager.GetRoles(CurrentUser.Id);

            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            if (!branch.HasValue && roles.Contains("Administrator"))
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Payment payment = db.Payments.FirstOrDefault(p => p.PaymentID == id);

            if (payment == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            else if (payment.PaymentDate != DateTime.Today)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            if (branch.HasValue && roles.Contains("Administrator"))
                Databases.ElementAt(branch.Value).Payments.Remove(payment);
            else
                db.Payments.Remove(payment);

            db.SaveChanges();

            return RedirectToAction("Index");
        }

        public ActionResult ChangePenalty(int? id, int? branch)
        {
            double _oldPenalty = 0;
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var old = Databases.ElementAt(branch.Value).Payments.FirstOrDefault(x => x.PaymentID == id.Value);
            var newPayment = old.CurrentPayment;

            if (!old.AccruingPenalty.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            else
                _oldPenalty = old.AccruingPenalty.Value;

            var result = new ChangePaymentModel()
            {
                ID = id.Value,
                BranchID = branch.Value,
                OldPenalty = _oldPenalty, //accuringPenalty
                Payment = newPayment
            };

            return View(result);
        }

        [HttpPost]
        public ActionResult ChangePenalty(ChangePaymentModel targetModel)
        {
            var database = Databases.ElementAt(targetModel.BranchID);
            var payment = database.Payments.FirstOrDefault(x => x.PaymentID == targetModel.ID);
            var loan = payment.Loan;
            var oldPaymentAmount = payment.CurrentPayment;

            var payments = loan.Payments.Where(x => x.PaymentDate >= payment.PaymentDate).ToList();
            var paymentDatesAndPayments = new Dictionary<DateTime, double>();

            foreach (var pmt in payments)
            {
                paymentDatesAndPayments.Add(pmt.PaymentDate, pmt.CurrentPayment);
            }

            foreach (var pmt in payments)
            {
                loan.Payments.Remove(pmt);
            }

            db.SaveChanges();

            payments.Remove(payments.FirstOrDefault(x => x.PaymentID == targetModel.ID));

            foreach (var pmt in paymentDatesAndPayments)
            {
                loan.Payments.Add(new Payment() { CurrentPayment = pmt.Value, PaymentDate = pmt.Key });
                db.SaveChanges();
            }

            loan.Payments.Add(new Payment(targetModel.NewPenalty, oldPaymentAmount));

            db.SaveChanges();

            return View("IndexAdmin");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [HttpPost]
        public FileResult GenerateTaxOrders(IEnumerable<Payment> paymentModels)
        {
            int[] ids = new int[paymentModels.Count()];

            for (int i = 0; i < paymentModels.Count(); i++)
                ids[i] = paymentModels.ElementAt(i).PaymentID;

            return GenerateTaxOrders(paymentIds: ids);
        }

        //public FileResult GenerateTaxOrders(byte[] taxOrderIds)
        //{
        //    var zipMemoryStream = new MemoryStream();

        //    var folder = Server.MapPath(Url.Content("~/Resources/"));
        //    var filePath = Server.MapPath(Url.Content("~/Resources/TaxOrderTemplate.xlsx"));

        //    TaxOrder[] tos = new TaxOrder[taxOrderIds.Length];

        //    for (int i = 0; i < tos.Length; i++)
        //    {
        //        var item = taxOrderIds[i];
        //        tos[i] = db.TaxOrders.FirstOrDefault(x => x.TaxOrderID == item);
        //    }
        //    var strRes = TaxOrderGenerator.Generate(filePath, tos);

        //    strRes.Seek(0, SeekOrigin.Begin);

        //    return File(strRes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        //}

        public FileResult GenerateTaxOrders(params int[] paymentIds)
        {
            var zipMemoryStream = new MemoryStream();

            var folder = Server.MapPath(Url.Content("~/Resources/"));
            var filePath = Server.MapPath(Url.Content("~/Resources/TaxOrderTemplate.xlsx"));

            List<Payment> payments = new List<Payment>();
            foreach (var id in paymentIds)
                payments.Add(db.Payments.FirstOrDefault(p => p.PaymentID == id));

            List<TaxOrder> taxOrders = new List<TaxOrder>();
            foreach (var pmt in payments)
            {
                if (pmt.TaxOrderID == null)
                    continue;

                taxOrders.Add(new TaxOrder
                {
                    AccountFirstName = pmt.Loan.Account.Name,
                    AccountLastName = pmt.Loan.Account.LastName,
                    AccountPrivateNumber = pmt.Loan.Account.PrivateNumber,
                    Basis = "სესხის ხელშეკრულება #" + pmt.Loan.Agreement + " საფუძველზე",
                    CollectorFirstName = pmt.CashCollectionAgent.Name,
                    CollectorLastName = pmt.CashCollectionAgent.LastName,
                    CollectorPrivateNumber = pmt.CashCollectionAgent.PrivateNumber,
                    Date = pmt.PaymentDate.ToShortDateString(),
                    TaxOrderNumber = int.Parse(new string(pmt.TaxOrderID.Where(c => char.IsNumber(c)).ToArray<char>()))
                });
            }

            var strRes = TaxOrderGenerator.Generate(filePath, taxOrders.ToArray<TaxOrder>());

            strRes.Seek(0, SeekOrigin.Begin);

            return File(strRes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }
    }
}
