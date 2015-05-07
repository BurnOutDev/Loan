using System;
using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public class Payment
    {
        [Key]
        public int PaymentID { get; set; }

        /// ჩგდ #/ჩეკი/ TBC Pay/სშო
        public string TaxOrderID { get; set; }

        /// 
        public double StartingBalance { get; set; }
        public double EndingBalance { get; set; }

        public double PaymentAmount { get; set; }
        public double Percent { get; set; }
        public double Principal { get; set; } //ძირი
        public double CalculatedPercent
        {
            get
            {
                return StartingBalance * Percent;
            }
        }
        public double GetPrincipal()
        {
            if (PaymentID > Loan.DaysOfGrace)
            {
                return (PaymentAmount - CalculatedPercent);
            }
            return 0;
        }
        public DateTime PaymentDate { get; set; }

        public virtual Loan Loan { get; set; }
    }
}
