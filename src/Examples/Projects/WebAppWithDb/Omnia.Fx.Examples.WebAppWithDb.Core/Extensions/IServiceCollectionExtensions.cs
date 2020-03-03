using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Omnia.Fx.Examples.WebAppWithDb.Core.Repositories;
using Omnia.Fx.Examples.WebAppWithDb.Core.Services;
using Omnia.Fx.Models.AppSettings;
using System;
using System.Collections.Generic;
using System.Text;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Extensions
{
    public static class IServiceCollectionExtensions
    {
        public static IServiceCollection AddWebAppWithDbServices(this IServiceCollection services)
        {
            //Connect the interface to the repo implementation (Interface is internal as well as the implementation, i.e. repos are used from services to enable a good caching point)
            services.AddScoped<IBikeRepository, BikeRepository>();

            //Connect the interface to the service implementation (Interface is public, implementation is internal)
            services.AddScoped<IBikeService, BikeService>();

            return services;
        }

        /// <summary>
        /// Extension method configuring the DBContext to use the current connectionstring for the DB requested in omnia.services.ts
        /// I.e. the DB with id: f8debb44-be08-4ae2-9cf5-c1cebc839123
        /// 
        /// (We expose this as an extension method to be able to keep the DBContext an internal affair)
        /// </summary>
        /// <param name="services">The service collection to configure</param>
        /// <returns></returns>
        public static IServiceCollection AddWebAppWithDbDB(this IServiceCollection services)
        {
            services.AddOmniaSqlDBContext<BikesDbContext>(new Guid("f8debb44-be08-4ae2-9cf5-c1cebc839123"),
                (sqlInfo, serviceProvider, optionsBuilder) =>
                {
                    //Read the connection string for the db with id "f8debb44-be08-4ae2-9cf5-c1cebc839123"
                    optionsBuilder.UseSqlServer(sqlInfo.ConnectionString)

                    //Configure other db options, in this case no tracking as default.
                    .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
                });

            return services;
        }

        //public static class ServiceCollectionExtensions
        //{
            public delegate void DatabaseContextFactoryFunction<T>(SqlServiceResource sqlResourceInformation, IServiceProvider serviceProvider, DbContextOptionsBuilder options) where T : DbContext;

        public static void AddOmniaSqlDBContext<T>(this IServiceCollection serviceCollection, Guid sqlResource, DatabaseContextFactoryFunction<T> dbContextFactory, ServiceLifetime contextLifetime = ServiceLifetime.Scoped, ServiceLifetime optionsLifetime = ServiceLifetime.Scoped) where T : BaseDbContext
        {
            serviceCollection.AddDbContext<T>((sp, optBuilder) =>
            {
                var resource = GetSqlServiceResourceForId(sp, sqlResource);
                dbContextFactory(resource, sp, optBuilder);
            }, contextLifetime, optionsLifetime);
        }

        private static SqlServiceResource GetSqlServiceResourceForId(IServiceProvider serviceProvider, Guid sqlResource)
        {
            SqlServiceResource resource = null;

            var appSettingsMonitor = serviceProvider.GetRequiredService<IOptionsMonitor<OmniaAppSettings>>();

            if (appSettingsMonitor.CurrentValue.SqlServiceResources.ContainsKey(sqlResource.ToString()))
            {
                resource = appSettingsMonitor.CurrentValue.SqlServiceResources[sqlResource.ToString()];
            }
            else
            {
                throw new ArgumentException($"Missing sql resource for sql resource id {sqlResource}");
            }

            return resource;
        }
    }
}
