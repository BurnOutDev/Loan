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

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class ClientsController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();

        // GET: Clients
        public ActionResult Index()
        {
            var loans = db.Loans.Where(l => l.Branch.UserIdentity == User.Identity.Name);
            var accounts = (from l in loans
                            select l.Account).ToList();
            return View(accounts);
        }

        // GET: Clients/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var loans = db.Loans.Where(l => l.Branch.UserIdentity == User.Identity.Name);
            var accounts = (from l in loans
                            select l.Account).ToList();

            Account account = accounts.FirstOrDefault(a => a.AccountID == id);

            if (account == null)
            {
                return HttpNotFound();
            }
            return View(account);
        }

        // GET: Clients/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Clients/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "AccountID,Name,LastName,PrivateNumber,Gender,Status,PhysicalAddress,NumberMobile,AccountNumber,BusinessPhysicalAddress")] Account account)
        {
            if (ModelState.IsValid)
            {
                db.Accounts.Add(account);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(account);
        }

        // GET: Clients/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var loans = db.Loans.Where(l => l.Branch.UserIdentity == User.Identity.Name);
            var accounts = (from l in loans
                            select l.Account).ToList();

            Account account = accounts.FirstOrDefault(a => a.AccountID == id);
            if (account == null)
            {
                return HttpNotFound();
            }
            return View(account);
        }

        // POST: Clients/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "AccountID,Name,LastName,PrivateNumber,Gender,Status,PhysicalAddress,NumberMobile,AccountNumber,BusinessPhysicalAddress")] Account account)
        {
            if (ModelState.IsValid)
            {
                db.Entry(account).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(account);
        }

        // GET: Clients/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var loans = db.Loans.Where(l => l.Branch.UserIdentity == User.Identity.Name);
            var accounts = (from l in loans
                            select l.Account).ToList();
            Account account = accounts.FirstOrDefault(a => a.AccountID == id);

            if (account == null)
            {
                return HttpNotFound();
            }
            return View(account);
        }

        // POST: Clients/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Account account = db.Accounts.Find(id);
            db.Accounts.Remove(account);
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
