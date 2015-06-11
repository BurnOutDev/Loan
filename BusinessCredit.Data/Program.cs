using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessCredit.Domain;
using BusinessCredit.Core;
using LinqToExcel;
using Remotion.Data.Linq;
using BusinessCredit.Core.LoanCalculator;

namespace BusinessCredit.Data
{
    public class Program
    {
        static void Main()
        {
            using (var db = new BusinessCreditContext())
            {
                foreach (var loan in db.Loans.ToList())
                {
                    loan.Branch = db.Branches.Find(1);
                }
                db.SaveChanges();
            }

            var excel = new ExcelQueryFactory();
            excel.FileName = @"C:\Users\BurnOut\Desktop\INSERT.xlsx";

            var loans = (from x in excel.Worksheet<Entity>("AccountsLoans")
                         select x).ToList();

            var accounts = loans.GroupBy(acc => acc.AccountID).Select(Grouping);

            var dbAccounts = new List<Account>();

            using (var db = new BusinessCreditContext())
            {
                #region Comments
                //foreach (var row in result)
                //{
                //    var acc = new Account()
                //    {
                //        AccountID = row.AccountID,
                //        Name = row.Name,
                //        LastName = row.LastName,
                //        PrivateNumber = row.PrivateNumber,
                //        //Status = (PersonType)row.Status,
                //        PhysicalAddress = row.PhysicalAddress,
                //        BusinessPhysicalAddress = row.BusinessPhysicalAddress,
                //        NumberMobile = row.NumberMobile,
                //        AccountNumber = row.AccountNumber,
                //        Gender = row.Gender == "მამრ" ? Gender.Male : Gender.Female
                //    };

                //    dbAccounts.Add(acc);
                //}

                //foreach (var row in loans)
                //{
                //    var loan = new Loan()
                //    {
                //        LoanID = row.LoanID,
                //        AgreementDate = row.LoanAgreementDate,
                //        LoanAmount = row.LoanAmount,
                //        AmountToBePaidAll = row.LoanAmountToBePaidAll,
                //        AmountToBePaidDaily = row.LoanPMT,
                //        LoanDailyInterestRate = row.LoanDailyInterestRate,
                //        DaysOfGrace = row.LoanDaysOfGrace,
                //        EffectiveInterestRate = row.LoanEffectiveInterestRate,
                //        LoanStartDate = row.LoanStartDate,
                //        LoanEndDate = row.LoanEndDate,
                //        NetworkDays = row.LoanNetworkDays,
                //        LoanPenaltyRate = row.LoanPenaltyInterestRate,
                //        LoanPurpose = row.LoanPurpose,
                //        //LoanStatus = row.LoanStatus == "აქტიური" ? LoanStatus.Active : LoanStatus.Closed,
                //        LoanTermDays = row.LoanTermDays
                //    };
                //}
                #endregion

                db.Accounts.AddRange(accounts);
                db.SaveChanges();
            }
            Console.WriteLine("Getting Data...");
            var payments = (from x in excel.Worksheet<PaymentClass>("Payments")
                            select x).ToList();
            Console.WriteLine("Getting Data Finished (OK)");
            Console.WriteLine("Adding Payments...");
            int count = 0;
            using (var db = new BusinessCreditContext())
            {
                foreach (var pmt in payments)
                {
                    var payment = new Payment()
                    {
                        Loan = db.Loans.FirstOrDefault(l => l.LoanID == pmt.LoanID),
                        Branch = db.Branches.FirstOrDefault(b => b.BranchID == pmt.BranchID),
                        CashCollectionAgent = db.CashCollectionAgents.FirstOrDefault(c => c.CashCollectionAgentID == pmt.CollectorID), //droebit
                        CreditExpert = db.CreditExperts.FirstOrDefault(ce => ce.EmployeeID == pmt.CreditExpertID),
                        CurrentPayment = pmt.CurrentPMT,
                        PaymentDate = pmt.PMTDate,
                        TaxOrderID = pmt.TaxOrder,
                        _accruingOverdueInterest = pmt.AccruingOverdueInterest,
                        _accruingOverduePenalty = pmt.AccruingPenalty,
                        _accruingPenaltyPayment = pmt.AccruingPenaltyPayment,
                        _CurrentPenalty = pmt.CurrentPenalty,
                        _payableInterest = pmt.PayableInterest
                    };
                    db.Payments.Add(payment);
                    count++;
                    Console.WriteLine("Added Payment: " + count);

                    if (count == 2000)
                        db.SaveChanges();

                    if (count == 5000)
                        db.SaveChanges();

                    if (count == 9000)
                        db.SaveChanges();

                    if (count == 12000)
                        db.SaveChanges();
                }
                Console.WriteLine("Updating Database...");

                db.SaveChanges();

                PlanAllLoansViaLoanCalculator();

                db.SaveChanges();

                Console.WriteLine("All Done!!!");
            }
        }

