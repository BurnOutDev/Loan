using BusinessCredit.Core;
using BusinessCredit.Domain;
using BusinessCredit.LoanManagementSystem.Web.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;
using System.Web.UI;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize(Users = "nkandelaki@businesscredit.ge", Roles = "Administrator")]
    public class AdminController : Controller
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

        public ICollection<BusinessCreditContext> Databases
        {
            get
            {
                return new List<BusinessCreditContext>() { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb };
            }
        }

        #endregion

        public ApplicationUser CurrentUser
        {
            get
            {
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
                return manager.FindById(User.Identity.GetUserId());
            }
        }

        #region Clients
        public ActionResult ClientsAdmin(int branch = 0)
        {
            if (branch > Databases.Count || branch < 0)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var result = new List<AdminClientsViewModel>();

            foreach (var entity in Databases.ElementAt(branch).Accounts)
            {
                var item = new AdminClientsViewModel()
                {
                    AccountID = entity.AccountID,
                    AccountNumber = entity.AccountNumber,
                    BusinessPhysicalAddress = entity.BusinessPhysicalAddress,
                    Gender = entity.Gender,
                    LastName = entity.LastName,
                    Name = entity.Name,
                    NumberMobile = entity.NumberMobile,
                    PhysicalAddress = entity.PhysicalAddress,
                    PrivateNumber = entity.PrivateNumber,
                    Status = entity.Status,
                    Branch = Databases.ElementAt(branch).BranchName
                };
                result.Add(item);
            }

            return View(result);
        }

        public ActionResult ClientEdit(int? accountId, int? branch)
        {
            if (!accountId.HasValue | !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var acc = Databases.ElementAt(branch.Value).Accounts.FirstOrDefault(a => a.AccountID == accountId.Value);

            var result = new AdminClientsViewModel
            {
                AccountID = acc.AccountID,
                AccountNumber = acc.AccountNumber,
                Branch = Databases.ElementAt(branch.Value).BranchName,
                BusinessPhysicalAddress = acc.BusinessPhysicalAddress,
                Gender = acc.Gender,
                LastName = acc.LastName,
                Name = acc.Name,
                NumberMobile = acc.NumberMobile,
                PhysicalAddress = acc.PhysicalAddress,
                PrivateNumber = acc.PrivateNumber,
                Status = acc.Status
            };

            return View(result);
        }

        [HttpPost]
        public ActionResult ClientEdit(AdminClientsViewModel model)
        {
            var acc = Databases.ElementAt(int.Parse(model.Branch)).Accounts.FirstOrDefault(a => a.AccountID == model.AccountID);

            acc.Name = model.Name;
            acc.LastName = model.LastName;
            acc.PrivateNumber = model.PrivateNumber;
            acc.PhysicalAddress = model.PhysicalAddress;
            acc.NumberMobile = model.NumberMobile;
            acc.BusinessPhysicalAddress = model.BusinessPhysicalAddress;

            Databases.ElementAt(int.Parse(model.Branch)).SaveChanges();

            return RedirectToAction("ClientsAdmin");
        }
        #endregion

        #region Payments
        public ActionResult PaymentsAdmin(int? loanId, string fromDate, string toDate, int branch = 0)
        {

            var database = Databases.ElementAt(branch);

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

            //return View(new List<Payment>());        } 
        }

        public ActionResult PaymentDelete(int? id, int? branch)
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion
            var roles = manager.GetRoles(CurrentUser.Id);

            if (id == null | !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Payment payment = Databases.ElementAt(branch.Value).Payments.FirstOrDefault(p => p.PaymentID == id);

            if (payment == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            Databases.ElementAt(branch.Value).Payments.Remove(payment);

            Databases.ElementAt(branch.Value).SaveChanges();

            return View(payment);
        }

        public ActionResult PaymentChangePenalty(int? id, int? branch)
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
        public ActionResult PaymentChangePenalty(ChangePaymentModel targetModel)
        {
            var database = Databases.ElementAt(targetModel.BranchID);

            var payment = database.Payments.FirstOrDefault(x => x.PaymentID == targetModel.ID);

            var loan = payment.Loan;

            var oldPaymentAmount = payment.CurrentPayment;

            var payments = loan.Payments.Where(x => x.PaymentDate >= payment.PaymentDate).ToList().OrderBy(x => x.PaymentDate).ToList();

            List<double> amounts = new List<double>();

            foreach (var pmt in payments)
                amounts.Add(pmt.CurrentPayment);

            var toPass = amounts.ToArray<double>();

            database.Payments.RemoveRange(payments);

            database.SaveChanges();

            TestPayments(loan.LoanID, targetModel.BranchID, payments.FirstOrDefault().PaymentDate, targetModel.NewPenalty, toPass);

            //var paymentDatesAndPayments = new Dictionary<DateTime, double>();

            //foreach (var pmt in payments)
            //{
            //    paymentDatesAndPayments.Add(pmt.PaymentDate, pmt.CurrentPayment);
            //}

            //foreach (var pmt in payments)
            //{
            //    loan.Payments.Remove(pmt);
            //}

            //database.SaveChanges();

            //payments.Remove(payments.FirstOrDefault(x => x.PaymentID == targetModel.ID));

            //loan.Payments.Add(new Payment(targetModel.NewPenalty, oldPaymentAmount));

            //foreach (var pmt in paymentDatesAndPayments.OrderBy(x => x.Key))
            //{
            //    loan.Payments.Add(new Payment() { CurrentPayment = pmt.Value, PaymentDate = pmt.Key });
            //    database.SaveChanges();
            //}


            database.SaveChanges();

            return View("IndexAdmin");
        }

        private void TestPayments(int loanId, int branch, DateTime startDate, double newAccruingPenalty, params double[] data)
        {
            bool first = true;
            
            foreach (var amount in data)
            {
                var pmt = Databases.ElementAt(branch).Payments.Create();
                pmt.Loan = Databases.ElementAt(branch).Loans.Find(loanId);
                pmt.CurrentPayment = amount;
                pmt.PaymentDate = startDate;

                if (first)
                {
                    pmt._accruingPenalty = newAccruingPenalty;
                    first = false;
                }

                Databases.ElementAt(branch).Payments.Add(pmt);
                startDate = startDate.AddDays(1);
            }
        }

        #endregion
    }
}
