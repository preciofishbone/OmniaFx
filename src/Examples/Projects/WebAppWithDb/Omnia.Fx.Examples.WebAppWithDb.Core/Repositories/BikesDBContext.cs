using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Omnia.Fx.Examples.WebAppWithDb.Core.Entities;
using Omnia.Fx.Examples.WebAppWithDb.Models;
using Omnia.Fx.Contexts;
using Omnia.Fx.Contexts.Scoped;
using System;


namespace Omnia.Fx.Examples.WebAppWithDb.Core.Repositories
{
    /// <summary>
    /// We keep our DB context internal to core, and operate on it from services->repos
    /// </summary>
    internal class BikesDbContext : DbContextWithAuditing<BikesDbContext>
    {
        private ILogger<BikesDbContext> Logger { get; }

        public DbSet<OrderedBikeEntity> OrderedBikes { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="BikesDbContext"/> class.
        /// </summary>
        public BikesDbContext(DbContextOptions options,
            IOmniaContext omniaContext,
            ILogger<BikesDbContext> logger,
            IOmniaScopedContext omniaScopedContext)
            : base(options, omniaContext, omniaScopedContext)
        {
            Logger = logger;

            HandleStartup(OnStartupHandled);
        }

        protected void OnStartupHandled()
        {
            try
            {
                Database.Migrate();
            }
            catch (Exception ex)
            {
                Logger.LogError("Error handling startup, migration or seed data", ex);
                throw ex;
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderedBikeEntity>()
                            .Property(p => p.Bike)
                            .HasConversion(value => JsonConvert.SerializeObject(value),
                            json => JsonConvert.DeserializeObject<BasicBike>(json));
        }
    }
}
