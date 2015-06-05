using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class PaymentPlanned
    {
        [Key]
        public int PaymentID { get; set; }
        public DateTime PaymentDate { get; set; }
        public double StartingBalance { get; set; }
        public double PaymentAmount { get; set; }
        public double Interest { get; set; }
        public double Principal { get; set; }
        public double EndingBalance { get; set; }

        public Loan Loan { get; set; }

        public void Init()
        {
            #region StartingBalance
            var res = Loan.PaymentsPlanned.FirstOrDefault(p => p.PaymentID == PaymentID - 1);

            if (res != null)
                StartingBalance = res.EndingBalance;
            else
                StartingBalance = Loan.LoanAmount;
            #endregion

            #region Interest
            Interest = Loan.LoanDailyInterestRate * StartingBalance;
            #endregion

            #region PaymentAmount
            if (Loan.Payments.Count >= 1)
                PaymentAmount = -Financial.Pmt(Loan.LoanDailyInterestRate, Loan.LoanTermDays, Loan.LoanAmount);
            else
                PaymentAmount = Interest;
            #endregion

            #region Principal
            Principal = PaymentAmount - Interest;
            #endregion

            #region EndingBalance
            EndingBalance = StartingBalance - Principal;
            #endregion
        }
    }
}
