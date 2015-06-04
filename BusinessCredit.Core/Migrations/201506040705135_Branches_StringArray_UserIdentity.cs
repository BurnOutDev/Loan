namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Branches_StringArray_UserIdentity : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Branches", "UserIdentity");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Branches", "UserIdentity", c => c.String());
        }
    }
}
