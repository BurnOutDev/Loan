using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class AccountingReportModel2
    {
        public double PayableInterest { get; set; }
        public double EnforcementAndCourtFeeCharge { get; set; }
        public double EnforcementAndCourtFeePayment { get; set; }
        public double AccruingPenaltyPayment { get; set; }
        public double AccruingInterestPayment { get; set; }
        public double CurrentInterestPayment { get; set; }
        public double PMT { get; set; }
        public double PMTCount { get; set; }
        public double CurrentPayment { get; set; }
        public double CurrentPaymentCount { get; set; }
        public double StartingBalance { get; set; }
        public double AccruingPrincipalPayment { get; set; }
        public double CurrentPrincipalPayment { get; set; }
        public double PrincipalPrepayment { get; set; }
        public double LoanBalance { get; set; }
        public double LoanAmount { get; set; }
        public double LoanCount { get; set; }
        public string Date { get; set; }
    }
}