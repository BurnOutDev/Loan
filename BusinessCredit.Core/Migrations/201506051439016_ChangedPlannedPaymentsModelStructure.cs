namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedPlannedPaymentsModelStructure : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.PaymentEntities", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.PaymentEntities", "PaidPayment_PaymentID", "dbo.Payments");
            DropIndex("dbo.PaymentEntities", new[] { "Loan_LoanID" });
            DropIndex("dbo.PaymentEntities", new[] { "PaidPayment_PaymentID" });
            CreateTable(
                "dbo.PaymentPlanneds",
                c => new
                    {
                        PaymentID = c.Int(nullable: false, identity: true),
                        PaymentDate = c.DateTime(nullable: false),
                        StartingBalance = c.Double(nullable: false),
                        PaymentAmount = c.Double(nullable: false),
                        Interest = c.Double(nullable: false),
                        Principal = c.Double(nullable: false),
                        EndingBalance = c.Double(nullable: false),
                        Loan_LoanID = c.Int(),
                    })
                .PrimaryKey(t => t.PaymentID)
                .ForeignKey("dbo.Loans", t => t.Loan_LoanID)
                .Index(t => t.Loan_LoanID);
            
            DropTable("dbo.PaymentEntities");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.PaymentEntities",
                c => new
                    {
                        PaymentEntityID = c.Int(nullable: false, identity: true),
                        PaymentDate = c.DateTime(nullable: false),
                        Deposit = c.Double(),
                        PaymentInterest = c.Double(),
                        PaymentPrincipal = c.Double(),
                        EndingPrincipal = c.Double(),
                        Loan_LoanID = c.Int(),
                        PaidPayment_PaymentID = c.Int(),
                    })
                .PrimaryKey(t => t.PaymentEntityID);
            
            DropForeignKey("dbo.PaymentPlanneds", "Loan_LoanID", "dbo.Loans");
            DropIndex("dbo.PaymentPlanneds", new[] { "Loan_LoanID" });
            DropTable("dbo.PaymentPlanneds");
            CreateIndex("dbo.PaymentEntities", "PaidPayment_PaymentID");
            CreateIndex("dbo.PaymentEntities", "Loan_LoanID");
            AddForeignKey("dbo.PaymentEntities", "PaidPayment_PaymentID", "dbo.Payments", "PaymentID");
            AddForeignKey("dbo.PaymentEntities", "Loan_LoanID", "dbo.Loans", "LoanID");
        }
    }
}
