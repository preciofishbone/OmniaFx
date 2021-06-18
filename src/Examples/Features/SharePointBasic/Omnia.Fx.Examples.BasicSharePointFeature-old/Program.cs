using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.Examples.BasicSharePointFeature.Features;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.Models.AppSettings;
using Omnia.Fx.NetCore.Worker.Hosting;
using System.IO;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.BasicSharePointFeature
{
    public class Program
    {

        /// <summary>
        /// Main entry point
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static async Task Main(string[] args)
        {
            await CreateHostBuilder(args).Build().RunAsync();
        }

        /// <summary>
        /// Build host here to support add migration
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return new OmniaHostBuilder(args)
                .ConfigureOmniaFx((omniaConfig, logger) => {

                    omniaConfig.AddAppSettingsJsonFile("appsettings.json");
                    omniaConfig.AddAppSettingsJsonFile("appsettings.local.json", Directory.GetCurrentDirectory());
                    omniaConfig.AddOmniaFxNetCore((configBuilder) =>
                    {
                        //Configure apphandlers etc
                        configBuilder.AddFeatureHandlers((featureProviderOptions) =>
                        {
                            featureProviderOptions.AddFeatureProvider<ChangeSiteTitle>();
                        });
                    })
                    .AddOmniaFxNetCoreSharePoint();

                }).ConfigureHost(hostbuilder => {
                    hostbuilder.ConfigureServices(serviceCollection => {
                        //Configure services here
                        
                    });
                });
        }
    }
}
