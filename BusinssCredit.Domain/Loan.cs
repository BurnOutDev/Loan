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

        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = false)]
        [Display(Name = "თანხა")]
        public double LoanAmount { get; set; }

        /// სესხის სავარაუდო მიზანი
        [Display(Name = "სავარაუდო მიზანი")]
        public string LoanPurpose { get; set; }

        /// სესხის დღიური პროცენტი
        [DisplayFormat(DataFormatString = "{0:P4}", ApplyFormatInEditMode = false)]
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
        [DisplayFormat(DataFormatString = "{0:P}", ApplyFormatInEditMode = false)]
        [Display(Name = "ჯარიმა")]
        public double LoanPenaltyRate { get; set; } // ჯარიმა

        /// ეფექტური პროცენტი
        [DisplayFormat(DataFormatString = "{0:P4}", ApplyFormatInEditMode = false)]
        [Display(Name = "ეფექტური პროცენტი")]
        public double EffectiveInterestRate { get; set; } // ეფექტური პროცენტი

        /// სულ მოსატანი
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = false)]
        [Display(Name = "სულ მოსატანი")]
        public double AmountToBePaidAll { get; set; }

        /// დღეში გადასახადი
        [DisplayFormat(DataFormatString = "{0:N}", ApplyFormatInEditMode = false)]
        [Display(Name = "დღეში გადასახადი")]
        public double AmountToBePaidDaily { get; set; }

        /// გენერალური ხელშეკრულების თარიღი
        [Display(Name = "ხელშეკრულების თარიღი")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime AgreementDate { get; set; }

        /// სესხის დაწყების თარიღი
        [Display(Name = "დაწყების თარიღი")]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime LoanStartDate { get; set; }

        /// სესხის დამთავრების თარიღი
        [Display(Name = "დამთავრების თარიღი")]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime LoanEndDate { get; set; }

        public virtual ICollection<Guarantor> Guarantors { get; set; }

        /// ხელშეკრულება (ხელშ. #)
        [Display(Name = "ხელშეკრულების ნომერი")]
        public virtual string Agreement { get; set; }

        /// სესხის სტატუსი (მიმდინარე, დახურული)
        [Display(Name = "სტატუსი")]
        public virtual LoanStatus LoanStatus
        {
            get; set;
            //get
            //{ 
            //    //if (Payments.OrderByDescending(p => p.PaymentDate).FirstOrDefault().WholeDebt > 0)
            //    //    return LoanStatus.Active;
            //    //else
            //    //    return LoanStatus.Closed;
            //    return Payments.OrderByDescending(p => p.PaymentDate).FirstOrDefault().WholeDebt > 0 ? LoanStatus.Active: LoanStatus.Closed;
            //}
            //private set { }
        }

        #region Enforcement
        [Display(Name = "გაბრთ. წერილ. თარ")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? LoanNotificationLetter { get; set; }

        [Display(Name = "პრობ. გად. თარ.")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? ProblemManagerDate { get; set; }

        [Display(Name = "პრობ. მენეჯერი")]
        public string ProblemManager { get; set; } // Name LastName

        [Display(Name = "აღსრულ. გად. თარ.")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? DateOfEnforcement { get; set; }

        [Display(Name = "აღსრ. და სასამ. ხარჯი")]
        public double CourtAndEnforcementFee { get; set; }
        #endregion

        /// გადახდები
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<PaymentPlanned> PaymentsPlanned { get; set; }


        /// სესხის გამცემი (საკრედიტო ექსპერტი)
        public virtual CreditExpert CreditExpert { get; set; }

        public virtual Account Account { get; set; }

        public int BranchID { get; set; }

        public string Comment { get; set; }
    }
}
