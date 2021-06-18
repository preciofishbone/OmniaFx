using Omnia.Fx.Examples.WebAppWithDb.Models;
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
        ValueTask<BasicBike> OrderAsync(BasicBike bike, string userId);

        ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(string userId);

        ValueTask<Dictionary<string, IList<BasicBike>>> AllBikesOrderedAsync();
    }
}
