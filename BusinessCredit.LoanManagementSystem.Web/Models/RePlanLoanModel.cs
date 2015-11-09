using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class RePlanLoanModel
    {
        public int LoanID { get; set; }

        public double LoanAmount { get; set; }
        public double DailyInterestRate { get; set; }
        public int LoanTermDays { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime LoanStartDate { get; set; }

        public int branch { get; set; }
    }
}