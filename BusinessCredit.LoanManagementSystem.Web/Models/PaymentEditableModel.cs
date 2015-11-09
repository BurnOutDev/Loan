using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class PaymentEditableModel
    {
        [Display(Name = "გადახდის #")]
        public int PaymentID { get; set; }

        [Display(Name = "სშო #")]
        public string TaxOrderID { get; set; }

        [Display(Name = "ინკასატორის #")]
        public int? CashCollectorID { get; set; }

        [Display(Name = "მიმდ. დავალ.")]
        public double? CurrentDebt { get; set; }

        [Display(Name = "სულ განულება")]
        public double? WholeDebt { get; set; }

        [Display(Name = "მიმდ. გადახდა")]
        public double? CurrentPayment { get; set; }

        [Display(Name = "საწყისი გეგმ. ნაშთი")]
        public double? StartingPlannedBalance { get; set; }

        [Display(Name = "ინკასატორის #")]
        public double? StartingBalance { get; set; }

        [Display(Name = "გეგმ. ნაშთი")]
        public double? PlannedBalance { get; set; }

        [Display(Name = "გადასახ. %")]
        public double? PayableInterest { get; set; }

        [Display(Name = "გადასახ. ძირი")]
        public double? PayablePrincipal { get; set; }

        [Display(Name = "მიმდ. ვად. ძირი")]
        public double? CurrentOverduePrincipal { get; set; }

        [Display(Name = "მიმდ. ვად. %")]
        public double? CurrentOverdueInterest { get; set; }

        [Display(Name = "მიმდ. ჯარიმა")]
        public double? CurrentPenalty { get; set; }

        [Display(Name = "დაგრ. ვადაგ. ძირი")]
        public double? AccruingOverduePrincipal { get; set; }

        [Display(Name = "დაგ. ვადაგ. %")]
        public double? AccruingOverdueInterest { get; set; }

        [Display(Name = "დაგრ. ჯარიმა")]
        public double? AccruingPenalty { get; set; }

        [Display(Name = "დაგრ. ჯარიმის. გადახდა")]
        public double? AccruingPenaltyPayment { get; set; }

        [Display(Name = "დაგრ. %-ის გადახდა")]
        public double? AccruingInterestPayment { get; set; }

        [Display(Name = "დაგრ. ძირის გადახდა")]
        public double? AccruingPrincipalPayment { get; set; }

        [Display(Name = "მიმდ. %-ის გადახდა")]
        public double? CurrentInterestPayment { get; set; }

        [Display(Name = "მიმდ. ძირის გადახდა")]
        public double? CurrentPrincipalPayment { get; set; }

        [Display(Name = "ძირი წინსწრ.")]
        public double? PrincipalPrepaymant { get; set; }

        [Display(Name = "გადახდ. %")]
        public double? PaidInterest { get; set; }

        [Display(Name = "გადახდ. ჯარიმა")]
        public double? PaidPenalty { get; set; }

        [Display(Name = "გადახდ. ძირი")]
        public double? PaidPrincipal { get; set; }

        [Display(Name = "წინსწრ. გადახდ. ძირი")]
        public double? PrincipalPrepaid { get; set; }

        [Display(Name = "სესხის ნაშთი")]
        public double? LoanBalance { get; set; }

        [Display(Name = "გრაფიკზე დაწევა")]
        public double? ScheduleCatchUp { get; set; }

        [Display(Name = "აღს. და სასამ.ხარჯი")]
        public double? EnforcementAndCourtFee { get; set; }

        [Display(Name = "აღს. და სას.ხარჯის გადახდა")]
        public double? EnforcementAndCourtFeePayment { get; set; }

        [Display(Name = "აღსრულების ხარჯის საწყ. ნაშთი")]
        public double? EnforcementAndCourtFeeStartingBalance { get; set; }

        [Display(Name = "აღსრულების ხარჯის საბ. ნაშთი")]
        public double? EnforcementAndCourtFeeEndingBalance { get; set; }

        [Display(Name = "აღსრულების ხარჯი სულ")]
        public double? TotalEnforcementAndCourtFee { get; set; }

        [Display(Name = "აღსრულების ხარჯის გადახდა სულ")]
        public double? TotalEnforcementAndCourtFeePayment { get; set; }

        [Display(Name = "კომენტარი")]
        public string Comment { get; set; }

        public int branch { get; set; }
    }
}