using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models.Json
{
    public class CollectorJson
    {
        public int CashCollectionAgentID { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
    }
}