        public static Account Grouping(IGrouping<int, Entity> group)
        {
            var rowFirst = group.First();

            var acc = new Account()
            {
                AccountID = rowFirst.AccountID,
                Name = rowFirst.Name,
                LastName = rowFirst.LastName,
                PrivateNumber = rowFirst.PrivateNumber,
                //Status = (PersonType)rowFirst.Status,
                PhysicalAddress = rowFirst.PhysicalAddress,
                BusinessPhysicalAddress = rowFirst.BusinessPhysicalAddress,
                NumberMobile = rowFirst.NumberMobile,
                AccountNumber = rowFirst.AccountNumber,
                Gender = rowFirst.Gender == "მამრ" ? Gender.Male : Gender.Female
            };

            acc.Loans = new List<Loan>();

            foreach (var row in group)
            {
                var loan = new Loan()
                {
                    LoanID = row.LoanID,
                    AgreementDate = row.LoanAgreementDate,
                    LoanAmount = row.LoanAmount,
                    AmountToBePaidAll = row.LoanAmountToBePaidAll,
                    AmountToBePaidDaily = row.LoanPMT,
                    LoanDailyInterestRate = row.LoanDailyInterestRate,
                    DaysOfGrace = row.LoanDaysOfGrace,
                    EffectiveInterestRate = row.LoanEffectiveInterestRate,
                    LoanStartDate = row.LoanStartDate,
                    LoanEndDate = row.LoanEndDate,
                    NetworkDays = row.LoanNetworkDays,
                    LoanPenaltyRate = row.LoanPenaltyInterestRate,
                    LoanPurpose = row.LoanPurpose,
                    //LoanStatus = row.LoanStatus == "აქტიური" ? LoanStatus.Active : LoanStatus.Closed,
                    LoanTermDays = row.LoanTermDays
                };

                acc.Loans.Add(loan);
            }
            return acc;
        }

        public static void PlanAllLoansViaLoanCalculator()
        {
            using (var db = new BusinessCreditContext())
            {
                foreach (var loan in db.Loans.ToList())
                {
                    LoanModel loanCalculated = new LoanModel();
                    loanCalculated.Amount = loan.LoanAmount;
                    loanCalculated.StartDate = loan.LoanStartDate;
                    loanCalculated.TermDays = loan.LoanTermDays;
                    loanCalculated.DaysOfGrace = loan.DaysOfGrace;
                    loanCalculated.DailyInterestRate = loan.LoanDailyInterestRate;

                    loanCalculated = LoanCalculator.Calculate(loanCalculated);

                    loan.AmountToBePaidAll = loanCalculated.Payments.Sum(p => p.PaymentAmount);
                    loan.AmountToBePaidDaily = loanCalculated.Payments.First().PaymentAmount;

                    loan.PaymentsPlanned = new List<PaymentPlanned>();
                    for (int i = 0; i < loanCalculated.Payments.Count(); i++)
                    {
                        loan.PaymentsPlanned.Add(new PaymentPlanned()
                        {
                            EndingBalance = loanCalculated.Payments.ElementAt(i).EndingBalance,
                            Interest = loanCalculated.Payments.ElementAt(i).Interest,
                            PaymentAmount = loanCalculated.Payments.ElementAt(i).PaymentAmount,
                            PaymentDate = loan.LoanStartDate.AddDays(i + 1),
                            PaymentID = loanCalculated.Payments.ElementAt(i).PaymentID,
                            Principal = loanCalculated.Payments.ElementAt(i).Principal,
                            StartingBalance = loanCalculated.Payments.ElementAt(i).StartingBalance
                        });
                    }
                }

                db.SaveChanges();
            }
        }

