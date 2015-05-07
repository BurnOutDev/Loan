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

namespace WpfUI
{
    /// <summary>
    /// Interaction logic for AddClientWindow.xaml
    /// </summary>
    public partial class AddClientWindow : Window
    {
        public AddClientWindow()
        {
            InitializeComponent();
        }

        private void btnSave_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                using (var db = new BusinessCreditContext())
                {
                    db.Accounts.Add(
                        new Account
                        {
                            Name = tbxName.Text,
                            LastName = tbxLastName.Text,
                            PrivateNumber = tbxPrivateNumber.Text,
                            Gender = (Gender)int.Parse(((ComboBoxItem)tbxGender.SelectedItem).Tag.ToString()),
                            Status = (PersonType)int.Parse(((ComboBoxItem)tbxStatus.SelectedItem).Tag.ToString()),
                            PhysicalAddress = tbxPhysAddress.Text,
                            NumberMobile = tbxMobNumber.Text,
                            AccountNumber = tbxAccountNumber.Text,
                            BusinessPhysicalAddress = tbxBusinessPhysAddress.Text
                        }
                        );

                    db.SaveChanges();
                    MessageBox.Show("კლიენტი წარმატებით დაემატა!");
                    Close();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnCancel_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
