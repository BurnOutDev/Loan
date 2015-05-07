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
    /// <summary>
    /// Interaction logic for ClientsWindow.xaml
    /// </summary>
    public partial class ClientsWindow : Window
    {
        private BusinessCreditContext _context = new BusinessCreditContext();

        public ClientsWindow()
        {
            InitializeComponent();
        }

        private void tbxSearch_TextChanged(object sender, TextChangedEventArgs e)
        {
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            CollectionViewSource accountsViewSource =
               ((CollectionViewSource)(this.FindResource("accountsViewSource")));

            _context.Accounts.Load();

            accountsViewSource.Source = _context.Accounts.Local;
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            _context.SaveChanges();
            dataGrid.Items.Refresh();
        }

        private void LoansClick(object sender, RoutedEventArgs e)
        {
            var loansWindow = new LoansWindow(((int)(sender as Button).CommandParameter));
            loansWindow.Show();
        }

        private void tbxNameFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            ((CollectionViewSource)dataGrid.DataContext).View.Filter = x =>
            {
                return ((Account)x).Name.ToLower().Contains(tbxNameFilter.Text.ToLower()) ? true : false;
            };
        }

        private void tbxLastNameFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            ((CollectionViewSource)dataGrid.DataContext).View.Filter = x =>
            {
                return ((Account)x).LastName.ToLower().Contains(tbxLastNameFilter.Text.ToLower()) ? true : false;
            };
        }

        private void tbxPrivateNumberFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            ((CollectionViewSource)dataGrid.DataContext).View.Filter = x =>
            {
                return ((Account)x).PrivateNumber.ToLower().Contains(tbxPrivateNumberFilter.Text.ToLower()) ? true : false;
            };
        }

        private void tbxNumberMobileFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            ((CollectionViewSource)dataGrid.DataContext).View.Filter = x =>
            {
                return ((Account)x).NumberMobile.ToLower().Contains(tbxNumberMobileFilter.Text.ToLower()) ? true : false;
            };
        }

        private void MenuItem_Click(object sender, RoutedEventArgs e)
        {

        }
    }
}
