using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinssCredit.Domain
{
    class ExcelLoan
    {
        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
        public char D { get; set; }
        public string E { get; set; }
        public string F { get; set; }
        public int G { get; set; }
        public string H { get; set; }
        public string I { get; set; }
        public string J { get; set; }
        public int K { get; set; }
        public int L { get; set; }
        public string M { get; set; }
        public string N { get; set; }
        public string O { get; set; }
        public string P { get; set; }
        public string Q { get; set; }
        public int R { get; set; }
        public int S { get; set; }
        public string T
        {
            get
            {
                return string.Format("{0}-{1}-{2}", R, G, S);
            }
        }
        public bool U { get; set; } // ??
        public int V { get; set; }
        public string W { get; set; }
        public string X { get; set; }
        public double Y { get; set; }
        public string Z { get; set; }
        public double AA { get; set; }
        public int AB { get; set; }
        public int AC { get; set; } // NETWORKDAYS
        public int AD { get; set; }
        public decimal AE { get; set; }
        public decimal AF
        {
            get
            {
                // (((AG - Y) / AB) * 30) / Y
                return (((AG - Y) / AB) * 30) / Y;
            }
        }
        public decimal AG
        {
            get
            {
                //=Y+SUM('%-ის დარიცხვა'!Q41:XFD41)
                // სესხის თანხა + დარიცხული პროცენტი
                return -1;
            }
        }
        public decimal AH
        {
            get
            {
                //=IFERROR(ROUND(-PMT(AA46,AB46,Y46),2),0) ?????
                return Math.Round((decimal)Financial.Pmt(AA, AB, Y), 2);
            }
        }
        public DateTime AI { get; set; }
        public DateTime AJ { get; set; }
        public DateTime AK
        {
            get
            {
                //= AJ48 + AB48
                return AJ.AddDays(AB);
            }
        }

        public DateTime AL { get; set; }

        public object Function()
        {
            if (AL == AJ)
                return Y;
            else
            {
                if (Y > 0)
                {
                    // IFERROR
                    if ((AL - AJ) == 1)
                        return Y + Financial.PPmt(AA, (AL - AJ), AB, Y);
                    else
                        return Y + Financial.PPmt(AA, (AL - AJ), AB, Y) - (Y - AJ);
                }
            }
        }
        public List<ExcelPayment> PaymentList
        {
            get
            {
                return (from x in _paymentList
                        where x.F == F && x.AE < AE
                        select x).ToList();
            }
        }

        private List<ExcelPayment> _paymentList;
    }
}
