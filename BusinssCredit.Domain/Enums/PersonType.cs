using System.ComponentModel.DataAnnotations;

namespace BusinessCredit.Domain
{
    public enum PersonType
    {
        [Display(Name = "ფიზიკური პირი")]
        PhysicalPerson = 1,
        [Display(Name = "ინდ. მეწარმე")]
        IndividualEntrepreneur = 2,
        [Display(Name = "მიკრო მეწარმე")]
        MicroEntrepreneur = 3
    }
}
