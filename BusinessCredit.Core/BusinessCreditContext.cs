using BusinessCredit.Domain;
using System.Data.Entity;

namespace BusinessCredit.Core
{
    public class BusinessCreditContext : DbContext
    {
        public BusinessCreditContext() : base("name=BusinessCreditDbConnectionString")
        {
            Database.SetInitializer(new BusinessCreditDbInitializer());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Loan>()
                .Property(f => f.AgreementDate)
                .HasColumnType("datetime2");

            modelBuilder.Entity<Loan>()
               .Property(f => f.LoanStartDate)
               .HasColumnType("datetime2");

            modelBuilder.Entity<Loan>()
               .Property(f => f.LoanEndDate)
               .HasColumnType("datetime2");

            modelBuilder.Entity<Agreement>()
               .Property(f => f.AgreementDate)
               .HasColumnType("datetime2");

            modelBuilder.Entity<CreditExpert>()
               .Property(f => f.HireDate)
               .HasColumnType("datetime2");

            modelBuilder.Entity<CreditExpert>()
               .Property(f => f.RetireDate)
               .HasColumnType("datetime2");

            modelBuilder.Entity<Payment>()
               .Property(f => f.PaymentDate)
               .HasColumnType("datetime2");

            //modelBuilder.Entity<PlannedPayments>()
            // .Property(f => f.StartDate)
            // .HasColumnType("datetime2");

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Account> Accounts { get; set; }
        public DbSet<Agreement> Agreements { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<CreditExpert> CreditExperts { get; set; }
        public DbSet<Loan> Loans { get; set; }
        public DbSet<Payment> Payments { get; set; }
        //public DbSet<PlannedPayments> PlannedPayments { get; set; }
        public DbSet<PaymentPlanned> PaymentEntities { get; set; }
        public DbSet<CashCollectionAgent> CashCollectionAgents { get; set; }
        public DbSet<TaxOrder> TaxOrders { get; set; }
    }
}
