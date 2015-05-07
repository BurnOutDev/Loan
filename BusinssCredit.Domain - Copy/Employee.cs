using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public abstract class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string PrivatNumber { get; set; }
        public string Address { get; set; }
        public string NumberMobile { get; set; }
        public string NumberHome { get; set; }
        public string EmailWork { get; set; }
        public string EmailPrivate { get; set; }
        public virtual Job Job { get; set; }
        public DateTime HireDate { get; set; }
        public DateTime RetireDate { get; set; }
        public virtual EmployeeStatus Status { get; set; }
    }
}
