using Omnia.Fx.Examples.WebAppWithDb.Models;
using Omnia.Fx.Models.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Repositories
{
    /// <summary>
    /// The repository used internally to interact with the DB
    /// (Used from services)
    /// </summary>
    internal interface IBikeRepository
    {
        ValueTask<BasicBike> OrderAsync(BasicBike bike, Guid userId);

        ValueTask<IList<BasicBike>> BikesOrderedByUserAsync(Guid userId);

        ValueTask<Dictionary<Guid, IList<BasicBike>>> AllBikesOrderedAsync();
    }
}
