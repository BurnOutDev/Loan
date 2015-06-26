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
        private int pageSize = 30;

        public ActionResult Index(int? page, int? accountId)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            IQueryable<Loan> result;

            if (accountId.HasValue)
                result = db.Loans.Where(l => l.Account.AccountID == accountId)
                            .OrderBy(x => x.LoanID);
            else
                result = db.Loans.OrderBy(x => x.LoanID);

            if (page.HasValue)
                return View(result.ToPagedList(page.Value, pageSize));
            else
                return View(result.ToPagedList(1, pageSize));

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
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            var loan = new Loan();
            loan.Account = db.Accounts.FirstOrDefault(a => a.AccountID == loanModel.AccountID);
            loan.LoanAmount = loanModel.Amount;
            loan.LoanDailyInterestRate = loanModel.DailyInterestRate;
            loan.LoanTermDays = loanModel.TermDays;
            loan.LoanStartDate = DateTime.Today;

            loan.LoanPenaltyRate = 0.005;
            loan.AmountToBePaidDaily = Financial.Pmt(loanModel.DailyInterestRate, loanModel.TermDays, loanModel.Amount);
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
            loan.NetworkDays = 30;
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

            loan.LoanDailyInterestRate /= 100;

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

            db.Loans.Add(loan);
            db.SaveChanges();
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
