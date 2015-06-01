using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class PMTViewModel
    {
        public int LoanId { get; set; }
        public string TaxOrderId { get; set; }
        public double CurrentPayment { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}