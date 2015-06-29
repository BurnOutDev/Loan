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
using PagedList;

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

        private int pageSize = 30;

        // GET: Clients
        public ActionResult Index(int? page)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            if (db.Loans.Count() == 0 && db.Accounts.Count() == 0)
                return View(new List<Account>().ToPagedList(1, pageSize));

            var accounts = db.Accounts.ToList();

            //accounts.AddRange(db.Accounts.ToList());
            if (page.HasValue)
                return View(accounts.OrderBy(x => x.Name).ToPagedList(page.Value, pageSize));
            return View(accounts.OrderBy(x => x.Name).ToPagedList(1, pageSize));
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
