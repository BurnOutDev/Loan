using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BusinessCredit.Domain;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class AccountLoanViewModel
    {
        public Account Account { get; set; }
        public Loan Loan { get; set; }
    }
}