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

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class LoansController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();

        private int pageSize = 30;

        // GET: Loans
        public ActionResult Index(int? page)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            if (page.HasValue)
                return View(db.Loans.Where(l => l.Branch.BranchID == currentUser.BranchID).OrderBy(x => x.LoanID).ToPagedList(page.Value, pageSize));
            return View(db.Loans.Where(l => l.Branch.BranchID == currentUser.BranchID).OrderBy(x => x.LoanID).ToPagedList(1, pageSize));
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
    }
}
