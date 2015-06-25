namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovedTaxOrders_Table : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.TaxOrders");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.TaxOrders",
                c => new
                    {
                        TaxOrderID = c.Int(nullable: false, identity: true),
                        TaxOrderNumber = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        PaymentAmountLari = c.Int(nullable: false),
                        PaymentAmountTetri = c.Int(nullable: false),
                        PaymentAmountString = c.String(),
                        Basis = c.String(),
                        AccountFirstName = c.String(),
                        AccountLastName = c.String(),
                        AccountPrivateNumber = c.String(),
                        Payer = c.String(),
                        CollectorFirstName = c.String(),
                        CollectorLastName = c.String(),
                        CollectorPrivateNumber = c.String(),
                    })
                .PrimaryKey(t => t.TaxOrderID);
            
        }
    }
}
