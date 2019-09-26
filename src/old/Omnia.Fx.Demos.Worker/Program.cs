using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.Models.AppSettings;
using Omnia.Fx.NetCore.Worker.Hosting;
using System.IO;
using System.Threading.Tasks;

namespace Omnia.Fx.Demos.Worker
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = new HostBuilder()
                .UseOmniaHostConfiguration((omniaConfig) => {
                    omniaConfig.AddAppSettingsJsonFile("appsettings.json", Directory.GetCurrentDirectory());
                    omniaConfig.AddAppSettingsJsonFile("appsettings.local.json", Directory.GetCurrentDirectory());

                    omniaConfig.AddOmniaFxNetCore((configBuilder) =>
                    {

                        configBuilder.AddFeatureHandlers((featureProviderOptions) =>
                        {
                            featureProviderOptions.AddFeatureProvider<Features.ProvisionData.DataProvisioningProvider>();
                        });
                    })
                    .AddOmniaFxNetCoreSharePoint();

                    omniaConfig.Configuration((configBuilder) => {
                        configBuilder.AddCommandLine(args);

                        omniaConfig.ConfigureServices((serviceCollection) => {
                            var configuration = configBuilder.Build();
                            serviceCollection.AddAsOption<OmniaAppSettings>(configuration);

                            serviceCollection.AddLogging();
                        });
                    });
                })
               .ConfigureLogging((hostContext, configLogging) =>
               {
                   configLogging.AddConsole();
                   configLogging.AddDebug();
               })
               .UseConsoleLifetime()
               .Build();

            await host.RunOmniaAsync();
        }
    }
}
