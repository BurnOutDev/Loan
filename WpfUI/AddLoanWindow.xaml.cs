using BusinessCredit.Core;
using BusinessCredit.Domain;
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
using System.Data.Entity;

namespace WpfUI
{
    /// <summary>
    /// Interaction logic for AddLoanWindow.xaml
    /// </summary>
    public partial class AddLoanWindow : Window
    {
        public int AccountID { get; set; }
        public List<Branch> BranchesSource { get; set; }
        public AddLoanWindow()
        {
            var accountId = 1;
            AccountID = accountId;
            InitializeComponent();
        }

        private void btnCancel_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void btnSave_Click(object sender, RoutedEventArgs e)
        {
            using (var db = new BusinessCreditContext())
            {
                var loan = new Loan
                {
                    LoanAmount = double.Parse(tbxLoanAmount.Text),
                    LoanPurpose = tbxLoanPurpose.Text,
                    LoanDailyInterestRate = double.Parse(tbxLoanDailyInterestRate.Text) / 100,
                    LoanTermDays = int.Parse(tbxLoanTermDays.Text),
                    NetworkDays = int.Parse(tbxNetworkDays.Text),
                    DaysOfGrace = int.Parse(tbxDaysOfGrace.Text),
                    LoanPenaltyRate = double.Parse(tbxLoanPenaltyRate.Text),
                    EffectiveInterestRate = double.Parse(tbxEffectiveInterestRate.Text),
                    AmountToBePaidAll = double.Parse(tbxAmountToBePaidAll.Text),
                    AmountToBePaidDaily = double.Parse(tbxAmountToBePaidDaily.Text),
                    AgreementDate = DateTime.Today,
                    LoanStartDate = DateTime.Today,
                    LoanEndDate = DateTime.Today.AddDays(int.Parse(tbxLoanTermDays.Text))
                    //GuarantorName = tbxGuarantorName.Text,
                    //GuarantorLastName = tbxGuarantorLastName.Text,
                    //GuarantorPrivateNumber = tbxGuarantorPrivateNumber.Text,
                    //GuarantorPhysicalAddress = tbxGuarantorPhysicalAddress.Text,
                    //GuarantorPhoneNumber = tbxGuarantorPhoneNumber.Text
                };
                //loan.PlannedPaymentEntities = new PlannedPayments(loan);

                //loan.PlanLoan();

                db.Accounts.Where(x => x.AccountID == AccountID).FirstOrDefault().Loans.Add(loan);
                db.SaveChanges();
                MessageBox.Show("სესხი წარმატებით დაემატა!");
                Close();


            }
        }

        private void tbxLoanTermDays_PreviewTextInput(object sender, TextCompositionEventArgs e)
        {
            if (!char.IsDigit(e.Text, e.Text.Length - 1))
                e.Handled = true;
        }
    }
}
