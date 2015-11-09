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
using PagedList;
using Microsoft.VisualBasic;
using LC = BusinessCredit.Core.LoanCalculator;
using BusinessCredit.LoanManagementSystem.Web.Models.Json;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class LoansController : Controller
    {
        private BusinessCreditContext _db;
        public BusinessCreditContext db
        {
            get
            {
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

        public ActionResult Index(int? AccountId)
        {
            ViewData.Add("AccountId", AccountId);

            return View();
        }

        public JsonResult IndexJson(int? AccountId)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            List<Loan> result;

            if (AccountId.HasValue)
                result = db.Loans.Where(l => l.Account.AccountID == AccountId)
                            .OrderBy(x => x.LoanID).ToList();
            else
                result = db.Loans.OrderBy(x => x.LoanID).ToList();

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
                        BranchName = db.BranchName,
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

        public JsonResult GuarantorsJson(int loanId)
        {
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

        public ActionResult Details(int? id)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Loan loan = db.Loans.FirstOrDefault(l => l.LoanID == id);
            if (loan == null)
            {
                return HttpNotFound();
            }
            return View(loan);
        }

        public ActionResult Create()
        {
            return RedirectToAction("CreateLoanView");
        }

        public ActionResult CreateLoanView()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult CreateLoanView(CreateLoanViewModel loanModel)
        {
            db.Database.ExecuteSqlCommand("DBCC CHECKIDENT ('[Loans]', RESEED, " + (loanModel.LoanID - 1) + ")");

            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            var loan = new Loan();
            loan.Account = db.Accounts.FirstOrDefault(a => a.AccountID == loanModel.AccountID);
            loan.LoanAmount = loanModel.Amount;
            loan.LoanDailyInterestRate = loanModel.DailyInterestRate / 100;
            loan.LoanTermDays = loanModel.TermDays;
            loan.LoanStartDate = DateTime.Today;
            loan.LoanPurpose = loanModel.LoanPurpose;

            loan.LoanPenaltyRate = 0.005;
            loan.AmountToBePaidDaily = -Financial.Pmt(loanModel.DailyInterestRate, loanModel.TermDays, loanModel.Amount);
            loan.AmountToBePaidAll = loan.AmountToBePaidDaily * loan.LoanTermDays;

            LC.LoanModel loanCalculated = new LC.LoanModel();
            loanCalculated.Amount = loan.LoanAmount;
            loanCalculated.StartDate = DateTime.Today;
            loanCalculated.TermDays = loan.LoanTermDays;
            loanCalculated.DaysOfGrace = loan.DaysOfGrace;
            loanCalculated.DailyInterestRate = loan.LoanDailyInterestRate;

            loanCalculated = LC.LoanCalculator.Calculate(loanCalculated);

            loan.AmountToBePaidAll = loanCalculated.Payments.Sum(p => p.PaymentAmount);
            loan.AmountToBePaidDaily = loanCalculated.Payments.First().PaymentAmount;
            loan.EffectiveInterestRate = (loanCalculated.Payments.Sum(p => p.Interest) / loanCalculated.TermDays * 30) / loanCalculated.Amount;
            loan.LoanEndDate = loan.LoanStartDate.AddDays(loan.LoanTermDays);
            loan.NetworkDays = 23;
            loan.AgreementDate = DateTime.Today;

            for (int i = 0; i < loanCalculated.Payments.Count(); i++)
            {
                loan.PaymentsPlanned.Add(new PaymentPlanned()
                {
                    EndingBalance = loanCalculated.Payments.ElementAt(i).EndingBalance,
                    Interest = loanCalculated.Payments.ElementAt(i).Interest,
                    PaymentAmount = loanCalculated.Payments.ElementAt(i).PaymentAmount,
                    PaymentDate = DateTime.Today.AddDays(i + 1),
                    PaymentID = loanCalculated.Payments.ElementAt(i).PaymentID,
                    Principal = loanCalculated.Payments.ElementAt(i).Principal,
                    StartingBalance = loanCalculated.Payments.ElementAt(i).StartingBalance
                });
            }

            if (db.Loans.Count() > 0)
                loan.LoanID = db.Loans.OrderByDescending(x => x.LoanID).FirstOrDefault().LoanID + 1;
            else
                loan.LoanID = 1;

            //loan.LoanDailyInterestRate /= 100;

            var guarantor = new Guarantor()
            {
                GuarantorName = loanModel.Guarantor.GuarantorName,
                GuarantorLastName = loanModel.Guarantor.GuarantorLastName,
                GuarantorPhoneNumber = loanModel.Guarantor.GuarantorPhoneNumber,
                GuarantorPhysicalAddress = loanModel.Guarantor.GuarantorPhysicalAddress,
                GuarantorPrivateNumber = loanModel.Guarantor.GuarantorPrivateNumber
            };

            loan.Guarantors = new List<Guarantor>();

            loan.Guarantors.Add(guarantor);

            loan.CreditExpert = db.CreditExperts.FirstOrDefault();

            db.Loans.Add(loan);
            db.SaveChanges();
            loan.LoanStatus = LoanStatus.Active;
            loan.Agreement = loan.Account.AccountID + "-" + CurrentUser.BranchID + "-" + loan.LoanID;
            db.SaveChanges();

            return View();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
