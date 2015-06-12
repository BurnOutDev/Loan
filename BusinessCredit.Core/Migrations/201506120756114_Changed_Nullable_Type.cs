namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Changed_Nullable_Type : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Loans", "CurrentDebt", c => c.Double());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Loans", "CurrentDebt", c => c.Double(nullable: false));
        }
    }
}
