using System.Web;
using System.Web.Optimization;

namespace BusinessCredit.LoanManagementSystem.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/jquery.filterable.js",
                      "~/Scripts/jquery.filterable.min.js",
                      "~/Scripts/scripts.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/TableFreeze.css",
                      "~/Content/styles.css"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrapTable").Include(
                      "~/JS_BootstrapTable/dist/*.js",
                      //"~/JS_BootstrapTable/dist/locale/*.js",
                      "~/JS_BootstrapTable/dist/extensions/*.js",
                      "~/JS_BootstrapTable/dist/extensions/cookie/*.js",
                      "~/JS_BootstrapTable/dist/extensions/editable/*.js",
                      "~/JS_BootstrapTable/dist/extensions/export/*.js",
                      "~/JS_BootstrapTable/dist/extensions/filter/*.js",
                      "~/JS_BootstrapTable/dist/extensions/filter-control/*.js",
                      "~/JS_BootstrapTable/dist/extensions/flat-json/*.js",
                      "~/JS_BootstrapTable/dist/extensions/key-events/*.js",
                      "~/JS_BootstrapTable/dist/extensions/mobile/*.js",
                      "~/JS_BootstrapTable/dist/extensions/multiple-sort/*.js",
                      "~/JS_BootstrapTable/dist/extensions/natural-sorting/*.js",
                      "~/JS_BootstrapTable/dist/extensions/reorder-columns/*.js",
                      "~/JS_BootstrapTable/dist/extensions/reorder-rows/*.js",
                      "~/JS_BootstrapTable/dist/extensions/resizable/*.js",
                      "~/JS_BootstrapTable/dist/extensions/toolbar/*.js"));

            bundles.Add(new StyleBundle("~/bundles/bootstrapTableCss").Include(
                      "~/JS_BootstrapTable/dist/*.css",
                      //"~/JS_BootstrapTable/dist/locale/*.css",
                      "~/JS_BootstrapTable/dist/extensions/*.css",
                      "~/JS_BootstrapTable/dist/extensions/cookie/*.css",
                      "~/JS_BootstrapTable/dist/extensions/editable/*.css",
                      "~/JS_BootstrapTable/dist/extensions/export/*.css",
                      "~/JS_BootstrapTable/dist/extensions/filter/*.css",
                      "~/JS_BootstrapTable/dist/extensions/filter-control/*.css",
                      "~/JS_BootstrapTable/dist/extensions/flat-json/*.css",
                      "~/JS_BootstrapTable/dist/extensions/key-events/*.css",
                      "~/JS_BootstrapTable/dist/extensions/mobile/*.css",
                      "~/JS_BootstrapTable/dist/extensions/multiple-sort/*.css",
                      "~/JS_BootstrapTable/dist/extensions/natural-sorting/*.css",
                      "~/JS_BootstrapTable/dist/extensions/reorder-columns/*.css",
                      "~/JS_BootstrapTable/dist/extensions/reorder-rows/*.css",
                      "~/JS_BootstrapTable/dist/extensions/resizable/*.css",
                      "~/JS_BootstrapTable/dist/extensions/toolbar/*.css"));

            bundles.Add(new ScriptBundle("~/bundles/tableExport").Include(
                      "~/JS_TableExport/*.js",
                      "~/JS_TableExport/libs/FileSaver/*.js",
                      "~/JS_TableExport/libs/html2canvas/*.js",
                      "~/JS_TableExport/libs/jsPDF/*.js",
                      "~/JS_TableExport/libs/jsPDF-AutoTable/*.js",
                      "~/JS_TableExport/libs/*.js"));

            bundles.Add(new StyleBundle("~/bundles/tableExportCss").Include(
                      "~/JS_TableExport/*.css",
                      "~/JS_TableExport/libs/FileSaver/*.css",
                      "~/JS_TableExport/libs/html2canvas/*.css",
                      "~/JS_TableExport/libs/jsPDF/*.css",
                      "~/JS_TableExport/libs/jsPDF-AutoTable/*.css",
                      "~/JS_TableExport/libs/*.css"));
        }
    }
}
