﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class TaxOrder
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TaxOrderID { get; set; }
        public int TaxOrderNumber { get; set; }
        public string Date { get; set; }
        public int? PaymentAmountLari { get; set; }
        public int? PaymentAmountTetri { get; set; }
        public string PaymentAmountString { get; set; }
        public string Basis { get; set; }
        public string AccountFirstName { get; set; }
        public string AccountLastName { get; set; }
        public string AccountPrivateNumber { get; set; }
        public string Payer { get; set; }
        public string CollectorFirstName { get; set; }
        public string CollectorLastName { get; set; }
        public string CollectorPrivateNumber { get; set; }
    }
}
