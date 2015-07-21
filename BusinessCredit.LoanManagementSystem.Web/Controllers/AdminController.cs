using BusinessCredit.Core;
using BusinessCredit.Domain;
using BusinessCredit.LoanManagementSystem.Web.Models;
using BusinessCredit.LoanManagementSystem.Web.Models.Json;
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
                    _centralDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Head_BusinessCreditDbConnectionString"].ConnectionString);
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
            if (loanId.HasValue)
            ViewData.Add("loanId", loanId.Value);

            ViewData.Add("fromDate", fromDate);
            ViewData.Add("toDate", toDate);
            ViewData.Add("branch", branch);

            return View();
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
        public void PaymentChangePenalty(ChangePaymentModel targetModel)
        {
            var database = Databases.ElementAt(targetModel.BranchID);
            var payment = database.Payments.FirstOrDefault(x => x.PaymentID == targetModel.ID);
            var loan = payment.Loan;

            var payments = loan.Payments.Where(x => x.PaymentDate >= payment.PaymentDate).ToList().OrderBy(x => x.PaymentDate).ToList();

            payments.FirstOrDefault(x => x.PaymentID == targetModel.ID)._accruingPenalty = targetModel.NewPenalty;

            //database.Payments.RemoveRange(payments);

            //database.SaveChanges();

            RecalculatePayments(loan.LoanID, targetModel.BranchID, payments);

            #region Comment Old
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
            #endregion

            database.SaveChanges();
        }

        [HttpPost]
        public void PaymentZeroizePenalty(ChangePaymentModel targetModel)
        {
            var database = Databases.ElementAt(targetModel.BranchID);
            var payment = database.Payments.FirstOrDefault(x => x.PaymentID == targetModel.ID);
            var loan = payment.Loan;

            var payments = loan.Payments.Where(x => x.PaymentDate >= payment.PaymentDate).ToList().OrderBy(x => x.PaymentDate).ToList();

            payments.FirstOrDefault(x => x.PaymentID == targetModel.ID)._accruingPenalty = 0;

            RecalculatePayments(loan.LoanID, targetModel.BranchID, payments);

            database.SaveChanges();
        }

        private void RecalculatePayments(int loanId, int branch, ICollection<Payment> payments)
        {
            Databases.ElementAt(branch).Payments.RemoveRange(payments);
            Databases.ElementAt(branch).SaveChanges();

            foreach (var payment in payments)
            {
                var pmt = Databases.ElementAt(branch).Payments.Create();

                

                pmt.Loan = Databases.ElementAt(branch).Loans.Find(loanId);
                pmt.TaxOrderID = payment.TaxOrderID;
                pmt.CurrentPayment = payment.CurrentPayment;
                pmt.PaymentDate = payment.PaymentDate;
                pmt._accruingPenalty = payment.AccruingPenalty;
                pmt.CreditExpert = Databases.ElementAt(branch).CreditExperts.FirstOrDefault();
                pmt.CashCollectionAgent = Databases.ElementAt(branch).CashCollectionAgents.FirstOrDefault();

                Databases.ElementAt(branch).Payments.Add(pmt);
            }
        }

        public JsonResult PaymentsAdminJson(int? loanId, string fromDate, string toDate, int branch = 0)
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
                    return Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).ToList()), JsonRequestBehavior.AllowGet);

                return Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate == DateTime.Today).ToList()), JsonRequestBehavior.AllowGet);
            }
            if (loanId != null)
                return Json(PaymentsToJson(database.Loans.Find(loanId).Payments.ToList()), JsonRequestBehavior.AllowGet);

            return Json(new List<Payment>(), JsonRequestBehavior.AllowGet);

            #region Comment
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
            #endregion  
        }

        #endregion

        public List<PaymentJson> PaymentsToJson(List<Payment> payments)
        {
            var resultJson = new List<PaymentJson>();

            foreach (var pmt in payments)
            {
                var jsonPayment = new PaymentJson
                {
                    AccruingInterestPayment = pmt.AccruingInterestPayment.HasValue ? Math.Round(pmt.AccruingInterestPayment.Value, 2) : 0,
                    AccruingOverdueInterest = pmt.AccruingOverdueInterest.HasValue ? Math.Round(pmt.AccruingOverdueInterest.Value, 2) : 0,
                    AccruingOverduePrincipal = pmt.AccruingOverduePrincipal.HasValue ? Math.Round(pmt.AccruingOverduePrincipal.Value, 2) : 0,
                    AccruingPenalty = pmt.AccruingPenalty.HasValue ? Math.Round(pmt.AccruingPenalty.Value, 2) : 0,
                    AccruingPenaltyPayment = pmt.AccruingPenaltyPayment.HasValue ? Math.Round(pmt.AccruingPenaltyPayment.Value, 2) : 0,
                    AccruingPrincipalPayment = pmt.AccruingPrincipalPayment.HasValue ? Math.Round(pmt.AccruingPrincipalPayment.Value, 2) : 0,
                    CurrentDebt = pmt.CurrentDebt.HasValue ? Math.Round(pmt.CurrentDebt.Value, 2) : 0,
                    CurrentInterestPayment = pmt.CurrentInterestPayment.HasValue ? Math.Round(pmt.CurrentInterestPayment.Value, 2) : 0,
                    CurrentOverdueInterest = pmt.CurrentOverdueInterest.HasValue ? Math.Round(pmt.CurrentOverdueInterest.Value, 2) : 0,
                    CurrentOverduePrincipal = pmt.CurrentOverduePrincipal.HasValue ? Math.Round(pmt.CurrentOverduePrincipal.Value, 2) : 0,
                    CurrentPayment = Math.Round(pmt.CurrentPayment, 2),
                    CurrentPenalty = pmt.CurrentPenalty.HasValue ? Math.Round(pmt.CurrentPenalty.Value, 2) : 0,
                    CurrentPrincipalPayment = pmt.CurrentPrincipalPayment.HasValue ? Math.Round(pmt.CurrentPrincipalPayment.Value, 2) : 0,
                    LoanAccountAccountID = pmt.Loan.Account.AccountID,
                    LoanAccountLastName = pmt.Loan.Account.LastName,
                    LoanAccountName = pmt.Loan.Account.Name,
                    LoanAccountPrivateNumber = pmt.Loan.Account.PrivateNumber,
                    LoanBalance = pmt.LoanBalance.HasValue ? Math.Round(pmt.LoanBalance.Value, 2) : 0,
                    LoanLoanID = pmt.Loan.LoanID,
                    LoanStatus = pmt.Loan.LoanStatus.ToString(),
                    PaidInterest = pmt.PaidInterest.HasValue ? Math.Round(pmt.PaidInterest.Value, 2) : 0,
                    PaidPenalty = pmt.PaidPenalty.HasValue ? Math.Round(pmt.PaidPenalty.Value, 2) : 0,
                    PaidPrincipal = pmt.PaidPrincipal.HasValue ? Math.Round(pmt.PaidPrincipal.Value, 2) : 0,
                    PayableInterest = pmt.PayableInterest.HasValue ? Math.Round(pmt.PayableInterest.Value, 2) : 0,
                    PayablePrincipal = pmt.PayablePrincipal.HasValue ? Math.Round(pmt.PayablePrincipal.Value, 2) : 0,
                    PaymentDate = pmt.PaymentDate.ToShortDateString(),
                    PaymentID = pmt.PaymentID,
                    PlannedBalance = Math.Round(pmt.PlannedBalance, 2),
                    PrincipalPrepaid = pmt.PrincipalPrepaid.HasValue ? Math.Round(pmt.PrincipalPrepaid.Value, 2) : 0,
                    PrincipalPrepaymant = pmt.PrincipalPrepaymant.HasValue ? Math.Round(pmt.PrincipalPrepaymant.Value, 2) : 0,
                    StartingBalance = pmt.StartingBalance.HasValue ? Math.Round(pmt.StartingBalance.Value, 2) : 0,
                    StartingPlannedBalance = pmt.StartingPlannedBalance.HasValue ? Math.Round(pmt.StartingPlannedBalance.Value, 2) : 0,
                    TaxOrderID = pmt.TaxOrderID,
                    WholeDebt = pmt.WholeDebt.HasValue ? Math.Round(pmt.WholeDebt.Value, 2) : 0,
                    LoanStartDate = pmt.Loan.LoanStartDate.ToShortDateString(),
                    LoanEndDate = pmt.Loan.LoanEndDate.ToShortDateString(),
                    LoanProblemManager = pmt.Loan.ProblemManager,
                    LoanEnforcementAndCourtFee = Math.Round(pmt.Loan.CourtAndEnforcementFee, 2),
                    Agreement = pmt.Loan.Agreement,
                    CashCollectorID = pmt.Loan.CreditExpert.EmployeeID,
                    CashCollectorLastName = pmt.Loan.CreditExpert.LastName,
                    CashCollectorName = pmt.Loan.CreditExpert.Name,
                    LoanDateOfEnforcement = pmt.Loan.DateOfEnforcement.HasValue ? pmt.Loan.DateOfEnforcement.Value.ToShortDateString() : null,
                    LoanLoanNotificationLetter = pmt.Loan.LoanNotificationLetter.HasValue ? pmt.Loan.LoanNotificationLetter.Value.ToShortDateString() : null,
                    LoanProblemManagerDate = pmt.Loan.ProblemManagerDate.HasValue ? pmt.Loan.ProblemManagerDate.Value.ToShortDateString() : null,
                    PMT = Math.Round(pmt.Loan.AmountToBePaidDaily, 2),
                    EnforcementAndCourtFee = Math.Round(pmt.EnforcementAndCourtFee),
                    EnforcementAndCourtFeeEndingBalance = pmt.EnforcementAndCourtFeeEndingBalance.HasValue ? Math.Round(pmt.EnforcementAndCourtFeeEndingBalance.Value, 2) : 0,
                    EnforcementAndCourtFeePayment = pmt.EnforcementAndCourtFeePayment.HasValue ? Math.Round(pmt.EnforcementAndCourtFeePayment.Value, 2) : 0,
                    EnforcementAndCourtFeeStartingBalance = pmt.EnforcementAndCourtFeeStartingBalance.HasValue ? Math.Round(pmt.EnforcementAndCourtFeeStartingBalance.Value, 2) : 0,
                    TotalEnforcementAndCourtFee = pmt.TotalEnforcementAndCourtFee.HasValue ? Math.Round(pmt.TotalEnforcementAndCourtFee.Value, 2) : 0,
                    TotalEnforcementAndCourtFeePayment = pmt.TotalEnforcementAndCourtFeePayment.HasValue ? Math.Round(pmt.TotalEnforcementAndCourtFeePayment.Value, 2) : 0,
                    ScheduleCatchUp = pmt.ScheduleCatchUp.HasValue ? Math.Round(pmt.ScheduleCatchUp.Value, 2) : 0
                };

                resultJson.Add(jsonPayment);
            }
            return resultJson.OrderBy(x => x.LoanLoanID).ToList();
        }

        public void PaymentZeroizePenalty(int? id, int? branch)
        {
            PaymentZeroizePenalty(new ChangePaymentModel() { ID = id.Value, BranchID = branch.Value, NewPenalty = 0, OldPenalty = 0, Payment = 0});
        }
    }
}
