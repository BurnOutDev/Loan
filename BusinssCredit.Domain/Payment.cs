using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BusinessCredit.Domain
{
    public class Payment
    {
        public Payment()
        {
            ;
        }

        [Key]
        public int PaymentID { get; set; }

        [Display(Name = "სშო #")]
        public int TaxOrderID { get; set; }

        [Display(Name = "შენატანი")]
        public double CurrentPayment { get; set; }
        [Display(Name = "შენატანის თარიღი")]
        public DateTime PaymentDate { get; set; }

        #region CurrentDebt
        private double? _currentDebt;
        [Display(Name = "მიმდ. დავალიანება")]
        public double? CurrentDebt
        {
            get
            {
                if (!_currentDebt.HasValue)
                    _currentDebt = Math.Round(InitCurrentDebt().Value, 2);
                return _currentDebt;
            }
        }

        private double? InitCurrentDebt()
        {
            var sum = PayableInterest + PayablePrincipal + AccruingOverduePrincipal + AccruingOverdueInterest + AccruingOverduePenalty;
            if (sum > WholeDebt)
                return WholeDebt;
            else
                return sum;
        }
        #endregion

        #region WholeDebt
        private double? _wholeDebt;
        [Display(Name = "სულ მოსატანი")]
        public double? WholeDebt
        {
            get
            {
                if (!_wholeDebt.HasValue)
                    _wholeDebt = Math.Round(InitWholeDebt().Value, 2);
                return _wholeDebt;
            }
        }

        private double? InitWholeDebt()
        {
            return LoanBalance + AccruingOverduePenalty + AccruingOverdueInterest + PayableInterest - CurrentInterestPayment - AccruingPenaltyPayment - AccruingInterestPayment;
        }
        #endregion
        
        #region StartingPlannedBalance
        private double? _startingPlannedBalance;
        [Display(Name = "საწყისი დაგეგმილი ნაშთი")]
        public double? StartingPlannedBalance
        {
            get
            {
                if (!_startingPlannedBalance.HasValue)
                {
                    _startingPlannedBalance = Math.Round(InitStartingPlannedBalance().Value, 2);
                }
                return _startingPlannedBalance;
            }
        }

        private double? InitStartingPlannedBalance()
        {
            return PlannedBalance + PayablePrincipal;
        }
        #endregion

        #region StartingBalance
        private double? _startingBalance;
        [Display(Name = "საწყისი ნაშთი")]
        public double? StartingBalance
        {
            get
            {
                if (!_startingBalance.HasValue)
                    _startingBalance = Math.Round(InitStartingBalance().Value, 2);
                return _startingBalance;
            }
        }

        private double? InitStartingBalance()
        {
            return Loan.LoanAmount - GetPaymentList().Sum(x => x.AccruingPrincipalPayment)
                     - GetPaymentList().Sum(x => x.CurrentPrincipalPayment)
                     - GetPaymentList().Sum(x => x.PrincipalPrepaymant);
        }
        #endregion

        #region PlannedBalance
        [Display(Name = "გეგმიური ნაშთი")]
        public double PlannedBalance
        {
            get
            {
                return Math.Round(Loan.PlannedPaymentEntities.FirstOrDefault(x => x.PaymentEntityID == PaymentID).EndingPrincipal.Value, 2);
            }
        } // გეგმიური ნაშთი 
        #endregion

        #region PayableInterest
        public double? _payableInterest;
        [Display(Name = "გადასახადი ძირი")]
        public double? PayableInterest
        {
            get
            {
                if (!_payableInterest.HasValue)
                    _payableInterest = Math.Round(InitPayableInterest().Value, 2);
                return _payableInterest;
            }
        }

        private double? InitPayableInterest()
        {
            var t = Math.Round((StartingBalance.Value * Loan.LoanDailyInterestRate), 2);
            return Math.Round((StartingBalance.Value * Loan.LoanDailyInterestRate), 2); //??
        }
        #endregion

        #region PayablePrincipal
        private double? _payablePrincipal;
        [Display(Name = "გადასახადი ძირი")]
        public double? PayablePrincipal
        {
            get
            {
                if (!_payablePrincipal.HasValue)
                    _payablePrincipal = Math.Round(InitPayablePrincipal().Value, 2);
                return _payablePrincipal;
            }
        }

        private double? InitPayablePrincipal()
        {
            //= IF(AJ7 < AA7, AJ7, AA7 - AL7)
            if (StartingBalance < Loan.AmountToBePaidDaily)
                return StartingBalance;
            else
                return Loan.AmountToBePaidDaily - PayableInterest;
        }
        #endregion

        #region CurrentOverduePrincipal
        private double? _currentOverduePrincipal;
        [Display(Name = "მიმდინარე ვადაგად. ძირი")]
        public double? CurrentOverduePrincipal
        {
            get
            {
                if (!_currentOverduePrincipal.HasValue)
                    _currentOverduePrincipal = Math.Round(InitCurrentOverduePrincipal().Value, 2);
                return _currentOverduePrincipal;
            }
        }

        private double? InitCurrentOverduePrincipal()
        {
            //=$AM8 -$AX8
            return PayablePrincipal - CurrentPrincipalPayment;
        }
        #endregion

        #region CurrentOverdueInterest
        private double? _currentOverdueInterest;
        [Display(Name = "მიმდინარე ვადაგად. პროცენტი")]
        public double? CurrentOverdueInterest
        {
            get
            {
                if (!_currentOverdueInterest.HasValue)
                    _currentOverdueInterest = Math.Round(InitCurrentOverdueInterest().Value, 2);
                return _currentOverdueInterest;
            }
        }

        private double? InitCurrentOverdueInterest()
        {
            //=ROUND($AL7-$AW7,2)
            return Math.Round(PayableInterest.Value - CurrentInterestPayment.Value, 2);
        }
        #endregion

        #region CurrentPenalty
        public double? _CurrentPenalty;
        [Display(Name = "მიმდინარე ჯარიმა")]
        public double? CurrentPenalty
        {
            get
            {
                if (!_CurrentPenalty.HasValue)
                    _CurrentPenalty = Math.Round(InitCurrentPenalty().Value, 2);
                return _CurrentPenalty;
            }
        }

        private double? InitCurrentPenalty()
        {
            if (DateTime.Today.DayOfWeek == DayOfWeek.Sunday)
                return 0;
            else
                return Math.Round((CurrentOverduePrincipal.Value + CurrentOverdueInterest.Value) * Loan.LoanPenaltyRate, 2);
        }
        #endregion

        #region AccruingOverduePrincipal
        private double? _accruingOverduePrincipal;
        [Display(Name = "დაგროვილი ვადაგად. ძირი")]
        public double? AccruingOverduePrincipal
        {
            get
            {
                if (!_accruingOverduePrincipal.HasValue)
                    _accruingOverduePrincipal = Math.Round(InitAccruingOverduePrincipal().Value, 2);
                return _accruingOverduePrincipal;
            }
        }

        private double? InitAccruingOverduePrincipal()
        {
            //=IF(SUMIF($F$2:$F5,F6,$AN$2:$AN5)-SUMIF($F$2:$F5,F6,$AV$2:$AV5)>AJ6,AJ6,SUMIF($F$2:$F5,F6,$AN$2:$AN5)-SUMIF($F$2:$F5,F6,$AV$2:$AV5))
            if (GetPaymentList().Sum(x => x.CurrentOverduePrincipal) -
                GetPaymentList().Sum(x => x.AccruingPrincipalPayment) > StartingBalance)
                return StartingBalance;
            else
                return GetPaymentList().Sum(x => x.CurrentOverduePrincipal) -
                       GetPaymentList().Sum(x => x.AccruingPrincipalPayment);
        }
        #endregion

        #region AccruingOverdueInterest
        public double? _accruingOverdueInterest;
        [Display(Name = "დაგროვილი ვადაგად. პროცენტი")]
        public double? AccruingOverdueInterest
        {
            get
            {
                if (!_accruingOverdueInterest.HasValue)
                    _accruingOverdueInterest = Math.Round(InitAccruingOverdueInterest().Value, 2);
                return _accruingOverdueInterest;
            }
        }

        private double? InitAccruingOverdueInterest()
        {
            return Math.Round(
                GetPaymentList().Sum(x => x.AccruingInterestPayment).Value +
                GetPaymentList().Sum(x => x.PayableInterest).Value -
                GetPaymentList().Sum(x => x.CurrentInterestPayment).Value,
                2);
        }
        #endregion

        #region AccruingOverduePenalty
        public double? _accruingOverduePenalty;
        [Display(Name = "დაგროვილი ვადაგად. ჯარიმა")]
        public double? AccruingOverduePenalty
        {
            get
            {
                if (!_accruingOverduePenalty.HasValue)
                    _accruingOverduePenalty = Math.Round(InitAccruingOverduePenalty().Value, 2);
                return InitAccruingOverduePenalty();
            }
        }

        private double? InitAccruingOverduePenalty()
        {
            try
            {
                return Math.Round(
                                ((AccruingOverduePrincipal.Value + AccruingOverdueInterest.Value) * Loan.LoanPenaltyRate)
                                - GetPaymentList().Where(x => x.PaymentDate == PaymentDate.AddDays(-1)).FirstOrDefault().AccruingPenaltyPayment.Value
                                + GetPaymentList().Where(x => x.PaymentDate == PaymentDate.AddDays(-1)).FirstOrDefault().AccruingPenaltyPayment.Value
                                );
            }
            catch (NullReferenceException)
            {
                return 0;
            }

            //=IFERROR(
            //ROUND(
            //
            //((AQ13+AR13)*$X13)-
            //  INDEX($A$2:$BE12,
            //    MATCH($F13&($AE13-1),$F$2:$F12&$AE$2:$AE12,0),
            //    MATCH($AT$2,$A$2:$BE$2,0))
            // +INDEX($A$2:$BE12,
            //    MATCH($F13&($AE13-1),$F$2:$F12&$AE$2:$AE12,0),
            //    MATCH($AS$2,$A$2:$BE$2,0))
            //  ,2)
            //,0)
        }
        #endregion

        #region AccruingPenaltyPayment
        public double? _accruingPenaltyPayment;
        [Display(Name = "დაგროვილი ჯარიმის გადახდა")]
        public double? AccruingPenaltyPayment
        {
            get
            {
                if (!_accruingPenaltyPayment.HasValue)
                    _accruingPenaltyPayment = Math.Round(InitAccruingPenaltyPayment().Value, 2);
                return _accruingPenaltyPayment;
            }
        }

        private double? InitAccruingPenaltyPayment()
        {

            //=IF($AD6>$AS6,$AS6,$AD6)
            if (CurrentPayment > AccruingOverduePenalty)
                return AccruingOverduePenalty;
            else
                return CurrentPayment;
        }
        #endregion

        #region AccruingInterestPayment
        private double? _accruingInterestPayment;
        [Display(Name = "დაგროვილი პროცენტის გადახდა")]
        public double? AccruingInterestPayment
        {
            get
            {
                if (!_accruingInterestPayment.HasValue)
                    _accruingInterestPayment = Math.Round(InitAccruingInterestPayment().Value, 2);
                return _accruingInterestPayment;
            }
        }

        private double? InitAccruingInterestPayment()
        {
            //=IF(($AD5-$AT5)>$AR5,$AR5,($AD5-$AT5))
            if ((CurrentPayment - AccruingPenaltyPayment) > AccruingOverdueInterest)
                return AccruingOverdueInterest;
            else
                return CurrentPayment - AccruingPenaltyPayment;
        }
        #endregion

        #region AccruingPrincipalPayment
        private double? _accruingPrincipalPayment;
        [Display(Name = "დაგროვილი ძირის გადახდა")]
        public double? AccruingPrincipalPayment
        {
            get
            {
                if (!_accruingPrincipalPayment.HasValue)
                    _accruingPrincipalPayment = Math.Round(InitAccruingPrincipalPayment().Value, 2);
                return _accruingPrincipalPayment;
            }
        }

        private double? InitAccruingPrincipalPayment()
        {
            //=IF(($AD5-$AU5-$AT5-AW5)>$AQ5,$AQ5,($AD5-$AU5-$AT5-AW5))
            if ((CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment - CurrentInterestPayment) > AccruingOverduePrincipal)
                return AccruingOverduePrincipal;
            else
                return CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment - CurrentInterestPayment;
        }
        #endregion

        #region CurrentInterestPayment
        private double? _currentInterestPayment;
        [Display(Name = "მიმდინარე პროცენტის გადახდა")]
        public double? CurrentInterestPayment
        {
            get
            {
                if (!_currentInterestPayment.HasValue)
                    _currentInterestPayment = Math.Round(InitCurrentInterestPayment().Value, 2);
                return _currentInterestPayment;
            }
        }

        private double? InitCurrentInterestPayment()
        {
            bool be;
            try
            {
                be = GetPaymentList().Where(x => x.LoanStatus == true).FirstOrDefault().LoanStatus.Value;
            }
            catch (NullReferenceException)
            {
                be = false;
            }

            if (be)
                return 0;
            else
            {
                if (CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment > PayableInterest)
                    return PayableInterest;
                else
                    return CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment;
            }
        }
        #endregion

        #region CurrentPrincipalPayment
        private double? _currentPrincipalPayment;
        [Display(Name = "მიმდინარე ძირის გადახდა")]
        public double? CurrentPrincipalPayment
        {
            get
            {
                if (!_currentPrincipalPayment.HasValue)
                    _currentPrincipalPayment = Math.Round(InitCurrentPrincipalPayment().Value, 2);
                return _currentPrincipalPayment;
            }
        }

        private double? InitCurrentPrincipalPayment()
        {
            //=IF(SUMIF($F$2:$F4,$F5,$BE$2:$BE4)>0,0,IF(($AD5-$AU5-$AT5-$AV5-$AW5)>$AM5,$AM5,($AD5-$AU5-$AT5-$AV5-$AW5)))
            bool be;
            try
            {
                be = GetPaymentList().Where(x => x.LoanStatus == true).FirstOrDefault().LoanStatus.Value;
            }
            catch (NullReferenceException)
            {
                be = false;
            }
            if (be)
                return 0;
            else
            {
                if ((CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment - AccruingPrincipalPayment - CurrentInterestPayment) > PayablePrincipal)
                    return PayablePrincipal;
                else
                    return CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment - AccruingPrincipalPayment - CurrentInterestPayment;
            }
        }
        #endregion

        #region PrincipalPrepaymant
        private double? _principalPrepaymant;
        [Display(Name = "ძირის წინსწრ. გადახდა")]
        public double? PrincipalPrepaymant
        {
            get
            {
                if (!_principalPrepaymant.HasValue)
                    _principalPrepaymant = Math.Round(InitPrincipalPrepaymant().Value, 2);
                return _principalPrepaymant;
            }
        }

        private double? InitPrincipalPrepaymant()
        {
            bool be;
            try
            {
                be = GetPaymentList().Where(x => x.LoanStatus == true).FirstOrDefault().LoanStatus.Value;
            }
            catch (NullReferenceException)
            {
                be = false;
            }

            if (be)
                return 0;
            else
            {
                if (((CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment - AccruingPrincipalPayment - CurrentInterestPayment - CurrentPrincipalPayment) > 0 ?
                      (CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment - AccruingPrincipalPayment - CurrentInterestPayment - CurrentPrincipalPayment) : 0) >
                      (Loan.LoanAmount - CurrentPrincipalPayment - GetPaymentList().Sum(x => x.PrincipalPrepaymant) -
                      GetPaymentList().Sum(x => x.CurrentPrincipalPayment)
                   ))
                    return Loan.LoanAmount - CurrentPrincipalPayment -
                            GetPaymentList().Sum(x => x.PrincipalPrepaymant) -
                            GetPaymentList().Sum(x => x.CurrentPrincipalPayment);
                else
                    return CurrentPayment - AccruingInterestPayment - AccruingPenaltyPayment - AccruingPrincipalPayment - CurrentInterestPayment - CurrentPrincipalPayment;
            }

            //if (PaymentList.Sum(x => x.BE) > 0)
            //    return 0;
            //else
            //{
            //    if ((AD - AU - AT - AV - AW - AX) > 0 ?
            //          (AD - AU - AT - AV - AW - AX) : 0 >
            //          (R - AX - PaymentList.Sum(x => x.AY) -
            //          PaymentList.Sum(x => x.AX)
            //       ))
            //        return R - AX -
            //                PaymentList.Sum(x => x.AY) -
            //                PaymentList.Sum(x => x.AX);
            //    else
            //        return AD - AU - AT - AV - AW - AX;
            //}
        }
        #endregion

        #region PaidInterest
        private double? _paidInterest;
        [Display(Name = "გადახდილი პროცენტი")]
        public double? PaidInterest
        {
            get
            {
                if (!_paidInterest.HasValue)
                    _paidInterest = Math.Round(InitPaidInterest().Value, 2);
                return _paidInterest;
            }
        }

        private double? InitPaidInterest()
        {
            return GetPaymentList().Sum(x => x.CurrentInterestPayment) +
                   AccruingInterestPayment +
                   GetPaymentList().Sum(x => x.AccruingInterestPayment) +
                   CurrentInterestPayment;
        }
        #endregion

        #region PaidPenalty
        private double? _paidPenalty;
        [Display(Name = "გადახდილი ჯარიმა")]
        public double? PaidPenalty
        {
            get
            {
                if (!_paidPenalty.HasValue)
                    _paidPenalty = Math.Round(InitPaidPenalty().Value, 2);
                return _paidPenalty;
            }
        }

        private double? InitPaidPenalty()
        {
            return GetPaymentList().Sum(x => x.AccruingPenaltyPayment);
        }
        #endregion

        #region PaidPrincipal
        private double? _paidPrincipal;
        [Display(Name = "გადახდილი ძირი")]
        public double? PaidPrincipal
        {
            get
            {
                if (!_paidPrincipal.HasValue)
                    _paidPrincipal = Math.Round(InitPaidPrincipal().Value, 2);
                return _paidPrincipal;
            }
        }

        private double? InitPaidPrincipal()
        {
            return Loan.Payments.Where(x => x.PaymentDate <= PaymentDate).Sum(x => x.CurrentPrincipalPayment) +
                   Loan.Payments.Where(x => x.PaymentDate <= PaymentDate).Sum(x => x.AccruingPrincipalPayment) +
                   Loan.Payments.Where(x => x.PaymentDate <= PaymentDate).Sum(x => x.PrincipalPrepaymant);
        }
        #endregion

        #region PrincipalPrepaid
        private double? _principalPrepaid;
        [Display(Name = "წინსწრ. გადახდილი ძირი")]
        public double? PrincipalPrepaid
        {
            get
            {
                if (!_principalPrepaid.HasValue)
                    _principalPrepaid = Math.Round(InitPrincipalPrepaid().Value, 2);
                return _principalPrepaid;
            }
        }

        private double? InitPrincipalPrepaid()
        {
            return GetPaymentList().Sum(x => x.PaymentID);
        }
        #endregion

        #region LoanBalance
        private double? _loanBalance;
        [Display(Name = "სესხის ნაშთი")]
        public double? LoanBalance
        {
            get
            {
                if (!_loanBalance.HasValue)
                    _loanBalance = Math.Round(InitLoanBalance().Value, 2);
                return _loanBalance;
            }
        }

        private double? InitLoanBalance()
        {
            return Loan.LoanAmount - PaidPrincipal;
        }
        #endregion

        #region LoanStatus
        private bool? _loanStatus;
        [Display(Name = "სესხის სტატუსი")]
        public bool? LoanStatus
        {
            get
            {
                if (!_loanStatus.HasValue)
                    _loanStatus = InitLoanStatus();
                return _loanStatus;
            }
        }
        private bool InitLoanStatus()
        {
            return LoanBalance > 0 ? false : true;
        }
        #endregion

        private ICollection<Payment> GetPaymentList()
        {
            return (from x in Loan.Payments
                    where x.PaymentID == PaymentID && x.PaymentDate < PaymentDate
                    select x).ToList();
        }

        public Loan Loan { get; set; }
        public virtual CreditExpert CreditExpert { get; set; }
        public virtual Branch Branch { get; set; }
        public virtual CashCollectionAgent CashCollectionAgent { get; set; }
    }
}
