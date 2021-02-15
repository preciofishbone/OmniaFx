using Microsoft.AspNetCore.Mvc;
using Omnia.Fx.Examples.Queues.Models;
using Omnia.Fx.Queues;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Omnia.Fx.Examples.Queues.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeerOrdersController : ControllerBase
    {
        private readonly IQueueBus _queueBus;

        public BeerOrdersController(IQueueBus queueBus)
        {
            _queueBus = queueBus;
        }

        [HttpPost]
        public async Task Post([FromBody] BeerOrder order)
        {
            //Send the beerorder for processing in the worker
            await _queueBus.EnqueueAsync(Models.Constants.Queues.BeerOrderQueue, order);

        }

    }
}
