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
    public partial class LoansWindow : Window
    {
        private BusinessCreditContext _context = new BusinessCreditContext();

        public int AccountID { get; set; }

        public LoansWindow(int accountId = -1)
        {
            InitializeComponent();
            AccountID = accountId;
        }

        private void tbxSearch_TextChanged(object sender, TextChangedEventArgs e)
        {
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            CollectionViewSource loansViewSource =
               ((CollectionViewSource)(this.FindResource("loansViewSource")));

            _context.Loans.Load();

            loansViewSource.Source = _context.Loans.Local;

            if (AccountID != -1)
                ((CollectionViewSource)dataGrid.DataContext).View.Filter 
                    = x => (x as Loan).Account.AccountID == AccountID;
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            _context.SaveChanges();
            dataGrid.Items.Refresh();
        }

        private void LoansClick(object sender, RoutedEventArgs e)
        {
            //MessageBox.Show("გაიხსნება სესხების ჩამონათვალი");
        }

        private void tbxNameFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            //((collectionviewsource)datagrid.datacontext).view.filter = x =>
            //{
            //    return (x as loan).name.tolower().contains(tbxnamefilter.text.tolower()) ? true : false;
            //};
        }

        private void tbxLastNameFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            //((CollectionViewSource)dataGrid.DataContext).View.Filter = x =>
            //{
            //    return ((Account)x).LastName.ToLower().Contains(tbxLastNameFilter.Text.ToLower()) ? true : false;
            //};
        }

        private void tbxPrivateNumberFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            //((CollectionViewSource)dataGrid.DataContext).View.Filter = x =>
            //{
            //    return ((Account)x).PrivateNumber.ToLower().Contains(tbxPrivateNumberFilter.Text.ToLower()) ? true : false;
            //};
        }

        private void tbxNumberMobileFilter_TextChanged(object sender, TextChangedEventArgs e)
        {
            //((CollectionViewSource)dataGrid.DataContext).View.Filter = x =>
            //{
            //    return ((Account)x).NumberMobile.ToLower().Contains(tbxNumberMobileFilter.Text.ToLower()) ? true : false;
            //};
        }
    }
}
