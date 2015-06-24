using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class DailyViewModel
    {
        public int LoanId { get; set; }

        [Display(Name = "თარიღი")]
        [DisplayFormat(DataFormatString = "{0:dd/MMM/yyyy}", ApplyFormatInEditMode = true)]
        public DateTime DisplayDate
        {
            get
            {
                return DateTime.Today;
            }
        }

        [Display(Name = "კლიენტის #")]
        public int AccountNumber { get; set; }

        [Display(Name = "სესხის #")]
        public int LoanNumber { get; set; }

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
        public double PlannedPayment { get; set; }

        [Display(Name = "მიმდ. დავალიანება")]
        public double CurrentDebt { get; set; }

        [Display(Name = "სულ განულება")]
        public double WholeDebt { get; set; }

        [Display(Name = "გადახდა")]
        public double Payment { get; set; }

        [Display(Name = "თარიღი")]
        public DateTime PaymentDate { get; set; }

        [Display(Name = "ხელშ. ნომერი")]
        public string AgreementNumber { get; set; }

        [Display(Name = "ვადაგად. თანხა")]
        public double OverdueAmount { get; set; } // CurrentDebt - PlannedPayment
    }
}