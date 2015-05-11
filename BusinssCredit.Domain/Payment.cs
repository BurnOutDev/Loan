using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace BusinessCredit.Domain
{
    public class Payment
    {
        [Key]
        public int PaymentID { get; set; }

        public int TaxOrderID { get; set; }

        public double CurrentPayment { get; set; }
        public DateTime PaymentDate { get; set; }

        #region CurrentDebt
        [Display(Name = "მიმდ. დავალ.")]
        private double? _currentDebt;
        public double? CurrentDebt
        {
            get
            {
                if (!_currentDebt.HasValue)
                    _currentDebt = InitCurrentDebt();
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
        public double? WholeDebt
        {
            get
            {
                if (!_wholeDebt.HasValue)
                    _wholeDebt = InitWholeDebt();
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
        public double? StartingPlannedBalance
        {
            get
            {
                if (!_startingPlannedBalance.HasValue)
                {
                    _startingPlannedBalance = InitStartingPlannedBalance();
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
        public double? StartingBalance
        {
            get
            {
                if (!_startingBalance.HasValue)
                    _startingBalance = InitStartingBalance();
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
        public double PlannedBalance
        {
            get
            {
                return Loan.PlannedPaymentEntities.FirstOrDefault(x => x.PaymentEntityID == PaymentID).EndingPrincipal.Value;
            }
        } // გეგმიური ნაშთი 
        #endregion

        #region PayableInterest
        public double? _payableInterest;
        public double? PayableInterest
        {
            get
            {
                if (!_payableInterest.HasValue)
                    _payableInterest = InitPayableInterest();
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
        public double? PayablePrincipal
        {
            get
            {
                if (!_payablePrincipal.HasValue)
                    _payablePrincipal = InitPayablePrincipal();
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
        public double? CurrentOverduePrincipal
        {
            get
            {
                if (!_currentOverduePrincipal.HasValue)
                    _currentOverduePrincipal = InitCurrentOverduePrincipal();
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
        public double? CurrentOverdueInterest
        {
            get
            {
                if (!_currentOverdueInterest.HasValue)
                    _currentOverdueInterest = InitCurrentOverdueInterest();
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
        public double? CurrentPenalty
        {
            get
            {
                if (!_CurrentPenalty.HasValue)
                    _CurrentPenalty = InitCurrentPenalty();
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
        public double? AccruingOverduePrincipal
        {
            get
            {
                if (!_accruingOverduePrincipal.HasValue)
                    _accruingOverduePrincipal = InitAccruingOverduePrincipal();
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
        public double? AccruingOverdueInterest
        {
            get
            {
                if (!_accruingOverdueInterest.HasValue)
                    _accruingOverdueInterest = InitAccruingOverdueInterest();
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
        public double? AccruingOverduePenalty
        {
            get
            {
                if (!_accruingOverduePenalty.HasValue)
                    _accruingOverduePenalty = InitAccruingOverduePenalty();
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
        public double? AccruingPenaltyPayment
        {
            get
            {
                if (!_accruingPenaltyPayment.HasValue)
                    _accruingPenaltyPayment = InitAccruingPenaltyPayment();
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
        public double? AccruingInterestPayment
        {
            get
            {
                if (!_accruingInterestPayment.HasValue)
                    _accruingInterestPayment = InitAccruingInterestPayment();
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
        public double? AccruingPrincipalPayment
        {
            get
            {
                if (!_accruingPrincipalPayment.HasValue)
                    _accruingPrincipalPayment = InitAccruingPrincipalPayment();
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
        public double? CurrentInterestPayment
        {
            get
            {
                if (!_currentInterestPayment.HasValue)
                    _currentInterestPayment = InitCurrentInterestPayment();
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
        public double? CurrentPrincipalPayment
        {
            get
            {
                if (!_currentPrincipalPayment.HasValue)
                    _currentPrincipalPayment = InitCurrentPrincipalPayment();
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
        public double? PrincipalPrepaymant
        {
            get
            {
                if (!_principalPrepaymant.HasValue)
                    _principalPrepaymant = InitPrincipalPrepaymant();
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
        public double? PaidInterest
        {
            get
            {
                if (!_paidInterest.HasValue)
                    _paidInterest = InitPaidInterest();
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
        public double? PaidPenalty
        {
            get
            {
                if (!_paidPenalty.HasValue)
                    _paidPenalty = InitPaidPenalty();
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
        public double? PaidPrincipal
        {
            get
            {
                if (!_paidPrincipal.HasValue)
                    _paidPrincipal = InitPaidPrincipal();
                return _paidPrincipal;
            }
        }

        private double? InitPaidPrincipal()
        {
            return Loan.Payments.Where(x => x.PaymentID <= PaymentID).Sum(x => x.CurrentPrincipalPayment) +
                   Loan.Payments.Where(x => x.PaymentID <= PaymentID).Sum(x => x.AccruingPrincipalPayment) +
                   Loan.Payments.Where(x => x.PaymentID <= PaymentID).Sum(x => x.PrincipalPrepaymant);
        }
        #endregion

        #region PrincipalPrepaid
        private double? _principalPrepaid;
        public double? PrincipalPrepaid
        {
            get
            {
                if (!_principalPrepaid.HasValue)
                    _principalPrepaid = InitPrincipalPrepaid();
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
        public double? LoanBalance
        {
            get
            {
                if (!_loanBalance.HasValue)
                    _loanBalance = InitLoanBalance();
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

        public virtual Loan Loan { get; set; }
        public virtual CreditExpert CreditExpert { get; set; }
        public virtual Branch Branch { get; set; }
        public virtual CashCollectionAgent CashCollectionAgent { get; set; }
    }
}
