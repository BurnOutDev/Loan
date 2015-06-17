namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Payments_Added_BranchID : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Accounts", "BranchID", c => c.Int(nullable: false));
            AddColumn("dbo.Loans", "BranchID", c => c.Int(nullable: false));
            AddColumn("dbo.Payments", "BranchID", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Payments", "BranchID");
            DropColumn("dbo.Loans", "BranchID");
            DropColumn("dbo.Accounts", "BranchID");
        }
    }
}
