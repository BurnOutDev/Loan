using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;
using BusinessCredit.Core;
using System.Data.Entity;
using BusinessCredit.Domain;

namespace WpfUI
{
    public partial class DailyView : Window
    {
        private BusinessCreditContext _context = new BusinessCreditContext();

        public List<Payment> Pmt { get; set; }

        public DailyView()
        {
            InitDb();
            InitializeComponent();
        }

        private void InitDb()
        {
            return;

            using (var db = new BusinessCreditContext())
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
                    Account = acc
                };

                //loan.PlanLoan();

                //loan.Initialize();

                foreach (var pmt in db.Payments.ToList())
                {
                    foreach (var prop in typeof(Payment).GetProperties())
                        prop.GetValue(pmt);
                }

                db.Accounts.Add(acc);

                db.Loans.Add(loan);

                db.SaveChanges();

                ;

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
                };

                loan2.PlanLoan();

                db.Accounts.Add(acc);
                db.Accounts.Add(acc2);

                db.Loans.Add(loan);
                db.Loans.Add(loan2);

                db.SaveChanges();
            }
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            CollectionViewSource pmtsViewSource =
               ((CollectionViewSource)(this.FindResource("pmtsViewSource")));

            _context.Payments.Load();

            pmtsViewSource.Source = from x in _context.Payments.Local
                                    where x.PaymentDate == DateTime.Today.AddDays(-1)
                                    select new { AccountID = x.Loan.Account.AccountID,
                                                 LoanID = x.Loan.LoanID,
                                                 Name = x.Loan.Account.Name,
                                                 LastName = x.Loan.Account.LastName,
                                                 PrivateNumber = x.Loan.Account.PrivateNumber,
                                                 Account = x.Loan.Account,
                                                 AmountToBePaidDaily = x.Loan.AmountToBePaidDaily,
                                                 CurrentDebt = x.CurrentDebt,
                                                 WholeDebt = x.WholeDebt,
                                                 CurrentPayment = x.CurrentPayment
                                    };
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            _context.SaveChanges();
            dataGrid.Items.Refresh();
        }
    }
}
