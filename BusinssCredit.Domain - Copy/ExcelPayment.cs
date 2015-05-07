using System;
using System.Collections.Generic;
using System.Linq;

namespace BusinessCredit.Domain
{
    public class ExcelPayment
    {
        public ExcelPayment(ref List<ExcelPayment> paymentList)
        {
            _paymentList = paymentList;
        }
        public int ID { get; set; }

        #region A - K
        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
        public char D { get; set; }
        public int E { get; set; }
        public int F { get; set; }
        public int G { get; set; }
        public int H { get; set; }
        public string I { get; set; }
        public string J { get; set; }
        public int K { get; set; }
        #endregion

        #region L
        private bool? _L;
        public bool? L
        {
            get
            {
                if (!_L.HasValue)
                    _L = InitL();
                return _L;
            }

            set
            {
                _L = value;
            }
        }
        private bool? InitL()
        {
            if (R > 0)
            {//????????????????????????????????????????????????
             //ICollection.Select(x => x) returns bool array ??
                var temp = PaymentList.Select(x => x.F == F);
                if (temp.FirstOrDefault(x => x == true) == true)
                    return true;
                else return false;
            }
            return false;
        }
        #endregion

        #region M - AA
        public int M { get; set; }
        public string N { get; set; }
        public string O { get; set; }
        public int P { get; set; }
        public string Q { get; set; }
        public double R { get; set; }
        public string S { get; set; }
        public double T { get; set; }
        public int U { get; set; }
        public int V { get; set; }
        public int W { get; set; }
        public double X { get; set; }
        public double Y { get; set; }
        public double Z { get; set; }
        public double AA { get; set; }
        #endregion

        #region AB
        private double? _AB;
        public double? AB
        {
            get
            {
                if (!_AB.HasValue)
                    _AB = InitAB();
                return _AB;
            }
            set
            {
                _AB = value;
            }
        }

        private double? InitAB()
        {
            var sum = AL + AM + AQ + AR + AS;
            if (sum > AC)
                return AC;
            else
                return sum;
        }
        #endregion

        #region AC
        private double? _AC;
        public double? AC
        {
            get
            {
                if (!_AC.HasValue)
                    _AC = InitAC();
                return _AC;
            }
            set
            {
                _AC = value;
            }
        }

        private double? InitAC()
        {
            return BD + AS + AR + AL - AW - AT - AU;
        }
        #endregion

        #region AD - AH
        public double AD { get; set; }
        public DateTime AE { get; set; }
        public byte AF { get; set; }
        public DateTime AG { get; set; }
        public DateTime AH { get; set; }
        #endregion

        #region AI
        private double? _AI;
        public double? AI
        {
            get
            {
                if (!_AI.HasValue)
                {
                    _AI = InitAI();
                }
                return _AI;
            }
            set
            {
                _AI = value;
            }
        }

        private double? InitAI()
        {
            return AK + AM;
        }
        #endregion

        #region AJ
        private double? _AJ;
        public double? AJ
        {
            get
            {
                if (!_AJ.HasValue)
                    _AJ = InitAJ();
                return _AJ;
            }
            set
            {
                _AJ = value;
            }
        }

        private double? InitAJ()
        {
            return R - PaymentList.Sum(x => x.AV)
                     - PaymentList.Sum(x => x.AX)
                     - PaymentList.Sum(x => x.AY);
        }
        #endregion

        #region AK
        public double AK { get; set; } // გეგმიური ნაშთი 
        #endregion

        #region AL
        public double? _AL;
        public double? AL
        {
            get
            {
                if (!_AL.HasValue)
                    _AL = InitAL();
                return _AL;
            }
            set
            {
                _AL = value;
            }
        }

        private double? InitAL()
        {
            var t = Math.Round((AJ.Value * T), 2);
            return Math.Round((AJ.Value * T), 2); //??
        }
        #endregion

