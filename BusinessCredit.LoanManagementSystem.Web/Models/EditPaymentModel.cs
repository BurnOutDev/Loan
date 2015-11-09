using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class EditPaymentModel
    {
        public int PaymentID { get; set; }
        public double CurrentPayment { get; set; }
        public double? AccruingPenalty { get; set; }
        public double? LoanBalance { get; set; }
        public double? PayableInterest { get; set; }
    }
}