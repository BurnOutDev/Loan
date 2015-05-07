using BusinessCredit.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Core
{
    public class BusinessCreditDbInitializer : CreateDatabaseIfNotExists<BusinessCreditContext>
    {
        protected override void Seed(BusinessCreditContext db)
        {
            base.Seed(db);
        }
    }
}