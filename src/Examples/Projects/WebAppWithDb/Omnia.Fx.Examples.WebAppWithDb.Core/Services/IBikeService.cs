using Omnia.Fx.Examples.WebAppWithDb.Models;
using Omnia.Fx.Models.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Services
{
    public interface IBikeService
    {
        ValueTask<BasicBike> OrderAsync(BasicBike bike);

        ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(UserIdentity userId);

        /// <summary>
        /// Get orders for all users
        /// </summary>
        /// <returns>Dictionary of <see cref="UserIdentity"/> and Orders</returns>
        ValueTask<Dictionary<UserIdentity, IList<BasicBike>>> AllBikesOrderedAsync();

        ValueTask<List<BasicBike>> GetAvailableBikes();
    }
}
