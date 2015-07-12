namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedEnforcementFee_ColumnsToPayments : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Payments", "EnforcementAndCourtFee", c => c.Double(nullable: false));
            AddColumn("dbo.Payments", "EnforcementAndCourtFeePayment", c => c.Double());
            AddColumn("dbo.Payments", "EnforcementAndCourtFeeStartingBalance", c => c.Double());
            AddColumn("dbo.Payments", "EnforcementAndCourtFeeEndingBalance", c => c.Double());
            AddColumn("dbo.Payments", "TotalEnforcementAndCourtFee", c => c.Double());
            AddColumn("dbo.Payments", "TotalEnforcementAndCourtFeePayment", c => c.Double());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Payments", "TotalEnforcementAndCourtFeePayment");
            DropColumn("dbo.Payments", "TotalEnforcementAndCourtFee");
            DropColumn("dbo.Payments", "EnforcementAndCourtFeeEndingBalance");
            DropColumn("dbo.Payments", "EnforcementAndCourtFeeStartingBalance");
            DropColumn("dbo.Payments", "EnforcementAndCourtFeePayment");
            DropColumn("dbo.Payments", "EnforcementAndCourtFee");
        }
    }
}
