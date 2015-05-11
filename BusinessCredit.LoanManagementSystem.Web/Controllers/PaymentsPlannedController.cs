﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BusinessCredit.Core;
using BusinessCredit.Domain;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    public class PaymentsPlannedController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();

        // GET: PaymentsPlanned
        public ActionResult Index()
        {
            return View(db.PaymentEntities.ToList());
        }

        // GET: PaymentsPlanned/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PaymentEntity paymentEntity = db.PaymentEntities.Find(id);
            if (paymentEntity == null)
            {
                return HttpNotFound();
            }
            return View(paymentEntity);
        }

        // GET: PaymentsPlanned/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PaymentsPlanned/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "PaymentEntityID,PaymentDate,Deposit,PaymentInterest,PaymentPrincipal,EndingPrincipal")] PaymentEntity paymentEntity)
        {
            if (ModelState.IsValid)
            {
                db.PaymentEntities.Add(paymentEntity);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(paymentEntity);
        }

        // GET: PaymentsPlanned/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PaymentEntity paymentEntity = db.PaymentEntities.Find(id);
            if (paymentEntity == null)
            {
                return HttpNotFound();
            }
            return View(paymentEntity);
        }

        // POST: PaymentsPlanned/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "PaymentEntityID,PaymentDate,Deposit,PaymentInterest,PaymentPrincipal,EndingPrincipal")] PaymentEntity paymentEntity)
        {
            if (ModelState.IsValid)
            {
                db.Entry(paymentEntity).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(paymentEntity);
        }

        // GET: PaymentsPlanned/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PaymentEntity paymentEntity = db.PaymentEntities.Find(id);
            if (paymentEntity == null)
            {
                return HttpNotFound();
            }
            return View(paymentEntity);
        }

        // POST: PaymentsPlanned/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            PaymentEntity paymentEntity = db.PaymentEntities.Find(id);
            db.PaymentEntities.Remove(paymentEntity);
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
