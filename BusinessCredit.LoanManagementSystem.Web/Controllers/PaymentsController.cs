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
using System.Configuration;
using System.Web.Security;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class PaymentsController : Controller
    {
        #region Databases
        private BusinessCreditContext _centralDb;

        public BusinessCreditContext CentralDb
        {
            get
            {
                if (_centralDb == null)
                    _centralDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Central_BusinessCreditDbConnectionString"].ConnectionString);
                return _centralDb;
            }
        }

        private BusinessCreditContext _isaniDb;

        public BusinessCreditContext IsaniDb
        {
            get
            {
                if (_isaniDb == null)
                    _isaniDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Isani_BusinessCreditDbConnectionString"].ConnectionString);
                return _isaniDb;
            }
        }

        private BusinessCreditContext _okribaDb;

        public BusinessCreditContext OkribaDb
        {
            get
            {
                if (_okribaDb == null)
                    _okribaDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Okriba_BusinessCreditDbConnectionString"].ConnectionString);
                return _okribaDb;
            }
        }

        private BusinessCreditContext _liloDb;

        public BusinessCreditContext LiloDb
        {
            get
            {
                if (_liloDb == null)
                    _liloDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Lilo_BusinessCreditDbConnectionString"].ConnectionString);
                return _liloDb;
            }
        }

        private BusinessCreditContext _eliavaDb;

        public BusinessCreditContext EliavaDb
        {
            get
            {
                if (_eliavaDb == null)
                    _eliavaDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Eliava_BusinessCreditDbConnectionString"].ConnectionString);
                return _eliavaDb;
            }
        }

        private BusinessCreditContext _vagzaliDb;

        public BusinessCreditContext VagzaliDb
        {
            get
            {
                if (_vagzaliDb == null)
                    _vagzaliDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Vagzali_BusinessCreditDbConnectionString"].ConnectionString);
                return _vagzaliDb;
            }
        }
        #endregion

        public ICollection<BusinessCreditContext> Databases
        {
            get
            {
                return new List<BusinessCreditContext>() { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb };
            }
        }

        private BusinessCreditContext _db;

        public BusinessCreditContext db
        {
            get
            {
                if (CurrentUser.ConnectionString == null)
                    return CentralDb;
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

        public ActionResult Index(int? loanId, string fromDate, string toDate)
        {
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
                var res = db.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).Include(x => x.Loan).ToList();

                if (fromDate != null)
                    return View(db.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).Include(x => x.Loan).ToList());

                return View(db.Payments.Where(p => p.PaymentDate == DateTime.Today).Include(x => x.Loan).ToList());
            }
            if (loanId != null)
                return View(db.Loans.Find(loanId).Payments.ToList());

            return View(new List<Payment>());
        }

        [Authorize(Roles = "Administrator")]
        public ActionResult IndexAdmin(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            var dbList = new List<BusinessCreditContext>() { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb };
            var database = dbList[branch];

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
                var res = database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList();

                if (fromDate != null)
                    return View(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList());

                return View(database.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList());
            }
            if (loanId != null)
                return View(database.Loans.Find(loanId).Payments.ToList());

            return View(new List<Payment>());

            //var resultList = new List<Payment>();
            //DateTime dailyFromDate = DateTime.Today;
            //DateTime dailyToDate = DateTime.Today;

            //if (!string.IsNullOrEmpty(fromDate) && !string.IsNullOrEmpty(toDate))
            //{
            //    dailyFromDate = DateTime.Parse(fromDate);
            //    dailyToDate = DateTime.Parse(toDate);
            //}
            //if (loanId == null)
            //{
            //    //nothing
            //    //var res = db.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList();

            //    if (fromDate != null)
            //    {
            //        foreach (var database in Databases)
            //            resultList.AddRange(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList());
            //        return View(resultList);
            //    }

            //    foreach (var database in Databases)
            //        resultList.AddRange(database.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList());
            //    return View(resultList);
            //}
            //if (loanId != null)
            //{
            //    foreach (var database in Databases)
            //        resultList.AddRange(database.Loans.Find(loanId).Payments.ToList());
            //    return View(resultList);
            //}

            //return View(new List<Payment>());
        }

        public ActionResult Details(int? id, int? branch)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion
            var roles = manager.GetRoles(CurrentUser.Id);

            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            if (!branch.HasValue && roles.Contains("Administrator"))
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Payment payment = db.Payments.FirstOrDefault(p => p.PaymentID == id);

            if (payment == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            if (branch.HasValue && roles.Contains("Administrator"))
                Databases.ElementAt(branch.Value).Payments.Remove(payment);
            else
                db.Payments.Remove(payment);

            db.SaveChanges();

            return View(payment);
        }

        public ActionResult ChangePenalty(int? id, int? branch)
        {
            double _oldPenalty = 0;
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var old = Databases.ElementAt(branch.Value).Payments.FirstOrDefault(x => x.PaymentID == id.Value);
            var newPayment = old.CurrentPayment;

            if (!old.AccruingPenalty.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            else
                _oldPenalty = old.AccruingPenalty.Value;

            var result = new ChangePaymentModel()
            {
                ID = id.Value,
                BranchID = branch.Value,
                OldPenalty = _oldPenalty, //accuringPenalty
                Payment = newPayment
            };

            return View(result);
        }

        [HttpPost]
        public ActionResult ChangePenalty(ChangePaymentModel targetModel)
        {
            var database = Databases.ElementAt(targetModel.BranchID);
            var payment = database.Payments.FirstOrDefault(x => x.PaymentID == targetModel.ID);
            var loan = payment.Loan;
            var oldPaymentAmount = payment.CurrentPayment;

            var payments = loan.Payments.Where(x => x.PaymentDate >= payment.PaymentDate).ToList();
            var paymentDatesAndPayments = new Dictionary<DateTime, double>();

            foreach (var pmt in payments)
            {
                paymentDatesAndPayments.Add(pmt.PaymentDate, pmt.CurrentPayment);
            }

            foreach (var pmt in payments)
            {
                loan.Payments.Remove(pmt);
            }

            db.SaveChanges();

            payments.Remove(payments.FirstOrDefault(x => x.PaymentID == targetModel.ID));

            foreach (var pmt in paymentDatesAndPayments)
            {
                loan.Payments.Add(new Payment() { CurrentPayment = pmt.Value, PaymentDate = pmt.Key });
                db.SaveChanges();
            }

            loan.Payments.Add(new Payment(targetModel.NewPenalty, oldPaymentAmount));

            db.SaveChanges();

            return View("IndexAdmin");
        }

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
            var strRes = TaxOrderGenerator.Generate(filePath, tos);

            strRes.Seek(0, SeekOrigin.Begin);

            return File(strRes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }
    }
}
