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
    public class DailyViewController : Controller
    {
        private BusinessCreditContext db = new BusinessCreditContext();

        public ActionResult Index(string date)
        {
            bool editing = false;
            DateTime dailyDate;
            if (string.IsNullOrWhiteSpace(date))
            {
                dailyDate = DateTime.Today;
                editing = true;
            }
            else
                dailyDate = DateTime.Parse(date);

            var dailyList = new LstViewModel();
            var viewList = new List<DailyViewModel>();
            var pmtList = new List<Payment>();

            var loans = db.Loans.Where(l => l.LoanStatus == LoanStatus.Active).ToList();

            if (!string.IsNullOrWhiteSpace(date))
                loans = db.Loans.ToList();

            if (loans.Count > 0)
            {
                if (string.IsNullOrWhiteSpace(date))
                {
                    foreach (var loan in loans)
                    {
                        var pmt = loan.Payments.FirstOrDefault(x => x.PaymentDate.Date == DateTime.Today.AddDays(-1));
                        if (pmt != null)
                            pmtList.Add(pmt);
                        else if (loan.Payments.Count == 0)
                            pmtList.Add(new Payment() { Loan = loan });
                    }
                }
                else
                {
                    foreach (var loan in loans)
                    {
                        var pmt = loan.Payments.FirstOrDefault(x => x.PaymentDate.Date == dailyDate);
                        if (pmt != null)
                            pmtList.Add(pmt);
                    }
                }

                db.Loans.Include("Accounts");

                foreach (var pmt in pmtList)
                {
                    var view = new DailyViewModel();
                    view.LoanId = pmt.Loan.LoanID;
                    view.Name = pmt.Loan.Account.Name;
                    view.LastName = pmt.Loan.Account.LastName;
                    view.PaymentDate = dailyDate;
                    view.PhoneNumber = pmt.Loan.Account.NumberMobile;
                    view.PlannedPayment = pmt.Loan.PlannedPaymentEntities.FirstOrDefault(x => x.PaymentDate == dailyDate).Deposit.Value;
                    view.PrivateNumber = pmt.Loan.Account.PrivateNumber;
                    view.WholeDebt = pmt.WholeDebt.Value;
                    view.CurrentDebt = pmt.CurrentDebt.Value;
                    view.OverdueAmount = view.CurrentDebt - view.PlannedPayment;

                    viewList.Add(view);
                }

                dailyList.DailyList = viewList;
            }
            
            return View(viewList);
        }

        [HttpPost]
        public ActionResult Index(IList<DailyViewModel> view_Model)
        {
            foreach (var model in view_Model)
            {
                db.Loans.Find(model.LoanId).Payments.Add(
                    new Payment()
                    {
                        CurrentPayment = model.Payment,
                        PaymentDate = model.PaymentDate
                    });
            }

            db.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}
