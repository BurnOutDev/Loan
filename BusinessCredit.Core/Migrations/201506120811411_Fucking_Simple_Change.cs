namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Fucking_Simple_Change : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Loans", "WholeDebt", c => c.Double());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Loans", "WholeDebt", c => c.Double(nullable: false));
        }
    }
}
