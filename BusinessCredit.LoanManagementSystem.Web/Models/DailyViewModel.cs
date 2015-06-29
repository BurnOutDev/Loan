using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using BusinessCredit.Domain.Enums;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class DailyViewModel
    {
        [Display(Name = "კლიენტის #")]
        public int AccountNumber { get; set; }

        [Display(Name = "სესხის #")]
        public int LoanId { get; set; }

        [Display(Name = "სახელი")]
        public string Name { get; set; }

        [Display(Name = "გვარი")]
        public string LastName { get; set; }

        [Display(Name = "პირადი ნომერი")]
        public string PrivateNumber { get; set; }

        [Display(Name = "ბიზნესის მისამართი")]
        public string BusinessAddress { get; set; }

        [Display(Name = "მობ. ნომერი")]
        public string PhoneNumber { get; set; }

        [Display(Name = "PMT")]
        [DisplayFormat(DataFormatString="{0:N}")]
        public double PlannedPayment { get; set; }

        [Display(Name = "მიმდ. დავალიანება")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double CurrentDebt { get; set; }

        [Display(Name = "სულ განულება")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double WholeDebt { get; set; }

        [Display(Name = "გადახდა")]
        public double Payment { get; set; }

        [Display(Name = "თარიღი")]
        [DisplayFormat(DataFormatString = "{0:dd/MMM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime PaymentDate { get; set; }

        [Display(Name = "ხელშ. ნომერი")]
        public string AgreementNumber { get; set; }

        [Display(Name = "გრაფიკზე დაწევა")]
        public double ScheduleCatchUp { get; set; }

        [Display(Name = "#")]
        public int PaymentOrderID { get; set; }

        [Display(Name = "გადახდის არხი")]
        public PaymentOrder PaymentOrder { get; set; }

        [Display(Name = "StartDate")]
        public DateTime StartDate { get; set; }

        [Display(Name = "EndDate")]
        public DateTime EndDate { get; set; }

        [Display(Name = "გაბრთ. წერილ. თარ")]
        public DateTime LoanNotificationLetter { get; set; }

        [Display(Name = "პრობ. გად. თარ.")]
        public DateTime ProblemManagerDate { get; set; }

        [Display(Name = "პრობ. მენეჯერი")]
        public string ProblemManager { get; set; } // Name LastName

        [Display(Name = "აღსრულ. გად. თარ.")]
        public DateTime DateOfEnforcement { get; set; }

        [Display(Name = "აღსრ. და სასამ. ხარჯი")]
        public double CourtAndEnforcementFee { get; set; }
    }
}
