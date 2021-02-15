using Omnia.Fx.Models.Queues;

namespace Omnia.Fx.Examples.Queues.Models
{
    public static class Constants
    {
        public static class Queues
        {
            public static Queue<BeerOrder> BeerOrderQueue { get { return new Queue<BeerOrder>("BeerOrderQueue"); } }
        }
    }
}
