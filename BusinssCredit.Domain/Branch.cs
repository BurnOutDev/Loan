using System.Collections.Generic;

namespace BusinessCredit.Domain
{
    public class Branch
    {
        public int BranchID { get; set; }
        public string BranchName { get; set; }
        public ICollection<string> UserIdentities { get; set; }

        public virtual ICollection<Loan> Loans { get; set; }
        public virtual ICollection<CreditExpert> Employees { get; set; }
        public virtual ICollection<Account> Accounts { get; set; }
    }
}
