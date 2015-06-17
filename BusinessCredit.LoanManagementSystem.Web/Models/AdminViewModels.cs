using BusinessCredit.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessCredit.LoanManagementSystem.Web.Models
{
    public class AdminClientsViewModel
    {
        public int AccountID { get; set; }

        [Display(Name = "სახელი")]
        public string Name { get; set; }

        [Display(Name = "გვარი")]
        public string LastName { get; set; }

        [Display(Name = "პირადი ნომერი")]
        public string PrivateNumber { get; set; }

        [Display(Name = "სქესი")]
        public virtual Gender Gender { get; set; }

        [Display(Name = "სტატუსი")]
        public virtual PersonType Status { get; set; }

        [Display(Name = "მისამართი")]
        public string PhysicalAddress { get; set; }

        [Display(Name = "ტელეფონი")]
        public string NumberMobile { get; set; }

        [Display(Name = "ანგარიშის ნომერი")]
        public string AccountNumber { get; set; }

        [Display(Name = "ბიზნესის ფის. მისამართი")]
        public string BusinessPhysicalAddress { get; set; }

        [Display(Name="ფილიალი")]
        public string Branch { get; set; }
    }

    //public class AdminPaymentsViewModel : Payment
    //{
    //    public int PaymentID { get; set; }

    //    [Display(Name = "სშო #")]
    //    public string TaxOrderID { get; set; }

    //    [Display(Name = "შენატანი")]
    //    public double CurrentPayment { get; set; }

    //    [Display(Name = "შენატანის თარიღი")]
    //    public DateTime PaymentDate { get; set; }

    //    #region CurrentDebt
    //    private double? _currentDebt;
    //    [Display(Name = "მიმდ. დავალიანება")]
    //    public double? CurrentDebt
    //    {
    //        get
    //        {
    //            if (!_currentDebt.HasValue)
    //                _currentDebt = Math.Round(InitCurrentDebt().Value, 2);
    //            return _currentDebt;
    //        }
    //        set { _currentDebt = value; }
    //    }

    //    private double? InitCurrentDebt()
    //    {
    //        Debug.WriteLine("CurrentDebt");
    //        var sum = PayableInterest + PayablePrincipal + AccruingOverduePrincipal + AccruingOverdueInterest + AccruingOverduePenalty;
    //        if (sum > WholeDebt)
    //            return WholeDebt;
    //        else
    //            return sum;
    //    }
    //    #endregion

    //    #region WholeDebt
    //    private double? _wholeDebt;
    //    [Display(Name = "სულ განულება")]
    //    public double? WholeDebt
    //    {
    //        get
    //        {
    //            if (!_wholeDebt.HasValue)
    //                _wholeDebt = Math.Round(InitWholeDebt().Value, 2);
    //            return _wholeDebt;
    //        }
    //        set { _wholeDebt = value; }
    //    }

    //    private double? InitWholeDebt()
    //    {
    //        Debug.WriteLine("WholeDebt");
    //        return LoanBalance + AccruingOverduePenalty + AccruingOverdueInterest + PayableInterest - CurrentInterestPayment - AccruingPenaltyPayment - AccruingInterestPayment;
    //    }
    //    #endregion

    //    #region StartingPlannedBalance
    //    private double? _startingPlannedBalance;
    //    [Display(Name = "საწყისი დაგეგმილი ნაშთი")]
    //    public double? StartingPlannedBalance
    //    {
    //        get
    //        {
    //            if (!_startingPlannedBalance.HasValue)
    //            {
    //                _startingPlannedBalance = Math.Round(InitStartingPlannedBalance().Value, 2);
    //            }
    //            return _startingPlannedBalance;
    //        }
    //        set { _startingPlannedBalance = value; }
    //    }

    //    private double? InitStartingPlannedBalance()
    //    {
    //        Debug.WriteLine("StartingPlannedBalance");
    //        return PlannedBalance + PayablePrincipal;
    //    }
    //    #endregion

    //    #region StartingBalance
    //    private double? _startingBalance;
    //    [Display(Name = "საწყისი ნაშთი")]
    //    public double? StartingBalance
    //    {
    //        get
    //        {
    //            if (!_startingBalance.HasValue)
    //                _startingBalance = Math.Round(InitStartingBalance().Value, 2);
    //            return _startingBalance;
    //        }
    //        set { _startingBalance = value; }
    //    }

    //    private double? InitStartingBalance()
    //    {
    //        Debug.WriteLine("StartingBalance");
    //        return Loan.LoanAmount - GetPaymentList().Sum(x => x.AccruingPrincipalPayment)
    //                 - GetPaymentList().Sum(x => x.CurrentPrincipalPayment)
    //                 - GetPaymentList().Sum(x => x.PrincipalPrepaymant);
    //    }
    //    #endregion

    //    #region PlannedBalance
    //    [Display(Name = "გეგმიური ნაშთი")]
    //    public double PlannedBalance
    //    {
    //        get
    //        {
    //            Debug.WriteLine("PlannedBalance");
    //            return Math.Round(Loan.PaymentsPlanned.FirstOrDefault(x => x.PaymentDate == PaymentDate).EndingBalance, 2);
    //        }
    //    } // გეგმიური ნაშთი 
    //    #endregion

    //    #region PayableInterest
    //    public double? _payableInterest;
    //    [Display(Name = "გადასახადი ძირი")]
    //    public double? PayableInterest
    //    {
    //        get
    //        {
    //            if (!_payableInterest.HasValue)
    //                _payableInterest = Math.Round(InitPayableInterest().Value, 2);
    //            return _payableInterest;
    //        }
    //        set { _payableInterest = value; }
    //    }

    //    private double? InitPayableInterest()
    //    {
    //        Debug.WriteLine("PayableInterest");
    //        var t = Math.Round((StartingBalance.Value * Loan.LoanDailyInterestRate), 2);
    //        return Math.Round((StartingBalance.Value * Loan.LoanDailyInterestRate), 2); //??
    //    }
    //    #endregion

    //    #region PayablePrincipal
    //    private double? _payablePrincipal;
    //    [Display(Name = "გადასახადი ძირი")]
    //    public double? PayablePrincipal
    //    {
    //        get
    //        {
    //            if (!_payablePrincipal.HasValue)
    //                _payablePrincipal = Math.Round(InitPayablePrincipal().Value, 2);
    //            return _payablePrincipal;
    //        }
    //        set { _payablePrincipal = value; }
    //    }

    //    private double? InitPayablePrincipal()
    //    {
    //        Debug.WriteLine("PayablePrincipal");

    //        //= IF(AJ7 < AA7, AJ7, AA7 - AL7)
    //        if (StartingBalance < Loan.AmountToBePaidDaily)
    //            return StartingBalance;
    //        else
    //            return Loan.AmountToBePaidDaily - PayableInterest;
    //    }
    //    #endregion

    //    #region CurrentOverduePrincipal
    //    private double? _currentOverduePrincipal;
    //    [Display(Name = "მიმდინარე ვადაგად. ძირი")]
    //    public double? CurrentOverduePrincipal
    //    {
    //        get
    //        {
    //            if (!_currentOverduePrincipal.HasValue)
    //                _currentOverduePrincipal = Math.Round(InitCurrentOverduePrincipal().Value, 2);
    //            return _currentOverduePrincipal;
    //        }
    //        set { _currentOverduePrincipal = value; }
    //    }

    //    private double? InitCurrentOverduePrincipal()
    //    {
    //        Debug.WriteLine("PayablePrincipal");
    //        //=$AM8 -$AX8
    //        return PayablePrincipal - CurrentPrincipalPayment;
    //    }
    //    #endregion

    //    #region CurrentOverdueInterest
    //    private double? _currentOverdueInterest;
    //    [Display(Name = "მიმდინარე ვადაგად. პროცენტი")]
    //    public double? CurrentOverdueInterest
    //    {
    //        get
    //        {
    //            if (!_currentOverdueInterest.HasValue)
    //                _currentOverdueInterest = Math.Round(InitCurrentOverdueInterest().Value, 2);
    //            return _currentOverdueInterest;
    //        }
    //        set { _currentOverdueInterest = value; }
    //    }

    //    private double? InitCurrentOverdueInterest()
    //    {
    //        Debug.WriteLine("CurrentOverdueInterest");
    //        //=ROUND($AL7-$AW7,2)
    //        return Math.Round(PayableInterest.Value - CurrentInterestPayment.Value, 2);
    //    }
    //    #endregion

    //    #region CurrentPenalty
    //    public double? _CurrentPenalty;
    //    [Display(Name = "მიმდინარე ჯარიმა")]
    //    public double? CurrentPenalty
    //    {
    //        get
    //        {
    //            if (!_CurrentPenalty.HasValue)
    //                _CurrentPenalty = Math.Round(InitCurrentPenalty().Value, 2);
    //            return _CurrentPenalty;
    //        }

    //        set { _CurrentPenalty = value; }
    //    }

    //    private double? InitCurrentPenalty()
    //    {
    //        Debug.WriteLine("CurrentPenalty");

    //        if (DateTime.Today.DayOfWeek == DayOfWeek.Sunday)
    //            return 0;
    //        else
    //            return Math.Round((CurrentOverduePrincipal.Value + CurrentOverdueInterest.Value) * Loan.LoanPenaltyRate, 2);
    //    }
    //    #endregion

    //    #region AccruingOverduePrincipal
    //    private double? _accruingOverduePrincipal;
    //    [Display(Name = "დაგროვილი ვადაგად. ძირი")]
    //    public double? AccruingOverduePrincipal
    //    {
    //        get
    //        {
    //            if (!_accruingOverduePrincipal.HasValue)
    //                _accruingOverduePrincipal = Math.Round(InitAccruingOverduePrincipal().Value, 2);
    //            return _accruingOverduePrincipal;
    //        }

    //        set { _accruingOverduePrincipal = value; }
    //    }

    //    private double? InitAccruingOverduePrincipal()
    //    {
    //        Debug.WriteLine("AccruingOverduePrincipal");

    //        //=IF(SUMIF($F$2:$F5,F6,$AN$2:$AN5)-SUMIF($F$2:$F5,F6,$AV$2:$AV5)>AJ6,AJ6,SUMIF($F$2:$F5,F6,$AN$2:$AN5)-SUMIF($F$2:$F5,F6,$AV$2:$AV5))
    //        if (GetPaymentList().Sum(x => x.CurrentOverduePrincipal) -
    //            GetPaymentList().Sum(x => x.AccruingPrincipalPayment) > StartingBalance)
    //            return StartingBalance;
    //        else
    //            return GetPaymentList().Sum(x => x.CurrentOverduePrincipal) -
    //                   GetPaymentList().Sum(x => x.AccruingPrincipalPayment);
    //    }
    //    #endregion

    //    #region AccruingOverdueInterest
    //    public double? _accruingOverdueInterest;
    //    [Display(Name = "დაგროვილი ვადაგად. პროცენტი")]
    //    public double? AccruingOverdueInterest
    //    {
    //        get
    //        {
    //            if (!_accruingOverdueInterest.HasValue)
    //                _accruingOverdueInterest = Math.Round(InitAccruingOverdueInterest().Value, 2);
    //            return _accruingOverdueInterest;
    //        }

    //        set { _accruingOverdueInterest = value; }
    //    }

    //    private double? InitAccruingOverdueInterest()
    //    {
    //        Debug.WriteLine("AccruingOverdueInterest");

    //        return Math.Round(
    //            GetPaymentList().Sum(x => x.AccruingInterestPayment).Value +
    //            GetPaymentList().Sum(x => x.PayableInterest).Value -
    //            GetPaymentList().Sum(x => x.CurrentInterestPayment).Value,
    //            2);
    //    }
    //    #endregion

    //    #region AccruingOverduePenalty
    //    public double? _accruingOverduePenalty;
    //    [Display(Name = "დაგროვილი ვადაგად. ჯარიმა")]
    //    public double? AccruingOverduePenalty { get; set; }

    //    [Display(Name = "დაგროვილი ჯარიმის გადახდა")]
    //    public double? AccruingPenaltyPayment { get; set; }

    //    [Display(Name = "დაგროვილი პროცენტის გადახდა")]
    //    public double? AccruingInterestPayment { get; set; }

    //    [Display(Name = "დაგროვილი ძირის გადახდა")]
    //    public double? AccruingPrincipalPayment { get; set; }

    //    [Display(Name = "მიმდინარე პროცენტის გადახდა")]
    //    public double? CurrentInterestPayment { get; set; }

    //    [Display(Name = "მიმდინარე ძირის გადახდა")]
    //    public double? CurrentPrincipalPayment { get; set; }

    //    [Display(Name = "ძირის წინსწრ. გადახდა")]
    //    public double? PrincipalPrepaymant { get; set; }

    //    [Display(Name = "გადახდილი პროცენტი")]
    //    public double? PaidInterest { get; set; }

    //    [Display(Name = "გადახდილი ჯარიმა")]
    //    public double? PaidPenalty { get; set; }

    //    [Display(Name = "გადახდილი ძირი")]
    //    public double? PaidPrincipal { get; set; }

    //    [Display(Name = "წინსწრ. გადახდილი ძირი")]
    //    public double? PrincipalPrepaid { get; set; }

    //    [Display(Name = "სესხის ნაშთი")]
    //    public double? LoanBalance { get; set; }

    //    [Display(Name = "სესხის სტატუსი")]
    //    public bool? LoanStatus { get; set; }

    //    public int LoanID { get; set; }
    //    public int CreditExpertID { get; set; }
    //    public int CashCollectionAgentID { get; set; }

    //    [Display(Name = "ფილიალი")]
    //    public string Branch { get; set; }
    //}
}