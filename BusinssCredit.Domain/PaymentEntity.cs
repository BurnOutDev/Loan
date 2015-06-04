using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class PaymentEntity
    {

        [Key]
        public int PaymentEntityID { get; set; }

        public DateTime PaymentDate { get; set; }
        public double StartingPrincipal { get; set; }
        public double Deposit { get; set; }
        public double PaymentInterest { get; set; }
        public double PaymentPrincipal { get; set; }
        public double EndingPrincipal { get; set; }
        public PaymentEntity PrevPayment { get; set; }

        public virtual Loan Loan { get; set; }
    }
}
