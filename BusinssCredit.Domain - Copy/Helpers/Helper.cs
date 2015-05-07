using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessCredit.Domain.Helpers
{
    //class Helper
    //{
    //    public static double CalculateBDay(
    //        DateTime startDate,
    //        DateTime EndDate,
    //        int NoOfDayWeek, /* No of Working Day per week*/
    //        int DayType
    //    )
    //    {
    //        double iWeek, iDays, isDays, ieDays;
    //        //* Find the number of weeks between the dates. Subtract 1 */
    //        // since we do not want to count the current week. * /
    //        iWeek = DateDiff("ww", startDate, EndDate) - 1;
    //        iDays = iWeek * NoOfDayWeek;
    //        //
    //        if (NoOfDayWeek == 5)
    //        {
    //            //-- If Saturday, Sunday is holiday
    //            if (startDate.DayOfWeek == DayOfWeek.Saturday)
    //                isDays = 7 - (int)startDate.DayOfWeek;
    //            else
    //                isDays = 7 - (int)startDate.DayOfWeek - 1;
    //        }
    //        else
    //        {
    //            //-- If Sunday is only <st1:place>Holiday</st1:place>
    //            isDays = 7 - (int)startDate.DayOfWeek;
    //        }
    //        //-- Calculate the days in the last week. These are not included in the
    //        //-- week calculation. Since we are starting with the end date, we only
    //        //-- remove the Sunday (datepart=1) from the number of days. If the end
    //        //-- date is Saturday, correct for this.
    //        if (NoOfDayWeek == 5)
    //        {
    //            if (EndDate.DayOfWeek == DayOfWeek.Saturday)
    //                ieDays = (int)EndDate.DayOfWeek - 2;
    //            else
    //                ieDays = (int)EndDate.DayOfWeek - 1;
    //        }
    //        else
    //        {
    //            ieDays = (int)EndDate.DayOfWeek - 1;
    //        }
    //        //-- Sum everything together.
    //        iDays = iDays + isDays + ieDays;
    //        if (DayType == 0)
    //            return iDays;
    //        else
    //            return T.Days - iDays;
    //    }
    //}
}
