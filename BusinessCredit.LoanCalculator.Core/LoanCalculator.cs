using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.LoanCalculator.Core
{
    public static class LoanCalculator
    {
        public static LoanModel Calculate(LoanModel loan)
        {
            loan.Payments = new List<PaymentModel>();

            for (int i = 1; i <= loan.TermDays; i++)
            {
                var payment = new PaymentModel() { PaymentID = i, Loan = loan };
                loan.Payments.Add(payment);
                payment.Init();
            }

            return loan;
        }
    }
}