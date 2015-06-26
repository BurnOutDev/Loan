using BusinessCredit.Core;
using BusinessCredit.Domain;
using BusinessCredit.LoanManagementSystem.Web.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize]
    public class ReportsController : Controller
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

        // GET: /Reports/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult PortfolioAnalize(string displayDate)
        {
            var currentUser = CurrentUser;

            if (string.IsNullOrEmpty(displayDate))
                return View(new List<Payment>());

            var pmtDate = DateTime.Parse(displayDate).Date;

            var payments = db.Payments.Where(p => p.PaymentDate == pmtDate);

            return View(payments.ToList());
        }
        public ActionResult IncomeAnalize(string from, string to)
        {
            if (string.IsNullOrEmpty(from) || string.IsNullOrEmpty(to))
                return View(new List<PaymentsReportViewModel>());

            var resultList = CalculateByMonth(from, to);

            return View(resultList.ToList());
        }

        public ActionResult LoanIssueDaily(int[] months, int year = 2015)
        {
            if (months == null)
                return View(new List<LoanIssueReportModel>());

            var list = new List<LoanIssueReportModel>();

            for (int i = 0; i < months.Length; i++)
            {
                var from = string.Format("{0}-1-{1}", months[i].ToString(), year.ToString());
                var to = string.Format("{0}-{1}-{2}", months[i].ToString(), DateTime.DaysInMonth(year, months[i]), year.ToString());

                var fromDate = DateTime.Parse(from);
                var toDate = DateTime.Parse(to);

                var tempLoans = db.Loans.Where(l => l.LoanStartDate >= fromDate && l.LoanStartDate <= toDate).ToList();

                if (tempLoans == null || tempLoans.Count == 0)
                    continue;

                list.Add(new LoanIssueReportModel()
                    {
                        LoanStartDate = tempLoans.FirstOrDefault().LoanStartDate,
                        LoanAmount = tempLoans.Sum(x => x.LoanAmount),
                        LoanCount = tempLoans.Count()
                    });
            }

            return View(list);
        }

        public ActionResult LoansPrincipalAnalize()
        {
            return View();
        }

        private List<LoanIssueReportModel> CalculateLoansByMonth(string from, string to)
        {
            var currentUser = CurrentUser;

            var fromDate = DateTime.Parse(from).Date;
            var toDate = DateTime.Parse(to).Date;

            var loans = db.Loans.Where(l => l.LoanStartDate.Year >= fromDate.Year && l.LoanStartDate.Month >= fromDate.Month && l.LoanStartDate.Year <= toDate.Year && l.LoanStartDate.Month <= toDate.Month);

            var resultList = loans.ToList().GroupBy(l => l.LoanStartDate).ToList().Select(g => new LoanIssueReportModel
            {
                LoanStartDate = g.FirstOrDefault().LoanStartDate,
                LoanAmount = g.Sum(x => x.LoanAmount),
                LoanCount = g.Count()
            }).ToList();
            return resultList;
        }

        private List<PaymentsReportViewModel> CalculateByMonth(string from, string to)
        {
            var currentUser = CurrentUser;

            var fromDate = DateTime.Parse(from).Date;
            var toDate = DateTime.Parse(to).Date;

            var payments = db.Payments.Where(p => p.PaymentDate.Year >= fromDate.Year && p.PaymentDate.Month >= fromDate.Month && p.PaymentDate.Year <= toDate.Year && p.PaymentDate.Month <= toDate.Month);

            var resultList = payments.ToList().GroupBy(p => p.PaymentDate).ToList().Select(g => new PaymentsReportViewModel
            {
                CurrentPayment = g.Sum(p => p.CurrentPayment),
                PaymentDate = g.FirstOrDefault().PaymentDate,
                CurrentDebt = g.Sum(p => p.CurrentDebt),
                WholeDebt = g.Sum(p => p.WholeDebt),
                StartingPlannedBalance = g.Sum(p => p.StartingPlannedBalance),
                StartingBalance = g.Sum(p => p.StartingBalance),
                PlannedBalance = g.Sum(p => p.PlannedBalance),
                PayableInterest = g.Sum(p => p.PayableInterest),
                PayablePrincipal = g.Sum(p => p.PayablePrincipal),
                CurrentOverduePrincipal = g.Sum(p => p.CurrentOverduePrincipal),
                CurrentOverdueInterest = g.Sum(p => p.CurrentOverdueInterest),
                CurrentPenalty = g.Sum(p => p.CurrentPenalty),
                AccruingOverdueInterest = g.Sum(p => p.AccruingOverdueInterest),
                //AccruingOverduePenalty = g.Sum(p => p.AccruingOverduePenalty),  (AccruingOverduePenalty - agarari)
                AccruingPenaltyPayment = g.Sum(p => p.AccruingPenaltyPayment),
                AccruingInterestPayment = g.Sum(p => p.AccruingInterestPayment),
                AccruingPrincipalPayment = g.Sum(p => p.AccruingPrincipalPayment),
                CurrentInterestPayment = g.Sum(p => p.CurrentInterestPayment),
                CurrentPrincipalPayment = g.Sum(p => p.CurrentPrincipalPayment),
                PrincipalPrepaymant = g.Sum(p => p.PrincipalPrepaymant),
                PaidPenalty = g.Sum(p => p.PaidPenalty),
                PaidPrincipal = g.Sum(p => p.PaidPrincipal),
                PrincipalPrepaid = g.Sum(p => p.PrincipalPrepaid),
                LoanBalance = g.Sum(p => p.LoanBalance)
            }).ToList();
            return resultList;
        }
    }
}
