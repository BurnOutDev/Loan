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
        [Key]
        public int LoanID { get; set; }

        /// ხელშეკრულება (ხელშ. #)
        public Agreement Agreement { get; set; }

        /// სესხის სტატუსი (მიმდინარე, დახურული)
        public virtual LoanStatus LoanStatus { get; set; }

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

        /// გენერალური ხელშეკრულების თარიღი
        public DateTime AgreementDate { get; set; }

        /// სესხის დაწყების თარიღი
        public DateTime LoanStartDate { get; set; }

        /// სესხის დამთავრების თარიღი
        public DateTime LoanEndDate { get; set; }

        /// გადახდები
        public virtual ICollection<Payment> Payments { get; set; }
        public virtual Guarantor Guarantor { get; set; }
        public virtual Branch Branch { get; set; }

        /// სესხის გამცემი (საკრედიტო ექსპერტი)
        public virtual Employee CreditExpert { get; set; }

    }
}
