using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessCredit.Domain;
using OfficeOpenXml;

namespace BusinessCredit.Core.TaxOrders
{
    public static class TaxOrderGenerator
    {
        public static Stream Generate(string templatePath, params TaxOrder[] data)
        {
            var result = new MemoryStream();
            ExcelPackage ePack = new ExcelPackage();

            #region Split Data
            var splitedData = new List<ICollection<TaxOrder>>();
            for (int i = 0; i < data.Length; )
            {
                var data1 = new List<TaxOrder>(4);

                do
                {
                    data1.Add(data.ElementAt(i));
                    i++;
                    if (data1.Count == 4)
                        break;
                } while (i < data.Length);

                splitedData.Add(data1);
            }
            #endregion

            foreach (var array in splitedData)
            {
                MemoryStream mStream = new MemoryStream();

                //FileInfo xFile = new FileInfo(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), @"Work\TaxOrderTemplates.xlsx"));
                FileInfo xFile = new FileInfo(templatePath);

                using (ExcelPackage package = new ExcelPackage(xFile))
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets["TaxOrderTemplate"];

                    //     1      ///////////////////////////////////

                    if (array.Count > 0)
                    {
                        //OrderNumber
                        worksheet.Cells["B5"].Value = array.ElementAt(0).TaxOrderNumber;
                        //Date
                        worksheet.Cells["B6"].Value = array.ElementAt(0).Date;
                        //PaymentAmountLari
                        worksheet.Cells["B8"].Value = array.ElementAt(0).PaymentAmountLari;
                        //PaymentAmountTetri
                        worksheet.Cells["D8"].Value = array.ElementAt(0).PaymentAmountTetri;
                        //PaymentAmountString
                        worksheet.Cells["B9"].Value = array.ElementAt(0).PaymentAmountString;
                        //Basis
                        worksheet.Cells["B12"].Value = array.ElementAt(0).Basis;
                        //Account Full Name
                        worksheet.Cells["B13"].Value = array.ElementAt(0).AccountFirstName + " " + array.ElementAt(0).AccountLastName;
                        //AccountPrivateNumber
                        worksheet.Cells["E13"].Value = array.ElementAt(0).AccountPrivateNumber;
                        //Payer
                        worksheet.Cells["B15"].Value = array.ElementAt(0).Payer;
                        //CollectorFullName
                        worksheet.Cells["B20"].Value = array.ElementAt(0).CollectorFirstName + " " + array.ElementAt(0).CollectorLastName;
                        //CollectorPrivateNumber
                        worksheet.Cells["E20"].Value = array.ElementAt(0).CollectorPrivateNumber;
                    }

                    //     2      ///////////////////////////////////

                    if (array.Count > 1)
                    {
                        //OrderNumber
                        worksheet.Cells["H5"].Value = array.ElementAt(1).TaxOrderNumber;
                        //Date                                        
                        worksheet.Cells["H6"].Value = array.ElementAt(1).Date;
                        //PaymentAmountLari                           
                        worksheet.Cells["H8"].Value = array.ElementAt(1).PaymentAmountLari;
                        //PaymentAmountTetri                          
                        worksheet.Cells["J8"].Value = array.ElementAt(1).PaymentAmountTetri;
                        //PaymentAmountString                         
                        worksheet.Cells["H9"].Value = array.ElementAt(1).PaymentAmountString;
                        //Basis
                        worksheet.Cells["H12"].Value = array.ElementAt(1).Basis;
                        //Account Full Name
                        worksheet.Cells["H13"].Value = array.ElementAt(1).AccountFirstName + " " + array.ElementAt(1).AccountLastName;
                        //AccountPrivateNumber                         
                        worksheet.Cells["K13"].Value = array.ElementAt(1).AccountPrivateNumber;
                        //Payer                                        
                        worksheet.Cells["H15"].Value = array.ElementAt(1).Payer;
                        //CollectorFullName                            
                        worksheet.Cells["H20"].Value = array.ElementAt(1).CollectorFirstName + " " + array.ElementAt(1).CollectorLastName;
                        //CollectorPrivateNumber                       
                        worksheet.Cells["K20"].Value = array.ElementAt(1).CollectorPrivateNumber;
                    }

                    //     3      ///////////////////////////////////

                    if (array.Count > 2)
                    {
                        //OrderNumber
                        worksheet.Cells["B28"].Value = array.ElementAt(2).TaxOrderNumber;
                        //Date                                        
                        worksheet.Cells["B29"].Value = array.ElementAt(2).Date;
                        //PaymentAmountLari                           
                        worksheet.Cells["B31"].Value = array.ElementAt(2).PaymentAmountLari;
                        //PaymentAmountTetri                          
                        worksheet.Cells["D31"].Value = array.ElementAt(2).PaymentAmountTetri;
                        //PaymentAmountString                         
                        worksheet.Cells["B32"].Value = array.ElementAt(2).PaymentAmountString;
                        //Basis
                        worksheet.Cells["B35"].Value = array.ElementAt(2).Basis;
                        //Account Full Name                            
                        worksheet.Cells["B36"].Value = array.ElementAt(2).AccountFirstName + " " + array.ElementAt(2).AccountLastName;
                        //AccountPrivateNumber                         
                        worksheet.Cells["E36"].Value = array.ElementAt(2).AccountPrivateNumber;
                        //Payer                                        
                        worksheet.Cells["B38"].Value = array.ElementAt(2).Payer;
                        //CollectorFullName                            
                        worksheet.Cells["B43"].Value = array.ElementAt(2).CollectorFirstName + " " + array.ElementAt(2).CollectorLastName;
                        //CollectorPrivateNumber                       
                        worksheet.Cells["E43"].Value = array.ElementAt(2).CollectorPrivateNumber;
                    }

                    //     4      ///////////////////////////////////

                    if (array.Count > 3)
                    {
                        //OrderNumber
                        worksheet.Cells["H28"].Value = array.ElementAt(3).TaxOrderNumber;
                        //Date                                         
                        worksheet.Cells["H29"].Value = array.ElementAt(3).Date;
                        //PaymentAmountLari                            
                        worksheet.Cells["H31"].Value = array.ElementAt(3).PaymentAmountLari;
                        //PaymentAmountTetri                           
                        worksheet.Cells["J31"].Value = array.ElementAt(3).PaymentAmountTetri;
                        //PaymentAmountString                          
                        worksheet.Cells["H32"].Value = array.ElementAt(3).PaymentAmountString;
                        //Basis                                        
                        worksheet.Cells["H35"].Value = array.ElementAt(3).Basis;
                        //Account Full Name                            
                        worksheet.Cells["H36"].Value = array.ElementAt(3).AccountFirstName + " " + array.ElementAt(3).AccountLastName;
                        //AccountPrivateNumber                         
                        worksheet.Cells["K36"].Value = array.ElementAt(3).AccountPrivateNumber;
                        //Payer                                        
                        worksheet.Cells["H38"].Value = array.ElementAt(3).Payer;
                        //CollectorFullName                            
                        worksheet.Cells["H43"].Value = array.ElementAt(3).CollectorFirstName + " " + array.ElementAt(3).CollectorLastName;
                        //CollectorPrivateNumber                       
                        worksheet.Cells["K43"].Value = array.ElementAt(3).CollectorPrivateNumber;
                    }

                    ePack.Workbook.Worksheets.Add(new Random().Next().ToString(), worksheet);

                    //package.SaveAs(new FileInfo(Path.Combine(saveFolderPath + (new Random().Next()).ToString() + "file.xlsx")));
                }
            }
            ePack.SaveAs(result);
            return result;
        }
    }
}
