using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public class AccountHolder
    {
        [Key]
        public int AccountHolderID { get; set; }

        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
        public virtual Gender Gender { get; set; }
        public virtual PersonType Status { get; set; }
        public string PhysicalAddress { get; set; }
        public string NumberMobile { get; set; }
        public string AccountNumber { get; set; }

        public virtual Business Business { get; set; }
        public virtual Account Account { get; set; }
    }
}
