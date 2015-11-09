using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class LoanStaticPropertiesModel
    {
        public int LoanID { get; set; }

        public string LoanPurpose { get; set; }
        public string Comment { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? LoanAgreementDate { get; set; }
        public string LoanAgreement { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? NotificationLetterDate { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode=true)]
        public DateTime? ProblemManagerDate { get; set; }
        public string ProblemManager { get; set; }

        public int branch { get; set; }
    }
}