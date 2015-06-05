namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedSettersToLoanProperties : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Loans", "CurrentDebt", c => c.Double(nullable: false));
            AddColumn("dbo.Loans", "WholeDebt", c => c.Double(nullable: false));
            AddColumn("dbo.Loans", "LoanStatus", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Loans", "LoanStatus");
            DropColumn("dbo.Loans", "WholeDebt");
            DropColumn("dbo.Loans", "CurrentDebt");
        }
    }
}
