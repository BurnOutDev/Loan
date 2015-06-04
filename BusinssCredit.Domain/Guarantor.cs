using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class Guarantor
    {
        [Key]
        public int GuarantorID { get; set; }

        [Display(Name = "თავდების სახელი")]
        public string GuarantorName { get; set; }

        [Display(Name = "თავდების გვარი")]
        public string GuarantorLastName { get; set; }

        [Display(Name = "თავდების პ. ნ.")]
        public string GuarantorPrivateNumber { get; set; }

        [Display(Name = "თავდების მისამართი")]
        public string GuarantorPhysicalAddress { get; set; }

        [Display(Name = "თავდების ტელეფონი")]
        public string GuarantorPhoneNumber { get; set; }

        public Loan Loan { get; set; }
    }
}
