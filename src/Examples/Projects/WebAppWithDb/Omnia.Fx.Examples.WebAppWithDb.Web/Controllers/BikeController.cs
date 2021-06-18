using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Omnia.Fx.Examples.WebAppWithDb.Core.Services;
using Omnia.Fx.Examples.WebAppWithDb.Models;
using Omnia.Fx.Models.Shared;
using Omnia.Fx.Models.Users;
using Omnia.Fx.Utilities;

namespace Omnia.Fx.Examples.WebAppWithDb.Web.Controllers
{

    [ApiController]
    public class BikeController : ControllerBase
    {
        public class UserOrder
        {
            public UserIdentity User { get; }
            public IList<BasicBike> OrderedBikes { get; }

            public UserOrder(UserIdentity user, IList<BasicBike> orderedBikes)
            {
                User = user;
                OrderedBikes = orderedBikes;
            }
        }

        private IBikeService BikeService { get; }
        private ILogger<BikeController> Logger { get; }

        public BikeController(IBikeService bikeService,
                                   ILogger<BikeController> logger)
        {
            BikeService = bikeService;
            Logger = logger;
        }

        // GET: api/OrderBike
        [HttpGet, Route("api/orders")]
        public async ValueTask<ApiResponse<List<UserOrder>>> Get()
        {
            try
            {
                var allBikes = await BikeService.AllBikesOrderedAsync();

                var result = allBikes.Keys.Select(x => new UserOrder(x, allBikes[x])).ToList();
                return ApiUtils.CreateSuccessResponse(result);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message);
                return ApiUtils.CreateErrorResponse<List<UserOrder>> (ex);
            }
        }

        // GET: api/OrderBike/5
        //[HttpGet("{userId}", Name = "Get")]
        [HttpGet, Route("api/orders/{userId}")]
        public async ValueTask<ApiResponse<IList<BasicBike>>> Get(UserIdentity user)
        {
            try
            {
                var userBikes = await BikeService.BikesOrderedByUserAsync(user);
                return ApiUtils.CreateSuccessResponse(userBikes);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message);
                return ApiUtils.CreateErrorResponse<IList<BasicBike>>(ex);
            }
        }

        // POST: api/OrderBike
        [HttpPost, Route("api/orders")]
        public async ValueTask<ApiResponse<BasicBike>> Post([FromBody] BasicBike bike)
        {
            try
            {
                var orderedBike = await BikeService.OrderAsync(bike);
                return ApiUtils.CreateSuccessResponse(orderedBike);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message);
                return ApiUtils.CreateErrorResponse<BasicBike>(ex);
            }
        }

        // GET: api/available
        [HttpGet, Route("api/available")]
        public async ValueTask<ApiResponse<List<BasicBike>>> GetAvailableBikes()
        {
            try
            {
                var allBikess = await BikeService.GetAvailableBikes();
                return ApiUtils.CreateSuccessResponse(allBikess);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message);
                return ApiUtils.CreateErrorResponse<List<BasicBike>>(ex);
            }
        }
    }
}
