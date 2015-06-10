using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class LoanIssueReportModel
    {
        public DateTime LoanStartDate { get; set; }
        public double LoanAmount { get; set; }
        public int LoanCount { get; set; }
    }
}