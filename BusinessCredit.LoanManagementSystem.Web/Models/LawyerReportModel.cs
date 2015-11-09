using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class LawyerReportModel
    {
        public string Date { get; set; }
        public double CurrentPayment { get; set; }
        public double EnforcementAndCourtFeePayment { get; set; }
        public double AccruingPenaltyPayment { get; set; }
        public double AccruingInterestPayment { get; set; }
        public double CurrentInterestPayment { get; set; }
        public double AccruingPrincipalPayment { get; set; }
        public double CurrentPrincipalPayment { get; set; }
        public double PrincipalPrepayment { get; set; }
        public double CommissionFee20Per { get; set; }
        public double CommissionFee15Per { get; set; }

    }
}