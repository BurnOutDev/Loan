using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class Guarantor
    {
        public int GuarantorID { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivateNumber { get; set; }
        public string PhysicalAddress { get; set; }
        public string PhoneNumber { get; set; }
    }
}
