using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class EditEnforcementLoanModel
    {
        public int LoanID { get; set; }

        [DataType(DataType.Date)]
        public DateTime? LoanEnforcementDate { get; set; }
        public double EnforcementAndCourtFee { get; set; }

        public int branch { get; set; }
    }
}