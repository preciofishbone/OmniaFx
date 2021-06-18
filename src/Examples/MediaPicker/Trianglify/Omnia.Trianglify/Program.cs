using System.Threading.Tasks;

using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using Omnia.Fx.HostConfiguration;
using Omnia.Fx.HostConfiguration.Extensions;
using Omnia.Fx.NetCore.WebApp.Hosting;

namespace Omnia.Trianglify
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
                        omniaConfig
                        .AddAppSettingsJsonFile("appsettings.json")
                        .AddAppSettingsJsonFile("appsettings.local.json")
                        .AddOmniaFxWebApp();

                    }).ConfigureHost(hostBuilder => {
                        hostBuilder
                        .ConfigureServices(services => {
                            services.AddRouting();

                            // Register the Swagger generator, defining one or more Swagger documents
                            services.AddSwaggerGen(c =>
                            {
                                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
                            });
                        })
                        .ConfigureWebHost(webHostBuilder => {
                            webHostBuilder.Configure((ctx, app) =>
                            {
                                app.UseStaticFiles();

                                app.UseRouting();

                                // Enable middleware to serve generated Swagger as a JSON endpoint.
                                app.UseSwagger();

                                // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
                                app.UseSwaggerUI(c =>
                                {
                                    //c.RoutePrefix = "api/sandbox/index";
                                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Omnia API V1");
                                });

                                //Use middlwaree

                                app.UseAuthentication();
                                app.UseAuthorization();

                                app.UseEndpoints(endpoints => {
                                    endpoints.MapControllers();
                                });
                            });
                        });
                    });
        }
    }
}