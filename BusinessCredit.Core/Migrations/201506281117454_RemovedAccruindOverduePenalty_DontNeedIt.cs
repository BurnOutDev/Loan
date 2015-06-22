namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovedAccruindOverduePenalty_DontNeedIt : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Payments", "AccruingOverduePenalty");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Payments", "AccruingOverduePenalty", c => c.Double());
        }
    }
}
