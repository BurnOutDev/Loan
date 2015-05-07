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
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfUI
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            using (var db = new BusinessCreditContext())
            {
                //db.Agreements.Add(
                //    new Agreement()
                //    );
                //db.SaveChanges();
                //if (db.Accounts.Count() == 0)
                //{
                //    var acc = new Account()
                //    {
                //        Name = "ირაკლი",
                //        LastName = "",
                //        PrivateNumber = "62001043910",
                //        Gender = Gender.Male,
                //        Status = PersonType.PhysicalPerson,
                //        NumberMobile = "598400903",
                //        PhysicalAddress = "Didi Dighomi",
                //        AccountNumber = "GE26TB54846549454864654846",
                //        BusinessPhysicalAddress = "Tbilisi, Rustaveli Street",
                //    };
                //    db.Accounts.Add(acc);
                //    db.SaveChanges(); 
                //}
            }
            InitializeComponent();
        }

        private void menuitemExit_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void btnClients_Click(object sender, RoutedEventArgs e)
        {
            var clientsWindow = new ClientsWindow();
            clientsWindow.Show();
        }

        private void btnLoans_Click(object sender, RoutedEventArgs e)
        {
            var loansWindow = new LoansWindow();
            loansWindow.Show();
        }
    }
}
