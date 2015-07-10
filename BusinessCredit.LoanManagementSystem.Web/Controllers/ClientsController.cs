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
using Microsoft.AspNet.Identity;
using BusinessCredit.LoanManagementSystem.Web.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Newtonsoft.Json;
using BusinessCredit.LoanManagementSystem.Web.Models.Json;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class ClientsController : Controller
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


        // GET: Clients
        public ActionResult Index(int? page)
        {
            return View();
        }

        public JsonResult IndexJson()
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            if (db.Loans.Count() == 0 && db.Accounts.Count() == 0)
                return Json(null, JsonRequestBehavior.AllowGet);

            var accounts = db.Accounts.ToList();

            var accountsJson = new List<AccountJson>();

            foreach (var acc in accounts)
            {
                accountsJson.Add(new AccountJson
                    {
                        AccountID = acc.AccountID,
                        AccountNumber = acc.AccountNumber,
                        BusinessPhysicalAddress = acc.BusinessPhysicalAddress,
                        Gender = acc.Gender.ToString(),
                        LastName = acc.LastName,
                        Name = acc.Name,
                        NumberMobile = acc.NumberMobile,
                        PhysicalAddress = acc.PhysicalAddress,
                        PrivateNumber = acc.PrivateNumber,
                        Status = acc.Status.ToString()
                    });
            }

            return Json(accountsJson, JsonRequestBehavior.AllowGet);
        }


        // GET: Clients/Details/5
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

            var loans = db.Loans.ToList();
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
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "AccountID,Name,LastName,PrivateNumber,Gender,Status,PhysicalAddress,NumberMobile,AccountNumber,BusinessPhysicalAddress")] Account account)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

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
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var loans = db.Loans.ToList();
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
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            var loans = db.Loans.ToList();
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
