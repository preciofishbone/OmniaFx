using Omnia.Fx.Contexts;
using Omnia.Fx.Examples.WebAppWithDb.Core.Repositories;
using Omnia.Fx.Examples.WebAppWithDb.Models;
using Omnia.Fx.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Services
{
    internal class BikeService : IBikeService
    {
        private IOmniaContext OmniaContext { get; }
        private IUserService UserService { get; }
        private IBikeRepository BikeRepository { get; }

        public BikeService(IOmniaContext omniaContext,
                           IUserService userService,
                           IBikeRepository bikeRepository)
        {
            this.OmniaContext = omniaContext;
            this.UserService = userService;
            BikeRepository = bikeRepository;
        }

        public async ValueTask<Dictionary<string, IList<BasicBike>>> AllBikesOrderedAsync()
        {

            var result = await this.BikeRepository.AllBikesOrderedAsync();

            return result;
        }

        public ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(string userId)
        {
            return this.BikeRepository.BikesOrderedByUserAsync(userId);
        }

        public ValueTask<BasicBike> OrderAsync(BasicBike bike)
        {
            return this.BikeRepository.OrderAsync(bike, this.OmniaContext.Identity.Uid);
        }

        public ValueTask<List<BasicBike>> GetAvailableBikes()
        {
            var bikes = new List<BasicBike>
            {
                new BmxBike
                {
                    Brand = "Colony"
                },

                new BmxBike
                {
                    Brand = "Mongoose"
                },

                new ComfortBike
                {
                    Brand = "Monark"
                },

                new ComfortBike
                {
                    Brand = "Crescent"
                }
            };

            return new ValueTask<List<BasicBike>>(bikes);

        }
    }
}
