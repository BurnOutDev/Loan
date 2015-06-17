using BusinessCredit.Core;
using BusinessCredit.Domain;
using BusinessCredit.LoanManagementSystem.Web.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace BusinessCredit.LoanManagementSystem.Web.Controllers
{
    [Authorize(Users = "nkandelaki@businesscredit.ge")]
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
        #endregion

        public ApplicationUser CurrentUser
        {
            get
            {
                var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new ApplicationDbContext()));
                return manager.FindById(User.Identity.GetUserId());
            }
        }

        public ActionResult ClientsAdmin()
        {
            var databases = new List<BusinessCreditContext> { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb };
            var result = new List<AdminClientsViewModel>();

            foreach (var database in databases)
            {
                foreach (var entity in database.Accounts)
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
                        Branch = database.BranchName
                    };
                    result.Add(item);
                }
            }

            return View(result);
        }

        public ActionResult PaymentsAdmin()
        {
            //var databases = new List<BusinessCreditContext> { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb };
            //var result = new List<AdminPaymentsViewModel>();

            //foreach (var database in databases)
            //{
            //    foreach (Payment entity in database.Payments.AsNoTracking().ToList().ToArray())
            //    {
            //        var payment = entity;
            //        AdminPaymentsViewModel item = new AdminPaymentsViewModel()
            //        {
            //            _accruingOverdueInterest = entity._accruingOverdueInterest,
            //            _accruingOverduePenalty = entity._accruingOverduePenalty,
            //            _accruingPenaltyPayment = entity._accruingPenaltyPayment,
            //            _CurrentPenalty = entity._CurrentPenalty,
            //            _payableInterest = entity._payableInterest,
            //            AccruingInterestPayment = entity.AccruingInterestPayment,
            //            AccruingOverdueInterest = entity.AccruingOverdueInterest,
            //            AccruingOverduePenalty = entity.AccruingOverduePenalty,
            //            AccruingOverduePrincipal = entity.AccruingOverduePrincipal,
            //            AccruingPenaltyPayment = entity.AccruingPenaltyPayment,
            //            AccruingPrincipalPayment = entity.AccruingPrincipalPayment,
            //            CashCollectionAgent = entity.CashCollectionAgent,
            //            CreditExpert = entity.CreditExpert,
            //            CurrentDebt = entity.CurrentDebt,
            //            CurrentInterestPayment = entity.CurrentInterestPayment,
            //            CurrentOverdueInterest = entity.CurrentOverdueInterest,
            //            CurrentOverduePrincipal = entity.CurrentOverduePrincipal,
            //            CurrentPayment = entity.CurrentPayment,
            //            CurrentPenalty = entity.CurrentPenalty,
            //            CurrentPrincipalPayment = entity.CurrentPrincipalPayment,
            //            Loan = entity.Loan,
            //            LoanBalance = entity.LoanBalance,
            //            LoanStatus = entity.LoanStatus,
            //            PaidInterest = entity.PaidInterest,
            //            PaidPenalty = entity.PaidPenalty,
            //            PaidPrincipal = entity.PaidPrincipal,
            //            PayableInterest = entity.PaidInterest,
            //            PayablePrincipal = entity.PayablePrincipal,
            //            PaymentDate = entity.PaymentDate,
            //            PaymentID = entity.PaymentID,
            //            PrincipalPrepaid = entity.PrincipalPrepaid,
            //            PrincipalPrepaymant = entity.PrincipalPrepaymant,
            //            StartingBalance = entity.StartingBalance,
            //            StartingPlannedBalance = entity.StartingPlannedBalance,
            //            TaxOrderID = entity.TaxOrderID,
            //            WholeDebt = entity.WholeDebt
            //        };

            //        item.Branch = database.BranchName;
            //        result.Add(item);
            //    }
            //}

            //return View(result);
            return View();
        }
    }
}