using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Omnia.Fx.Examples.WebAppWithDb.Core.Repositories;
using Omnia.Fx.Examples.WebAppWithDb.Models;
using Omnia.Fx.Contexts;
using Omnia.Fx.Models.Users;
using Omnia.Fx.Users;

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

        public async ValueTask<Dictionary<Guid, IList<BasicBike>>> AllBikesOrderedAsync()
        {

            var result = await this.BikeRepository.AllBikesOrderedAsync();

            return result;
        }

        public ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(Guid userId)
        {
            return this.BikeRepository.BikesOrderedByUserAsync(userId);
        }

        public ValueTask<BasicBike> OrderAsync(BasicBike bike)
        {
            return this.BikeRepository.OrderAsync(bike, this.OmniaContext.Identity.UserId);
        }

        public ValueTask<List<BasicBike>> GetAvailableBikes()
        {
            var bikes = new List<BasicBike>();

            bikes.Add(new BmxBike
            {
                Brand = "Colony"
            });

            bikes.Add(new BmxBike
            {
                Brand = "Mongoose"
            });

            bikes.Add(new ComfortBike
            {
                Brand = "Monark"
            });

            bikes.Add(new ComfortBike
            {
                Brand = "Crescent"
            });

            return new ValueTask<List<BasicBike>>(bikes);

        }
    }
}
