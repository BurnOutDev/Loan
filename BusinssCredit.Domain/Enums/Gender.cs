using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public enum Gender
    {
        [Description("მამრ.")]
        [Display(Name = "მამრ.")]
        Male = 1,
        [Description("მდედრ.")]
        [Display(Name = "მდედრ.")]
        Female = 2
    }
}
