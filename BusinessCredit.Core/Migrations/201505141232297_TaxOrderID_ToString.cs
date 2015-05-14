namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TaxOrderID_ToString : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Payments", "TaxOrderID", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Payments", "TaxOrderID", c => c.Int(nullable: false));
        }
    }
}
