namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Temporary_DbModel_Change__Payments_Added_Setters : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Payments", "CurrentDebt", c => c.Double());
            AddColumn("dbo.Payments", "WholeDebt", c => c.Double());
            AddColumn("dbo.Payments", "StartingPlannedBalance", c => c.Double());
            AddColumn("dbo.Payments", "StartingBalance", c => c.Double());
            AddColumn("dbo.Payments", "PayableInterest", c => c.Double());
            AddColumn("dbo.Payments", "PayablePrincipal", c => c.Double());
            AddColumn("dbo.Payments", "CurrentOverduePrincipal", c => c.Double());
            AddColumn("dbo.Payments", "CurrentOverdueInterest", c => c.Double());
            AddColumn("dbo.Payments", "CurrentPenalty", c => c.Double());
            AddColumn("dbo.Payments", "AccruingOverduePrincipal", c => c.Double());
            AddColumn("dbo.Payments", "AccruingOverdueInterest", c => c.Double());
            AddColumn("dbo.Payments", "AccruingOverduePenalty", c => c.Double());
            AddColumn("dbo.Payments", "AccruingPenaltyPayment", c => c.Double());
            AddColumn("dbo.Payments", "AccruingInterestPayment", c => c.Double());
            AddColumn("dbo.Payments", "AccruingPrincipalPayment", c => c.Double());
            AddColumn("dbo.Payments", "CurrentInterestPayment", c => c.Double());
            AddColumn("dbo.Payments", "CurrentPrincipalPayment", c => c.Double());
            AddColumn("dbo.Payments", "PrincipalPrepaymant", c => c.Double());
            AddColumn("dbo.Payments", "PaidInterest", c => c.Double());
            AddColumn("dbo.Payments", "PaidPenalty", c => c.Double());
            AddColumn("dbo.Payments", "PaidPrincipal", c => c.Double());
            AddColumn("dbo.Payments", "PrincipalPrepaid", c => c.Double());
            AddColumn("dbo.Payments", "LoanBalance", c => c.Double());
            AddColumn("dbo.Payments", "LoanStatus", c => c.Boolean());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Payments", "LoanStatus");
            DropColumn("dbo.Payments", "LoanBalance");
            DropColumn("dbo.Payments", "PrincipalPrepaid");
            DropColumn("dbo.Payments", "PaidPrincipal");
            DropColumn("dbo.Payments", "PaidPenalty");
            DropColumn("dbo.Payments", "PaidInterest");
            DropColumn("dbo.Payments", "PrincipalPrepaymant");
            DropColumn("dbo.Payments", "CurrentPrincipalPayment");
            DropColumn("dbo.Payments", "CurrentInterestPayment");
            DropColumn("dbo.Payments", "AccruingPrincipalPayment");
            DropColumn("dbo.Payments", "AccruingInterestPayment");
            DropColumn("dbo.Payments", "AccruingPenaltyPayment");
            DropColumn("dbo.Payments", "AccruingOverduePenalty");
            DropColumn("dbo.Payments", "AccruingOverdueInterest");
            DropColumn("dbo.Payments", "AccruingOverduePrincipal");
            DropColumn("dbo.Payments", "CurrentPenalty");
            DropColumn("dbo.Payments", "CurrentOverdueInterest");
            DropColumn("dbo.Payments", "CurrentOverduePrincipal");
            DropColumn("dbo.Payments", "PayablePrincipal");
            DropColumn("dbo.Payments", "PayableInterest");
            DropColumn("dbo.Payments", "StartingBalance");
            DropColumn("dbo.Payments", "StartingPlannedBalance");
            DropColumn("dbo.Payments", "WholeDebt");
            DropColumn("dbo.Payments", "CurrentDebt");
        }
    }
}
