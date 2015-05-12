using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public enum Gender
    {
        [Display(Name = "მამრ.")]
        Male = 1,
        [Display(Name = "მდედრ.")]
        Female = 2
    }
}