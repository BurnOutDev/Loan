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
        public Loan()
        {

        }

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

        public void Initialize()
        {
            if (Payments == null || Payments.Count == 0)
            {
                Payments = new List<Payment>();

                for (int i = 0; i < LoanTermDays; i++)
                    Payments.Add(new Payment()
                    {
                        PaymentID = i + 1,
                        Loan = this,
                        CurrentPayment = 60
                    });
            }
        }

        [Key]
        public int LoanID { get; set; }

        /// სესხის თანხა
        public double LoanAmount { get; set; }

        /// სესხის სავარაუდო მიზანი
        public string LoanPurpose { get; set; }

        /// სესხის დღიური პროცენტი
        public double LoanDailyInterestRate { get; set; }

        /// სესხის ვადა (დღეები)
        public int LoanTermDays { get; set; }

        /// სამუშაო დღეების რაოდენობა სესხის პერიოდში (?)
        public int NetworkDays { get; set; }

        /// საშეღავათო პერიოდი
        public int DaysOfGrace { get; set; }

        /// ჯარიმა (პროცენტი)
        public double LoanPenaltyRate { get; set; } // ჯარიმა

        /// ეფექტური პროცენტი
        public double EffectiveInterestRate { get; set; } // ეფექტური პროცენტი

        /// სულ მოსატანი
        public double AmountToBePaidAll { get; set; }

        /// დღეში გადასახადი
        public double AmountToBePaidDaily { get; set; }

        public double CurrentDebt
        {
            get
            {
                return Payments.FirstOrDefault(x => x.PaymentDate.Date == DateTime.Now.Date).CurrentDebt.Value;
            }
        } // --

        public double WholeDebt
        {
            get
            {
                return Payments.FirstOrDefault(x => x.PaymentDate.Date == DateTime.Now.Date).WholeDebt.Value;
            }
        }  // --

        /// გენერალური ხელშეკრულების თარიღი
        public DateTime AgreementDate { get; set; }

        /// სესხის დაწყების თარიღი
        public DateTime LoanStartDate { get; set; }

        /// სესხის დამთავრების თარიღი
        public DateTime LoanEndDate { get; set; }

        public string GuarantorName { get; set; }
        public string GuarantorLastName { get; set; }
        public string GuarantorPrivateNumber { get; set; }
        public string GuarantorPhysicalAddress { get; set; }
        public string GuarantorPhoneNumber { get; set; }

        /// ხელშეკრულება (ხელშ. #)
        public virtual Agreement Agreement { get; set; }

        /// სესხის სტატუსი (მიმდინარე, დახურული)
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
