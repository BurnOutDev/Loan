using BusinessCredit.Domain;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Core
{
    public class MonitoringDB : DbContext
    {
        public MonitoringDB()
            : base("name=MonitoringDb")
        {
            Database.SetInitializer<MonitoringDB>(new CreateDatabaseIfNotExists<MonitoringDB>());
        }

        public DbSet<Comment> Comments { get; set; }
    }
}
