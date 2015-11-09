using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class AccountingReportModel
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
        public int LoanID { get; set; }
        public double Amount { get; set; }
        public double PMT { get; set; }
        public double AccruingPenaltyPayment { get; set; }
        public double AccruingInterestPayment { get; set; }
        public double CurrentInterestPayment { get; set; }
        public double AccruingPrincipalPayment { get; set; }
        public double CurrentPrincipalPayment { get; set; }
        public double PrincipalPrepayment { get; set; }
    }
}