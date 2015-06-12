namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Agreement_Object_To_String_Object : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Loans", "Agreement_AgreementID", "dbo.Agreements");
            DropIndex("dbo.Loans", new[] { "Agreement_AgreementID" });
            AddColumn("dbo.Loans", "Agreement", c => c.String());
            DropColumn("dbo.Loans", "Agreement_AgreementID");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Loans", "Agreement_AgreementID", c => c.Int());
            DropColumn("dbo.Loans", "Agreement");
            CreateIndex("dbo.Loans", "Agreement_AgreementID");
            AddForeignKey("dbo.Loans", "Agreement_AgreementID", "dbo.Agreements", "AgreementID");
        }
    }
}
