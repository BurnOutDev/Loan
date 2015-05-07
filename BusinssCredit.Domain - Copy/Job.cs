using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public class Job
    {
        [Key]
        public int JobID { get; set; }
        public string JobName { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
