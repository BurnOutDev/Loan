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
    public partial class DailyView : Window
    {
        private BusinessCreditContext _context = new BusinessCreditContext();

        public DailyView()
        {
            InitializeComponent();
        }

        private void tbxSearch_TextChanged(object sender, TextChangedEventArgs e)
        {
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            CollectionViewSource pmtsViewSource =
               ((CollectionViewSource)(this.FindResource("pmtsViewSource")));

            _context.Loans.Load();

            pmtsViewSource.Source = _context.Loans.Local;
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            _context.SaveChanges();
            dataGrid.Items.Refresh();
        }
    }
}
