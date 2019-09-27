using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.NetCore.WebApp.Hosting;
using System.Threading.Tasks;

//Add namespaces for configuration extensions
using Omnia.Fx.HostConfiguration;
using Microsoft.Extensions.DependencyInjection;
using Omnia.Fx.Examples.WebAppWithDb.Core.Extensions;

namespace Omnia.Fx.Examples.WebAppWithDb
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            await BuildWebHost(args)
                    .RunOmniaAsync();
        }

        public static IWebHost BuildWebHost(string[] args)
        {
                return new WebAppHost(args)
                    .ConfigureOmnia<Startup>((omniaConfig, logging) =>
                    {
                        omniaConfig
                            .AddAppSettingsJsonFile("appsettings.local.json")
                            .AddOmniaFxWebApp();

                        omniaConfig.ConfigureServices(serviceCollection => {

                            //Configure the DB to be used in the core project, i.e. the DB with reference id f8debb44-be08-4ae2-9cf5-c1cebc839123
                            serviceCollection.AddWebAppWithDbDB();

                            //Configure the services in core project
                            serviceCollection.AddWebAppWithDbServices();
                        });
                    })
                    .ConfigureHost((host, logging) =>
                    {
                        host
                            .ConfigureLogging((hostCtx, cfgLogging) =>
                            {
                                cfgLogging.UseOmniaLogging();
                            });
                    })
                    .Build();
        }
    }
}
