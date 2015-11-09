using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class PortfolioAnalizeModel
    {
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
        public int LoanID { get; set; }
        public double Amount { get; set; }
        public double PMT { get; set; }
        public double CurrentDebt { get; set; }
        public double CurrentPayment { get; set; }
        public double PaidPenalty { get; set; }
        public double PaidInterest { get; set; }
        public double PaidPrincipal { get; set; }
        public double Balance { get; set; }
        public double PlannedBalance { get; set; }
        public double AccruingPenalty { get; set; }
        public double AccruingOverdueInterest { get; set; }
        public double AccruingPenaltyPayment { get; set; }
        public double AccruingInterestPayment { get; set; }
        public double CurrentInterestPayment { get; set; }
        public double AccruingPrincipalPayment { get; set; }
        public double CurrentPrincipalPayment { get; set; }
        public double PayableInterest { get; set; }
        public string ProblemManagerDate { get; set; }
        public string ProblemManager { get; set; }
        public string EnforcementDate { get; set; }
    }
}