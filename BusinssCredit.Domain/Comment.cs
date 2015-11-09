using BusinessCredit.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain
{
    public class Comment
    {
        [Key]
        public int CommentID { get; set; }

        public DateTime CommentDate { get; set; }
        public int LoanID { get; set; }
        public DateTime PaymentDate { get; set; }
        public CommentType Type { get; set; }
        public string Content { get; set; }
        public Branch Branch { get; set; }
    }
}
