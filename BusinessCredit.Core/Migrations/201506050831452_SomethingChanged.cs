namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SomethingChanged : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.PaymentEntities", "PrevPayment_PaymentEntityID", "dbo.PaymentEntities");
            DropIndex("dbo.PaymentEntities", new[] { "PrevPayment_PaymentEntityID" });
            AddColumn("dbo.PaymentEntities", "PaidPayment_PaymentID", c => c.Int());
            AlterColumn("dbo.PaymentEntities", "Deposit", c => c.Double());
            AlterColumn("dbo.PaymentEntities", "PaymentInterest", c => c.Double());
            AlterColumn("dbo.PaymentEntities", "PaymentPrincipal", c => c.Double());
            AlterColumn("dbo.PaymentEntities", "EndingPrincipal", c => c.Double());
            CreateIndex("dbo.PaymentEntities", "PaidPayment_PaymentID");
            AddForeignKey("dbo.PaymentEntities", "PaidPayment_PaymentID", "dbo.Payments", "PaymentID");
            DropColumn("dbo.Loans", "CurrentDebt");
            DropColumn("dbo.Loans", "WholeDebt");
            DropColumn("dbo.Loans", "LoanStatus");
            DropColumn("dbo.Payments", "CurrentDebt");
            DropColumn("dbo.Payments", "WholeDebt");
            DropColumn("dbo.Payments", "StartingPlannedBalance");
            DropColumn("dbo.Payments", "StartingBalance");
            DropColumn("dbo.Payments", "PlannedBalance");
            DropColumn("dbo.Payments", "PayableInterest");
            DropColumn("dbo.Payments", "PayablePrincipal");
            DropColumn("dbo.Payments", "CurrentOverduePrincipal");
            DropColumn("dbo.Payments", "CurrentOverdueInterest");
            DropColumn("dbo.Payments", "CurrentPenalty");
            DropColumn("dbo.Payments", "AccruingOverduePrincipal");
            DropColumn("dbo.Payments", "AccruingOverdueInterest");
            DropColumn("dbo.Payments", "AccruingOverduePenalty");
            DropColumn("dbo.Payments", "AccruingPenaltyPayment");
            DropColumn("dbo.Payments", "AccruingInterestPayment");
            DropColumn("dbo.Payments", "AccruingPrincipalPayment");
            DropColumn("dbo.Payments", "CurrentInterestPayment");
            DropColumn("dbo.Payments", "CurrentPrincipalPayment");
            DropColumn("dbo.Payments", "PrincipalPrepaymant");
            DropColumn("dbo.Payments", "PaidInterest");
            DropColumn("dbo.Payments", "PaidPenalty");
            DropColumn("dbo.Payments", "PaidPrincipal");
            DropColumn("dbo.Payments", "PrincipalPrepaid");
            DropColumn("dbo.Payments", "LoanBalance");
            DropColumn("dbo.Payments", "LoanStatus");
            DropColumn("dbo.PaymentEntities", "StartingPrincipal");
            DropColumn("dbo.PaymentEntities", "PrevPayment_PaymentEntityID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.PaymentEntities", "PrevPayment_PaymentEntityID", c => c.Int());
            AddColumn("dbo.PaymentEntities", "StartingPrincipal", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "LoanStatus", c => c.Boolean(nullable: false));
            AddColumn("dbo.Payments", "LoanBalance", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PrincipalPrepaid", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PaidPrincipal", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PaidPenalty", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PaidInterest", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PrincipalPrepaymant", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "CurrentPrincipalPayment", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "CurrentInterestPayment", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "AccruingPrincipalPayment", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "AccruingInterestPayment", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "AccruingPenaltyPayment", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "AccruingOverduePenalty", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "AccruingOverdueInterest", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "AccruingOverduePrincipal", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "CurrentPenalty", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "CurrentOverdueInterest", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "CurrentOverduePrincipal", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PayablePrincipal", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PayableInterest", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "PlannedBalance", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "StartingBalance", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "StartingPlannedBalance", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "WholeDebt", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "CurrentDebt", c => c.Double(nullable: false));
            AddColumn("dbo.Loans", "LoanStatus", c => c.Int(nullable: false));
            AddColumn("dbo.Loans", "WholeDebt", c => c.Double(nullable: false));
            AddColumn("dbo.Loans", "CurrentDebt", c => c.Double(nullable: false));
            DropForeignKey("dbo.PaymentEntities", "PaidPayment_PaymentID", "dbo.Payments");
            DropIndex("dbo.PaymentEntities", new[] { "PaidPayment_PaymentID" });
            AlterColumn("dbo.PaymentEntities", "EndingPrincipal", c => c.Double(nullable: false));
            AlterColumn("dbo.PaymentEntities", "PaymentPrincipal", c => c.Double(nullable: false));
            AlterColumn("dbo.PaymentEntities", "PaymentInterest", c => c.Double(nullable: false));
            AlterColumn("dbo.PaymentEntities", "Deposit", c => c.Double(nullable: false));
            DropColumn("dbo.PaymentEntities", "PaidPayment_PaymentID");
            CreateIndex("dbo.PaymentEntities", "PrevPayment_PaymentEntityID");
            AddForeignKey("dbo.PaymentEntities", "PrevPayment_PaymentEntityID", "dbo.PaymentEntities", "PaymentEntityID");
        }
    }
}
