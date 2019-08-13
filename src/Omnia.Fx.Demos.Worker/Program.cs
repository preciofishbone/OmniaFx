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
                await new WorkerHost()
                    .ConfigureOmnia((omniaConfig, logging) =>
                    {
                        omniaConfig.AddAppSettingsJsonFile("appsettings.json", Directory.GetCurrentDirectory());
                        omniaConfig.AddAppSettingsJsonFile("appsettings.local.json", Directory.GetCurrentDirectory());

                        omniaConfig.AddOmniaFxNetCore();

                        omniaConfig.Configuration((configBuilder) =>
                        {
                            configBuilder.AddCommandLine(args);
                            omniaConfig.ConfigureServices((serviceCollection) =>
                            {
                                var configuration = configBuilder.Build();

                                serviceCollection.AddLogging();
                                serviceCollection.AddAsOption<OmniaAppSettings>(configuration);
                                serviceCollection.AddHostedService<ExampleWorker>();

                            });
                        });
                    })
                    .ConfigureHost((host, logging) =>
                    {
                        host
                            .ConfigureLogging((hostContext, cfgLogging) =>
                            {
                                cfgLogging.UseOmniaLogging();
                            });
                    })
                    .RunAsync();
        }
    }
}
