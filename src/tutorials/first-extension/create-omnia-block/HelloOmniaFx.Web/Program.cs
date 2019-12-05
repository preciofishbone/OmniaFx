using Microsoft.AspNetCore.Hosting;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.NetCore.WebApp.Hosting;
using System.Threading.Tasks;

namespace HelloOmniaFx.Web
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
            await BuildWebHost(args)
                    .RunOmniaAsync();
        }

        /// <summary>
        /// Builds the Web Host
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
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