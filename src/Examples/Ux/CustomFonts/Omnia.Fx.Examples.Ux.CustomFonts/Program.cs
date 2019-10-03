using Microsoft.AspNetCore.Hosting;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.NetCore.WebApp.Hosting;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.Ux.CustomFonts
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
                })
                .Build();
        }
    }
}