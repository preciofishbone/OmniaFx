using Microsoft.EntityFrameworkCore;
using Omnia.Fx.Examples.WebAppWithDb.Core.Entities;
using Omnia.Fx.Examples.WebAppWithDb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Repositories
{
    internal class BikeRepository : IBikeRepository
    {
        private DbSet<OrderedBikeEntity> OrderedBikes { get; }
        private BikesDbContext DatabaseContext { get; }

        public BikeRepository(BikesDbContext dbContext)
        {
            OrderedBikes = dbContext.OrderedBikes;
            DatabaseContext = dbContext;
        }

        public async ValueTask<Dictionary<string, IList<BasicBike>>> AllBikesOrderedAsync()
        {
            var result = new Dictionary<string, IList<BasicBike>>();

            var allOrders = await this.OrderedBikes.ToListAsync();

            foreach (var order in allOrders)
            {
                if (!result.ContainsKey(order.UserId))
                {
                    result.Add(order.UserId, new List<BasicBike>());
                }

                result[order.UserId].Add(order.Bike);
            }

            return result;
        }

        public async ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(string userId)
        {

            IList<BasicBike> result = (await this.OrderedBikes.Where(x => x.UserId == userId).ToListAsync()).Select(x => x.Bike).ToList();

            return result;
        }

        public async ValueTask<BasicBike> OrderAsync(BasicBike bike, string userId)
        {
            var newOrder = new OrderedBikeEntity
            {
                Bike = bike,
                UserId = userId
            };

            this.OrderedBikes.Add(newOrder);

            try
            {
                await DatabaseContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {

                throw;
            }


            return newOrder.Bike;
        }
    }
}
