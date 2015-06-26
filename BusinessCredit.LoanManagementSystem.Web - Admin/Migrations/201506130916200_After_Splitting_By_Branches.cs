namespace BusinessCredit.LoanManagementSystem.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class After_Splitting_By_Branches : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "ConnectionString", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "ConnectionString");
        }
    }
}
