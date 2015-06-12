namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class LoanCurrentDebt_and_LoanWholeDebt_Changed_to_methods : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Loans", "CurrentDebt");
            DropColumn("dbo.Loans", "WholeDebt");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Loans", "WholeDebt", c => c.Double());
            AddColumn("dbo.Loans", "CurrentDebt", c => c.Double());
        }
    }
}
