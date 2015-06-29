using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class PaymentsReportViewModel
    {
        [Display(Name = "შენატანი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double CurrentPayment { get; set; }

        [Display(Name = "შენატანის თარიღი")]
        public DateTime PaymentDate { get; set; }

        [Display(Name = "მიმდ. დავალიანება")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? CurrentDebt { get; set; }

        [Display(Name = "სულ განულება")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? WholeDebt { get; set; }

        [Display(Name = "საწყისი დაგეგმილი ნაშთი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? StartingPlannedBalance { get; set; }

        [Display(Name = "საწყისი ნაშთი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? StartingBalance { get; set; }

        [Display(Name = "გეგმიური ნაშთი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double PlannedBalance { get; set; }

        [Display(Name = "გადასახადი პროცენტი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? PayableInterest { get; set; }

        [Display(Name = "გადასახადი ძირი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? PayablePrincipal { get; set; }

        [Display(Name = "მიმდინარე ვადაგად. ძირი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? CurrentOverduePrincipal { get; set; }

        [Display(Name = "მიმდინარე ვადაგად. პროცენტი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? CurrentOverdueInterest { get; set; }

        [Display(Name = "მიმდინარე ჯარიმა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? CurrentPenalty { get; set; }

        [Display(Name = "დაგროვილი ვადაგად. ძირი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? AccruingOverduePrincipal { get; set; }

        [Display(Name = "დაგროვილი ვადაგად. პროცენტი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? AccruingOverdueInterest { get; set; }

        [Display(Name = "დაგროვილი ვადაგად. ჯარიმა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? AccruingOverduePenalty { get; set; }

        [Display(Name = "დაგროვილი ჯარიმის გადახდა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? AccruingPenaltyPayment { get; set; }

        [Display(Name = "დაგროვილი პროცენტის გადახდა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? AccruingInterestPayment { get; set; }

        [Display(Name = "დაგროვილი ძირის გადახდა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? AccruingPrincipalPayment { get; set; }

        [Display(Name = "მიმდინარე პროცენტის გადახდა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? CurrentInterestPayment { get; set; }

        [Display(Name = "მიმდინარე ძირის გადახდა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? CurrentPrincipalPayment { get; set; }

        [Display(Name = "ძირის წინსწრ. გადახდა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? PrincipalPrepaymant { get; set; }

        [Display(Name = "გადახდილი პროცენტი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? PaidInterest { get; set; }

        [Display(Name = "გადახდილი ჯარიმა")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? PaidPenalty { get; set; }

        [Display(Name = "გადახდილი ძირი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? PaidPrincipal { get; set; }

        [Display(Name = "წინსწრ. გადახდილი ძირი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? PrincipalPrepaid { get; set; }

        [Display(Name = "სესხის ნაშთი")]
        [DisplayFormat(DataFormatString = "{0:N}")]
        public double? LoanBalance { get; set; }
    }
}