        #region AM
        private double? _AM;
        public double? AM
        {
            get
            {
                if (!_AM.HasValue)
                    _AM = InitAM();
                return _AM;
            }
            set
            {
                _AM = value;
            }
        }

        private double? InitAM()
        {
            //= IF(AJ7 < AA7, AJ7, AA7 - AL7)
            if (AJ < AA)
                return AJ;
            else
                return AA - AL;
        }
        #endregion

        #region AN
        private double? _AN;
        public double? AN
        {
            get
            {
                if (!_AN.HasValue)
                    _AN = InitAN();
                return _AN;
            }
            set
            {
                _AN = value;
            }
        }

        private double? InitAN()
        {
            //=$AM8 -$AX8
            return AM - AX;
        }
        #endregion

        #region AO
        private double? _AO;
        public double? AO
        {
            get
            {
                if (!_AO.HasValue)
                    _AO = InitAO();
                return _AO;
            }
            set
            {
                _AO = value;
            }
        }

        private double? InitAO()
        {
            //=ROUND($AL7-$AW7,2)
            return Math.Round(AL.Value - AW.Value, 2);
        }
        #endregion

        #region AP
        public double? _AP;
        public double? AP
        {
            get
            {
                if (!_AP.HasValue)
                    _AP = APm();
                return _AP;
            }
            set
            {
                _AP = value;
            }
        }

        private double? APm()
        {
            //=ROUND(IF(AF7=7,0,($AN7+$AO7)*$X7),2)
            if (AF == 7)
                return 0;
            else
                return Math.Round((AN.Value + AO.Value) * X, 2);
        }
        #endregion

        #region AQ
        private double? _AQ;
        public double? AQ
        {
            get
            {
                if (!_AQ.HasValue)
                    _AQ = InitAQ();
                return _AQ;
            }
            set
            {
                _AQ = value;
            }
        }

        private double? InitAQ()
        {
            //=IF(SUMIF($F$2:$F5,F6,$AN$2:$AN5)-SUMIF($F$2:$F5,F6,$AV$2:$AV5)>AJ6,AJ6,SUMIF($F$2:$F5,F6,$AN$2:$AN5)-SUMIF($F$2:$F5,F6,$AV$2:$AV5))
            if (PaymentList.Sum(x => x.AN) -
                PaymentList.Sum(x => x.AV) > AJ)
                return AJ;
            else
                return PaymentList.Sum(x => x.AN) -
                       PaymentList.Sum(x => x.AV);
        }
        #endregion

        #region AR
        public double? _AR;
        public double? AR
        {
            get
            {
                if (!_AR.HasValue)
                    _AR = InitAR();
                return _AR;
            }
            set
            {
                _AR = value;
            }
        }

        private double? InitAR()
        {
            return Math.Round(
                PaymentList.Sum(x => x.AU).Value +
                PaymentList.Sum(x => x.AL).Value -
                PaymentList.Sum(x => x.AW).Value,
                2);
        }
        #endregion

        #region AS
        public double? _AS;
        public double? AS
        {
            get
            {
                if (!_AS.HasValue)
                    _AS = InitAS();
                return InitAS();
            }
            set
            {
                _AS = value;
            }
        }

        private double? InitAS()
        {
            try
            {
                return Math.Round(
                                ((AQ.Value + AR.Value) * X)
                                - PaymentList.Where(x => x.AE == AE.AddDays(-1)).FirstOrDefault().AT.Value
                                + PaymentList.Where(x => x.AE == AE.AddDays(-1)).FirstOrDefault().AT.Value
                                );
            }
            catch (NullReferenceException)
            {
                return 0;
            }

            //=IFERROR(
            //ROUND(
            //
            //((AQ13+AR13)*$X13)-
            //  INDEX($A$2:$BE12,
            //    MATCH($F13&($AE13-1),$F$2:$F12&$AE$2:$AE12,0),
            //    MATCH($AT$2,$A$2:$BE$2,0))
            // +INDEX($A$2:$BE12,
            //    MATCH($F13&($AE13-1),$F$2:$F12&$AE$2:$AE12,0),
            //    MATCH($AS$2,$A$2:$BE$2,0))
            //  ,2)
            //,0)
        }
        #endregion

