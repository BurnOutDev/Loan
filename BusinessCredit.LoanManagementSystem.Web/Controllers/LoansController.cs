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
using LC = BusinessCredit.LoanCalculator.Core;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class LoansController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();
        private int pageSize = 30;

        // GET: Loans
        public ActionResult Index(int? page, int? accountId)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            IQueryable<Loan> result;

            if (accountId.HasValue)
                result = db.Loans.Where(l => l.Branch.BranchID == currentUser.BranchID && l.Account.AccountID == accountId)
                            .OrderBy(x => x.LoanID);
            else
                result = db.Loans.Where(l => l.Branch.BranchID == currentUser.BranchID)
                            .OrderBy(x => x.LoanID);

            if (page.HasValue)
                return View(result.ToPagedList(page.Value, pageSize));
            else
                return View(result.ToPagedList(1, pageSize));

        }

        [HttpGet]
        public ActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add(AccountLoanViewModel viewModel)
        {
            if (ModelState.IsValid)
            {
                //viewModel.Loan.PlanLoan();
                //viewModel.Loan.Initialize();
                viewModel.Loan.Account = viewModel.Account;

                db.Loans.Add(viewModel.Loan);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }

        // GET: Loans/Details/5
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
            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.BranchID == currentUser.BranchID && l.LoanID == id);
            if (loan == null)
            {
                return HttpNotFound();
            }
            return View(loan);
        }

        // GET: Loans/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Loans/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "LoanID,LoanAmount,LoanPurpose,LoanDailyInterestRate,LoanTermDays,NetworkDays,DaysOfGrace,LoanPenaltyRate,EffectiveInterestRate,AmountToBePaidAll,AmountToBePaidDaily,AgreementDate,LoanStartDate,LoanEndDate,GuarantorName,GuarantorLastName,GuarantorPrivateNumber,GuarantorPhysicalAddress,GuarantorPhoneNumber,LoanStatus")] Loan loan)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            if (ModelState.IsValid)
            {
                //loan.PlanLoan();
                //loan.Initialize();
                loan.Account = db.Accounts.FirstOrDefault(a => a.AccountID == loan.LoanID);
                loan.Branch = db.Branches.FirstOrDefault(b => b.BranchID == currentUser.BranchID);

                loan.LoanID = db.Loans.OrderByDescending(x => x.LoanID).FirstOrDefault().LoanID + 1;
                db.Loans.Add(loan);

                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(loan);
        }

        // GET: Loans/Edit/5
        public ActionResult Edit(int? id)
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
            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.BranchID == currentUser.BranchID && l.LoanID == id);
            if (loan == null)
            {
                return HttpNotFound();
            }
            return View(loan);
        }

        // POST: Loans/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "LoanID,LoanAmount,LoanPurpose,LoanDailyInterestRate,LoanTermDays,NetworkDays,DaysOfGrace,LoanPenaltyRate,EffectiveInterestRate,AmountToBePaidAll,AmountToBePaidDaily,AgreementDate,LoanStartDate,LoanEndDate,GuarantorName,GuarantorLastName,GuarantorPrivateNumber,GuarantorPhysicalAddress,GuarantorPhoneNumber,LoanStatus")] Loan loan)
        {
            if (ModelState.IsValid)
            {
                db.Entry(loan).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(loan);
        }

        // GET: Loans/Delete/5
        public ActionResult Delete(int? id)
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
            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.BranchID == currentUser.BranchID && l.LoanID == id);
            if (loan == null)
            {
                return HttpNotFound();
            }
            return View(loan);
        }

        // POST: Loans/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.BranchID == currentUser.BranchID && l.LoanID == id);
            db.Loans.Remove(loan);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
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
            loan.Branch = db.Branches.FirstOrDefault(b => b.BranchID == currentUser.BranchID);
            loan.EffectiveInterestRate = (loanCalculated.Payments.Sum(p => p.Interest) / loanCalculated.TermDays * 30) / loanCalculated.Amount;
            loan.LoanEndDate = loan.LoanStartDate.AddDays(loan.LoanTermDays);
            loan.NetworkDays = 30;
            loan.AgreementDate = DateTime.Today;

            loan.Initialize();
            loan.PaymentsPlanned = new List<PaymentPlanned>();
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

            db.Loans.Add(loan);
            db.SaveChanges();
            
            return View();
        }
    }
}
