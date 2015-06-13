using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain.Enums
{
    public enum Branches
    {
        [Display(Name = "ცენტრალური")]
        Central = 1,
        [Display(Name = "ისანი")]
        Isani = 2,
        [Display(Name = "ოკრიბა")]
        Okriba = 3,
        [Display(Name = "ლილო")]
        Lilo = 4,
        [Display(Name = "ელიავა")]
        Eliava = 5,
        [Display(Name = "ვაგზალი")]
        Vagzali = 6
    }
}
