using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.LoanCalculator.Core
{
    public class PaymentModel
    {
        public int PaymentID { get; set; }
        public DateTime PaymentDate { get; set; }
        public double StartingBalance { get; set; }
        public double PaymentAmount { get; set; }
        public double Interest { get; set; }
        public double Principal { get; set; }
        public double EndingBalance { get; set; }

        public LoanModel Loan { get; set; }

        public PaymentModel Init()
        {
            #region StartingBalance
            var res = Loan.Payments.FirstOrDefault(p => p.PaymentID == PaymentID - 1);

            if (res != null)
                StartingBalance = res.EndingBalance;
            else
                StartingBalance = Loan.StartingBalance; 
            #endregion

            #region Interest
            Interest = Loan.InterestRate * StartingBalance;
	        #endregion

            #region PaymentAmount
		    if (Loan.Payments.Count >= 1)
                PaymentAmount = -Financial.Pmt(Loan.InterestRate, Loan.Days, Loan.StartingBalance);
            else
                PaymentAmount = Interest; 
	        #endregion

            #region Principal
            Principal = PaymentAmount - Interest;
	        #endregion

            #region EndingBalance
		    EndingBalance = StartingBalance - Principal;
	        #endregion
            return this;
        }
    }
}