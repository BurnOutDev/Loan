using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class ChangePaymentModel
    {
        [Display(Name = "გადახდის #")]
        public int ID { get; set; }

        [Display(Name = "ფილიალის #")]
        public int BranchID { get; set; }

        [Display(Name = "გადახდილი")]
        public double Payment { get; set; }

        [Display(Name = "ძველი ჯარიმა")]
        public double OldPenalty { get; set; }

        [Display(Name = "ახალი ჯარიმა")]
        public double NewPenalty { get; set; }
    }
}