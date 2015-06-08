using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Core.LoanCalculator
{
    public class LoanModel
    {
        public double Amount { get; set; }
        public double DailyInterestRate { get; set; }
        public int TermDays { get; set; }
        public int DaysOfGrace { get; set; }
        public DateTime StartDate { get; set; }

        public ICollection<PaymentModel> Payments { get; set; }
    }
}