        public class Entity
        {
            public int AccountID { get; set; }
            public string Name { get; set; }
            public string LastName { get; set; }
            public string PrivateNumber { get; set; }
            public string Gender { get; set; }
            public string Status { get; set; }
            public string PhysicalAddress { get; set; }
            public int BranchID { get; set; }
            public string Branch { get; set; }
            public string BusinessPhysicalAddress { get; set; }
            public string NumberMobile { get; set; }
            public string AccountNumber { get; set; }
            public int GuarantorQuantity { get; set; }
            public string GuarantorName { get; set; }
            public string GuarantorLastName { get; set; }
            public string GuarantorPrivateNumber { get; set; }
            public string GuarantorPhysicalAddress { get; set; }
            public string GuarantorNumberMobile { get; set; }
            public int LoanID { get; set; }
            public string AgreementID { get; set; }
            public string LoanStatus { get; set; }
            public int CreditExpertID { get; set; }
            public string CreditExpertName { get; set; }
            public string CreditExpertLastName { get; set; }
            public double LoanAmount { get; set; }
            public string LoanPurpose { get; set; }
            public double LoanDailyInterestRate { get; set; }
            public int LoanTermDays { get; set; }
            public int LoanNetworkDays { get; set; }
            public int LoanDaysOfGrace { get; set; }
            public double LoanPenaltyInterestRate { get; set; }
            public double LoanEffectiveInterestRate { get; set; }
            public double LoanAmountToBePaidAll { get; set; }
            public double LoanPMT { get; set; }
            public DateTime LoanAgreementDate { get; set; }
            public DateTime LoanStartDate { get; set; }
            public DateTime LoanEndDate { get; set; }
        }

        public class PaymentClass
        {
            public string AccountName { get; set; }
            public string AccountLastName { get; set; }
            public string PrivateNumber { get; set; }
            public string Gender { get; set; }
            public int AccountID { get; set; }
            public int LoanID { get; set; }
            public string TaxOrder { get; set; }
            public int CollectorID { get; set; }
            public string CollectorName { get; set; }
            public string CollectorLastName { get; set; }
            public string AgreementID { get; set; }
            public int CreditExpertID { get; set; }
            public string CreditExpertName { get; set; }
            public string CreditExpertLastName { get; set; }
            public int BranchID { get; set; }
            public string BranchName { get; set; }
            public double LoanAmount { get; set; }
            public string LoanPurpose { get; set; }
            public double LoanDailyInterestRate { get; set; }
            public int LoanTermDays { get; set; }
            public int NetworkDays { get; set; }
            public int LoanDaysOfGrace { get; set; }
            public double LoanPenaltyRate { get; set; }
            public double LoanEffectiveInterestRate { get; set; }
            public double WholeDebt { get; set; }
            public double Payment { get; set; }
            public double CurrentDebt { get; set; }
            public double სულ_განულება { get; set; }
            public DateTime PMTDate { get; set; }
            public int Weekday { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public double StartingPlannedBalance { get; set; }
            public double StartingBalance { get; set; }
            public double PlannedBalance { get; set; }
            public double PayableInterest { get; set; }
            public double PayablePrincipal { get; set; }
            public double CurrentOverduePrincipal { get; set; }
            public double CurrentOverdueInterest { get; set; }
            public double CurrentPenalty { get; set; }
            public double AccruingOverduePrincipal { get; set; }
            public double AccruingOverdueInterest { get; set; }
            public double AccruingPenalty { get; set; }
            public double AccruingPenaltyPayment { get; set; }
            public double AccruingInterestPayment { get; set; }
            public double AccruingPrincipalPayment { get; set; }
            public double CurrentInterestPayment { get; set; }
            public double CurrentPrincipalPayment { get; set; }
            public double PrincipalPrepaymant { get; set; }
            public double PaidInterest { get; set; }
            public double PaidPenalty { get; set; }
            public double PaidPrincipal { get; set; }
            public double PrincipalPrepaid { get; set; }
            public double LoanBalance { get; set; }
            public string LoanStatus { get; set; }
            public double CurrentPMT { get; set; }
        }
    }
}