        #region AT
        public double? _AT;
        public double? AT
        {
            get
            {
                if (!_AT.HasValue)
                    _AT = InitAT();
                return _AT;
            }
            set
            {
                _AT = value;
            }
        }

        private double? InitAT()
        {

            //=IF($AD6>$AS6,$AS6,$AD6)
            if (AD > AS)
                return AS;
            else
                return AD;
        }
        #endregion

        #region AU
        private double? _AU;
        public double? AU
        {
            get
            {
                if (!_AU.HasValue)
                    _AU = InitAU();
                return _AU;
            }
            set
            {
                _AU = value;
            }
        }

        private double? InitAU()
        {
            //=IF(($AD5-$AT5)>$AR5,$AR5,($AD5-$AT5))
            if ((AD - AT) > AR)
                return AR;
            else
                return AD - AT;
        }
        #endregion

        #region AV
        private double? _AV;
        public double? AV
        {
            get
            {
                if (!_AV.HasValue)
                    _AV = AVm();
                return _AV;
            }
            set
            {
                _AV = value;
            }
        }

        private double? AVm()
        {
            //=IF(($AD5-$AU5-$AT5-AW5)>$AQ5,$AQ5,($AD5-$AU5-$AT5-AW5))
            if ((AD - AU - AT - AW) > AQ)
                return AQ;
            else
                return AD - AU - AT - AW;
        }
        #endregion

        #region AW
        private double? _AW;
        public double? AW
        {
            get
            {
                if (!_AW.HasValue)
                    _AW = InitAW();
                return _AW;
            }
        }

        private double? InitAW()
        {
            //=IF(SUMIF($F$2:$F4,$F5,$BE$2:$BE4)>0,0,(IF(($AD5-$AU5-$AT5)>$AL5,$AL5,($AD5-$AU5-$AT5))))

            bool be;
            try
            {
                be = PaymentList.Where(x => x.BE == true).FirstOrDefault().BE.Value;
            }
            catch (NullReferenceException)
            {
                be = false;
            }

            if (be)
                return 0;
            else
            {
                if (AD - AU - AT > AL)
                    return AL;
                else
                    return AD - AU - AT;
            }
        }
        #endregion

        #region AX
        private double? _AX;
        public double? AX
        {
            get
            {
                if (!_AX.HasValue)
                    _AX = InitAX();
                return _AX;
            }
            set
            {
                _AX = value;
            }
        }

        private double? InitAX()
        {
            //=IF(SUMIF($F$2:$F4,$F5,$BE$2:$BE4)>0,0,IF(($AD5-$AU5-$AT5-$AV5-$AW5)>$AM5,$AM5,($AD5-$AU5-$AT5-$AV5-$AW5)))
            bool be;
            try
            {
                be = PaymentList.Where(x => x.BE == true).FirstOrDefault().BE.Value;
            }
            catch (NullReferenceException)
            {
                be = false;
            }
            if (be)
                return 0;
            else
            {
                if ((AD - AU - AT - AV - AW) > AM)
                    return AM;
                else
                    return AD - AU - AT - AV - AW;
            }
        }
        #endregion

        #region AY
        private double? _AY;
        public double? AY
        {
            get
            {
                if (!_AY.HasValue)
                    _AY = InitAY();
                return _AY;
            }
            set
            {
                _AY = value;
            }
        }

