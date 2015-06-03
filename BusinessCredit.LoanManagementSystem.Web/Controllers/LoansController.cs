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

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class LoansController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();

        // GET: Loans
        public ActionResult Index()
        {
            return View(db.Loans.Where(l => l.Branch.UserIdentity == User.Identity.Name).ToList());
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
                viewModel.Loan.PlanLoan();
                viewModel.Loan.Initialize();
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
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.UserIdentity == User.Identity.Name && l.LoanID == id);
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
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "LoanID,LoanAmount,LoanPurpose,LoanDailyInterestRate,LoanTermDays,NetworkDays,DaysOfGrace,LoanPenaltyRate,EffectiveInterestRate,AmountToBePaidAll,AmountToBePaidDaily,AgreementDate,LoanStartDate,LoanEndDate,GuarantorName,GuarantorLastName,GuarantorPrivateNumber,GuarantorPhysicalAddress,GuarantorPhoneNumber,LoanStatus")] Loan loan)
        {
            if (ModelState.IsValid)
            {
                loan.PlanLoan();
                loan.Initialize();
                loan.Account = db.Accounts.FirstOrDefault();
                loan.Branch = db.Branches.FirstOrDefault(b => b.UserIdentity == User.Identity.Name);

                db.Loans.Add(loan);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(loan);
        }

        // GET: Loans/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.UserIdentity == User.Identity.Name && l.LoanID == id);
            if (loan == null)
            {
                return HttpNotFound();
            }
            return View(loan);
        }

        // POST: Loans/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
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
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.UserIdentity == User.Identity.Name && l.LoanID == id);
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
            Loan loan = db.Loans.FirstOrDefault(l => l.Branch.UserIdentity == User.Identity.Name && l.LoanID == id);
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
