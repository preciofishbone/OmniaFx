using Microsoft.Extensions.Hosting;
using Omnia.Fx.Examples.BasicSharePointFeature.Features;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.NetCore.Worker.Hosting;
using System.IO;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.BasicSharePointFeature
{
    /// <summary>
    /// Program
    /// </summary>
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
                .ConfigureOmniaFx((omniaConfig, logger) =>
                {

                    var currentDir = Directory.GetCurrentDirectory();
                    if (currentDir.Contains("\\bin\\Debug\\"))
                    {
                        currentDir = currentDir.Substring(0, currentDir.IndexOf("\\bin\\Debug\\"));
                    }

                    omniaConfig.AddAppSettingsJsonFile("appsettings.json");
                    omniaConfig.AddAppSettingsJsonFile("appsettings.local.json", currentDir);
                    omniaConfig.AddOmniaFxWorker((options) =>
                    {
                        options.AddFeatureHandlers((featureProvider) =>
                        {
                            featureProvider.AddFeatureProvider<ChangeSiteTitle>();
                        });
                    });

                }).ConfigureHost(hostbuilder =>
                {
                    hostbuilder.ConfigureServices(serviceCollection =>
                    {
                        //Configure services here
                    });
                });
        }
    }
}
