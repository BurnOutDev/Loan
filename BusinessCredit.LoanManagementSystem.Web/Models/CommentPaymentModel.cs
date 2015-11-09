using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class CommentPaymentModel
    {
        public int ClientID { get; set; }
        public int LoanID { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
        public string BusinessAdress { get; set; }
        public string PhoneNumber { get; set; }
        public double PMT { get; set; }
        public double CurrentDebt { get; set; }
        public double WholeDebt { get; set; }
        public double CurrentPayment { get; set; }
        public string PaymentDate { get; set; }
        public string Agreement { get; set; }
        public double OverdueAmount { get; set; }
        public string CommentType { get; set; }
        public string Comment { get; set; }
        public int CommentID { get; set; }
    }
}