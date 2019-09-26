using System;
using System.Collections.Generic;
using System.Text;

namespace Omnia.Fx.Examples.WebAppWithDb.Models
{

    public enum BikeType
    {
        BMX = 0,
        Comfort = 1
    }

    public class BasicBike : Omnia.Fx.Models.JsonTypes.OmniaJsonBase
    {

        public BikeType Type { get; protected set; }

        public string Brand { get; set; }
    }
}
