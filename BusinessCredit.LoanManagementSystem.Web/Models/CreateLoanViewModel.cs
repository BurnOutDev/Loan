﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using BusinessCredit.Domain;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class CreateLoanViewModel
    {
        [Display(Name="სესხის ID")]
        public int LoanID { get; set; }
        [Display(Name="მსესხებლის ID")]
        public int AccountID { get; set; }

        [Display(Name="ვადა")]
        public int TermDays { get; set; }

        [Display(Name="თანხა")]
        public double Amount { get; set; }

        [Display(Name="სავარაუდო მიზანი")]
        public string LoanPurpose { get; set; }

        [Display(Name="დღიური პროცენტი")]
        public double DailyInterestRate { get; set; }

        public GuarantorViewModel Guarantor { get; set; }
    }
}
