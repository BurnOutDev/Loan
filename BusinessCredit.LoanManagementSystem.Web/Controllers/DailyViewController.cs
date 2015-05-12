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

        public ActionResult Index()
        {
            var viewList = new List<DailyViewModel>();
            var pmtList = new List<Payment>();


            var loans = db.Loans.Where(l => l.LoanStatus == LoanStatus.Active).ToList();

            var date = loans.FirstOrDefault().LoanStartDate;

            foreach (var loan in loans)
                //pmtList.Add(loan.Payments.FirstOrDefault(x => x.PaymentDate.Date == DateTime.Today.AddDays(-1)));
                pmtList.Add(loan.Payments.FirstOrDefault());

            foreach (var pmt in pmtList)
            {
                var view = new DailyViewModel();
                view.LoanId = pmt.Loan.LoanID;
                view.Name = pmt.Loan.Account.Name;
                view.LastName = pmt.Loan.Account.LastName;
                view.PaymentDate = date;
                view.PhoneNumber = pmt.Loan.Account.NumberMobile;
                view.PlannedPayment = pmt.Loan.PlannedPaymentEntities.FirstOrDefault(x => x.PaymentDate == date).Deposit.Value;
                view.PrivateNumber = pmt.Loan.Account.PrivateNumber;
                view.WholeDebt = pmt.WholeDebt.Value;
                view.CurrentDebt = pmt.CurrentDebt.Value;
                view.OverdueAmount = view.CurrentDebt - view.PlannedPayment;

                viewList.Add(view);
            }

            return View(viewList);
        }

        [HttpPost]
        public ActionResult Index(IList<DailyViewModel> dailyViewModel)
        {
            return RedirectToAction("Index");
        }
    }
}