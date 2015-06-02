namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BranchAddedUserIdentityInt32 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Branches", "UserIdentity", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Branches", "UserIdentity");
        }
    }
}
