using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public enum LoanStatus
    {
        [Display(Name = "მიმდინარე")]
        Active,
        [Display(Name = "დახურული")]
        Closed
    }
}