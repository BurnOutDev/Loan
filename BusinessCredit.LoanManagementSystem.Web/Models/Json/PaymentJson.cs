using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models.Json
{
    public class PaymentJson
    {
        public string LoanAccountName { get; set; }
        public string LoanAccountLastName { get; set; }
        public string LoanAccountPrivateNumber { get; set; }
        public int LoanAccountAccountID { get; set; }
        public int LoanLoanID { get; set; }
        public int PaymentID { get; set; }
        public string TaxOrderID { get; set; }
        public double CurrentPayment { get; set; }
        public string PaymentDate { get; set; }
        public double? CurrentDebt { get; set; }
        public double? WholeDebt { get; set; }
        public double? StartingPlannedBalance { get; set; }
        public double? StartingBalance { get; set; }
        public double PlannedBalance { get; set; }
        public double? PayableInterest { get; set; }
        public double? PayablePrincipal { get; set; }
        public double? CurrentOverduePrincipal { get; set; }
        public double? CurrentOverdueInterest { get; set; }
        public double? CurrentPenalty { get; set; }
        public double? AccruingOverduePrincipal { get; set; }
        public double? AccruingOverdueInterest { get; set; }
        public double? AccruingPenaltyPayment { get; set; }
        public double? AccruingPenalty { get; set; }
        public double? AccruingInterestPayment { get; set; }
        public double? AccruingPrincipalPayment { get; set; }
        public double? CurrentInterestPayment { get; set; }
        public double? CurrentPrincipalPayment { get; set; }
        public double? PrincipalPrepaymant { get; set; }
        public double? PaidInterest { get; set; }
        public double? PaidPenalty { get; set; }
        public double? PaidPrincipal { get; set; }
        public double? PrincipalPrepaid { get; set; }
        public double? LoanBalance { get; set; }
        public bool? LoanStatus { get; set; }

        //public double? ScheduleCatchUp { get; set; }
        public string LoanStartDate { get; set; }
        public string LoanEndDate { get; set; }
        public string NotificationDate { get; set; }
        public string LoanProblemDate { get; set; }
        public string LoanProblemManager { get; set; }
        public string LoanEnforcementDate { get; set; }
        public double? EnforcementAndCourtFee { get; set; }
    }
}