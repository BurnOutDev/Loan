using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.LoanManagementSystem.Helpers
{
    class PaymentEntityHelper
    {
        public class PaymentEntity
        {
            public PaymentEntity()
            {
                //foreach (var item in this.GetType().GetProperties())
                //{
                //    if (item.CanRead)
                //        item.GetValue(this);
                //}
            }

            [Key]
            public int PaymentEntityID { get; set; }
            public DateTime PaymentDate { get; set; }

            #region StartingPrincipal
            private double? _startingPrincipal;
            public double? StartingPrincipal
            {
                get
                {
                    if (!_startingPrincipal.HasValue)
                        _startingPrincipal = InitStartingPrincipal();

                    return InitStartingPrincipal();
                }
            }

            private double? InitStartingPrincipal()
            {
                if (PrevPayment == null)
                    return Loan.LoanAmount;
                return PrevPayment.EndingPrincipal;
            }
            #endregion

            #region Deposit
            private double? _deposit;

            public double? Deposit
            {
                get
                {
                    if (!_deposit.HasValue)
                        _deposit = InitDeposit();
                    return _deposit;
                }
                set { _deposit = value; }
            }

            private double? InitDeposit()
            {
                double endingPrincipal;

                if (PrevPayment == null)
                    endingPrincipal = Loan.LoanAmount;
                else
                    endingPrincipal = PrevPayment.EndingPrincipal.Value;

                if (PaymentEntityID > Loan.DaysOfGrace
                    && endingPrincipal > 0)
                {
                    return -Financial.Pmt(Loan.LoanDailyInterestRate,
                                          Loan.LoanTermDays - Loan.DaysOfGrace,
                                          Loan.LoanAmount,
                                          0);
                }
                else
                    return PaymentInterest;
            }
            #endregion

            #region PaymentInterest
            private double? _paymentInterest;
            public double? PaymentInterest
            {
                get
                {
                    if (!_paymentInterest.HasValue)
                        _paymentInterest = InitPaymentInterest();
                    return _paymentInterest;
                }
                set
                {
                    _paymentInterest = value;
                }
            }

            private double? InitPaymentInterest()
            {
                return Loan.LoanDailyInterestRate * StartingPrincipal;
            }
            #endregion

            #region PaymentPrincipal
            private double? _paymentPrincipal;
            public double? PaymentPrincipal
            {
                get
                {
                    if (!_paymentPrincipal.HasValue)
                        _paymentPrincipal = InitPaymentPrincipal();
                    return _paymentPrincipal;
                }
                set
                {
                    _paymentPrincipal = value;
                }
            }
            private double? InitPaymentPrincipal()
            {
                if (PaymentEntityID > Loan.DaysOfGrace)
                    return Deposit - PaymentInterest;
                else
                    return 0;
            }
            #endregion

            #region EndingPrincipal
            private double? _endingPrincipal;
            public double? EndingPrincipal
            {
                get
                {
                    if (!_endingPrincipal.HasValue)
                        _endingPrincipal = InitEndingPrincipal();
                    return _endingPrincipal;
                }
                set
                {
                    _endingPrincipal = value;
                }
            }
            private double? InitEndingPrincipal()
            {
                return StartingPrincipal - PaymentPrincipal;
            }
            #endregion

            public PaymentEntity PrevPayment
            {
                get
                {
                    if (PaymentEntityID == 1)
                        return null;
                    return Loan.PlannedPaymentEntities.FirstOrDefault(x => x.PaymentEntityID == PaymentEntityID - 1);
                }
            }
            public virtual Loan Loan { get; set; }
            public virtual Payment PaidPayment { get; set; }
        }
    }
}
