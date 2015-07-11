using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models.Json
{
    public class GuarantorJson
    {
        public string GuarantorName { get; set; }
        public string GuarantorLastName { get; set; }
        public string GuarantorPrivateNumber { get; set; }
        public string GuarantorPhysicalAddress { get; set; }
        public string GuarantorPhoneNumber { get; set; }
    }
}