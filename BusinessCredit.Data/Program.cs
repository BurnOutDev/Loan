using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessCredit.Domain;
using BusinessCredit.Core;
using LinqToExcel;
using Remotion.Data.Linq;
using System.IO;

namespace BusinessCredit.Data
{
    public class Program
    {
        static void Main()
        {
            var excel = new ExcelQueryFactory();
            excel.FileName = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), @"Work\TaxOrderTemplates.xlsx");

            Console.WriteLine("Getting Data...");
            var payments = (from x in excel.Worksheet("TaxOrderTemplate")
                            select x).ToList();
            Console.WriteLine("Getting Data Finished (OK)");
          
                Console.WriteLine("All Done!!!");
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

