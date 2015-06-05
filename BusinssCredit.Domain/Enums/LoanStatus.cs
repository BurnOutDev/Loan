using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public enum LoanStatus
    {
        [Display(Name = "მიმდინარე")]
        Active = 1,
        [Display(Name = "დახურული")]
        Closed = 0
    }
}