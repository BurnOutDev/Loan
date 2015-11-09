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
    [Authorize(Roles="ProblemManagers")]
    public class ProblemManagerController : Controller
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
    }
}