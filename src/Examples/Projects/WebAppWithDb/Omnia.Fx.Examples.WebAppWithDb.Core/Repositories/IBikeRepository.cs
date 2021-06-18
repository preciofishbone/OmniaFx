using Omnia.Fx.Examples.WebAppWithDb.Models;
using Omnia.Fx.Models.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Repositories
{
    /// <summary>
    /// The repository used internally to interact with the DB
    /// (Used from services)
    /// </summary>
    internal interface IBikeRepository
    {
        ValueTask<BasicBike> OrderAsync(BasicBike bike, UserIdentity user);

        ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(UserIdentity user);

        ValueTask<Dictionary<UserIdentity, IList<BasicBike>>> AllBikesOrderedAsync();
    }
}
