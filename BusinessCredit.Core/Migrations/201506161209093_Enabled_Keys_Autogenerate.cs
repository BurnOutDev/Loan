namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Enabled_Keys_Autogenerate : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Loans", "Account_AccountID", "dbo.Accounts");
            DropForeignKey("dbo.Guarantors", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.Payments", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.PaymentPlanneds", "Loan_LoanID", "dbo.Loans");
            DropPrimaryKey("dbo.Accounts");
            DropPrimaryKey("dbo.Loans");
            AlterColumn("dbo.Accounts", "AccountID", c => c.Int(nullable: false, identity: true));
            AlterColumn("dbo.Loans", "LoanID", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Accounts", "AccountID");
            AddPrimaryKey("dbo.Loans", "LoanID");
            AddForeignKey("dbo.Loans", "Account_AccountID", "dbo.Accounts", "AccountID");
            AddForeignKey("dbo.Guarantors", "Loan_LoanID", "dbo.Loans", "LoanID");
            AddForeignKey("dbo.Payments", "Loan_LoanID", "dbo.Loans", "LoanID");
            AddForeignKey("dbo.PaymentPlanneds", "Loan_LoanID", "dbo.Loans", "LoanID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PaymentPlanneds", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.Payments", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.Guarantors", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.Loans", "Account_AccountID", "dbo.Accounts");
            DropPrimaryKey("dbo.Loans");
            DropPrimaryKey("dbo.Accounts");
            AlterColumn("dbo.Loans", "LoanID", c => c.Int(nullable: false));
            AlterColumn("dbo.Accounts", "AccountID", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Loans", "LoanID");
            AddPrimaryKey("dbo.Accounts", "AccountID");
            AddForeignKey("dbo.PaymentPlanneds", "Loan_LoanID", "dbo.Loans", "LoanID");
            AddForeignKey("dbo.Payments", "Loan_LoanID", "dbo.Loans", "LoanID");
            AddForeignKey("dbo.Guarantors", "Loan_LoanID", "dbo.Loans", "LoanID");
            AddForeignKey("dbo.Loans", "Account_AccountID", "dbo.Accounts", "AccountID");
        }
    }
}
