using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.LoanCalculator.Core
{
    public class LoanModel
    {
        public double StartingBalance { get; set; }
        public double InterestRate { get; set; }
        public int Days { get; set; }
        public int DaysOfGrace { get; set; }
        public DateTime StartingDate { get; set; }

        public ICollection<PaymentModel> Payments { get; set; }
    }
}
