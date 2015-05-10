using BusinessCredit.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class ClientViewModel
    {
        public int AccountID { get; set; }

        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
        public virtual Gender Gender { get; set; }
        public virtual PersonType Status { get; set; }
        public string PhysicalAddress { get; set; }
        public string NumberMobile { get; set; }
        public string AccountNumber { get; set; }

        public string BusinessPhysicalAddress { get; set; }

        public virtual ICollection<LoanViewModel> Loans { get; set; }
    }
}