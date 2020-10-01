using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.NetCore.Worker;
using System.Threading.Tasks;

namespace OmniaFxPlayground.Worker
{
    internal class ExampleWorker : LifetimeEventsHostedService
    {
        public ILogger<ExampleWorker> Logger { get; }
        
        public ExampleWorker(
            IHostApplicationLifetime appLifetime,
            ILogger<ExampleWorker> logger
            ) : base(appLifetime)
        {
            Logger = logger;
        }

        public override Task OnStarted()
        {
            Logger.LogInformation("OnStarted");
            return Task.CompletedTask;
        }

        public override Task OnStopped()
        {
            Logger.LogInformation("OnStopped");
            return Task.CompletedTask;
        }

        public override Task OnStopping()
        {
            Logger.LogInformation("OnStopping");
            return Task.CompletedTask;
        }

    }
}
