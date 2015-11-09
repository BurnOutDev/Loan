using BusinessCredit.Core;
using BusinessCredit.Core.LoanCalculator;
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
    [Authorize(Users = "nkandelaki@businesscredit.ge,dioramashvili@businesscredit.ge,accounting@businesscredit.ge,zrusia@businesscredit.ge")]
    public class AdminController : Controller
    {
        public string RecalcDay(int? branch)
        {
            if (!branch.HasValue)
            {
                return "Parameter branch is null";
            }

            var db = Databases.ElementAt(branch.Value);

            var Date = new DateTime(2015, 8, 15);

            var loans = db.Loans.Where(l => l.LoanID == 218 ||
                                            l.LoanID == 234 ||
                                            l.LoanID == 315 ||
                                            l.LoanID == 348 ||
                                            l.LoanID == 378 ||
                                            l.LoanID == 462 ||
                                            l.LoanID == 486 ||
                                            l.LoanID == 497 ||
                                            l.LoanID == 610 ||
                                            l.LoanID == 625 ||
                                            l.LoanID == 651 ||
                                            l.LoanID == 690 ||
                                            l.LoanID == 817 ||
                                            l.LoanID == 885 ||
                                            l.LoanID == 911 ||
                                            l.LoanID == 1064 ||
                                            l.LoanID == 1098 ||
                                            l.LoanID == 1177 ||
                                            l.LoanID == 1195 ||
                                            l.LoanID == 1207 ||
                                            l.LoanID == 1254 ||
                                            l.LoanID == 1274 ||
                                            l.LoanID == 1275 ||
                                            l.LoanID == 1293 ||
                                            l.LoanID == 1294 ||
                                            l.LoanID == 1299 ||
                                            l.LoanID == 1305 ||
                                            l.LoanID == 1307 ||
                                            l.LoanID == 1330 ||
                                            l.LoanID == 1335 ||
                                            l.LoanID == 1346 ||
                                            l.LoanID == 1350 ||
                                            l.LoanID == 1359 ||
                                            l.LoanID == 1364 ||
                                            l.LoanID == 1365 ||
                                            l.LoanID == 1368 ||
                                            l.LoanID == 1383 ||
                                            l.LoanID == 1384 ||
                                            l.LoanID == 1385 ||
                                            l.LoanID == 1387 ||
                                            l.LoanID == 1389 ||
                                            l.LoanID == 1396 ||
                                            l.LoanID == 1398 ||
                                            l.LoanID == 1399 ||
                                            l.LoanID == 1405 ||
                                            l.LoanID == 1418 ||
                                            l.LoanID == 1429 ||
                                            l.LoanID == 1440 ||
                                            l.LoanID == 1449 ||
                                            l.LoanID == 1450 ||
                                            l.LoanID == 1451 ||
                                            l.LoanID == 1452 ||
                                            l.LoanID == 1454 ||
                                            l.LoanID == 1458 ||
                                            l.LoanID == 1464 ||
                                            l.LoanID == 1474 ||
                                            l.LoanID == 1475 ||
                                            l.LoanID == 1477 ||
                                            l.LoanID == 1483 ||
                                            l.LoanID == 1484 ||
                                            l.LoanID == 1486 ||
                                            l.LoanID == 1493 ||
                                            l.LoanID == 1498 ||
                                            l.LoanID == 1510 ||
                                            l.LoanID == 1511 ||
                                            l.LoanID == 1515 ||
                                            l.LoanID == 1516 ||
                                            l.LoanID == 1524 ||
                                            l.LoanID == 1525 ||
                                            l.LoanID == 1526 ||
                                            l.LoanID == 1528 ||
                //l.LoanID == 1529 ||
                                            l.LoanID == 1537).ToList();

            foreach (var item in loans)
            {
                var pmt = item.Payments.FirstOrDefault(x => x.PaymentDate == Date);

                PaymentChangePenalty(new ChangePaymentModel() { BranchID = branch.Value, ID = pmt.PaymentID, NewPenalty = pmt.AccruingPenalty.Value });
            }

            return "Recalculated Day!";
        }

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

        private BusinessCreditContext _gugaDb;

        public BusinessCreditContext GugaDb
        {
            get
            {
                if (_gugaDb == null)
                    _gugaDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Central_Guga_BusinessCreditDbConnectionString"].ConnectionString);
                return _gugaDb;
            }
        }

        private BusinessCreditContext _sandroDb;

        public BusinessCreditContext SandroDb
        {
            get
            {
                if (_sandroDb == null)
                    _sandroDb = new BusinessCreditContext(ConfigurationManager.ConnectionStrings["Sandro_Head_BusinessCreditDbConnectionString"].ConnectionString);
                return _sandroDb;
            }
        }

        public ICollection<BusinessCreditContext> Databases
        {
            get
            {
                return new List<BusinessCreditContext>() { CentralDb, IsaniDb, OkribaDb, LiloDb, EliavaDb, VagzaliDb, GugaDb, SandroDb };
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
                    Comment = entity.Comment
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
                BusinessPhysicalAddress = acc.BusinessPhysicalAddress,
                Gender = acc.Gender,
                LastName = acc.LastName,
                Name = acc.Name,
                NumberMobile = acc.NumberMobile,
                PhysicalAddress = acc.PhysicalAddress,
                PrivateNumber = acc.PrivateNumber,
                Status = acc.Status,
                Comment = acc.Comment
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
            acc.Comment = model.Comment;

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

        public ActionResult EditPaymentForm(int paymentId = 0, int branch = 0)
        {
            var pmt = Databases.ElementAt(branch).Payments.FirstOrDefault(x => x.PaymentID == paymentId);

            ViewData["paymentId"] = paymentId;
            ViewData["branch"] = branch;
            ViewData["taxOrderId"] = pmt.TaxOrderID;
            ViewData["currentPmt"] = pmt.CurrentPayment;
            ViewData["accruingPenalty"] = pmt.AccruingPenalty;
            ViewData["loanBalance"] = pmt.LoanBalance;
            ViewData["payableInterest"] = pmt.PayableInterest;
            //ViewData["currentDebt"] = pmt.CurrentDebt;
            //ViewData["wholeDebt"] = pmt.WholeDebt;
            //ViewData["startingPlannedBalance"] = pmt.StartingPlannedBalance;
            //ViewData["startingBalance"] = pmt.StartingBalance;
            //ViewData["plannedBalance"] = pmt.PlannedBalance;
            //ViewData["payablePrincipal"] = pmt.PayablePrincipal;
            //ViewData["currentOverduePrincipal"] = pmt.CurrentOverduePrincipal;
            //ViewData["currentOverdueInterest"] = pmt.CurrentOverdueInterest;
            //ViewData["currentPenalty"] = pmt.CurrentPenalty;
            //ViewData["accruingOverduePrincipal"] = pmt.AccruingOverduePrincipal;
            //ViewData["accruingOverdueInterest"] = pmt.AccruingOverdueInterest;
            //ViewData["accruingPenaltyPayment"] = pmt.AccruingPenaltyPayment;
            //ViewData["accruingInterestPayment"] = pmt.AccruingInterestPayment;
            //ViewData["accruingPrincipalPayment"] = pmt.AccruingPrincipalPayment;
            //ViewData["currentInterestPayment"] = pmt.CurrentInterestPayment;
            //ViewData["currentPrincipalPayment"] = pmt.CurrentPrincipalPayment;
            //ViewData["principalPrepayment"] = pmt.PrincipalPrepaymant;
            //ViewData["paidInterest"] = pmt.PaidInterest;
            //ViewData["paidPenalty"] = pmt.PaidPenalty;
            //ViewData["paidPrincipal"] = pmt.PaidPrincipal;
            //ViewData["principalPrepaid"] = pmt.PrincipalPrepaid;

            //ViewData["enforcementAndCourtFee"] = pmt.EnforcementAndCourtFee;
            //ViewData["enforcementAndCourtFeePayment"] = pmt.EnforcementAndCourtFeePayment;
            //ViewData["enforcementAndCourtFeeStartingBalance"] = pmt.EnforcementAndCourtFeeStartingBalance;
            //ViewData["enforcementAndCourtFeeEndingBalance"] = pmt.EnforcementAndCourtFeeEndingBalance;
            //ViewData["totalEnforcementAndCourtFee"] = pmt.TotalEnforcementAndCourtFee;
            //ViewData["totalEnforcementAndCourtFeePayment"] = pmt.TotalEnforcementAndCourtFeePayment;
            //ViewData["scheduleCatchUp"] = pmt.ScheduleCatchUp;

            var result = new PaymentEditableModel()
            {
                AccruingInterestPayment = pmt.AccruingInterestPayment,
                AccruingOverdueInterest = pmt.AccruingOverdueInterest,
                AccruingOverduePrincipal = pmt.AccruingOverduePrincipal,
                AccruingPenalty = pmt.AccruingPenalty,
                AccruingPenaltyPayment = pmt.AccruingPenaltyPayment,
                AccruingPrincipalPayment = pmt.AccruingPrincipalPayment,
                CashCollectorID = pmt.CashCollectionAgent.CashCollectionAgentID,
                Comment = pmt.Comment,
                CurrentDebt = pmt.CurrentDebt,
                CurrentInterestPayment = pmt.CurrentInterestPayment,
                CurrentOverdueInterest = pmt.CurrentOverdueInterest,
                CurrentOverduePrincipal = pmt.CurrentOverduePrincipal,
                CurrentPayment = pmt.CurrentPayment,
                CurrentPenalty = pmt.CurrentPenalty,
                CurrentPrincipalPayment = pmt.CurrentPrincipalPayment,
                EnforcementAndCourtFee = pmt.EnforcementAndCourtFee,
                EnforcementAndCourtFeeEndingBalance = pmt.EnforcementAndCourtFeeEndingBalance,
                EnforcementAndCourtFeePayment = pmt.EnforcementAndCourtFeePayment,
                EnforcementAndCourtFeeStartingBalance = pmt.EnforcementAndCourtFeeStartingBalance,
                LoanBalance = pmt.LoanBalance,
                PaidInterest = pmt.PaidInterest,
                PaidPenalty = pmt.PaidPenalty,
                PaidPrincipal = pmt.PaidPrincipal,
                PayableInterest = pmt.PayableInterest,
                PayablePrincipal = pmt.PayablePrincipal,
                PaymentID = pmt.PaymentID,
                PlannedBalance = pmt.PlannedBalance,
                PrincipalPrepaid = pmt.PrincipalPrepaid,
                PrincipalPrepaymant = pmt.PrincipalPrepaymant,
                ScheduleCatchUp = pmt.ScheduleCatchUp,
                StartingBalance = pmt.StartingBalance,
                StartingPlannedBalance = pmt.StartingPlannedBalance,
                TaxOrderID = pmt.TaxOrderID,
                TotalEnforcementAndCourtFee = pmt.TotalEnforcementAndCourtFee,
                TotalEnforcementAndCourtFeePayment = pmt.TotalEnforcementAndCourtFeePayment,
                WholeDebt = pmt.WholeDebt,
                branch = branch
            };

            return View(result);
        }

        [HttpPost]
        public string EditPaymentForm(PaymentEditableModel pmtModel)
        {
            try
            {
                var pmtid = pmtModel.PaymentID;

                bool first = true;

                var db = Databases.ElementAt(pmtModel.branch);
                if (pmtModel.PaymentID == 0)
                {
                    return "გადახდის მითითებული იდენტიფიკატორი არასწორია!";
                }

                var pmt1 = db.Payments.FirstOrDefault(x => x.PaymentID == pmtid);
                var loanId = pmt1.Loan.LoanID;

                var payments = pmt1.Loan.Payments.Where(x => x.PaymentDate >= pmt1.PaymentDate).ToList();

                db.Payments.RemoveRange(payments);
                db.SaveChanges();

                foreach (var payment in payments)
                {
                    var pmt = Databases.ElementAt(pmtModel.branch).Payments.Create();

                    pmt.CurrentPayment = payment.CurrentPayment;
                    pmt.Loan = Databases.ElementAt(pmtModel.branch).Loans.Find(loanId);
                    pmt.TaxOrderID = payment.TaxOrderID;
                    pmt.PaymentDate = payment.PaymentDate;
                    pmt.CreditExpert = Databases.ElementAt(pmtModel.branch).CreditExperts.FirstOrDefault();
                    pmt.CashCollectionAgent = Databases.ElementAt(pmtModel.branch).CashCollectionAgents.FirstOrDefault();

                    if (first == true)
                    {
                        #region CurrentPayment
                        if (pmtModel.CurrentPayment.HasValue)
                            pmt.CurrentPayment = pmtModel.CurrentPayment.Value;
                        else
                            pmt.CurrentPayment = payment.CurrentPayment;
                        #endregion

                        #region AccruingPenalty
                        if (pmtModel.AccruingPenalty.HasValue)
                            pmt._accruingPenalty = pmtModel.AccruingPenalty.Value;
                        #endregion

                        #region LoanBalance
                        if (pmtModel.LoanBalance.HasValue)
                            pmt._loanBalance = pmtModel.LoanBalance.Value;
                        #endregion

                        #region PayableInterest
                        if (pmtModel.PayableInterest.HasValue)
                            pmt._payableInterest = pmtModel.PayableInterest.Value;
                        #endregion

                        #region AccruingInterestPayment
                        if (pmtModel.AccruingInterestPayment.HasValue)
                            pmt._accruingInterestPayment = pmtModel.AccruingInterestPayment.Value;
                        #endregion

                        #region AccruingOverdueInterest
                        if (pmtModel.AccruingOverdueInterest.HasValue)
                            pmt._accruingOverdueInterest = pmtModel.AccruingOverdueInterest.Value;
                        #endregion

                        #region AccruingOverduePrincipal
                        if (pmtModel.AccruingOverduePrincipal.HasValue)
                            pmt._accruingOverduePrincipal = pmtModel.AccruingOverduePrincipal.Value;
                        #endregion

                        #region AccruingPenaltyPayment
                        if (pmtModel.AccruingPenaltyPayment.HasValue)
                            pmt._accruingPenaltyPayment = pmtModel.AccruingPenaltyPayment.Value;
                        #endregion

                        #region AccruingPrincipalPayment
                        if (pmtModel.AccruingPrincipalPayment.HasValue)
                            pmt._accruingPrincipalPayment = pmtModel.AccruingPrincipalPayment.Value;
                        #endregion

                        #region CashCollectorID
                        if (pmtModel.CashCollectorID.HasValue)
                            pmt.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault(x => x.CashCollectionAgentID == pmtModel.CashCollectorID.Value);
                        #endregion

                        #region Comment
                        if (!string.IsNullOrWhiteSpace(pmtModel.Comment))
                            pmt.Comment = pmtModel.Comment;
                        #endregion

                        #region CurrentDebt
                        if (pmtModel.CurrentDebt.HasValue)
                            pmt._currentDebt = pmtModel.CurrentDebt.Value;
                        #endregion

                        #region CurrentInterestPayment
                        if (pmtModel.CurrentInterestPayment.HasValue)
                            pmt._currentInterestPayment = pmtModel.CurrentInterestPayment.Value;
                        #endregion

                        #region CurrentOverdueInterest
                        if (pmtModel.CurrentOverdueInterest.HasValue)
                            pmt._currentOverdueInterest = pmtModel.CurrentOverdueInterest.Value;
                        #endregion

                        #region CurrentOverduePrincipal
                        if (pmtModel.CurrentOverduePrincipal.HasValue)
                            pmt._currentOverduePrincipal = pmtModel.CurrentOverduePrincipal.Value;
                        #endregion

                        #region CurrentPenalty
                        if (pmtModel.CurrentPenalty.HasValue)
                            pmt._CurrentPenalty = pmtModel.CurrentPenalty.Value;
                        #endregion

                        #region CurrentPrincipalPayment
                        if (pmtModel.CurrentPrincipalPayment.HasValue)
                            pmt._currentPrincipalPayment = pmtModel.CurrentPrincipalPayment.Value;
                        #endregion

                        #region EnforcementAndCourtFee
                        if (pmtModel.EnforcementAndCourtFee.HasValue)
                            pmt.EnforcementAndCourtFee = pmtModel.EnforcementAndCourtFee.Value;
                        #endregion

                        #region EnforcementAndCourtFeeEndingBalance
                        if (pmtModel.EnforcementAndCourtFeeEndingBalance.HasValue)
                            pmt._enforcementAndCourtFeeEndingBalance = pmtModel.EnforcementAndCourtFeeEndingBalance.Value;
                        #endregion

                        #region EnforcementAndCourtFeePayment
                        if (pmtModel.EnforcementAndCourtFeePayment.HasValue)
                            pmt._enforcementAndCourtFeePayment = pmtModel.EnforcementAndCourtFeePayment.Value;
                        #endregion

                        #region EnforcementAndCourtFeeStartingBalance
                        if (pmtModel.EnforcementAndCourtFeeStartingBalance.HasValue)
                            pmt._enforcementAndCourtFeeStartingBalance = pmtModel.EnforcementAndCourtFeeStartingBalance.Value;
                        #endregion

                        #region LoanBalance
                        if (pmtModel.LoanBalance.HasValue)
                            pmt._loanBalance = pmtModel.LoanBalance.Value;
                        #endregion

                        #region PaidInterest
                        if (pmtModel.PaidInterest.HasValue)
                            pmt._paidInterest = pmtModel.PaidInterest.Value;
                        #endregion

                        #region PaidPenalty
                        if (pmtModel.PaidPenalty.HasValue)
                            pmt._paidPenalty = pmtModel.PaidPenalty.Value;
                        #endregion

                        #region PaidPrincipal
                        if (pmtModel.PaidPrincipal.HasValue)
                            pmt._paidPrincipal = pmtModel.PaidPrincipal.Value;
                        #endregion

                        #region PayableInterest
                        if (pmtModel.PayableInterest.HasValue)
                            pmt._payableInterest = pmtModel.PayableInterest.Value;
                        #endregion

                        #region PayablePrincipal
                        if (pmtModel.PayablePrincipal.HasValue)
                            pmt._payablePrincipal = pmtModel.PayablePrincipal.Value;
                        #endregion

                        #region PrincipalPrepaid
                        if (pmtModel.PrincipalPrepaid.HasValue)
                            pmt._principalPrepaid = pmtModel.PrincipalPrepaid.Value;
                        #endregion

                        #region PrincipalPrepaymant
                        if (pmtModel.PrincipalPrepaymant.HasValue)
                            pmt._principalPrepaymant = pmtModel.PrincipalPrepaymant.Value;
                        #endregion

                        #region ScheduleCatchUp
                        if (pmtModel.ScheduleCatchUp.HasValue)
                            pmt._scheduleCatchUp = pmtModel.ScheduleCatchUp.Value;
                        #endregion

                        #region StartingBalance
                        if (pmtModel.StartingBalance.HasValue)
                            pmt._startingBalance = pmtModel.StartingBalance.Value;
                        #endregion

                        #region StartingPlannedBalance
                        if (pmtModel.StartingPlannedBalance.HasValue)
                            pmt._startingPlannedBalance = pmtModel.StartingPlannedBalance.Value;
                        #endregion

                        #region TaxOrderID
                        if (!string.IsNullOrWhiteSpace(pmtModel.TaxOrderID))
                            pmt.TaxOrderID = pmtModel.TaxOrderID;
                        #endregion

                        #region TotalEnforcementAndCourtFee
                        if (pmtModel.TotalEnforcementAndCourtFee == null)
                            pmt._totalEnforcementAndCourtFee = pmtModel.TotalEnforcementAndCourtFee;
                        #endregion

                        #region TotalEnforcementAndCourtFeePayment
                        if (pmtModel.TotalEnforcementAndCourtFeePayment.HasValue)
                            pmt._totalEnforcementAndCourtFeePayment = pmtModel.TotalEnforcementAndCourtFeePayment;
                        #endregion

                        #region WholeDebt
                        if (pmtModel.WholeDebt == null)
                            pmt._wholeDebt = pmtModel.WholeDebt;
                        #endregion

                        first = false;
                    }

                    Databases.ElementAt(pmtModel.branch).Payments.Add(pmt);
                }

                db.SaveChanges();

                return "Edited successfully.";
            }
            catch (Exception ex)
            {
                return ex.Message + "\n" + ex.InnerException.Message;
            }
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

        public ActionResult Zeroize()
        {
            return View();
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

        public string ZeroizePenalties(int loanId, int branch, string fromDate, string toDate)
        {
            var db = Databases.ElementAt(branch);
            var loan = db.Loans.FirstOrDefault(l => l.LoanID == loanId);
            var payments = loan.Payments.Where(p => p.PaymentDate >= DateTime.Parse(fromDate) && p.PaymentDate <= DateTime.Parse(toDate));

            List<DateTime> paymentDates = new List<DateTime>();

            foreach (var item in payments)
            {
                paymentDates.Add(item.PaymentDate);
            }

            foreach (var date in paymentDates)
            {
                var payment = loan.Payments.FirstOrDefault(p => p.PaymentDate == date);

                PaymentZeroizePenalty(new ChangePaymentModel()
                {
                    ID = payment.PaymentID,
                    NewPenalty = 0,
                    BranchID = branch,
                    Payment = payment.CurrentPayment
                });
            }

            return "Okay";
        }

        private void RecalculatePayments(int loanId, int branch, ICollection<Payment> payments)
        {
            Databases.ElementAt(branch).Payments.RemoveRange(payments);
            Databases.ElementAt(branch).SaveChanges();

            bool first = true;

            foreach (var payment in payments)
            {
                var pmt = Databases.ElementAt(branch).Payments.Create();

                pmt.Loan = Databases.ElementAt(branch).Loans.Find(loanId);
                pmt.TaxOrderID = payment.TaxOrderID;
                pmt.CurrentPayment = payment.CurrentPayment;
                pmt.PaymentDate = payment.PaymentDate;
                if (first)
                {
                    pmt._accruingPenalty = payment.AccruingPenalty;
                    first = false;
                }
                pmt.EnforcementAndCourtFee = payment.EnforcementAndCourtFee;
                pmt.CreditExpert = Databases.ElementAt(branch).CreditExperts.FirstOrDefault();
                pmt.CashCollectionAgent = Databases.ElementAt(branch).CashCollectionAgents.FirstOrDefault();

                Databases.ElementAt(branch).Payments.Add(pmt);
            }
        }

        public JsonResult PaymentsAdminJson(int? loanId, string fromDate, string toDate, int branch = 0)
        {
            JsonResult jsonres;
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
                if (fromDate != null)
                {
                    jsonres = Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate >= dailyFromDate && p.PaymentDate <= dailyToDate).OrderBy(x => x.Loan.LoanID).ThenBy(x => x.PaymentDate).ToList()), JsonRequestBehavior.AllowGet);
                    jsonres.MaxJsonLength = int.MaxValue;
                    return jsonres;
                }

                jsonres = Json(PaymentsToJson(database.Payments.Where(p => p.PaymentDate == DateTime.Today).OrderBy(x => x.Loan.LoanID).ThenBy(x => x.PaymentDate).ToList()), JsonRequestBehavior.AllowGet);
                jsonres.MaxJsonLength = int.MaxValue;
                return jsonres;
            }
            if (loanId != null)
            {
                jsonres = Json(PaymentsToJson(database.Loans.Find(loanId).Payments.OrderBy(x => x.Loan.LoanID).ThenBy(x => x.PaymentDate).ToList()), JsonRequestBehavior.AllowGet);
                jsonres.MaxJsonLength = int.MaxValue;
                return jsonres;
            }

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

        #region Loans

        #region EditLoan

        #region LoanEditStaticProperties
        public ActionResult LoanEditStaticProperties(int? id, int? branch)
        {
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var loan = Databases.ElementAt(branch.Value).Loans.FirstOrDefault(x => x.LoanID == id.Value);

            var resultLoan = new LoanStaticPropertiesModel()
            {
                branch = branch.Value,
                LoanID = id.Value,
                Comment = loan.Comment,
                LoanAgreement = loan.Agreement,
                LoanAgreementDate = loan.AgreementDate,
                LoanPurpose = loan.LoanPurpose,
                NotificationLetterDate = loan.LoanNotificationLetter,
                ProblemManager = loan.ProblemManager,
                ProblemManagerDate = loan.ProblemManagerDate
            };

            return View(resultLoan);
        }

        [HttpPost]
        public ActionResult LoanEditStaticProperties(LoanStaticPropertiesModel loanStatic)
        {
            var db = Databases.ElementAt(loanStatic.branch);
            var dbloan = db.Loans.FirstOrDefault(x => x.LoanID == loanStatic.LoanID);

            dbloan.LoanPurpose = loanStatic.LoanPurpose;
            dbloan.Comment = loanStatic.Comment;
            dbloan.AgreementDate = loanStatic.LoanAgreementDate.Value;
            dbloan.Agreement = loanStatic.LoanAgreement;
            dbloan.LoanNotificationLetter = loanStatic.NotificationLetterDate;
            dbloan.ProblemManagerDate = loanStatic.ProblemManagerDate;
            dbloan.ProblemManager = loanStatic.ProblemManager;

            db.SaveChanges();
            return View();
        }
        #endregion

        #region RePlanLoan

        public ActionResult RePlanLoan(int? id, int? branch)
        {
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var loan = Databases.ElementAt(branch.Value).Loans.FirstOrDefault(x => x.LoanID == id.Value);

            var rePlanModel = new RePlanLoanModel()
            {
                branch = branch.Value,
                LoanID = id.Value,
                DailyInterestRate = loan.LoanDailyInterestRate,
                LoanAmount = loan.LoanAmount,
                LoanStartDate = loan.LoanStartDate,
                LoanTermDays = loan.LoanTermDays
            };

            return View(rePlanModel);
        }

        [HttpPost]
        public ActionResult RePlanLoan(RePlanLoanModel loan)
        {
            var db = Databases.ElementAt(loan.branch);

            var dbloan = db.Loans.FirstOrDefault(x => x.LoanID == loan.LoanID);

            var loanCalculated = new LoanModel()
            {
                Amount = loan.LoanAmount,
                DailyInterestRate = loan.DailyInterestRate,
                DaysOfGrace = 0,
                StartDate = loan.LoanStartDate,
                TermDays = loan.LoanTermDays
            };

            loanCalculated = LoanCalculator.Calculate(loanCalculated);

            dbloan.AmountToBePaidAll = loanCalculated.Payments.Sum(p => p.PaymentAmount);
            dbloan.AmountToBePaidDaily = loanCalculated.Payments.First().PaymentAmount;
            dbloan.EffectiveInterestRate = (loanCalculated.Payments.Sum(p => p.Interest) / loanCalculated.TermDays * 30) / loanCalculated.Amount;
            dbloan.LoanEndDate = loan.LoanStartDate.AddDays(loan.LoanTermDays);
            dbloan.LoanAmount = loanCalculated.Amount;
            dbloan.LoanDailyInterestRate = loanCalculated.DailyInterestRate;
            dbloan.LoanStartDate = loanCalculated.StartDate;
            dbloan.LoanTermDays = loanCalculated.TermDays;


            dbloan.PaymentsPlanned.Clear();

            for (int i = 0; i < loanCalculated.Payments.Count(); i++)
            {
                dbloan.PaymentsPlanned.Add(new PaymentPlanned()
                {
                    EndingBalance = loanCalculated.Payments.ElementAt(i).EndingBalance,
                    Interest = loanCalculated.Payments.ElementAt(i).Interest,
                    PaymentAmount = loanCalculated.Payments.ElementAt(i).PaymentAmount,
                    PaymentDate = loanCalculated.StartDate.AddDays(i + 1),
                    PaymentID = loanCalculated.Payments.ElementAt(i).PaymentID,
                    Principal = loanCalculated.Payments.ElementAt(i).Principal,
                    StartingBalance = loanCalculated.Payments.ElementAt(i).StartingBalance
                });
            }

            ///////////////////////////////////////////////////////////
            var firstPmtDate = loanCalculated.StartDate;

            var pmts = dbloan.Payments.ToList();

            foreach (var pmt in pmts)
            {
                var expertId = pmt.CreditExpert.EmployeeID;
                var collectorId = pmt.CashCollectionAgent.CashCollectionAgentID;

                db.Payments.Remove(pmt);
                db.SaveChanges();

                var paymentNew = db.Payments.Create();
                paymentNew.Loan = db.Loans.FirstOrDefault(l => l.LoanID == loan.LoanID);
                paymentNew.CurrentPayment = pmt.CurrentPayment;
                paymentNew.PaymentDate = firstPmtDate;
                paymentNew.TaxOrderID = pmt.TaxOrderID;
                paymentNew.CreditExpert = db.CreditExperts.FirstOrDefault(x => x.EmployeeID == expertId);
                paymentNew.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault(x => x.CashCollectionAgentID == collectorId);

                db.Payments.Add(paymentNew);
                db.SaveChanges();

                if (paymentNew.WholeDebt.Value <= 0)
                {
                    paymentNew.Loan.LoanStatus = LoanStatus.Closed;
                    db.SaveChanges();
                }

                firstPmtDate = firstPmtDate.AddDays(1);
            }

            db.SaveChanges();

            return View();
        }

        #endregion

        #region EditEnforcementLoan
        public ActionResult EditEnforcementLoan(int? id, int? branch)
        {
            if (!id.HasValue || !branch.HasValue)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            var loan = Databases.ElementAt(branch.Value).Loans.FirstOrDefault(x => x.LoanID == id.Value);

            var enforcementModel = new EditEnforcementLoanModel()
            {
                branch = branch.Value,
                EnforcementAndCourtFee = loan.CourtAndEnforcementFee,
                LoanEnforcementDate = loan.DateOfEnforcement,
                LoanID = id.Value
            };

            return View(enforcementModel);
        }

        [HttpPost]
        public ActionResult EditEnforcementLoan(EditEnforcementLoanModel loan)
        {
            var db = Databases.ElementAt(loan.branch);
            var dbloan = db.Loans.FirstOrDefault(x => x.LoanID == loan.LoanID);

            dbloan.CourtAndEnforcementFee = loan.EnforcementAndCourtFee;
            dbloan.DateOfEnforcement = loan.LoanEnforcementDate;

            var pmts = dbloan.Payments.Where(x => x.PaymentDate >= loan.LoanEnforcementDate).ToList();

            foreach (var pmt in pmts)
            {
                var expertId = pmt.CreditExpert.EmployeeID;
                var collectorId = pmt.CashCollectionAgent.CashCollectionAgentID;

                db.Payments.Remove(pmt);
                db.SaveChanges();

                var paymentNew = db.Payments.Create();
                paymentNew.Loan = db.Loans.FirstOrDefault(l => l.LoanID == loan.LoanID);
                paymentNew.CurrentPayment = pmt.CurrentPayment;
                paymentNew.PaymentDate = pmt.PaymentDate;
                paymentNew.TaxOrderID = pmt.TaxOrderID;
                paymentNew.CreditExpert = db.CreditExperts.FirstOrDefault(x => x.EmployeeID == expertId);
                paymentNew.CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault(x => x.CashCollectionAgentID == collectorId);

                db.Payments.Add(paymentNew);
                db.SaveChanges();

                if (paymentNew.WholeDebt.Value <= 0)
                {
                    paymentNew.Loan.LoanStatus = LoanStatus.Closed;
                    db.SaveChanges();
                }
            }

            db.SaveChanges();

            return View();
        }

        #endregion

        #endregion



        #region View
        public ActionResult Loans(string date, int branch = 0)
        {
            ViewData["branch"] = branch;
            ViewData["date"] = date;

            return View();
        }

        public JsonResult IndexJson(string date, int branch = 0)
        {
            var db = Databases.ElementAt(branch);

            List<Loan> result;

            result = db.Loans.OrderBy(x => x.LoanID).ToList();

            if (date != null)
            {
                var startDate = DateTime.Parse(date);
                result = result.Where(x => x.LoanStartDate == startDate.Date).ToList();
            }

            var resultJson = new List<LoanJson>();

            foreach (var loan in result)
            {
                resultJson.Add(new LoanJson
                {
                    AccountAccountID = loan.Account.AccountID,
                    AccountAccountNumber = loan.Account.AccountNumber,
                    AccountLastName = loan.Account.LastName,
                    AccountName = loan.Account.Name,
                    AccountNumberMobile = loan.Account.NumberMobile,
                    AccountPrivateNumber = loan.Account.PrivateNumber,
                    Agreement = loan.Agreement,
                    AgreementDate = loan.AgreementDate.ToShortDateString(),
                    AmountToBePaidAll = Math.Round(loan.AmountToBePaidAll, 2),
                    AmountToBePaidDaily = Math.Round(loan.AmountToBePaidDaily, 2),
                    CourtAndEnforcementFee = Math.Round(loan.CourtAndEnforcementFee, 2),
                    DateOfEnforcement = loan.DateOfEnforcement.HasValue ? loan.DateOfEnforcement.Value.ToShortDateString() : null,
                    DaysOfGrace = loan.DaysOfGrace,
                    EffectiveInterestRate = Math.Round(loan.EffectiveInterestRate * 100, 4),
                    LoanAmount = Math.Round(loan.LoanAmount, 2),
                    LoanDailyInterestRate = Math.Round(loan.LoanDailyInterestRate * 100, 4),
                    LoanEndDate = loan.LoanEndDate.ToShortDateString(),
                    LoanID = loan.LoanID,
                    LoanNotificationLetter = loan.LoanNotificationLetter.HasValue ? loan.LoanNotificationLetter.Value.ToShortDateString() : null,
                    LoanPenaltyRate = Math.Round(loan.LoanPenaltyRate * 100, 4),
                    LoanPurpose = loan.LoanPurpose,
                    LoanStartDate = loan.LoanStartDate.ToShortDateString(),
                    LoanStatus = loan.LoanStatus.ToString(),
                    LoanTermDays = loan.LoanTermDays,
                    NetworkDays = loan.NetworkDays,
                    ProblemManager = loan.ProblemManager,
                    ProblemManagerDate = loan.ProblemManagerDate.HasValue ? loan.ProblemManagerDate.Value.ToShortDateString() : null,
                    AccountBusinessPhysicalAddress = loan.Account.BusinessPhysicalAddress,
                    AccountGender = loan.Account.Gender == Gender.Male ? "მამრ." : "მდედრ.",
                    AccountPhysicalAddress = loan.Account.PhysicalAddress,
                    AccountStatus = loan.Account.Status.ToString(),
                    BranchID = loan.BranchID,
                    CreditExpertID = loan.CreditExpert.EmployeeID,
                    CreditExpertLastName = loan.CreditExpert.LastName,
                    CreditExpertName = loan.CreditExpert.Name,
                    GuarantorName = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorName,
                    GuarantorLastName = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorLastName,
                    GuarantorPhoneNumber = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorPhoneNumber,
                    GuarantorPhysicalAddress = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorPhysicalAddress,
                    GuarantorPrivateNumber = loan.Guarantors.FirstOrDefault() == null ? "" : loan.Guarantors.FirstOrDefault().GuarantorPrivateNumber,
                    GuarantorsCount = loan.Guarantors.Count
                });
            }

            return Json(resultJson, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GuarantorsJson(int loanId, int branch)
        {
            var db = Databases.ElementAt(branch);

            var result = new List<GuarantorJson>();

            foreach (var g in db.Guarantors.Where(x => x.Loan.LoanID == loanId).ToList())
            {
                result.Add(new GuarantorJson
                {
                    GuarantorName = g.GuarantorName,
                    GuarantorLastName = g.GuarantorLastName,
                    GuarantorPhoneNumber = g.GuarantorPhoneNumber,
                    GuarantorPhysicalAddress = g.GuarantorPhysicalAddress,
                    GuarantorPrivateNumber = g.GuarantorPrivateNumber
                });
            }

            return Json(result, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #endregion

        public List<PaymentJson> PaymentsToJson(List<Payment> payments)
        {
            var resultJson = new List<PaymentJson>();

            foreach (var pmt in payments.OrderBy(x => x.PaymentDate).ThenBy(x => x.Loan.LoanID))
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
                    LoanProblemManager = pmt.Loan.ProblemManagerDate <= pmt.PaymentDate ? pmt.Loan.ProblemManager : string.Empty,
                    LoanEnforcementAndCourtFee = Math.Round(pmt.EnforcementAndCourtFee, 2),
                    Agreement = pmt.Loan.Agreement,
                    CashCollectorID = pmt.Loan.CreditExpert.EmployeeID,
                    CashCollectorLastName = pmt.Loan.CreditExpert.LastName,
                    CashCollectorName = pmt.Loan.CreditExpert.Name,
                    LoanDateOfEnforcement = pmt.Loan.DateOfEnforcement.HasValue && pmt.Loan.DateOfEnforcement <= pmt.PaymentDate ? pmt.Loan.DateOfEnforcement.Value.ToShortDateString() : null,
                    LoanLoanNotificationLetter = pmt.Loan.LoanNotificationLetter.HasValue && pmt.Loan.LoanNotificationLetter <= pmt.PaymentDate ? pmt.Loan.LoanNotificationLetter.Value.ToShortDateString() : null,
                    LoanProblemManagerDate = pmt.Loan.ProblemManagerDate.HasValue && pmt.Loan.ProblemManagerDate <= pmt.PaymentDate ? pmt.Loan.ProblemManagerDate.Value.ToShortDateString() : null,
                    PMT = Math.Round(pmt.Loan.AmountToBePaidDaily, 2),
                    EnforcementAndCourtFee = Math.Round(pmt.EnforcementAndCourtFee),
                    EnforcementAndCourtFeeEndingBalance = pmt.EnforcementAndCourtFeeEndingBalance.HasValue ? Math.Round(pmt.EnforcementAndCourtFeeEndingBalance.Value, 2) : 0,
                    EnforcementAndCourtFeePayment = pmt.EnforcementAndCourtFeePayment.HasValue ? Math.Round(pmt.EnforcementAndCourtFeePayment.Value, 2) : 0,
                    EnforcementAndCourtFeeStartingBalance = pmt.EnforcementAndCourtFeeStartingBalance.HasValue ? Math.Round(pmt.EnforcementAndCourtFeeStartingBalance.Value, 2) : 0,
                    TotalEnforcementAndCourtFee = pmt.TotalEnforcementAndCourtFee.HasValue ? Math.Round(pmt.TotalEnforcementAndCourtFee.Value, 2) : 0,
                    TotalEnforcementAndCourtFeePayment = pmt.TotalEnforcementAndCourtFeePayment.HasValue ? Math.Round(pmt.TotalEnforcementAndCourtFeePayment.Value, 2) : 0,
                    ScheduleCatchUp = pmt.ScheduleCatchUp.HasValue ? Math.Round(pmt.ScheduleCatchUp.Value, 2) : 0,
                    BusinessPhysicalAddress = pmt.Loan.Account.BusinessPhysicalAddress,
                    LoanAgreement = pmt.Loan.Agreement,
                    NumberMobile = pmt.Loan.Account.NumberMobile,

                };

                resultJson.Add(jsonPayment);
            }
            return resultJson.ToList();
        }

        public string PaymentZeroizePenaltyMultiple(int? loanId, int? branch, string from, string to)
        {
            try
            {
                var db = Databases.ElementAt(branch.Value);

                var fromdate = DateTime.Parse(from);
                var todate = DateTime.Parse(to);
                DateTime realdate = fromdate;

                var listDates = new List<DateTime>();

                while (realdate >= fromdate && realdate <= todate)
                {
                    listDates.Add(realdate);
                    realdate.AddDays(1);
                }

                foreach (var item in listDates)
                {
                    var payment = db.Loans.FirstOrDefault(x => x.LoanID == loanId.Value).Payments.FirstOrDefault(x => x.PaymentDate == realdate);

                    if (payment == null)
                    {
                        return "Payment is null! realdate=" + realdate.ToShortDateString();
                    }

                    PaymentZeroizePenalty(new ChangePaymentModel() { ID = payment.PaymentID, BranchID = branch.Value, NewPenalty = 0, OldPenalty = 0, Payment = 0 });
                }
            }
            catch (Exception ex)
            {
                return ex.Message + "\n Inner = " + ex.InnerException.Message + "\n Stack: " + ex.StackTrace;
            }

            return "განულდა წარმატებით!";

        }

        public void PaymentZeroizePenalty(int? id, int? branch)
        {
            PaymentZeroizePenalty(new ChangePaymentModel() { ID = id.Value, BranchID = branch.Value, NewPenalty = 0, OldPenalty = 0, Payment = 0 });
        }

        public ActionResult ChangePaymentProperties(int paymentId = 0, int branch = 0)
        {
            if (paymentId == 0 || branch == 0)
            {
                return new HttpStatusCodeResult(404, "შეცდომა! გადახდა და ფილიალი არ არის მითითებული.");
            }

            var payment = Databases.ElementAt(branch).Payments.First(x => x.PaymentID == paymentId);

            var paymentFinal = new EditPaymentModel() { AccruingPenalty = payment.AccruingPenalty, CurrentPayment = payment.CurrentPayment, LoanBalance = payment.LoanBalance, PayableInterest = payment.PayableInterest, PaymentID = payment.PaymentID };

            return View(paymentFinal);
        }

        public ActionResult PortfolioAnalize(string date, int branch = -1)
        {
            ViewData.Add("date", date);
            ViewData.Add("branch", branch);

            return View();
        }

        public JsonResult PortfolioAnalizeJson(string date, int branch = -1)
        {
            if (branch == -1)
                return Json(null, JsonRequestBehavior.AllowGet);

            var db = Databases.ElementAt(branch);

            DateTime Date = DateTime.Today;

            if (!string.IsNullOrEmpty(date))
                Date = DateTime.Parse(date);

            var payments = db.Payments.Where(x => x.PaymentDate == Date).ToList();

            List<PortfolioAnalizeModel> result = new List<PortfolioAnalizeModel>();
            foreach (var pmt in payments)
            {
                string problemManager = "";
                string problemManagerDate = null;

                if (pmt.Loan.ProblemManagerDate.HasValue)
                {
                    if (pmt.PaymentDate >= pmt.Loan.ProblemManagerDate.Value)
                    {
                        problemManager = pmt.Loan.ProblemManager;
                        problemManagerDate = pmt.Loan.ProblemManagerDate.Value.ToShortDateString();
                    }
                }

                result.Add(new PortfolioAnalizeModel()
                    {
                        AccruingInterestPayment = pmt.AccruingInterestPayment.Value,
                        AccruingOverdueInterest = pmt.AccruingOverdueInterest.Value,
                        AccruingPenalty = pmt.AccruingPenalty.Value,
                        AccruingPenaltyPayment = pmt.AccruingPenaltyPayment.Value,
                        AccruingPrincipalPayment = pmt.AccruingPrincipalPayment.Value,
                        Amount = pmt.Loan.LoanAmount,
                        Balance = pmt.LoanBalance.Value,
                        CurrentDebt = pmt.CurrentDebt.Value,
                        CurrentInterestPayment = pmt.CurrentInterestPayment.Value,
                        CurrentPayment = pmt.CurrentPayment,
                        CurrentPrincipalPayment = pmt.CurrentPrincipalPayment.Value,
                        LastName = pmt.Loan.Account.LastName,
                        LoanID = pmt.Loan.LoanID,
                        Name = pmt.Loan.Account.Name,
                        PaidInterest = pmt.PaidInterest.Value,
                        PaidPenalty = pmt.PaidPenalty.Value,
                        PaidPrincipal = pmt.PaidPrincipal.Value,
                        PayableInterest = pmt.PayableInterest.Value,
                        PlannedBalance = pmt.PlannedBalance,
                        PMT = Math.Round(pmt.Loan.AmountToBePaidDaily, 2),
                        PrivateNumber = pmt.Loan.Account.PrivateNumber,
                        EnforcementDate = pmt.Loan.DateOfEnforcement.HasValue && pmt.Loan.DateOfEnforcement <= pmt.PaymentDate ? pmt.Loan.DateOfEnforcement.Value.ToShortDateString() : null,
                        ProblemManager = problemManager,
                        ProblemManagerDate = problemManagerDate
                    });
            }

            result = result.OrderBy(x => x.LoanID).ToList();

            result.Add(new PortfolioAnalizeModel()
                {
                    AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2),
                    AccruingOverdueInterest = Math.Round(result.Sum(x => x.AccruingOverdueInterest), 2),
                    AccruingPenalty = Math.Round(result.Sum(x => x.AccruingPenalty), 2),
                    AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2),
                    AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2),
                    Amount = Math.Round(result.Sum(x => x.Amount), 2),
                    Balance = Math.Round(result.Sum(x => x.Balance), 2),
                    CurrentDebt = Math.Round(result.Sum(x => x.CurrentDebt), 2),
                    CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2),
                    CurrentPayment = Math.Round(result.Sum(x => x.CurrentPayment), 2),
                    CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2),
                    PaidInterest = Math.Round(result.Sum(x => x.PaidInterest), 2),
                    PaidPenalty = Math.Round(result.Sum(x => x.PaidPenalty), 2),
                    PaidPrincipal = Math.Round(result.Sum(x => x.PaidPrincipal), 2),
                    PayableInterest = Math.Round(result.Sum(x => x.PayableInterest), 2),
                    PlannedBalance = Math.Round(result.Sum(x => x.PlannedBalance), 2),
                    PMT = Math.Round(result.Sum(x => x.PMT), 2),
                    Name = "Total:"
                });

            return Json(result, JsonRequestBehavior.AllowGet);
        }


        /////////////////////////////////////////////////////////////

        public ActionResult PortfolioAnalizeAll(string date, int branch = -1)
        {
            ViewData.Add("date", date);
            ViewData.Add("branch", branch);

            return View();
        }

        public JsonResult PortfolioAnalizeAllJson(string date, int branch = -1)
        {
            if (branch == -1)
                return Json(null, JsonRequestBehavior.AllowGet);

            List<PortfolioAnalizeModel> result = new List<PortfolioAnalizeModel>();

            foreach (var db in Databases)
            {
                DateTime Date = DateTime.Today;

                if (!string.IsNullOrEmpty(date))
                    Date = DateTime.Parse(date);

                var payments = db.Payments.Where(x => x.PaymentDate == Date).ToList();

                foreach (var pmt in payments)
                {
                    string problemManager = "";
                    string problemManagerDate = null;

                    if (pmt.Loan.ProblemManagerDate.HasValue)
                    {
                        if (pmt.PaymentDate >= pmt.Loan.ProblemManagerDate.Value)
                        {
                            problemManager = pmt.Loan.ProblemManager;
                            problemManagerDate = pmt.Loan.ProblemManagerDate.Value.ToShortDateString();
                        }
                    }

                    result.Add(new PortfolioAnalizeModel()
                    {
                        AccruingInterestPayment = pmt.AccruingInterestPayment.Value,
                        AccruingOverdueInterest = pmt.AccruingOverdueInterest.Value,
                        AccruingPenalty = pmt.AccruingPenalty.Value,
                        AccruingPenaltyPayment = pmt.AccruingPenaltyPayment.Value,
                        AccruingPrincipalPayment = pmt.AccruingPrincipalPayment.Value,
                        Amount = pmt.Loan.LoanAmount,
                        Balance = pmt.LoanBalance.Value,
                        CurrentDebt = pmt.CurrentDebt.Value,
                        CurrentInterestPayment = pmt.CurrentInterestPayment.Value,
                        CurrentPayment = pmt.CurrentPayment,
                        CurrentPrincipalPayment = pmt.CurrentPrincipalPayment.Value,
                        LastName = pmt.Loan.Account.LastName,
                        LoanID = pmt.Loan.LoanID,
                        Name = pmt.Loan.Account.Name,
                        PaidInterest = pmt.PaidInterest.Value,
                        PaidPenalty = pmt.PaidPenalty.Value,
                        PaidPrincipal = pmt.PaidPrincipal.Value,
                        PayableInterest = pmt.PayableInterest.Value,
                        PlannedBalance = pmt.PlannedBalance,
                        PMT = Math.Round(pmt.Loan.AmountToBePaidDaily, 2),
                        PrivateNumber = pmt.Loan.Account.PrivateNumber,
                        EnforcementDate = pmt.Loan.DateOfEnforcement.HasValue && pmt.Loan.DateOfEnforcement <= pmt.PaymentDate ? pmt.Loan.DateOfEnforcement.Value.ToShortDateString() : null,
                        ProblemManager = problemManager,
                        ProblemManagerDate = problemManagerDate
                    });
                }

                result = result.OrderBy(x => x.LoanID).ToList();
            }

            result.Add(new PortfolioAnalizeModel()
            {
                AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2),
                AccruingOverdueInterest = Math.Round(result.Sum(x => x.AccruingOverdueInterest), 2),
                AccruingPenalty = Math.Round(result.Sum(x => x.AccruingPenalty), 2),
                AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2),
                AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2),
                Amount = Math.Round(result.Sum(x => x.Amount), 2),
                Balance = Math.Round(result.Sum(x => x.Balance), 2),
                CurrentDebt = Math.Round(result.Sum(x => x.CurrentDebt), 2),
                CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2),
                CurrentPayment = Math.Round(result.Sum(x => x.CurrentPayment), 2),
                CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2),
                PaidInterest = Math.Round(result.Sum(x => x.PaidInterest), 2),
                PaidPenalty = Math.Round(result.Sum(x => x.PaidPenalty), 2),
                PaidPrincipal = Math.Round(result.Sum(x => x.PaidPrincipal), 2),
                PayableInterest = Math.Round(result.Sum(x => x.PayableInterest), 2),
                PlannedBalance = Math.Round(result.Sum(x => x.PlannedBalance), 2),
                PMT = Math.Round(result.Sum(x => x.PMT), 2),
                Name = "Total:"
            });

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        /////////////////////////////////////////////////////////////

        public ActionResult AccountingReport(string date, int branch = -1)
        {
            ViewData.Add("date", date);
            ViewData.Add("branch", branch);

            return View();
        }

        public JsonResult AccountingReportJson(string date, int branch = -1)
        {
            if (branch == -1)
                return Json(null, JsonRequestBehavior.AllowGet);

            var db = Databases.ElementAt(branch);

            DateTime Date = DateTime.Today;

            if (!string.IsNullOrEmpty(date))
                Date = DateTime.Parse(date);

            var payments = db.Payments.Where(x => x.PaymentDate.Month == Date.Month && x.PaymentDate.Year == Date.Year).ToList();

            List<AccountingReportModel> result = new List<AccountingReportModel>();

            var pmtGroups = payments.GroupBy(x => x.Loan.LoanID).ToList();

            foreach (var pmt in pmtGroups)
            {
                result.Add(new AccountingReportModel()
                {
                    AccruingInterestPayment = Math.Round(pmt.Sum(x => x.AccruingInterestPayment).Value, 2),
                    AccruingPenaltyPayment = Math.Round(pmt.Sum(x => x.AccruingPenaltyPayment).Value, 2),
                    AccruingPrincipalPayment = Math.Round(pmt.Sum(x => x.AccruingPrincipalPayment).Value, 2),
                    Amount = pmt.Select(x => x.Loan).Distinct().Where(x => x.LoanStartDate.Month == Date.Month && x.LoanStartDate.Year == Date.Year).Sum(x => x.LoanAmount),
                    CurrentInterestPayment = Math.Round(pmt.Sum(x => x.CurrentInterestPayment.Value), 2),
                    CurrentPrincipalPayment = Math.Round(pmt.Sum(x => x.CurrentPrincipalPayment.Value), 2),
                    LastName = pmt.FirstOrDefault().Loan.Account.LastName,
                    LoanID = pmt.FirstOrDefault().Loan.LoanID,
                    Name = pmt.FirstOrDefault().Loan.Account.Name,
                    PMT = Math.Round(pmt.Sum(x => x.CurrentPayment), 2),
                    PrivateNumber = pmt.FirstOrDefault().Loan.Account.PrivateNumber,
                    PrincipalPrepayment = Math.Round(pmt.Sum(x => x.PrincipalPrepaymant).Value, 2)
                });
            }

            result = result.OrderBy(x => x.LoanID).ToList();

            result.Add(new AccountingReportModel()
            {
                AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2),
                AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2),
                AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2),
                Amount = Math.Round(result.Sum(x => x.Amount), 2),
                CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2),
                CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2),
                PMT = Math.Round(result.Sum(x => x.PMT), 2),
                PrincipalPrepayment = Math.Round(result.Sum(x => x.PrincipalPrepayment), 2),
                Name = "Total:"
            });

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AccountingReportAllBranches(string date)
        {
            ViewData.Add("date", date);

            return View();
        }

        public JsonResult AccountingReportAllBranchesJson(string date)
        {
            DateTime Date = DateTime.Today;
            List<AccountingReportModel> result = new List<AccountingReportModel>();

            foreach (var db in Databases)
            {
                if (!string.IsNullOrEmpty(date))
                    Date = DateTime.Parse(date);

                var payments = db.Payments.Where(x => x.PaymentDate.Month == Date.Month && x.PaymentDate.Year == Date.Year).ToList();

                var pmtGroups = payments.GroupBy(x => x.Loan.LoanID).ToList();

                foreach (var pmt in pmtGroups)
                {
                    result.Add(new AccountingReportModel()
                    {
                        AccruingInterestPayment = Math.Round(pmt.Sum(x => x.AccruingInterestPayment).Value, 2),
                        AccruingPenaltyPayment = Math.Round(pmt.Sum(x => x.AccruingPenaltyPayment).Value, 2),
                        AccruingPrincipalPayment = Math.Round(pmt.Sum(x => x.AccruingPrincipalPayment).Value, 2),
                        Amount = pmt.Select(x => x.Loan).Distinct().Where(x => x.LoanStartDate.Month == Date.Month && x.LoanStartDate.Year == Date.Year).Sum(x => x.LoanAmount),
                        CurrentInterestPayment = Math.Round(pmt.Sum(x => x.CurrentInterestPayment.Value), 2),
                        CurrentPrincipalPayment = Math.Round(pmt.Sum(x => x.CurrentPrincipalPayment.Value), 2),
                        LastName = pmt.FirstOrDefault().Loan.Account.LastName,
                        LoanID = pmt.FirstOrDefault().Loan.LoanID,
                        Name = pmt.FirstOrDefault().Loan.Account.Name,
                        PMT = Math.Round(pmt.Sum(x => x.CurrentPayment), 2),
                        PrivateNumber = pmt.FirstOrDefault().Loan.Account.PrivateNumber,
                        PrincipalPrepayment = Math.Round(pmt.Sum(x => x.PrincipalPrepaymant).Value, 2)
                    });
                }
            }

            result = result.OrderBy(x => x.LoanID).ToList();

            result.Add(new AccountingReportModel()
            {
                AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2),
                AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2),
                AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2),
                Amount = Math.Round(result.Sum(x => x.Amount), 2),
                CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2),
                CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2),
                PMT = Math.Round(result.Sum(x => x.PMT), 2),
                PrincipalPrepayment = Math.Round(result.Sum(x => x.PrincipalPrepayment), 2),
                Name = "Total:"
            });

            return Json(result, JsonRequestBehavior.AllowGet);
        }


        public ActionResult AccountingReportAllBranches2(string date)
        {
            ViewData.Add("date", date);

            return View();
        }

        public JsonResult AccountingReportAllBranchesJson2(string date)
        {
            List<AccountingReportModel2> result = new List<AccountingReportModel2>();
            DateTime Date = DateTime.Today;

            foreach (var db in Databases)
            {
                if (!string.IsNullOrEmpty(date))
                    Date = DateTime.Parse(date);

                var payments = db.Payments.Where(x => x.PaymentDate.Month == Date.Month && x.PaymentDate.Year == Date.Year).ToList();

                var pmtGroups = payments.GroupBy(x => x.PaymentDate.Date).ToList();

                foreach (var pmt in pmtGroups)
                {
                    var dateP = pmt.FirstOrDefault().PaymentDate;
                    result.Add(new AccountingReportModel2()
                    {
                        AccruingInterestPayment = Math.Round(pmt.Sum(x => x.AccruingInterestPayment).Value, 2),
                        AccruingPenaltyPayment = Math.Round(pmt.Sum(x => x.AccruingPenaltyPayment).Value, 2),
                        AccruingPrincipalPayment = Math.Round(pmt.Sum(x => x.AccruingPrincipalPayment).Value, 2),
                        LoanAmount = db.Loans.Where(x => x.LoanStartDate == dateP).ToList().Distinct().Sum(x => x.LoanAmount),
                        CurrentInterestPayment = Math.Round(pmt.Sum(x => x.CurrentInterestPayment.Value), 2),
                        CurrentPrincipalPayment = Math.Round(pmt.Sum(x => x.CurrentPrincipalPayment.Value), 2),
                        PMT = Math.Round(pmt.Sum(x => x.Loan.AmountToBePaidDaily), 2),
                        PrincipalPrepayment = Math.Round(pmt.Sum(x => x.PrincipalPrepaymant).Value, 2),
                        CurrentPayment = Math.Round(pmt.Sum(x => x.CurrentPayment), 2),
                        CurrentPaymentCount = pmt.Count(x => x.CurrentPayment != 0),
                        EnforcementAndCourtFeeCharge = Math.Round(pmt.Sum(x => x.EnforcementAndCourtFee), 2),
                        EnforcementAndCourtFeePayment = Math.Round(pmt.Sum(x => x.EnforcementAndCourtFeePayment).Value, 2),
                        LoanBalance = Math.Round(pmt.Sum(x => x.LoanBalance).Value, 2),
                        LoanCount = db.Loans.Where(x => x.LoanStartDate == dateP).ToList().Distinct().Count(),
                        PayableInterest = Math.Round(pmt.Sum(x => x.PayableInterest).Value, 2),
                        PMTCount = pmt.Count(),
                        StartingBalance = Math.Round(pmt.Sum(x => x.StartingBalance).Value, 2),
                        Date = pmt.FirstOrDefault().PaymentDate.Date.ToShortDateString()
                    });
                }

            }
            result = result.OrderBy(x => DateTime.Parse(x.Date)).ToList();

            result.Add(new AccountingReportModel2()
            {
                AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2),
                AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2),
                AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2),
                LoanAmount = Math.Round(result.Sum(x => x.LoanAmount), 2),
                CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2),
                CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2),
                PMT = Math.Round(result.Sum(x => x.PMT), 2),
                PrincipalPrepayment = Math.Round(result.Sum(x => x.PrincipalPrepayment), 2),
                CurrentPayment = Math.Round(result.Sum(x => x.CurrentPayment), 2),
                CurrentPaymentCount = Math.Round(result.Sum(x => x.CurrentPaymentCount), 2),
                EnforcementAndCourtFeeCharge = Math.Round(result.Sum(x => x.EnforcementAndCourtFeeCharge), 2),
                EnforcementAndCourtFeePayment = Math.Round(result.Sum(x => x.EnforcementAndCourtFeePayment), 2),
                LoanBalance = Math.Round(result.Sum(x => x.LoanBalance), 2),
                LoanCount = Math.Round(result.Sum(x => x.LoanCount), 2),
                PayableInterest = Math.Round(result.Sum(x => x.PayableInterest), 2),
                PMTCount = Math.Round(result.Sum(x => x.PMTCount), 2),
                StartingBalance = Math.Round(result.Sum(x => x.StartingBalance), 2),
                Date = "Total:"
            });

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AccountingReport2(string date, int branch = -1)
        {
            ViewData.Add("date", date);
            ViewData.Add("branch", branch);

            return View();
        }

        public JsonResult AccountingReportJson2(string date, int branch = -1)
        {
            if (branch == -1)
                return Json(null, JsonRequestBehavior.AllowGet);

            var db = Databases.ElementAt(branch);

            DateTime Date = DateTime.Today;

            if (!string.IsNullOrEmpty(date))
                Date = DateTime.Parse(date);

            var payments = db.Payments.Where(x => x.PaymentDate.Month == Date.Month && x.PaymentDate.Year == Date.Year).ToList();

            List<AccountingReportModel2> result = new List<AccountingReportModel2>();

            var pmtGroups = payments.GroupBy(x => x.PaymentDate.Date).ToList();

            foreach (var pmt in pmtGroups)
            {
                var dateP = pmt.FirstOrDefault().PaymentDate;
                result.Add(new AccountingReportModel2()
                {
                    AccruingInterestPayment = Math.Round(pmt.Sum(x => x.AccruingInterestPayment).Value, 2),
                    AccruingPenaltyPayment = Math.Round(pmt.Sum(x => x.AccruingPenaltyPayment).Value, 2),
                    AccruingPrincipalPayment = Math.Round(pmt.Sum(x => x.AccruingPrincipalPayment).Value, 2),
                    LoanAmount = db.Loans.Where(x => x.LoanStartDate == dateP).ToList().Distinct().Sum(x => x.LoanAmount),
                    CurrentInterestPayment = Math.Round(pmt.Sum(x => x.CurrentInterestPayment.Value), 2),
                    CurrentPrincipalPayment = Math.Round(pmt.Sum(x => x.CurrentPrincipalPayment.Value), 2),
                    PMT = Math.Round(pmt.Sum(x => x.Loan.AmountToBePaidDaily), 2),
                    PrincipalPrepayment = Math.Round(pmt.Sum(x => x.PrincipalPrepaymant).Value, 2),
                    CurrentPayment = Math.Round(pmt.Sum(x => x.CurrentPayment), 2),
                    CurrentPaymentCount = pmt.Count(x => x.CurrentPayment != 0),
                    EnforcementAndCourtFeeCharge = Math.Round(pmt.Sum(x => x.EnforcementAndCourtFee), 2),
                    EnforcementAndCourtFeePayment = Math.Round(pmt.Sum(x => x.EnforcementAndCourtFeePayment).Value, 2),
                    LoanBalance = Math.Round(pmt.Sum(x => x.LoanBalance).Value, 2),
                    LoanCount = db.Loans.Where(x => x.LoanStartDate == dateP).ToList().Distinct().Count(),
                    PayableInterest = Math.Round(pmt.Sum(x => x.PayableInterest).Value, 2),
                    PMTCount = pmt.Count(),
                    StartingBalance = Math.Round(pmt.Sum(x => x.StartingBalance).Value, 2),
                    Date = pmt.FirstOrDefault().PaymentDate.Date.ToShortDateString()
                });
            }

            result = result.OrderBy(x => DateTime.Parse(x.Date)).ToList();

            result.Add(new AccountingReportModel2()
            {
                AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2),
                AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2),
                AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2),
                LoanAmount = Math.Round(result.Sum(x => x.LoanAmount), 2),
                CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2),
                CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2),
                PMT = Math.Round(result.Sum(x => x.PMT), 2),
                PrincipalPrepayment = Math.Round(result.Sum(x => x.PrincipalPrepayment), 2),
                CurrentPayment = Math.Round(result.Sum(x => x.CurrentPayment), 2),
                CurrentPaymentCount = Math.Round(result.Sum(x => x.CurrentPaymentCount), 2),
                EnforcementAndCourtFeeCharge = Math.Round(result.Sum(x => x.EnforcementAndCourtFeeCharge), 2),
                EnforcementAndCourtFeePayment = Math.Round(result.Sum(x => x.EnforcementAndCourtFeePayment), 2),
                LoanBalance = Math.Round(result.Sum(x => x.LoanBalance), 2),
                LoanCount = Math.Round(result.Sum(x => x.LoanCount), 2),
                PayableInterest = Math.Round(result.Sum(x => x.PayableInterest), 2),
                PMTCount = Math.Round(result.Sum(x => x.PMTCount), 2),
                StartingBalance = Math.Round(result.Sum(x => x.StartingBalance), 2),
                Date = "Total:"
            });

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult BranchReport(int month = 0, int year = 0, int branch = -1)
        {
            ViewData.Add("month", month);
            ViewData.Add("year", year);
            ViewData.Add("branch", branch);

            return View();
        }

        public JsonResult BranchReportJson(int month = 0, int year = 0, int branch = -1)
        {
            if (branch == -1 || month == 0 || year == 0)
                return Json(null, JsonRequestBehavior.AllowGet);

            List<BranchReportModel> result = new List<BranchReportModel>();

            var date = new DateTime(year, month, 1);

            var monthDays = DateTime.DaysInMonth(date.Year, date.Month);

            foreach (var db in Databases)
            {
                var payments = db.Payments.Where(x => x.PaymentDate.Month == date.Month && x.PaymentDate.Year == date.Year).ToList();

                if (payments.Count == 0)
                    continue;

                var dt = payments.OrderByDescending(p => p.PaymentDate).FirstOrDefault().PaymentDate;

                var model = new BranchReportModel();

                model.AccruingInterestPayment = Math.Round(payments.Sum(x => x.AccruingInterestPayment).Value, 2);
                model.AccruingPenaltyPayment = Math.Round(payments.Sum(x => x.AccruingPenaltyPayment).Value, 2);
                model.AccruingPrincipalPayment = Math.Round(payments.Sum(x => x.AccruingPrincipalPayment).Value, 2);
                model.CurrentInterestPayment = Math.Round(payments.Sum(x => x.CurrentInterestPayment.Value), 2);
                model.CurrentPrincipalPayment = Math.Round(payments.Sum(x => x.CurrentPrincipalPayment.Value), 2);
                model.PrincipalPrepayment = Math.Round(payments.Sum(x => x.PrincipalPrepaymant).Value, 2);
                model.PayableInterest = Math.Round(payments.Sum(x => x.PayableInterest).Value, 2);
                model.LoanPlacement = payments.Select(x => x.Loan).Distinct().Sum(x => x.LoanAmount);
                model.LoanPlacementsCount = payments.Select(x => x.Loan).Distinct().Count();
                model.PayableEnforcementAndCourtFee = Math.Round(payments.Sum(x => x.EnforcementAndCourtFee), 2);
                model.PayableEnforcementAndCourtFeePayment = Math.Round(payments.Sum(x => x.EnforcementAndCourtFeePayment).Value, 2);
                model.PaymentOfMonth = Math.Round(payments.Sum(x => x.CurrentPayment), 2);
                model.PaymentOfMonthCount = payments.Count(x => x.CurrentPayment != 0);
                model.PlannedPaymentOfMonth = Math.Round(payments.Sum(x => x.Loan.AmountToBePaidDaily), 2);
                model.PlannedPaymentOfMonthCount = payments.Count();
                model.AverageLoanBalance = Math.Round(payments.Skip(1).Sum(x => x.StartingBalance.Value) / model.LoanPlacementsCount);
                //var valSum = payments.Skip(1).Sum(x => x.StartingBalance.Value) + (payments.OrderByDescending(x => x.PaymentDate).FirstOrDefault().LoanBalance.HasValue ? payments.OrderByDescending(x => x.PaymentDate).FirstOrDefault().LoanBalance.Value : 0) + db.Loans.Where(x => x.LoanStartDate == dt).Sum(x => x.LoanAmount);
                var val1 = payments.Skip(1).Sum(x => x.StartingBalance.Value);
                var val2 = (payments.OrderByDescending(x => x.PaymentDate).FirstOrDefault().LoanBalance.HasValue ? payments.OrderByDescending(x => x.PaymentDate).FirstOrDefault().LoanBalance.Value : 0);
                var val3 = db.Loans.Where(x => x.LoanStartDate == dt) != null ? db.Loans.Where(x => x.LoanStartDate == dt).Sum(x => x.LoanAmount) : 0;
                var valSum = val1 + val2 + val3;
                model.AveragePortfolio = Math.Round(valSum / monthDays, 2);

                model.AverageLoanPlacement = Math.Round(model.LoanPlacement / model.LoanPlacementsCount, 2);
                model.AverageLoanPlacementInDay = Math.Round(model.LoanPlacement / monthDays, 2);
                model.AveragePaymentOfMonth = Math.Round(model.PaymentOfMonth / monthDays);
                model.AveragePaymentOfMonthCount = Math.Round(model.PaymentOfMonthCount / monthDays);
                model.AveragePlannedLoanBalance = Math.Round(payments.Skip(1).Sum(x => x.StartingPlannedBalance.Value) / model.LoanPlacementsCount, 2);
                model.AveragePlannedPaymentOfMonth = Math.Round(model.PlannedPaymentOfMonth / monthDays, 2);
                model.AveragePlannedPaymentOfMonthCount = Math.Round(model.PlannedPaymentOfMonthCount / monthDays, 2);

                model.Difference = Math.Round(model.AverageLoanBalance = model.AveragePlannedLoanBalance, 2);
                model.All = Math.Round(model.AccruingPrincipalPayment + model.CurrentPrincipalPayment + model.PrincipalPrepayment, 2);
                model.Sum = Math.Round(model.AccruingPenaltyPayment + model.AccruingInterestPayment + model.CurrentInterestPayment, 2);

                result.Add(model);
            }

            var model2 = new BranchReportModel();
            model2.Branch = "Total";
            model2.AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2);
            model2.AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2);
            model2.AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2);
            model2.CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2);
            model2.CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2);
            model2.PrincipalPrepayment = Math.Round(result.Sum(x => x.PrincipalPrepayment), 2);
            model2.PayableInterest = Math.Round(result.Sum(x => x.PayableInterest), 2);
            model2.LoanPlacement = Math.Round(result.Sum(x => x.LoanPlacement), 2);
            model2.LoanPlacementsCount = result.Sum(x => x.LoanPlacementsCount);
            model2.PayableEnforcementAndCourtFee = Math.Round(result.Sum(x => x.PayableEnforcementAndCourtFee), 2);
            model2.PayableEnforcementAndCourtFeePayment = Math.Round(result.Sum(x => x.PayableEnforcementAndCourtFeePayment), 2);
            model2.PaymentOfMonth = Math.Round(result.Sum(x => x.PaymentOfMonth), 2);
            model2.PaymentOfMonthCount = Math.Round(result.Sum(x => x.PaymentOfMonthCount), 2);
            model2.PlannedPaymentOfMonth = Math.Round(result.Sum(x => x.PlannedPaymentOfMonth), 2);
            model2.PlannedPaymentOfMonthCount = Math.Round(result.Sum(x => x.PlannedPaymentOfMonthCount), 2);
            model2.AverageLoanBalance = Math.Round(result.Sum(x => x.AverageLoanBalance), 2);
            model2.AveragePortfolio = Math.Round(result.Sum(x => x.AveragePortfolio), 2);
            model2.AverageLoanPlacement = Math.Round(result.Sum(x => x.AverageLoanPlacement), 2);
            model2.AverageLoanPlacementInDay = Math.Round(result.Sum(x => x.AverageLoanPlacementInDay), 2);
            model2.AveragePaymentOfMonth = Math.Round(result.Sum(x => x.AveragePaymentOfMonth), 2);
            model2.AveragePaymentOfMonthCount = Math.Round(result.Sum(x => x.AveragePaymentOfMonthCount), 2);
            model2.AveragePlannedLoanBalance = Math.Round(result.Sum(x => x.AveragePlannedLoanBalance), 2);
            model2.AveragePlannedPaymentOfMonth = Math.Round(result.Sum(x => x.AveragePlannedPaymentOfMonth), 2);
            model2.AveragePlannedPaymentOfMonthCount = Math.Round(result.Sum(x => x.AveragePlannedPaymentOfMonthCount), 2);

            model2.Difference = Math.Round(result.Sum(x => x.Difference), 2);
            model2.All = Math.Round(result.Sum(x => x.All), 2);
            model2.Sum = Math.Round(result.Sum(x => x.Sum), 2);

            result.Add(model2);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public ActionResult LawyerReport(string date, int branch = -1)
        {
            ViewData.Add("date", date);
            ViewData.Add("branch", branch);

            return View();
        } //ლოსაბერიძე
        public JsonResult LawyerReportJson(string date, int branch = -1)
        {
            if (branch == -1 || string.IsNullOrWhiteSpace(date))
                return Json(null, JsonRequestBehavior.AllowGet);

            var db = Databases.ElementAt(branch);

            DateTime Date = DateTime.Today;

            if (!string.IsNullOrEmpty(date))
                Date = DateTime.Parse(date);

            var payments = db.Payments.Where(x => x.PaymentDate.Month == Date.Month && x.PaymentDate.Year == Date.Year && x.PaymentDate >= x.Loan.ProblemManagerDate && x.Loan.ProblemManager != null).ToList();

            List<LawyerReportModel> result = new List<LawyerReportModel>();

            var pmtGroups = payments.GroupBy(x => x.PaymentDate.Date).ToList();                                     	                            //CommissionFee15Per
            //CommissionFee20Per	
            foreach (var pmt in pmtGroups)                                                                                                          	//
            {
                var md = new LawyerReportModel()
                {
                    AccruingInterestPayment = Math.Round(pmt.Sum(x => x.AccruingInterestPayment).Value, 2),                      //AccruingInterestPayment                   	 
                    AccruingPenaltyPayment = Math.Round(pmt.Sum(x => x.AccruingPenaltyPayment).Value, 2),                        //AccruingPenaltyPayment                   
                    AccruingPrincipalPayment = Math.Round(pmt.Sum(x => x.AccruingPrincipalPayment).Value, 2),                    //AccruingPrincipalPayment                   
                    CurrentInterestPayment = Math.Round(pmt.Sum(x => x.CurrentInterestPayment.Value), 2),                        //CurrentInterestPayment
                    CurrentPrincipalPayment = Math.Round(pmt.Sum(x => x.CurrentPrincipalPayment.Value), 2),                      //CurrentPrincipalPayment
                    PrincipalPrepayment = Math.Round(pmt.Sum(x => x.PrincipalPrepaymant).Value, 2),                              //PrincipalPrepayment
                    CurrentPayment = Math.Round(pmt.Sum(x => x.CurrentPayment), 2),                                              //CurrentPayment
                    EnforcementAndCourtFeePayment = Math.Round(pmt.Sum(x => x.EnforcementAndCourtFeePayment).Value, 2),          //EnforcementAndCourtFeePayment
                    Date = pmt.FirstOrDefault().PaymentDate.Date.ToShortDateString()
                };

                // დ იორამაშვილი თარიღი გადაცემის

                foreach (var p in pmt)
                {
                    if (p.Loan.ProblemManagerDate.Value.AddDays(90) > p.PaymentDate)
                        md.CommissionFee20Per += ((p.AccruingPenaltyPayment.Value + p.AccruingInterestPayment.Value + p.CurrentInterestPayment.Value + p.AccruingPrincipalPayment.Value + p.CurrentPrincipalPayment.Value + p.PrincipalPrepaymant.Value) * 0.2d);
                    else
                        md.CommissionFee15Per += ((p.AccruingPenaltyPayment.Value + p.AccruingInterestPayment.Value + p.CurrentInterestPayment.Value + p.AccruingPrincipalPayment.Value + p.CurrentPrincipalPayment.Value + p.PrincipalPrepaymant.Value) * 0.15d);
                }

                md.CommissionFee15Per = Math.Round(md.CommissionFee15Per, 2);
                md.CommissionFee20Per = Math.Round(md.CommissionFee20Per, 2);

                result.Add(md);
            }

            result = result.OrderBy(x => DateTime.Parse(x.Date)).ToList();

            result.Add(new LawyerReportModel()
            {
                AccruingInterestPayment = Math.Round(result.Sum(x => x.AccruingInterestPayment), 2),
                AccruingPenaltyPayment = Math.Round(result.Sum(x => x.AccruingPenaltyPayment), 2),
                AccruingPrincipalPayment = Math.Round(result.Sum(x => x.AccruingPrincipalPayment), 2),
                CurrentInterestPayment = Math.Round(result.Sum(x => x.CurrentInterestPayment), 2),
                CurrentPrincipalPayment = Math.Round(result.Sum(x => x.CurrentPrincipalPayment), 2),
                PrincipalPrepayment = Math.Round(result.Sum(x => x.PrincipalPrepayment), 2),
                CurrentPayment = Math.Round(result.Sum(x => x.CurrentPayment), 2),
                EnforcementAndCourtFeePayment = Math.Round(result.Sum(x => x.EnforcementAndCourtFeePayment), 2),
                Date = "Total:",
                CommissionFee15Per = Math.Round(result.Sum(x => x.CommissionFee15Per)),
                CommissionFee20Per = Math.Round(result.Sum(x => x.CommissionFee20Per))
            });

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        /////////////////////////////////////////////////////////////////////////////////
        public ActionResult LawyerReportAll(string date, int branch = -1)
        {
            ViewData.Add("date", date);
            ViewData.Add("branch", branch);

            return View();
        } //ლოსაბერიძე
        public JsonResult LawyerReportAllJson(string date, int branch = -1)
        {
            if (branch == -1 || string.IsNullOrWhiteSpace(date))
                return Json(null, JsonRequestBehavior.AllowGet);

            List<LawyerReportModel> result = new List<LawyerReportModel>();

            foreach (var db in Databases)
            {
                DateTime Date = DateTime.Today;

                if (!string.IsNullOrEmpty(date))
                    Date = DateTime.Parse(date);

                var payments = db.Payments.Where(x => x.PaymentDate.Month == Date.Month && x.PaymentDate.Year == Date.Year && x.PaymentDate >= x.Loan.ProblemManagerDate && x.Loan.ProblemManager != null).ToList();

                var pmtGroups = payments.GroupBy(x => x.PaymentDate.Date).ToList();                                     	                            //CommissionFee15Per
                //CommissionFee20Per	
                foreach (var pmt in pmtGroups)                                                                                                          	//
                {
                    var md = new LawyerReportModel()
                    {
                        AccruingInterestPayment = Math.Round(pmt.Sum(x => x.AccruingInterestPayment).Value, 2),                      //AccruingInterestPayment                   	 
                        AccruingPenaltyPayment = Math.Round(pmt.Sum(x => x.AccruingPenaltyPayment).Value, 2),                        //AccruingPenaltyPayment                   
                        AccruingPrincipalPayment = Math.Round(pmt.Sum(x => x.AccruingPrincipalPayment).Value, 2),                    //AccruingPrincipalPayment                   
                        CurrentInterestPayment = Math.Round(pmt.Sum(x => x.CurrentInterestPayment.Value), 2),                        //CurrentInterestPayment
                        CurrentPrincipalPayment = Math.Round(pmt.Sum(x => x.CurrentPrincipalPayment.Value), 2),                      //CurrentPrincipalPayment
                        PrincipalPrepayment = Math.Round(pmt.Sum(x => x.PrincipalPrepaymant).Value, 2),                              //PrincipalPrepayment
                        CurrentPayment = Math.Round(pmt.Sum(x => x.CurrentPayment), 2),                                              //CurrentPayment
                        EnforcementAndCourtFeePayment = Math.Round(pmt.Sum(x => x.EnforcementAndCourtFeePayment).Value, 2),          //EnforcementAndCourtFeePayment
                        Date = pmt.FirstOrDefault().PaymentDate.Date.ToShortDateString()
                    };

                    // დ იორამაშვილი თარიღი გადაცემის

                    foreach (var p in pmt)
                    {
                        if (p.Loan.ProblemManagerDate.Value.AddDays(90) > p.PaymentDate)
                            md.CommissionFee20Per += ((p.AccruingPenaltyPayment.Value + p.AccruingInterestPayment.Value + p.CurrentInterestPayment.Value + p.AccruingPrincipalPayment.Value + p.CurrentPrincipalPayment.Value + p.PrincipalPrepaymant.Value) * 0.2d);
                        else
                            md.CommissionFee15Per += ((p.AccruingPenaltyPayment.Value + p.AccruingInterestPayment.Value + p.CurrentInterestPayment.Value + p.AccruingPrincipalPayment.Value + p.CurrentPrincipalPayment.Value + p.PrincipalPrepaymant.Value) * 0.15d);
                    }

                    md.CommissionFee15Per = Math.Round(md.CommissionFee15Per, 2);
                    md.CommissionFee20Per = Math.Round(md.CommissionFee20Per, 2);

                    result.Add(md);
                }

                result = result.OrderBy(x => DateTime.Parse(x.Date)).ToList();
            }

            var resultgroups = result.GroupBy(x => x.Date);

            List<LawyerReportModel> result2 = new List<LawyerReportModel>();

            foreach (var group in resultgroups)
            {
                result2.Add(new LawyerReportModel()
                    {
                        AccruingInterestPayment = group.Sum(x => x.AccruingInterestPayment),
                        AccruingPenaltyPayment = group.Sum(x => x.AccruingPenaltyPayment),
                        AccruingPrincipalPayment = group.Sum(x => x.AccruingPrincipalPayment),
                        CommissionFee15Per = group.Sum(x => x.CommissionFee15Per),
                        CommissionFee20Per = group.Sum(x => x.CommissionFee20Per),
                        CurrentInterestPayment = group.Sum(x => x.CurrentInterestPayment),
                        CurrentPayment = group.Sum(x => x.CurrentPayment),
                        CurrentPrincipalPayment = group.Sum(x => x.CurrentPrincipalPayment),
                        EnforcementAndCourtFeePayment = group.Sum(x => x.EnforcementAndCourtFeePayment),
                        PrincipalPrepayment = group.Sum(x => x.PrincipalPrepayment),
                        Date = group.FirstOrDefault().Date
                    });
            }

            result2.Add(new LawyerReportModel()
            {
                AccruingInterestPayment = Math.Round(result2.Sum(x => x.AccruingInterestPayment), 2),
                AccruingPenaltyPayment = Math.Round(result2.Sum(x => x.AccruingPenaltyPayment), 2),
                AccruingPrincipalPayment = Math.Round(result2.Sum(x => x.AccruingPrincipalPayment), 2),
                CurrentInterestPayment = Math.Round(result2.Sum(x => x.CurrentInterestPayment), 2),
                CurrentPrincipalPayment = Math.Round(result2.Sum(x => x.CurrentPrincipalPayment), 2),
                PrincipalPrepayment = Math.Round(result2.Sum(x => x.PrincipalPrepayment), 2),
                CurrentPayment = Math.Round(result2.Sum(x => x.CurrentPayment), 2),
                EnforcementAndCourtFeePayment = Math.Round(result2.Sum(x => x.EnforcementAndCourtFeePayment), 2),
                Date = "Total:",
                CommissionFee15Per = Math.Round(result2.Sum(x => x.CommissionFee15Per)),
                CommissionFee20Per = Math.Round(result2.Sum(x => x.CommissionFee20Per))
            });

            return Json(result2, JsonRequestBehavior.AllowGet);
        }
        /////////////////////////////////////////////////////////////////////////////////
    }
}

//Date
//CurrentPayment
//EnforcementAndCourtFeePayment	
//AccruingPenaltyPayment	
//AccruingInterestPayment	
//CurrentInterestPayment	
//AccruingPrincipalPayment	
//CurrentPrincipalPayment 	
//PrincipalPrepayment	 
//CommissionFee20Per
//CommissionFee15Per
