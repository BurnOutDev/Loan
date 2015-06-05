using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class CreateLoanViewModel
    {
        public int AccountID { get; set; }
        public int TermDays { get; set; }
        public double Amount { get; set; }
        public double DailyInterestRate { get; set; }
    }
}