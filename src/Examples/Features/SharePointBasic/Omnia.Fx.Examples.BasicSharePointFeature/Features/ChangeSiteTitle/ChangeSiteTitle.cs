using Microsoft.Extensions.Logging;
using Omnia.Fx.Apps;
using Omnia.Fx.Http;
using Omnia.Fx.NetCore.Features.Attributes;
using Omnia.Fx.NetCore.Features.FeatureProviders;
using Omnia.Fx.Utilities;
using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Omnia.Fx.SharePoint.Client;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.SharePoint.Client;
using System.Linq;
using Omnia.Fx.SharePoint.Services.Contexts;

namespace Omnia.Fx.Examples.BasicSharePointFeature.Features
{
    //Same id as defined in the manifest
    [OmniaFeature("52de5a24-cfa8-409e-ba7b-19fcb45d05b1")]
    internal class ChangeSiteTitle : BaseAppFeatureProvider
    {
        ILogger<ChangeSiteTitle> Logger { get; }
        ISharePointScopedContext SharePointScopedContext { get; }
        ISharePointClientContextProvider SharePointClientContextProvider { get; }

        public ChangeSiteTitle(
            ILogger<ChangeSiteTitle> logger,
            IAppService appService,
            ISharePointScopedContext sharePointScopedContext,
            ISharePointClientContextProvider sharePointContext
            ) : base(appService)
        {
            Logger = logger;
            SharePointScopedContext = sharePointScopedContext;
            SharePointClientContextProvider = sharePointContext;
        }

        protected override async Task ActivateAsync()
        {
           await SetTitle();
        }

        private async Task SetTitle()
        {
            var spUrl = AppInstance.Properties.ContextParams.EnsureContextParamStringValue(Omnia.Fx.SharePoint.Constants.Parameters.SPUrl);
            var ctx = SharePointClientContextProvider.CreateClientContext(spUrl);
            ctx.Web.Title = "Omnia Fx Rules";
            ctx.Web.Update();
            await ctx.ExecuteQueryAsync();
        }

        protected override Task DeactivateAsync(string fromVersion)
        {
            return Task.CompletedTask;
        }

        protected override async Task UpgradeAsync(string fromVersion)
        {
            await SetTitle();
        }
    }
}
