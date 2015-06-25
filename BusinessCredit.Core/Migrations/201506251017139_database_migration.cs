namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class database_migration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.CashCollectionAgents", "PrivateNumber", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.CashCollectionAgents", "PrivateNumber");
        }
    }
}
