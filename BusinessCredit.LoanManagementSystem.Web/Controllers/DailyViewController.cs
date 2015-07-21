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
using BusinessCredit.Core.TaxOrders;
using BusinessCredit.LoanManagementSystem.Web.Models.Json;

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

        public ActionResult Index(string downloadDaily, string downloadTaxOrders)
        {
            SetTempData(false);

            //6/23/2015

            var date = DateTime.Today;

            #region GetUser

            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));

            // Get the current logged in User and look up the user in ASP.NET Identity
            var currentUser = manager.FindById(User.Identity.GetUserId());

            #endregion

            var dailyDate = date;

            var viewList = new List<DailyViewModel>();
            var pmtList = new List<Payment>();

            //var pmts = db.Loans.Select(l => l.Payments.OrderByDescending(p => p.PaymentDate).FirstOrDefault());

            var loans = db.Loans.Where(l => l.Payments.OrderByDescending(p => p.PaymentDate).FirstOrDefault().WholeDebt > 0 && l.Payments.FirstOrDefault(p => p.PaymentDate == dailyDate) == null).ToList().Where(x => x.LoanStatus == LoanStatus.Active).ToList();

            loans.AddRange(db.Loans.Where(l => l.Payments.Count == 0));

            List<int> indexes = new List<int>();
            var loans2 = db.Loans.Where(l => l.LoanStatus == LoanStatus.Active).OrderBy(x => x.LoanID).ToList();
            loans2.AddRange(db.Loans.Where(l => l.Payments.Count == 0));

            for (int i = 0; i < loans2.Count(); i++)
            {
                if (loans2[i].Payments.FirstOrDefault(p => p.PaymentDate == dailyDate) != null)
                    indexes.Add(i + 1);
            }

            if (loans.Count > 0)
            {
                foreach (var loan in loans)
                {
                    var pmt = loan.Payments.FirstOrDefault(x => x.PaymentDate.Date == date.AddDays(-1));
                    if (loan.Payments.FirstOrDefault(x => x.PaymentDate == date) != null)
                        pmtList.Add(loan.Payments.FirstOrDefault(x => x.PaymentDate == date));
                    else if (pmt != null)
                        pmtList.Add(pmt);
                    else if (loan.Payments.Count == 0)
                        pmtList.Add(new Payment() { Loan = loan });
                }

                db.Loans.Include("Accounts");

                int count = 1;

                foreach (var pmt in pmtList)
                {
                    while (indexes.Contains(count))
                        count++;

                    var view = new DailyViewModel();
                    view.LoanId = pmt.Loan.LoanID;
                    view.Name = pmt.Loan.Account.Name;
                    view.LastName = pmt.Loan.Account.LastName;
                    view.PaymentDate = dailyDate;
                    view.PhoneNumber = pmt.Loan.Account.NumberMobile;

                    try
                    {
                        view.PlannedPayment = pmt.Loan.PaymentsPlanned.FirstOrDefault(x => x.PaymentDate == dailyDate).PaymentAmount;
                    }
                    catch (NullReferenceException)
                    {
                        view.PlannedPayment = 0;
                    }

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
            }

            if (downloadTaxOrders == "true")
                return DownloadTaxOrders(dailies: viewList.ToArray());

            return View(viewList);
        }

        [HttpPost]
        public ActionResult Index(IList<DailyViewModel> view_Model)
        {
            bool submitAll = false;

            if (TempData["SubmitAll"] != null)
            {
                if (TempData["SubmitAll"].ToString() == "True")
                    submitAll = true;
            }

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

            foreach (var model in submitAll ? view_Model : view_Model.Where(x => x.Payment > 0))
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

        [HttpPost]
        public void SetTempData(bool SubmitAll)
        {
            // Set your TempData key to the value passed in
            TempData["SubmitAll"] = SubmitAll;
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

        public FileResult DownloadTaxOrders(params DailyViewModel[] dailies)
        {
            var zipMemoryStream = new MemoryStream();

            var folder = Server.MapPath(Url.Content("~/Resources/"));
            var filePath = Server.MapPath(Url.Content("~/Resources/TaxOrderTemplate.xlsx"));

            List<TaxOrder> taxOrders = new List<TaxOrder>();
            foreach (var daily in dailies)
            {
                taxOrders.Add(new TaxOrder
                {
                    AccountFirstName = daily.Name,
                    AccountLastName = daily.LastName,
                    AccountPrivateNumber = daily.PrivateNumber,
                    Basis = "სესხის ხელშეკრულება #" + daily.AgreementNumber + " საფუძველზე",
                    CollectorFirstName = db.CashCollectionAgents.FirstOrDefault().Name,
                    CollectorLastName = db.CashCollectionAgents.FirstOrDefault().LastName,
                    CollectorPrivateNumber = db.CashCollectionAgents.FirstOrDefault().PrivateNumber,
                    Date = daily.PaymentDate.ToShortDateString(),
                    TaxOrderNumber = daily.PaymentOrderID
                });
            }

            var strRes = TaxOrderGenerator.Generate(filePath, taxOrders.ToArray<TaxOrder>());

            strRes.Seek(0, SeekOrigin.Begin);

            return File(strRes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        }

        public void InitializeNonWorkingDayPenalties(IList<DailyViewModel> view_Model)
        {
            foreach (var model in view_Model)
            {
                var pmt = db.Payments.Create();
                pmt.Loan = db.Loans.Find(model.LoanId);
                pmt.CurrentPayment = model.Payment;
                pmt.PaymentDate = model.PaymentDate;
                pmt.TaxOrderID = model.PaymentOrder.ToString() + " #" + model.PaymentOrderID;
                pmt.CreditExpert = db.CreditExperts.FirstOrDefault();
                pmt.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault();
                pmt._accruingPenalty = 0;

                db.Payments.Add(pmt);
            }

            db.SaveChanges();
        }

        public ActionResult IndexNew()
        {
            return View();
        }

        [HttpPost]
        public ActionResult IndexNew(IEnumerable<DailyJson> data)
        {
            foreach (var pmt in data)
            {
                var payment = db.Payments.FirstOrDefault(p => p.PaymentID == pmt.PaymentID);
                var loanId = payment.Loan.LoanID;

                db.Payments.Remove(payment);
                db.SaveChanges();

                var paymentNew = db.Payments.Create();
                paymentNew.Loan = db.Loans.FirstOrDefault(l => l.LoanID == loanId);
                paymentNew.CurrentPayment = pmt.Payment;
                paymentNew.PaymentDate = DateTime.Today;
                paymentNew.TaxOrderID = pmt.PaymentOrder + " #" + pmt.PaymentOrderID;
                paymentNew.CreditExpert = db.CreditExperts.FirstOrDefault();
                paymentNew.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault();

                db.Payments.Add(paymentNew);
                db.SaveChanges();
            }
            db.SaveChanges();
            return View();
        }

        public JsonResult IndexNewJson()
        {
            var loans = db.Loans.Where(l => l.LoanStatus == LoanStatus.Active).ToList();

            for (int i = 0; i < loans.Count; i++)
            {
                if (loans[i].Payments.FirstOrDefault(p => p.PaymentDate >= DateTime.Today) == null)
                {
                    var pmt = db.Payments.Create();
                    pmt.Loan = loans[i];
                    pmt.CurrentPayment = 0;
                    pmt.PaymentDate = DateTime.Today;
                    pmt.TaxOrderID = "სშო #" + (i + 1);
                    pmt.CreditExpert = db.CreditExperts.FirstOrDefault();
                    pmt.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault();

                    db.Payments.Add(pmt);
                    db.SaveChanges();
                }
            }



            List<DailyJson> dailies = new List<DailyJson>();

            foreach (var pmt in db.Payments.Where(x => x.PaymentDate == DateTime.Today).ToList().OrderBy(x => x.Loan.LoanID).ToList())
            {
                dailies.Add(new DailyJson
                {
                    PaymentID = pmt.PaymentID,
                    LoanId = pmt.Loan.LoanID,
                    Name = pmt.Loan.Account.Name,
                    LastName = pmt.Loan.Account.LastName,
                    PaymentDate = pmt.PaymentDate.ToShortDateString(),
                    PhoneNumber = pmt.Loan.Account.NumberMobile,
                    PrivateNumber = pmt.Loan.Account.PrivateNumber,
                    WholeDebt = Math.Round(pmt.WholeDebt.Value, 2),
                    CurrentDebt = Math.Round(pmt.CurrentDebt.Value, 2),
                    AgreementNumber = pmt.Loan.Agreement,
                    BusinessAddress = pmt.Loan.Account.BusinessPhysicalAddress,
                    AccountNumber = pmt.Loan.Account.AccountID,
                    PaymentOrderID = int.Parse(pmt.TaxOrderID.Substring(pmt.TaxOrderID.IndexOf("#") + 1)),
                    PaymentOrder = PaymentOrder.სშო.ToString(),
                    StartDate = pmt.Loan.LoanStartDate.ToShortDateString(),
                    EndDate = pmt.Loan.LoanEndDate.ToShortDateString(),
                    CourtAndEnforcementFee = pmt.EnforcementAndCourtFee,
                    Payment = pmt.CurrentPayment,
                    PlannedPayment = Math.Round(pmt.Loan.AmountToBePaidDaily, 2),
                    ProblemManager = pmt.Loan.ProblemManager,
                    ScheduleCatchUp = pmt.ScheduleCatchUp.Value
                });
            }

            return Json(dailies, JsonRequestBehavior.AllowGet);
        }
    }
}
