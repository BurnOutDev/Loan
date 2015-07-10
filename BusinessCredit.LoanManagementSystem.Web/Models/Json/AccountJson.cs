using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models.Json
{
    public class AccountJson
    {
        public int AccountID { get; set; }

        public string Name { get; set; }

        public string LastName { get; set; }

        public string PrivateNumber { get; set; }

        public string Gender { get; set; }

        public string Status { get; set; }

        public string PhysicalAddress { get; set; }

        public string NumberMobile { get; set; }

        public string AccountNumber { get; set; }

        public string BusinessPhysicalAddress { get; set; }
    }
}