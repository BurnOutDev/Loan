using BusinessCredit.Core;
using BusinessCredit.Domain;
using System;
using System.Linq;
using System.Windows.Forms;

namespace BusinessCredit.UI
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            using (var db = new BusinessCreditContext())
            {
                name.Text += db.CreditExperts.ToList().LastOrDefault().Name;
                lastname.Text += db.CreditExperts.ToList().LastOrDefault().LastName;
                hiredate.Text += db.CreditExperts.ToList().LastOrDefault().HireDate.ToShortDateString();
                address.Text += db.CreditExperts.ToList().LastOrDefault().Address;
                emailprivate.Text += db.CreditExperts.ToList().LastOrDefault().EmailPrivate;
                privatenumber.Text += db.CreditExperts.ToList().LastOrDefault().PrivatNumber;
                mobilenumber.Text += db.CreditExperts.ToList().LastOrDefault().NumberMobile;

                db.CreditExperts.Add(
                    new CreditExpert()
                    {
                        Name = "Giorgi",
                        LastName = "Okreshidze",
                        HireDate = DateTime.Now,
                        RetireDate = DateTime.Now,
                        Address = "Sairme Str.",
                        EmailPrivate = "gasi@mail.ru",
                        EmailWork = "G.Okreshidze@BusinessCredit.com",
                        PrivatNumber = "43567896432",
                        NumberHome = "0322554886",
                        NumberMobile = "571260088",
                        Status = EmployeeStatus.Permanent
                    }
                    );
                db.SaveChanges();
            }
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            using (var db = new BusinessCreditContext())
            {
                var loan = new Loan()
                {
                    LoanAmount = 500,
                    LoanDailyInterestRate = 0.524 / 100,
                    LoanTermDays = 45,
                    DaysOfGrace = 0,
                    LoanStartDate = new DateTime(2014, 11, 28),
                    LoanEndDate = DateTime.Now.AddMonths(2).Date,
                    AgreementDate = DateTime.Now,
                    EffectiveInterestRate = 8.8 / 100
                };

                //loan.PlannedPaymentEntities = new PlannedPayments(loan);

                db.Loans.Add(loan);

                db.SaveChanges();

                Application.Exit();
            }
        }
    }
}
