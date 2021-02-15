using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.NetCore.Worker;
using Omnia.Fx.Queues;
using System.Threading.Tasks;

namespace Omnia.Fx.Examples.Queues.Worker
{
    internal class BeerProcessor : LifetimeEventsHostedService
    {

        private readonly ILogger<BeerProcessor> _logger;
        private readonly IQueueBus _queueBus;

        public BeerProcessor(
            IHostApplicationLifetime appLifetime,
            ILogger<BeerProcessor> logger,
            IQueueBus queueBus
            ) : base(appLifetime)
        {
            _logger = logger;
            _queueBus = queueBus;
        }

        public override async Task OnStarted()
        {
            _logger.LogInformation("OnStarted");

            _queueBus.DequeueAsync(Models.Constants.Queues.BeerOrderQueue, async (order) =>
            {
                //Process the beer order
                var beerSize = order.Size;
                var beerType = order.Type;

                await Task.CompletedTask;
            });

            await Task.CompletedTask;
        }

        public override async Task OnStopped()
        {
            _logger.LogInformation("OnStopped");
            await Task.CompletedTask;
        }

        public override async Task OnStopping()
        {
            _logger.LogInformation("OnStopping");
            await Task.CompletedTask;
        }

    }
}
