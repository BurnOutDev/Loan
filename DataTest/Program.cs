using BusinessCredit.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataTest
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new BusinessCreditContext())
            {
                var t = db.Payments.ToList();
            }
        }
    }
}
