using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public class Account
    {
        [Key]
        public int AccountID { get; set; }

        /// ანგარიშის მფლობელი (ინფორმაცია)
        public virtual AccountHolder AccountHolder { get; set; }

        /// სესხები
        public virtual ICollection<Loan> Loans { get; set; }
    }
}
