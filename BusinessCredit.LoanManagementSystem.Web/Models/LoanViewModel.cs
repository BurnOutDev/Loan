using BusinessCredit.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class LoanViewModel
    {
        [Display(Name = "სესხის #")]
        public int LoanID { get; set; }

        [Display(Name = "სესხის თანხა")]
        public double LoanAmount { get; set; }

        [Display(Name = "სესხის სავარაუდო მიზანი")]
        public string LoanPurpose { get; set; }

        [Display(Name = "სესხის დღიური პროცენტი")]
        public double LoanDailyInterestRate { get; set; }

        [Display(Name = "სესხის ვადა (დღეები)")]
        public int LoanTermDays { get; set; }

        [Display(Name = "სამუშაო დღეების რაოდენობა სესხის პერიოდში")]
        public int NetworkDays { get; set; }

        [Display(Name = "საშეღავათო პერიოდი")]
        public int DaysOfGrace { get; set; }

        [Display(Name = "ჯარიმის პროცენტი")]
        public double LoanPenaltyRate { get; set; } // ჯარიმა

        [Display(Name = "ეფექტური პროცენტი")]
        public double EffectiveInterestRate { get; set; } // ეფექტური პროცენტი

        [Display(Name = "სულ მოსატანი")]
        public double AmountToBePaidAll { get; set; }

        [Display(Name = "დღეში გადასახადი")]
        public double AmountToBePaidDaily { get; set; }

        [Display(Name = "მიმდინარე დავალიანება")]
        public double CurrentDebt { get; set; }

        [Display(Name = "სულ მოსატანი")]
        public double WholeDebt { get; set; }  // --

        [Display(Name = "გენერალური ხელშეკრულების თარიღი")]
        public DateTime AgreementDate { get; set; }

        [Display(Name = "სესხის დაწყების თარიღი")]
        public DateTime LoanStartDate { get; set; }

        [Display(Name = "სესხის დამთავრების თარიღი")]
        public DateTime LoanEndDate { get; set; }

        public string GuarantorName { get; set; }
        public string GuarantorLastName { get; set; }
        public string GuarantorPrivateNumber { get; set; }
        public string GuarantorPhysicalAddress { get; set; }
        public string GuarantorPhoneNumber { get; set; }

        /// ხელშეკრულება (ხელშ. #)
        public virtual AgreementViewModel Agreement { get; set; }

        /// სესხის სტატუსი (მიმდინარე, დახურული)
        public virtual LoanStatus LoanStatus { get; set; }



        /// გადახდები
        public virtual ICollection<PaymentViewModel> Payments { get; set; }
        public virtual ICollection<PaymentPlannedViewModel> PlannedPaymentEntities { get; set; }

        public virtual BranchViewModel Branch { get; set; }

        /// სესხის გამცემი (საკრედიტო ექსპერტი)
        public virtual CreditExpertViewModel CreditExpert { get; set; }

        public virtual ClientViewModel Client { get; set; }

    }
}