using Microsoft.EntityFrameworkCore;
using Omnia.Fx.Contexts;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Repositories
{
    public abstract class DbContextWithAuditing<T> : BaseDbContext where T : DbContextWithAuditing<T>
    {
        private static bool HandleStartUp { get; set; }
        private static readonly object _lock = new object();
        private bool IsSystemUpdate { get; }
        protected IOmniaContext OmniaContext { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="DbContextWithAuditing"/> class.
        /// </summary>
        public DbContextWithAuditing(DbContextOptions options, IOmniaContext omniaContext, Fx.Contexts.Scoped.IOmniaScopedContext omniaScopedContext)
            : base(options)
        {
            OmniaContext = omniaContext;
            IsSystemUpdate = omniaScopedContext.IsSystemUpdate;
        }

        protected virtual void HandleStartup(Action handleStartupFunc)
        {
            if (!HandleStartUp && handleStartupFunc != null)
            {
                lock (_lock)
                {
                    if (!HandleStartUp)
                    {
                        handleStartupFunc.Invoke();
                        HandleStartUp = true;
                    }
                }
            }
        }

        public override int SaveChanges()
        {
            AddAuitInfo();
            return base.SaveChanges();
        }

        public async ValueTask<int> SaveChangesAsync()
        {
            AddAuitInfo();
            return await base.SaveChangesAsync();
        }

        private void AddAuitInfo()
        {
            var entries = ChangeTracker.Entries()
                .Where(x => x.Entity is AuditingEntityBase && (x.State == EntityState.Added || x.State == EntityState.Modified));
            var currentTime = DateTimeOffset.UtcNow;
            var isSystemUpdate = IsSystemUpdate && OmniaContext.Identity.IsExtension();
            foreach (var entry in entries)
            {
                var entity = (AuditingEntityBase)entry.Entity;
                if (entry.State == EntityState.Added)
                {
                    if (entity.CreatedAt == DateTimeOffset.MinValue || !isSystemUpdate)
                    {
                        entity.CreatedAt = currentTime;
                    }
                    if (string.IsNullOrWhiteSpace(entity.CreatedBy) || !isSystemUpdate)
                    {
                        entity.CreatedBy = OmniaContext.Identity.Uid;
                    }
                    if (entity.ModifiedAt == DateTimeOffset.MinValue || !isSystemUpdate)
                    {
                        entity.ModifiedAt = currentTime;
                    }
                    if (string.IsNullOrWhiteSpace(entity.ModifiedBy) || !isSystemUpdate)
                    {
                        entity.ModifiedBy = OmniaContext.Identity.Uid;
                    }
                }
                else if (entry.State == EntityState.Modified)
                {
                    if (entity.ModifiedAt == DateTimeOffset.MinValue || !isSystemUpdate)
                    {
                        entity.ModifiedAt = currentTime;
                    }
                    if (string.IsNullOrWhiteSpace(entity.ModifiedBy) || !isSystemUpdate)
                    {
                        entity.ModifiedBy = OmniaContext.Identity.Uid;
                    }
                }

            }
        }

    }

    public abstract class ClusteredIndexAuditingEntityBase : AuditingEntityBase
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ClusteredId { get; set; }
    }

    public abstract class BaseDbContext : DbContext
    {
        public BaseDbContext(DbContextOptions options)
            : base(options)
        {
        }

        protected void SetClusteredIndex<T>(ModelBuilder modelBuilder, Expression<Func<T, object>> primaryKeyExpression)
            where T : ClusteredIndexAuditingEntityBase
        {
            modelBuilder.Entity<T>()
                .HasKey(primaryKeyExpression)
                .IsClustered(clustered: false);
            modelBuilder.Entity<T>()
                .HasIndex(c => c.ClusteredId)
                .IsUnique()
                .IsClustered();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<EntityExistedResult>().ToView(nameof(EntityExistedQuery)).HasNoKey();
        }

        // public DbSet<EntityExistedResult> EntityExistedQuery { get; set; }

    }

    public abstract class AuditingEntityBase
    {
        /// <summary>
        /// Gets or sets the created by.
        /// </summary>
        /// <value>
        /// The created by.
        /// </value>
        public string CreatedBy { get; set; }


        /// <summary>
        /// Gets or sets the updated by.
        /// </summary>
        /// <value>
        /// The updated by.
        /// </value>
        public string ModifiedBy { get; set; }


        /// <summary>
        /// Gets or sets the created.
        /// </summary>
        /// <value>
        /// The created.
        /// </value>
        public virtual DateTimeOffset CreatedAt { get; set; }


        /// <summary>
        /// Gets or sets the modified.
        /// </summary>
        /// <value>
        /// The modified.
        /// </value>
        public DateTimeOffset ModifiedAt { get; set; }


        /// <summary>
        /// Gets or sets the deleted.
        /// </summary>
        /// <value>
        /// The deleted.
        /// </value>
        public DateTimeOffset? DeletedAt { get; set; }
    }
}
