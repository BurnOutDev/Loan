using BusinessCredit.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models.Json
{
    public class DailyJson
    {
        public int PaymentID { get; set; }
        public int AccountNumber { get; set; }
        public int LoanId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
        public string BusinessAddress { get; set; }
        public string PhoneNumber { get; set; }
        public double PlannedPayment { get; set; }
        public double CurrentDebt { get; set; }
        public double WholeDebt { get; set; }
        public double Payment { get; set; }
        public string PaymentDate { get; set; }
        public string AgreementNumber { get; set; }
        public double ScheduleCatchUp { get; set; }
        public int PaymentOrderID { get; set; }
        public string PaymentOrder { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string LoanNotificationLetter { get; set; }
        public string ProblemManagerDate { get; set; }
        public string ProblemManager { get; set; }
        public string DateOfEnforcement { get; set; }
        public double CourtAndEnforcementFee { get; set; }
    }
}
