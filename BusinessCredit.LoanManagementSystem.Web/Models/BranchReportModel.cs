using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class BranchReportModel
    {
        public string Branch { get; set; }

        #region First
        public double AveragePortfolio { get; set; }
        public double AverageLoanBalance { get; set; }
        public double AveragePlannedLoanBalance { get; set; }
        public double Difference { get; set; }
        public double PlannedPaymentOfMonth { get; set; }
        public double PlannedPaymentOfMonthCount { get; set; }
        public double PaymentOfMonth { get; set; }
        public double PaymentOfMonthCount { get; set; }
        public double AveragePlannedPaymentOfMonth { get; set; }
        public double AveragePlannedPaymentOfMonthCount { get; set; }
        public double AveragePaymentOfMonth { get; set; }
        public double AveragePaymentOfMonthCount { get; set; } 
        #endregion

        #region Second
        public double LoanPlacement { get; set; }
        public int LoanPlacementsCount { get; set; }
        public double AverageLoanPlacement { get; set; }
        public double AverageLoanPlacementInDay { get; set; } 
        #endregion

        #region Third
        public double AccruingPrincipalPayment { get; set; }
        public double CurrentPrincipalPayment { get; set; }
        public double PrincipalPrepayment { get; set; }
        public double All { get; set; } 
        #endregion

        #region Fourth
        public double PayableInterest { get; set; }
        public double PayableEnforcementAndCourtFee { get; set; }
        public double PayableEnforcementAndCourtFeePayment { get; set; }
        public double AccruingPenaltyPayment { get; set; }
        public double AccruingInterestPayment { get; set; }
        public double CurrentInterestPayment { get; set; }
        public double Sum { get; set; } 
        #endregion
    }
}

        #region First
        //public string Branch { get; set; }
        //public double Portfolio { get; set; }
        //public double PlannedPortfolio { get; set; }
        //public double Difference { get; set; }
        //public int LoanCount { get; set; } 
        #endregion