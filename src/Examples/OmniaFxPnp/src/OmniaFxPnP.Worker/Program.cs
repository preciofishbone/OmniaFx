using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.NetCore.Worker.Hosting;

namespace OmniaFxPnP.Worker
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
                .ConfigureOmniaFx((omniaConfig, logger) => { 

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
                            
                        });
                    });
                    
                }).ConfigureHost(hostbuilder => {
                    hostbuilder.ConfigureServices(serviceCollection => {
                        //Configure services here
                        serviceCollection.AddHostedService<ExampleWorker>();
                    });
                });
        }
    }
}
