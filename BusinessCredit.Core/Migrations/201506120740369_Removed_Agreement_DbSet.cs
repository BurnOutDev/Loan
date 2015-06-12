namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Removed_Agreement_DbSet : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.Agreements");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Agreements",
                c => new
                    {
                        AgreementID = c.Int(nullable: false, identity: true),
                        AgreementDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.AgreementID);
            
        }
    }
}
