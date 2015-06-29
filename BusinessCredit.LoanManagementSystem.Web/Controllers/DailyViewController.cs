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
using BusinessCredit.Domain.Enums;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class DailyViewController : Controller
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

        public ActionResult Index()
        {
            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            var dailyDate = DateTime.Today;

            var dailyList = new LstViewModel();
            var viewList = new List<DailyViewModel>();
            var pmtList = new List<Payment>();

            var pmts = db.Loans.Select(l => l.Payments.OrderByDescending(p => p.PaymentDate).FirstOrDefault());

            var loans = db.Loans.Where(l => l.Payments.OrderByDescending(p => p.PaymentDate).FirstOrDefault().WholeDebt > 0 && l.Payments.FirstOrDefault(p => p.PaymentDate == dailyDate) == null).ToList();

            loans.AddRange(db.Loans.Where(l => l.Payments.Count == 0));

            if (loans.Count > 0)
            {
                foreach (var loan in loans)
                {
                    var pmt = loan.Payments.FirstOrDefault(x => x.PaymentDate.Date == DateTime.Today.AddDays(-1));
                    if (loan.Payments.FirstOrDefault(x => x.PaymentDate == DateTime.Today) != null)
                        pmtList.Add(loan.Payments.FirstOrDefault(x => x.PaymentDate == DateTime.Today));
                    else if (pmt != null)
                        pmtList.Add(pmt);
                    else if (loan.Payments.Count == 0)
                        pmtList.Add(new Payment() { Loan = loan });
                }

                db.Loans.Include("Accounts");

                int count = 1;

                foreach (var pmt in pmtList)
                {
                    var view = new DailyViewModel();
                    view.LoanId = pmt.Loan.LoanID;
                    view.Name = pmt.Loan.Account.Name;
                    view.LastName = pmt.Loan.Account.LastName;
                    view.PaymentDate = dailyDate;
                    view.PhoneNumber = pmt.Loan.Account.NumberMobile;
                    if (pmt.Loan.PaymentsPlanned.FirstOrDefault(x => x.PaymentDate == dailyDate) == null)
                        continue;
                    view.PlannedPayment = pmt.Loan.PaymentsPlanned.FirstOrDefault(x => x.PaymentDate == dailyDate).PaymentAmount;
                    view.PrivateNumber = pmt.Loan.Account.PrivateNumber;
                    view.WholeDebt = pmt.WholeDebt.Value;
                    view.CurrentDebt = pmt.CurrentDebt.Value;
                    view.AgreementNumber = pmt.Loan.Agreement;
                    view.BusinessAddress = pmt.Loan.Account.BusinessPhysicalAddress;
                    view.AccountNumber = pmt.Loan.Account.AccountID;
                    view.PaymentOrderID = count;
                    view.PaymentOrder = PaymentOrder.სშო;
                    //view.DisplayDate = pmt.PaymentDate.AddDays(1);  DisplayDate in model temporarily changed to DateTime.Today

                    viewList.Add(view);
                    count++;
                }

                dailyList.DailyList = viewList;
            }

            return View(viewList);
        }

        [HttpPost]
        public ActionResult Index(IList<DailyViewModel> view_Model)
        {
            #region Comments Old Code (Adding bunch of payments)
            //db.Loans.FirstOrDefault().Payments.Add(
            //        new Payment()
            //        {
            //            CurrentPayment = 17,
            //            PaymentDate = DateTime.Today
            //        });

            //db.SaveChanges();

            //TestPayments(view_Model.FirstOrDefault(),0,0,0,0,37, 40, 50, 50, 50, 50, 50);
            //TestPayments(view_Model.FirstOrDefault(), 50, 50, 50, 50, 50, 50, 50, 50, 50);
            //TestPayments(view_Model.FirstOrDefault(), 37, 37, 37, 37, 37, 37, 37);
            //            TestPayments(view_Model.FirstOrDefault(), 25, 25,
            // 25.00,
            // 25.00,
            //0,
            // 50.00,
            // 25.00,
            // 25.00,
            // 25.00,
            // 25.00,
            // 25.00,
            //0,
            // 50.00,
            // 25.00,
            // 25.00,
            // 25.00,
            // 25.00,
            // 25.00,
            //0,
            // 50.00,
            // 25.00,
            // 25.00,
            // 25.00,
            // 25.00,
            // 25.00,
            //0,
            // 50.00,
            // 25.00,
            // 25.00,
            // 25.00,
            // 25.00, 25.00, 0, 50.00, 268.83
            //                );

            //            db.SaveChanges();

            //            return RedirectToAction("Index", "DailyView");

            #endregion

            foreach (var model in view_Model)
            {
                var pmt = db.Payments.Create();
                pmt.Loan = db.Loans.Find(model.LoanId);
                pmt.CurrentPayment = model.Payment;
                pmt.PaymentDate = model.PaymentDate;
                pmt.TaxOrderID = model.PaymentOrder.ToString() + " #" + model.PaymentOrderID;
                pmt.CreditExpert = db.CreditExperts.FirstOrDefault();
                pmt.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault();
                //db.Loans.Find(model.LoanId).Payments.Add(
                //    new Payment()
                //    {
                //        CurrentPayment = model.Payment,
                //        PaymentDate = model.PaymentDate
                //    });

                db.Payments.Add(pmt);
            }

            db.Loans.FirstOrDefault().Payments.FirstOrDefault();

            foreach (var prop in typeof(Payment).GetProperties())
            {
                if (prop.CanRead)
                {
                    prop.GetValue(db.Loans.FirstOrDefault().Payments.FirstOrDefault());
                }
            }

            db.SaveChanges();

            return RedirectToAction("Index", "DailyView");
        }

        private void TestPayments(DailyViewModel model, params double[] data)
        {
            foreach (var amount in data)
            {
                var pmt = db.Payments.Create();
                pmt.Loan = db.Loans.Find(model.LoanId);
                pmt.CurrentPayment = amount;
                //pmt.CurrentPayment = 53.45;
                pmt.PaymentDate = pmt.Loan.LoanStartDate;

                //db.Loans.Find(model.LoanId).Payments.Add(
                //    new Payment()
                //    {
                //        CurrentPayment = model.Payment,
                //        PaymentDate = model.PaymentDate
                //    });
                db.Payments.Add(pmt);
                model.PaymentDate = model.PaymentDate.AddDays(1);
            }
        }
    }
}
