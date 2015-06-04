using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BusinessCredit.Domain
{
    public class Payment
    {
        [Key]
        public int PaymentID { get; set; }

        [Display(Name = "სშო #")]
        public string TaxOrderID { get; set; }

        [Display(Name = "შენატანი")]
        public double CurrentPayment { get; set; }

        [Display(Name = "შენატანის თარიღი")]
        public DateTime PaymentDate { get; set; }

        [Display(Name = "მიმდ. დავალიანება")]
        public double CurrentDebt { get; set; }

        [Display(Name = "სულ განულება")]
        public double WholeDebt { get; set; }

        [Display(Name = "საწყისი დაგეგმილი ნაშთი")]
        public double StartingPlannedBalance { get; set; }

        [Display(Name = "საწყისი ნაშთი")]
        public double StartingBalance { get; set; }

        [Display(Name = "გეგმიური ნაშთი")]
        public double PlannedBalance { get; set; }

        [Display(Name = "გადასახადი ძირი")]
        public double PayableInterest { get; set; }

        [Display(Name = "გადასახადი ძირი")]
        public double PayablePrincipal { get; set; }

        [Display(Name = "მიმდინარე ვადაგად. ძირი")]
        public double CurrentOverduePrincipal { get; set; }

        [Display(Name = "მიმდინარე ვადაგად. პროცენტი")]
        public double CurrentOverdueInterest { get; set; }

        [Display(Name = "მიმდინარე ჯარიმა")]
        public double CurrentPenalty { get; set; }

        [Display(Name = "დაგროვილი ვადაგად. ძირი")]
        public double AccruingOverduePrincipal { get; set; }

        [Display(Name = "დაგროვილი ვადაგად. პროცენტი")]
        public double AccruingOverdueInterest { get; set; }

        [Display(Name = "დაგროვილი ვადაგად. ჯარიმა")]
        public double AccruingOverduePenalty { get; set; }

        [Display(Name = "დაგროვილი ჯარიმის გადახდა")]
        public double AccruingPenaltyPayment { get; set; }

        [Display(Name = "დაგროვილი პროცენტის გადახდა")]
        public double AccruingInterestPayment { get; set; }

        [Display(Name = "დაგროვილი ძირის გადახდა")]
        public double AccruingPrincipalPayment { get; set; }

        [Display(Name = "მიმდინარე პროცენტის გადახდა")]
        public double CurrentInterestPayment { get; set; }

        [Display(Name = "მიმდინარე ძირის გადახდა")]
        public double CurrentPrincipalPayment { get; set; }

        [Display(Name = "ძირის წინსწრ. გადახდა")]
        public double PrincipalPrepaymant { get; set; }

        [Display(Name = "გადახდილი პროცენტი")]
        public double PaidInterest { get; set; }

        [Display(Name = "გადახდილი ჯარიმა")]
        public double PaidPenalty { get; set; }

        [Display(Name = "გადახდილი ძირი")]
        public double PaidPrincipal { get; set; }

        [Display(Name = "წინსწრ. გადახდილი ძირი")]
        public double PrincipalPrepaid { get; set; }

        [Display(Name = "სესხის ნაშთი")]
        public double LoanBalance { get; set; }

        [Display(Name = "სესხის სტატუსი")]
        public bool LoanStatus { get; set; }


        public virtual Loan Loan { get; set; }
        public virtual CreditExpert CreditExpert { get; set; }
        public virtual Branch Branch { get; set; }
        public virtual CashCollectionAgent CashCollectionAgent { get; set; }
    }
}
