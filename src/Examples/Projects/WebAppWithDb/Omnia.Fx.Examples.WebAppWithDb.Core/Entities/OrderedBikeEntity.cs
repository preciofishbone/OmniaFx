using Omnia.Fx.Examples.WebAppWithDb.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Omnia.Fx.Examples.WebAppWithDb.Core.Entities
{
    internal class OrderedBikeEntity
    {
        [Key, Column(Order = 1)]
        public int OrderId { get; set; }

        public string UserId { get; set; }

        public BasicBike Bike { get; set; }
    }
}
