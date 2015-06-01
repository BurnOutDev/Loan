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
    public class PaymentsController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();

        public ActionResult Index(int? loanId, string date)
        {
            DateTime dailyDate = DateTime.Today;
            if (!string.IsNullOrEmpty(date))
            {
                dailyDate = DateTime.Parse(date);
            }
            if (loanId == null)
            {
                if (date != null)
                    return View(db.Payments.Where(p => p.PaymentDate == dailyDate).ToList());

                return View(new List<Payment>());
            }
            if (loanId != null)
                return View(db.Loans.Find(loanId).Payments.ToList());

            return View(new List<Payment>());
        }

        // GET: Payments/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Payment payment = db.Payments.Find(id);
            if (payment == null)
            {
                return HttpNotFound();
            }
            return View(payment);
        }

        // GET: Payments/Create
        public ActionResult Create(int? id)
        {
            if (id.HasValue)
            {
                var pmt = new PMTViewModel()
                {
                    LoanId = id.Value,
                    CurrentPayment = 600
                };
                //db.Loans.Load();
                //pmt.Loan = db.Loans.Find(id);
                //pmt.CurrentPayment = 700;

                return View(pmt);
            }
            return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        }

        // POST: Payments/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(PMTViewModel payment, int? id)
        {
            if (ModelState.IsValid)
            {
                var pmtToAdd = db.Payments.Create();

                pmtToAdd.Loan = db.Loans.Find(payment.LoanId);
                pmtToAdd.CurrentPayment = payment.CurrentPayment;
                pmtToAdd.PaymentDate = payment.PaymentDate;
                pmtToAdd.TaxOrderID = payment.TaxOrderId;

                db.Loans.Include(x => x.Payments);
                db.Payments.Include(x => x.Loan);

                db.Payments.Add(pmtToAdd);

                db.Loans.Include(x => x.Payments);
                db.Payments.Include(x => x.Loan);
                //payment.Loan = db.Loans.Find(id);
                //db.Payments.Add(payment);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return RedirectToAction("Index");
            //return View();
        }

        // GET: Payments/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Payment payment = db.Payments.Find(id);
            if (payment == null)
            {
                return HttpNotFound();
            }
            return View(payment);
        }

        // POST: Payments/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "PaymentID,TaxOrderID,CurrentPayment,PaymentDate")] Payment payment)
        {
            if (ModelState.IsValid)
            {
                db.Entry(payment).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(payment);
        }

        // GET: Payments/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Payment payment = db.Payments.Find(id);
            if (payment == null)
            {
                return HttpNotFound();
            }
            return View(payment);
        }

        // POST: Payments/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Payment payment = db.Payments.Find(id);
            db.Payments.Remove(payment);
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
