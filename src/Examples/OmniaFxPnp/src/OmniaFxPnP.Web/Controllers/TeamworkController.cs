using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Omnia.Fx.Apps;
using Omnia.Fx.Models.EnterpriseProperties;

namespace OmniaFxPnP.Web.Controllers
{
    [Route("api/teamwork")]
    [ApiController]
    public class TeamworkController : ControllerBase
    {
        private IAppService AppService { get; }
        public TeamworkController(IAppService appService)
        {
            AppService = appService;
        }

        [HttpPost]
        [Authorize(Omnia.Fx.Constants.Security.Roles.TenantAdmin)]
        public async Task CreateTeamworkAsync()
        {
            var appTemplateId = Guid.Empty;
            var title = "Test Site";
            var description = "";
            var spAlias = ""; //test-site
            var appInstanceAdmin = ""; //admin@tenant.com
            var showInPublicListings = true; //show this teamwork app in Teamwork Rollup
            uint lcid = 1033;
            int timeZoneId = 4; //Find the full timezone list here : https://blog.jussipalo.com/2013/10/list-of-sharepoint-timezoneid-values.html
            var enterpriseProperties = new EnterprisePropertyDictionary();

            enterpriseProperties.AddOrUpdatePerson("internal-name-of-a-person-property", new Omnia.Fx.Models.Users.UserIdentity { Uid = "admin@tenant.com" });
            enterpriseProperties.AddOrUpdateDateTime("internal-name-of-a-datetime-property", DateTimeOffset.Now);
            enterpriseProperties.AddOrUpdateNumber("internal-name-of-a-number-property", 1);
            enterpriseProperties.AddOrUpdateText("internal-name-of-a-text-property", "test");
            enterpriseProperties.AddOrUpdateTaxonomy("internal-name-of-a-taxonomy-property", new Guid("")); //Ensure this term id is already existed on SharePoint. 


            var appInstance = await AppService.WorkWithTeamwork().CreateSharePointTeamSiteAsync(appTemplateId, title, description, spAlias, appInstanceAdmin,
                showInPublicListings: showInPublicListings,
                lcid: lcid,
                timeZoneId: timeZoneId,
                enterpriseProperties: enterpriseProperties);

            //Need to wait for the app instance provisioning done?
            await AppService.WaitForProvisioningStateAsync(appInstance,
                successFunc: async (appInstance) =>
                {
                    //All the provisioning are completed successfully.
                },
                errorFunc: async (appInstance) =>
                {
                    //Some error occured.
                },
                timeoutFunc: async (appInstance) =>
                {
                    //Reach the timeout for waiting provisioning.
                    //Note: this does NOT mean the provioning failed.
                });
        }
    }
}