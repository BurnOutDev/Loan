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

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class PaymentsController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();

        public ActionResult Index(int? loanId, string fromDate, string toDate)
        {
            int[] vals = { 2, 4 };
            return RedirectToAction("GenerateTaxOrders", new { taxOrderIds = new int[] { 2, 4 } });

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
                var res = db.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList();

                if (fromDate != null)
                    return View(db.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList());

                return View(db.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList());
            }
            if (loanId != null)
                return View(db.Loans.Find(loanId).Payments.ToList());

            return View(new List<Payment>());
        }

        // GET: Payments/Details/5
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
            Payment payment = db.Payments.FirstOrDefault(p => p.Loan.Branch.BranchID == currentUser.BranchID && p.PaymentID == id);
            if (payment == null)
            {
                return HttpNotFound();
            }
            return View(payment);
        }

        // GET: Payments/Create
        //public ActionResult Create(int? id)
        //{
        //    if (id.HasValue)
        //    {
        //        var pmt = new PMTViewModel()
        //        {
        //            LoanId = id.Value,
        //            CurrentPayment = 600
        //        };
        //        //db.Loans.Load();
        //        //pmt.Loan = db.Loans.Find(id);
        //        //pmt.CurrentPayment = 700;

        //        return View(pmt);
        //    }
        //    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //}

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create(PMTViewModel payment, int? id)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        var pmtToAdd = db.Payments.Create();

        //        pmtToAdd.Loan = db.Loans.Find(payment.LoanId);
        //        pmtToAdd.CurrentPayment = payment.CurrentPayment;
        //        pmtToAdd.PaymentDate = payment.PaymentDate;
        //        pmtToAdd.TaxOrderID = payment.TaxOrderId;

        //        db.Loans.Include(x => x.Payments);
        //        db.Payments.Include(x => x.Loan);

        //        db.Payments.Add(pmtToAdd);

        //        db.Loans.Include(x => x.Payments);
        //        db.Payments.Include(x => x.Loan);
        //        //payment.Loan = db.Loans.Find(id);
        //        //db.Payments.Add(payment);
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }

        //    return RedirectToAction("Index");
        //    //return View();
        //}

        // GET: Payments/Edit/5
        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Payment payment = db.Payments.Find(id);
        //    if (payment == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(payment);
        //}

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit([Bind(Include = "PaymentID,TaxOrderID,CurrentPayment,PaymentDate")] Payment payment)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(payment).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    return View(payment);
        //}

        //public ActionResult Delete(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    Payment payment = db.Payments.Find(id);
        //    if (payment == null)
        //    {
        //        return HttpNotFound();
        //    }
        //    return View(payment);
        //}

        // POST: Payments/Delete/5
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    Payment payment = db.Payments.Find(id);
        //    db.Payments.Remove(payment);
        //    db.SaveChanges();
        //    return RedirectToAction("Index");
        //}

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        public FileResult GenerateTaxOrders(int[] taxOrderIds)
            {
            var zipMemoryStream = new MemoryStream();

            var folder = Server.MapPath(Url.Content("~/Resources/"));
            var filePath = Server.MapPath(Url.Content("~/Resources/TaxOrderTemplate.xlsx"));

            TaxOrder[] tos = new TaxOrder[taxOrderIds.Length];

            for (int i = 0; i < tos.Length; i++)
            {
                var item = taxOrderIds[i];
                tos[i] = db.TaxOrders.FirstOrDefault(x => x.TaxOrderID == item);
            }
            var streamList = TaxOrderGenerator.Generate(filePath, tos);

            using (ZipFile zip = new ZipFile())
            {
                for (int i = 0; i < streamList.Count(); i++)
                {
                    streamList.ElementAt(i).Seek(0, SeekOrigin.Begin);
                    zip.AddEntry("TaxOrder_" + (i + 1).ToString() + ".xlsx", streamList.ElementAt(i));
                }

                zip.Save(zipMemoryStream);
            }

            zipMemoryStream.Seek(0, SeekOrigin.Begin);

            return File(zipMemoryStream, "application/zip");
        }
    }
}