        private double? InitAY()
        {
            bool be;
            try
            {
                be = PaymentList.Where(x => x.BE == true).FirstOrDefault().BE.Value;
            }
            catch (NullReferenceException)
            {
                be = false;
            }

            if (be)
                return 0;
            else
            {
                if (((AD - AU - AT - AV - AW - AX) > 0 ?
                      (AD - AU - AT - AV - AW - AX) : 0) >
                      (R - AX - PaymentList.Sum(x => x.AY) -
                      PaymentList.Sum(x => x.AX)
                   ))
                    return R - AX -
                            PaymentList.Sum(x => x.AY) -
                            PaymentList.Sum(x => x.AX);
                else
                    return AD - AU - AT - AV - AW - AX;
            }

            //if (PaymentList.Sum(x => x.BE) > 0)
            //    return 0;
            //else
            //{
            //    if ((AD - AU - AT - AV - AW - AX) > 0 ?
            //          (AD - AU - AT - AV - AW - AX) : 0 >
            //          (R - AX - PaymentList.Sum(x => x.AY) -
            //          PaymentList.Sum(x => x.AX)
            //       ))
            //        return R - AX -
            //                PaymentList.Sum(x => x.AY) -
            //                PaymentList.Sum(x => x.AX);
            //    else
            //        return AD - AU - AT - AV - AW - AX;
            //}
        }
        #endregion

        #region AZ
        private double? _AZ;
        public double? AZ
        {
            get
            {
                if (!_AZ.HasValue)
                    _AZ = InitAZ();
                return _AZ;
            }
            set
            {
                _AZ = value;
            }
        }

        private double? InitAZ()
        {
            return PaymentList.Sum(x => x.AW) + AU + PaymentList.Sum(x => x.AU) + AW;
        }
        #endregion

        #region BA
        private double? _BA;
        public double? BA
        {
            get
            {
                if (!_BA.HasValue)
                    _BA = InitBA();
                return _BA;
            }
            set
            {
                _BA = value;
            }
        }

        private double? InitBA()
        {
            return PaymentList.Sum(x => x.AT);
        }
        #endregion

        #region BB
        private double? _BB;
        public double? BB
        {
            get
            {
                if (!_BB.HasValue)
                    _BB = InitBB();
                return _BB;
            }
            set
            {
                _BB = value;
            }
        }

        private double? InitBB()
        {
            //??????????????????????????? DATETIME - double ????
            var res2 = _paymentList.Where(x => x.ID <= ID).Sum(x => x.AV);
            var res3 = _paymentList.Where(x => x.ID <= ID).Sum(x => x.AY);
            var res1 = _paymentList.Where(x => x.ID <= ID).Sum(x => x.AX);

            return _paymentList.Where(x => x.ID <= ID).Sum(x => x.AX) +
                   _paymentList.Where(x => x.ID <= ID).Sum(x => x.AV) +
                   _paymentList.Where(x => x.ID <= ID).Sum(x => x.AY);
        }
        #endregion

        #region BC
        private double? _BC;
        public double? BC
        {
            get
            {
                if (!_BC.HasValue)
                    _BC = InitBC();
                return _BC;
            }
            set
            {
                _BC = value;
            }
        }

        private double? InitBC()
        {
            return PaymentList.Sum(x => x.F);
        }
        #endregion

        #region BD
        private double? _BD;
        public double? BD
        {
            get
            {
                if (!_BD.HasValue)
                    _BD = InitBD();
                return _BD;
            }
            set
            {
                _BD = value;
            }
        }

        private double? InitBD()
        {
            return R - BB;
        }
        #endregion

        #region BE
        private bool? _BE;
        public bool? BE
        {
            get
            {
                if (!_BE.HasValue)
                    _BE = InitBE();
                return _BE;
            }
            set
            {
                _BE = value;
            }
        }
        private bool InitBE()
        {
            return BD > 0 ? false : true;
        }
        #endregion

        public List<ExcelPayment> PaymentList
        {
            get
            {
                return PaymentListm();
            }
        }

        private List<ExcelPayment> PaymentListm()
        {
            return (from x in _paymentList
                    where x.F == F && x.AE < AE
                    select x).ToList();
        }

        private List<ExcelPayment> _paymentList;
    }
}
