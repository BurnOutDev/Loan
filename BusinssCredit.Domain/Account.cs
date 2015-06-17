using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BusinessCredit.Domain
{
    public class Account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AccountID { get; set; }

        [Display(Name = "სახელი")]
        public string Name { get; set; }

        [Display(Name = "გვარი")]
        public string LastName { get; set; }

        [Display(Name = "პირადი ნომერი")]
        public string PrivateNumber { get; set; }

        [Display(Name = "სქესი")]
        public virtual Gender Gender { get; set; }

        [Display(Name = "სტატუსი")]
        public virtual PersonType Status { get; set; }

        [Display(Name = "მისამართი")]
        public string PhysicalAddress { get; set; }

        [Display(Name = "ტელეფონი")]
        public string NumberMobile { get; set; }

        [Display(Name = "ანგარიშის ნომერი")]
        public string AccountNumber { get; set; }

        [Display(Name = "ბიზნესის ფის. მისამართი")]
        public string BusinessPhysicalAddress { get; set; }
        
        public virtual ICollection<Loan> Loans { get; set; }
        public int BranchID { get; set; }
    }
}
