using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class CreditExpert : Employee
    {
        public virtual Branch Branch { get; set; }
        public virtual ICollection<Loan> Loans { get; set; }
    }
}
