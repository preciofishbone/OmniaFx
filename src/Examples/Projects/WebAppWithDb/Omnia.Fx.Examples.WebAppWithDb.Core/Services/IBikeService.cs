using Omnia.Fx.Examples.WebAppWithDb.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Services
{
    public interface IBikeService
    {
        ValueTask<BasicBike> OrderAsync(BasicBike bike);

        ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(string userId);

        /// <summary>
        /// Get orders for all users
        /// </summary>
        /// <returns>Dictionary of UserId and Orders</returns>
        ValueTask<Dictionary<string, IList<BasicBike>>> AllBikesOrderedAsync();

        ValueTask<List<BasicBike>> GetAvailableBikes();
    }
}
