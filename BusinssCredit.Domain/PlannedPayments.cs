using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessCredit.Domain
{
    //public class PlannedPayments
    //{
    //    public PlannedPayments(Loan targetLoan)
    //    {
    //        LoanAmount = targetLoan.LoanAmount;
    //        DailyInterestRate = targetLoan.LoanDailyInterestRate / 100;
    //        TermDays = targetLoan.LoanTermDays;
    //        DaysOfGrace = targetLoan.DaysOfGrace;
    //        StartDate = targetLoan.LoanStartDate.Date;

    //        Payments = new List<PaymentEntity>();

    //        InitializePayments();
    //    }

    //    private PlannedPayments()
    //    {

    //    }

    //    public int PlannedPaymentsID { get; set; }

    //    #region Parameters
    //    public double LoanAmount { get; set; }
    //    public double DailyInterestRate { get; set; }
    //    public int TermDays { get; set; }
    //    public int DaysOfGrace { get; set; }
    //    public DateTime StartDate { get; set; }
    //    #endregion

    //    #region Methods
    //    public void InitializePayments()
    //    {
    //        for (int i = 0; i < TermDays; i++)
    //        {
    //            Payments.Add(
    //                new PaymentEntity(this)
    //                {
    //                    PaymentEntityID = i + 1,
    //                    PaymentDate = StartDate.Date.AddDays(i)
    //                }
    //                );
    //        }
    //    }
    //    #endregion

    //    public virtual ICollection<PaymentEntity> Payments { get; set; }
    //}
}
