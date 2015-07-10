using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models.Json
{
    public class LoanJson
    {
        public string AccountName { get; set; }
        public string AccountLastName { get; set; }
        public string AccountPrivateNumber { get; set; }
        public string AccountNumberMobile { get; set; }
        public string AccountAccountNumber { get; set; }
        public int AccountAccountID { get; set; }
        public int LoanID { get; set; }
        public double LoanAmount { get; set; }
        public string LoanPurpose { get; set; }
        public double LoanDailyInterestRate { get; set; }
        public int LoanTermDays { get; set; }
        public int NetworkDays { get; set; }
        public int DaysOfGrace { get; set; }
        public double LoanPenaltyRate { get; set; } // ჯარიმა
        public double EffectiveInterestRate { get; set; } // ეფექტური პროცენტი
        public double AmountToBePaidAll { get; set; }
        public double AmountToBePaidDaily { get; set; }
        public string AgreementDate { get; set; }
        public string LoanStartDate { get; set; }
        public string LoanEndDate { get; set; }
        public virtual string Agreement { get; set; }
        public virtual string LoanStatus { get; set; }

        #region Enforcement
        public string LoanNotificationLetter { get; set; }
        public string ProblemManagerDate { get; set; }
        public string ProblemManager { get; set; }
        public string DateOfEnforcement { get; set; }
        public double CourtAndEnforcementFee { get; set; }
        #endregion
    }
}