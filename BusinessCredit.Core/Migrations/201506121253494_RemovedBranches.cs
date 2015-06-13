namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovedBranches : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Accounts", "Branch_BranchID", "dbo.Branches");
            DropForeignKey("dbo.CreditExperts", "Branch_BranchID", "dbo.Branches");
            DropForeignKey("dbo.Loans", "Branch_BranchID", "dbo.Branches");
            DropForeignKey("dbo.Payments", "Branch_BranchID", "dbo.Branches");
            DropIndex("dbo.Accounts", new[] { "Branch_BranchID" });
            DropIndex("dbo.CreditExperts", new[] { "Branch_BranchID" });
            DropIndex("dbo.Loans", new[] { "Branch_BranchID" });
            DropIndex("dbo.Payments", new[] { "Branch_BranchID" });
            DropColumn("dbo.Accounts", "Branch_BranchID");
            DropColumn("dbo.CreditExperts", "Branch_BranchID");
            DropColumn("dbo.Loans", "Branch_BranchID");
            DropColumn("dbo.Payments", "Branch_BranchID");
            DropTable("dbo.Branches");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Branches",
                c => new
                    {
                        BranchID = c.Int(nullable: false, identity: true),
                        BranchName = c.String(),
                    })
                .PrimaryKey(t => t.BranchID);
            
            AddColumn("dbo.Payments", "Branch_BranchID", c => c.Int());
            AddColumn("dbo.Loans", "Branch_BranchID", c => c.Int());
            AddColumn("dbo.CreditExperts", "Branch_BranchID", c => c.Int());
            AddColumn("dbo.Accounts", "Branch_BranchID", c => c.Int());
            CreateIndex("dbo.Payments", "Branch_BranchID");
            CreateIndex("dbo.Loans", "Branch_BranchID");
            CreateIndex("dbo.CreditExperts", "Branch_BranchID");
            CreateIndex("dbo.Accounts", "Branch_BranchID");
            AddForeignKey("dbo.Payments", "Branch_BranchID", "dbo.Branches", "BranchID");
            AddForeignKey("dbo.Loans", "Branch_BranchID", "dbo.Branches", "BranchID");
            AddForeignKey("dbo.CreditExperts", "Branch_BranchID", "dbo.Branches", "BranchID");
            AddForeignKey("dbo.Accounts", "Branch_BranchID", "dbo.Branches", "BranchID");
        }
    }
}
