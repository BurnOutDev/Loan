using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class GuarantorViewModel
    {
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
    }
}