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
        public void PlanLoan()
        {
            PaymentsPlanned = new List<PaymentPlanned>();

            for (int i = 1; i <= LoanTermDays; i++)
            {
                var payment = new PaymentPlanned() { PaymentID = i, Loan = this };
                PaymentsPlanned.Add(payment);
                payment.Init();
            }
        }

        public void AddPayment(Payment pmt)
        {
            pmt.Loan = this;
            pmt.Branch = this.Branch;
            Payments.Add(pmt);
        }

        public void Initialize()
        {
            if (Payments == null || Payments.Count == 0)
            {
                Payments = new List<Payment>();

                //for (int i = 0; i < LoanTermDays; i++)
                //    Payments.Add(new Payment()
                //    {
                //        PaymentID = i + 1,
                //        Loan = this,
                //        CurrentPayment = 0
                //    });
            }
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int LoanID { get; set; }

        [Display(Name = "თანხა")]
        public double LoanAmount { get; set; }

        /// სესხის სავარაუდო მიზანი
        [Display(Name = "სავარაუდო მიზანი")]
        public string LoanPurpose { get; set; }

        /// სესხის დღიური პროცენტი
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
        [Display(Name = "ჯარიმა")]
        public double LoanPenaltyRate { get; set; } // ჯარიმა

        /// ეფექტური პროცენტი
        [Display(Name = "ეფექტური პროცენტი")]
        public double EffectiveInterestRate { get; set; } // ეფექტური პროცენტი

        /// სულ მოსატანი
        [Display(Name = "სულ მოსატანი")]
        public double AmountToBePaidAll { get; set; }

        /// დღეში გადასახადი
        [Display(Name = "დღეში გადასახადი")]
        public double AmountToBePaidDaily { get; set; }

        public double CurrentDebt
        {
            get
            {
                return -1;
                return Payments.Where(p => p.Loan.LoanID == this.LoanID).OrderByDescending(x => x.PaymentDate).FirstOrDefault().CurrentDebt.Value;
            }
            private set { }
        } // --

        public double WholeDebt
        {
            get
            {
                return -1;
                return Payments.Where(p => p.Loan.LoanID == this.LoanID).OrderByDescending(x => x.PaymentDate).FirstOrDefault().WholeDebt.Value;
            }
            private set { }
        }  // --

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
        [Display(ResourceType = typeof(Agreement))]
        public virtual Agreement Agreement { get; set; }

        /// სესხის სტატუსი (მიმდინარე, დახურული)
        [Display(Name = "სტატუსი")]
        public virtual LoanStatus LoanStatus
        {
            get
            {
                return this.WholeDebt > 0 ? LoanStatus.Active : LoanStatus.Closed;
            }
            private set { }
        }

        /// გადახდები
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<PaymentPlanned> PaymentsPlanned { get; set; }

        public virtual Branch Branch { get; set; }

        /// სესხის გამცემი (საკრედიტო ექსპერტი)
        public virtual CreditExpert CreditExpert { get; set; }

        public virtual Account Account { get; set; }
    }
}
