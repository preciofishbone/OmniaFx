using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Omnia.Fx.Messaging;
using Omnia.Fx.Models.Messaging;
using Omnia.Fx.NetCore.Messaging;
using Omnia.Fx.NetCore.Queues;
using Omnia.Fx.NetCore.Worker;
using Omnia.Fx.Queues;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Omnia.Fx.Demos.Worker
{
    internal class ExampleWorker : LifetimeEventsHostedService
    {
        public ILogger<ExampleWorker> Logger { get; }
        
        public ExampleWorker(
            IApplicationLifetime appLifetime,
            ILogger<ExampleWorker> logger
            ) : base(appLifetime)
        {
            Logger = logger;
        }

        public override async Task OnStarted()
        {
            Logger.LogInformation("OnStarted");
        }

        public override async Task OnStopped()
        {
            Logger.LogInformation("OnStopped");
        }

        public override async Task OnStopping()
        {
            Logger.LogInformation("OnStopping");
        }

    }
}
