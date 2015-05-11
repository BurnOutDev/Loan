using Microsoft.VisualBasic;
using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public class Loan
    {
        public void PlanLoan()
        {
            PlannedPaymentEntities = new List<PaymentEntity>();

            for (int i = 0; i < LoanTermDays; i++)
            {
                PlannedPaymentEntities.Add(
                    new PaymentEntity()
                    {
                        PaymentEntityID = i + 1,
                        PaymentDate = LoanStartDate.Date.AddDays(i),
                        Loan = this
                    }
                    );
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
                return Payments.FirstOrDefault(x => x.PaymentDate.Date == DateTime.Now.Date).CurrentDebt.Value;
            }
        } // --

        public double WholeDebt
        {
            get
            {
                return -1;
                return Payments.FirstOrDefault(x => x.PaymentDate.Date == DateTime.Now.Date).WholeDebt.Value;
            }
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

        [Display(Name = "თავდების სახელი")]
        public string GuarantorName { get; set; }
        [Display(Name = "თავდების გვარი")]
        public string GuarantorLastName { get; set; }
        [Display(Name = "თავდების პ. ნ.")]
        public string GuarantorPrivateNumber { get; set; }
        [Display(Name = "თავდების მისამართი")]
        public string GuarantorPhysicalAddress { get; set; }
        [Display(Name = "თავდების ტელეფონი")]
        public string GuarantorPhoneNumber { get; set; }

        /// ხელშეკრულება (ხელშ. #)
        [Display(ResourceType = typeof(Agreement))]
        public virtual Agreement Agreement { get; set; }

        /// სესხის სტატუსი (მიმდინარე, დახურული)
        [Display(Name = "სტატუსი")]
        public virtual LoanStatus LoanStatus { get; set; }



        /// გადახდები
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual ICollection<PaymentEntity> PlannedPaymentEntities { get; set; }

        public virtual Branch Branch { get; set; }

        /// სესხის გამცემი (საკრედიტო ექსპერტი)
        public virtual CreditExpert CreditExpert { get; set; }

        public virtual Account Account { get; set; }
    }
}
