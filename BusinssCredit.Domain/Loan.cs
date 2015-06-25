using Microsoft.VisualBasic;
using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessCredit.Domain
{
    public class Loan
    {
        public Loan()
        {
            if (Payments == null)
                Payments = new List<Payment>();
            if (PaymentsPlanned == null)
                PaymentsPlanned = new List<PaymentPlanned>();
        }

        [Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LoanID { get; set; }

        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [Display(Name = "თანხა")]
        public double LoanAmount { get; set; }

        /// სესხის სავარაუდო მიზანი
        [Display(Name = "სავარაუდო მიზანი")]
        public string LoanPurpose { get; set; }

        /// სესხის დღიური პროცენტი
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [Display(Name = "დღიური პროცენტი")]
        public double LoanDailyInterestRate { get; set; }

        /// სესხის ვადა (დღეები)
        [Display(Name = "ვადა (დღეები)")]
        public int LoanTermDays { get; set; }

        /// სამუშაო დღეების რაოდენობა სესხის პერიოდში (?)
        [Display(Name = "სამუშაო დღეების")]
        public int NetworkDays { get; set; }

        /// საშეღავათო პერიოდი
        [Display(Name = "საშეღავათო პერიოდი")]
        public int DaysOfGrace { get; set; }

        /// ჯარიმა (პროცენტი)
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [Display(Name = "ჯარიმა")]
        public double LoanPenaltyRate { get; set; } // ჯარიმა

        /// ეფექტური პროცენტი
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [Display(Name = "ეფექტური პროცენტი")]
        public double EffectiveInterestRate { get; set; } // ეფექტური პროცენტი

        /// სულ მოსატანი
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [Display(Name = "სულ მოსატანი")]
        public double AmountToBePaidAll { get; set; }

        /// დღეში გადასახადი
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = true)]
        [Display(Name = "დღეში გადასახადი")]
        public double AmountToBePaidDaily { get; set; }

        /// გენერალური ხელშეკრულების თარიღი
        [Display(Name = "ხელშეკრულების თარიღი")]
        [DisplayFormat(DataFormatString = "{0:dd-MMM-yyyy}")]
        public DateTime AgreementDate { get; set; }

        /// სესხის დაწყების თარიღი
        [Display(Name = "დაწყების თარიღი")]
        [DisplayFormat(DataFormatString = "{0:dd-MMM-yyyy}")]
        public DateTime LoanStartDate { get; set; }

        /// სესხის დამთავრების თარიღი
        [Display(Name = "დამთავრების თარიღი")]
        [DisplayFormat(DataFormatString = "{0:dd-MMM-yyyy}")]
        public DateTime LoanEndDate { get; set; }

        public virtual ICollection<Guarantor> Guarantors { get; set; }

        /// ხელშეკრულება (ხელშ. #)
        [Display(Name = "ხელშეკრულების ნომერი")]
        public virtual string Agreement { get; set; }

        /// სესხის სტატუსი (მიმდინარე, დახურული)
        [Display(Name = "სტატუსი")]
        public virtual LoanStatus LoanStatus
        {
            get
            {
                return LoanStatus.Active;
            }
            private set { }
        }

        /// გადახდები
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<PaymentPlanned> PaymentsPlanned { get; set; }


        /// სესხის გამცემი (საკრედიტო ექსპერტი)
        public virtual CreditExpert CreditExpert { get; set; }

        public virtual Account Account { get; set; }

        public int BranchID { get; set; }
    }
}
