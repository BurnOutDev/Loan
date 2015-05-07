using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessCredit.Domain
{
    public class PaymentPlaning
    {
        public PaymentPlaning(double loanAmount, double dailyInterestRate, int termDays, int daysOfGrace, DateTime startDate)
        {
            LoanAmount = loanAmount;
            DailyInterestRate = dailyInterestRate / 100;
            TermDays = termDays;
            DaysOfGrace = daysOfGrace;
            StartDate = startDate;

            Payments = new List<PaymentEntity>();
        }

        #region Parameters
        public double LoanAmount { get; set; }
        public double DailyInterestRate { get; set; }
        public int TermDays { get; set; }
        public int DaysOfGrace { get; set; }
        public DateTime StartDate { get; set; }
        #endregion

        #region Methods
        public void InitializePayments()
        {
            for (int i = 0; i < TermDays; i++)
            {
                Payments.Add(
                    new PaymentEntity(this)
                    {
                        PaymentID = i + 1,
                        PaymentDate = DateTime.Now.AddDays(i)
                    }
                    );
            }
        }
        #endregion

        public ICollection<PaymentEntity> Payments { get; set; }
    }

    public class PaymentEntity
    {
        #region Ctor
        public PaymentEntity(PaymentPlaning parentPaymentPlaning)
        {
            PaymentPlaning = parentPaymentPlaning;
        }
        #endregion

        public int PaymentID { get; set; }
        public DateTime PaymentDate { get; set; }
        public double StartingPrincipal
        {
            get
            {
                if (PrevPayment == null)
                    return PaymentPlaning.LoanAmount;
                return PrevPayment.EndingPrincipal;
            }
        }
        public double Deposit
        {
            get
            {
                #region Comments
                //=SUM(IF(AND(A7>$E$4,G6>0),-PMT($E$2,$E$3-$E$4,$E$1,0),E7))
                //= SUM(
                //        IF(
                //            AND(
                //                PaymentID > PaymentPlaning.DaysOfGrace,
                //                PrevPayment.EndingPrincipal > 0
                //            ),
                //    -PMT(
                //                PaymentPlaning.DailyInterestRate,
                //                PaymentPlaning.TermDays - PaymentPlaning.DaysOfGrace,
                //                PaymentPlaning.LoanAmount,
                //                0
                //            ),
                //            PaymentInterest
                //        )
                //    ) 
                #endregion

                if (_deposit == 0)
                {
                    double endingPrincipal;

                    if (PrevPayment == null)
                        endingPrincipal = PaymentPlaning.LoanAmount;
                    else
                        endingPrincipal = PrevPayment.EndingPrincipal;

                    if (PaymentID > PaymentPlaning.DaysOfGrace
                        && endingPrincipal > 0)
                    {
                        var r = Financial.Pmt(0.524 / 100, 45, 500, 0);
                        _deposit = -Financial.Pmt(PaymentPlaning.DailyInterestRate,
                                              PaymentPlaning.TermDays - PaymentPlaning.DaysOfGrace,
                                              PaymentPlaning.LoanAmount,
                                              0);
                    }
                    else
                        _deposit = PaymentInterest;
                }
                return _deposit;
            }
            set { _deposit = value; }
        }

        private double _deposit;
        public double PaymentInterest
        {
            get
            {
                return PaymentPlaning.DailyInterestRate * StartingPrincipal;
            }
        }
        public double PaymentPrincipal
        {
            get
            {
                #region Comments
                //= SUM(
                //        IF(
                //            შენატანის #>საშეღავათოდღე,
                //            შენატანი -გადასახდის%,
                //            0
                //          )
                //     ) 
                #endregion

                if (PaymentID > PaymentPlaning.DaysOfGrace)
                    return Deposit - PaymentInterest;
                else
                    return 0;
            }
        }
        public double EndingPrincipal
        {
            get
            {
                #region Comments
                //=SUM(საწყისი ნაშთი-ძირი) 
                #endregion

                return StartingPrincipal - PaymentPrincipal;
            }
        }

        public PaymentEntity PrevPayment
        {
            get
            {
                if (PaymentID == 1)
                    return null;
                return PaymentPlaning.Payments.FirstOrDefault(x => x.PaymentID == PaymentID - 1);
            }
        }
        public PaymentPlaning PaymentPlaning { get; set; }
    }
}
