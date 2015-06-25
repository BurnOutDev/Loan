using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class CashCollectionAgent
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CashCollectionAgentID { get; set; }

        [Display(Name = "სახელი")]
        public string Name { get; set; }

        [Display(Name = "გვარი")]
        public string LastName { get; set; }

        [Display(Name = "პირადი ნომერი")]
        public string PrivateNumber { get; set; }
    }
}
