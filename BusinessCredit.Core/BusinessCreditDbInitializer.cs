using BusinessCredit.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Core
{
    public class BusinessCreditDbInitializer : DropCreateDatabaseAlways<BusinessCreditContext>
    {
        protected override void Seed(BusinessCreditContext db)
        {
            var acc2 = new Account
            {
                Name = "Irakli",
                LastName = "Murusidze",
                Gender = Gender.Male,
                AccountNumber = "GE26TB000078927984729834",
                BusinessPhysicalAddress = "London",
                NumberMobile = "598400903",
                PhysicalAddress = "Didi Dighomi",
                PrivateNumber = "62001043910",
                Status = PersonType.MicroEntrepreneur
            };

            var acc = new Account
            {
                Name = "Giorgi",
                LastName = "Okreshidze",
                Gender = Gender.Male,
                AccountNumber = "GE26TB000076548245729834",
                BusinessPhysicalAddress = "London",
                NumberMobile = "598400903",
                PhysicalAddress = "Sirme",
                PrivateNumber = "100154587854",
                Status = PersonType.IndividualEntrepreneur
            };

            var loan = new Loan
            {
                LoanAmount = 3000,
                LoanPurpose = "Biznesis ganvitareba",
                LoanDailyInterestRate = 0.526 / 100,
                LoanTermDays = 58,
                NetworkDays = 33,
                DaysOfGrace = 0,
                LoanPenaltyRate = 0.5 / 100,
                EffectiveInterestRate = 8.4 / 100,
                AmountToBePaidAll = 3800,
                AmountToBePaidDaily = 60,
                AgreementDate = DateTime.Today,
                LoanStartDate = DateTime.Today,
                LoanEndDate = DateTime.Today.AddDays(58),
                GuarantorName = "Giorgi",
                GuarantorLastName = "Gegenava",
                GuarantorPrivateNumber = "1005148465654",
                GuarantorPhysicalAddress = "Paris",
                GuarantorPhoneNumber = "591445588",
                LoanStatus = LoanStatus.Active
            };

            loan.PlanLoan();

            loan.Initialize();

            var loan2 = new Loan
            {
                LoanAmount = 4500,
                LoanPurpose = "Biznesis ganvitareba",
                LoanDailyInterestRate = 0.526 / 100,
                LoanTermDays = 70,
                NetworkDays = 55,
                DaysOfGrace = 0,
                LoanPenaltyRate = 0.5 / 100,
                EffectiveInterestRate = 8.4 / 100,
                AmountToBePaidAll = 5200,
                AmountToBePaidDaily = 78,
                AgreementDate = DateTime.Today,
                LoanStartDate = DateTime.Today,
                LoanEndDate = DateTime.Today.AddDays(58),
                GuarantorName = "Giorgi",
                GuarantorLastName = "Gegenava",
                GuarantorPrivateNumber = "1005148465654",
                GuarantorPhysicalAddress = "Paris",
                GuarantorPhoneNumber = "591445588",
                LoanStatus = LoanStatus.Active
            };

            loan2.PlanLoan();

            db.Accounts.Add(acc);
            db.Accounts.Add(acc2);

            db.Loans.Add(loan);
            db.Loans.Add(loan2);

            base.Seed(db);
        }
    }
}