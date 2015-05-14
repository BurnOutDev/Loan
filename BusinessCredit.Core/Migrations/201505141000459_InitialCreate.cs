namespace BusinessCredit.Core.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Accounts",
                c => new
                    {
                        AccountID = c.Int(nullable: false),
                        Name = c.String(),
                        LastName = c.String(),
                        PrivateNumber = c.String(),
                        Gender = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                        PhysicalAddress = c.String(),
                        NumberMobile = c.String(),
                        AccountNumber = c.String(),
                        BusinessPhysicalAddress = c.String(),
                        Branch_BranchID = c.Int(),
                    })
                .PrimaryKey(t => t.AccountID)
                .ForeignKey("dbo.Branches", t => t.Branch_BranchID)
                .Index(t => t.Branch_BranchID);
            
            CreateTable(
                "dbo.Loans",
                c => new
                    {
                        LoanID = c.Int(nullable: false),
                        LoanAmount = c.Double(nullable: false),
                        LoanPurpose = c.String(),
                        LoanDailyInterestRate = c.Double(nullable: false),
                        LoanTermDays = c.Int(nullable: false),
                        NetworkDays = c.Int(nullable: false),
                        DaysOfGrace = c.Int(nullable: false),
                        LoanPenaltyRate = c.Double(nullable: false),
                        EffectiveInterestRate = c.Double(nullable: false),
                        AmountToBePaidAll = c.Double(nullable: false),
                        AmountToBePaidDaily = c.Double(nullable: false),
                        AgreementDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        LoanStartDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        LoanEndDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        LoanStatus = c.Int(nullable: false),
                        Account_AccountID = c.Int(),
                        Agreement_AgreementID = c.Int(),
                        CreditExpert_EmployeeID = c.Int(),
                        Branch_BranchID = c.Int(),
                    })
                .PrimaryKey(t => t.LoanID)
                .ForeignKey("dbo.Accounts", t => t.Account_AccountID)
                .ForeignKey("dbo.Agreements", t => t.Agreement_AgreementID)
                .ForeignKey("dbo.CreditExperts", t => t.CreditExpert_EmployeeID)
                .ForeignKey("dbo.Branches", t => t.Branch_BranchID)
                .Index(t => t.Account_AccountID)
                .Index(t => t.Agreement_AgreementID)
                .Index(t => t.CreditExpert_EmployeeID)
                .Index(t => t.Branch_BranchID);
            
            CreateTable(
                "dbo.Agreements",
                c => new
                    {
                        AgreementID = c.Int(nullable: false, identity: true),
                        AgreementDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                    })
                .PrimaryKey(t => t.AgreementID);
            
            CreateTable(
                "dbo.Branches",
                c => new
                    {
                        BranchID = c.Int(nullable: false, identity: true),
                        BranchName = c.String(),
                    })
                .PrimaryKey(t => t.BranchID);
            
            CreateTable(
                "dbo.CreditExperts",
                c => new
                    {
                        EmployeeID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        LastName = c.String(),
                        PrivatNumber = c.String(),
                        Address = c.String(),
                        NumberMobile = c.String(),
                        NumberHome = c.String(),
                        EmailWork = c.String(),
                        EmailPrivate = c.String(),
                        HireDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        RetireDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Status = c.Int(nullable: false),
                        Branch_BranchID = c.Int(),
                    })
                .PrimaryKey(t => t.EmployeeID)
                .ForeignKey("dbo.Branches", t => t.Branch_BranchID)
                .Index(t => t.Branch_BranchID);
            
            CreateTable(
                "dbo.Guarantors",
                c => new
                    {
                        GuarantorID = c.Int(nullable: false, identity: true),
                        GuarantorName = c.String(),
                        GuarantorLastName = c.String(),
                        GuarantorPrivateNumber = c.String(),
                        GuarantorPhysicalAddress = c.String(),
                        GuarantorPhoneNumber = c.String(),
                        Loan_LoanID = c.Int(),
                    })
                .PrimaryKey(t => t.GuarantorID)
                .ForeignKey("dbo.Loans", t => t.Loan_LoanID)
                .Index(t => t.Loan_LoanID);
            
            CreateTable(
                "dbo.Payments",
                c => new
                    {
                        PaymentID = c.Int(nullable: false, identity: true),
                        TaxOrderID = c.Int(nullable: false),
                        CurrentPayment = c.Double(nullable: false),
                        PaymentDate = c.DateTime(nullable: false, precision: 7, storeType: "datetime2"),
                        Branch_BranchID = c.Int(),
                        CashCollectionAgent_CashCollectionAgentID = c.Int(),
                        CreditExpert_EmployeeID = c.Int(),
                        Loan_LoanID = c.Int(),
                    })
                .PrimaryKey(t => t.PaymentID)
                .ForeignKey("dbo.Branches", t => t.Branch_BranchID)
                .ForeignKey("dbo.CashCollectionAgents", t => t.CashCollectionAgent_CashCollectionAgentID)
                .ForeignKey("dbo.CreditExperts", t => t.CreditExpert_EmployeeID)
                .ForeignKey("dbo.Loans", t => t.Loan_LoanID)
                .Index(t => t.Branch_BranchID)
                .Index(t => t.CashCollectionAgent_CashCollectionAgentID)
                .Index(t => t.CreditExpert_EmployeeID)
                .Index(t => t.Loan_LoanID);
            
            CreateTable(
                "dbo.CashCollectionAgents",
                c => new
                    {
                        CashCollectionAgentID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        LastName = c.String(),
                    })
                .PrimaryKey(t => t.CashCollectionAgentID);
            
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
                    })
                .PrimaryKey(t => t.PaymentEntityID)
                .ForeignKey("dbo.Loans", t => t.Loan_LoanID)
                .Index(t => t.Loan_LoanID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PaymentEntities", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.Payments", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.Payments", "CreditExpert_EmployeeID", "dbo.CreditExperts");
            DropForeignKey("dbo.Payments", "CashCollectionAgent_CashCollectionAgentID", "dbo.CashCollectionAgents");
            DropForeignKey("dbo.Payments", "Branch_BranchID", "dbo.Branches");
            DropForeignKey("dbo.Guarantors", "Loan_LoanID", "dbo.Loans");
            DropForeignKey("dbo.Loans", "Branch_BranchID", "dbo.Branches");
            DropForeignKey("dbo.Loans", "CreditExpert_EmployeeID", "dbo.CreditExperts");
            DropForeignKey("dbo.CreditExperts", "Branch_BranchID", "dbo.Branches");
            DropForeignKey("dbo.Accounts", "Branch_BranchID", "dbo.Branches");
            DropForeignKey("dbo.Loans", "Agreement_AgreementID", "dbo.Agreements");
            DropForeignKey("dbo.Loans", "Account_AccountID", "dbo.Accounts");
            DropIndex("dbo.PaymentEntities", new[] { "Loan_LoanID" });
            DropIndex("dbo.Payments", new[] { "Loan_LoanID" });
            DropIndex("dbo.Payments", new[] { "CreditExpert_EmployeeID" });
            DropIndex("dbo.Payments", new[] { "CashCollectionAgent_CashCollectionAgentID" });
            DropIndex("dbo.Payments", new[] { "Branch_BranchID" });
            DropIndex("dbo.Guarantors", new[] { "Loan_LoanID" });
            DropIndex("dbo.CreditExperts", new[] { "Branch_BranchID" });
            DropIndex("dbo.Loans", new[] { "Branch_BranchID" });
            DropIndex("dbo.Loans", new[] { "CreditExpert_EmployeeID" });
            DropIndex("dbo.Loans", new[] { "Agreement_AgreementID" });
            DropIndex("dbo.Loans", new[] { "Account_AccountID" });
            DropIndex("dbo.Accounts", new[] { "Branch_BranchID" });
            DropTable("dbo.PaymentEntities");
            DropTable("dbo.CashCollectionAgents");
            DropTable("dbo.Payments");
            DropTable("dbo.Guarantors");
            DropTable("dbo.CreditExperts");
            DropTable("dbo.Branches");
            DropTable("dbo.Agreements");
            DropTable("dbo.Loans");
            DropTable("dbo.Accounts");
        }
    }
}
