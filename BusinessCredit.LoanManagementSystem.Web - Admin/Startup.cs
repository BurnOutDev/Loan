using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BusinessCredit.LoanManagementSystem.Web.Startup))]
namespace BusinessCredit.LoanManagementSystem.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
