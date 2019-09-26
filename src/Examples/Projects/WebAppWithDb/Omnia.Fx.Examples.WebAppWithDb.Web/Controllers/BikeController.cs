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
        public async ValueTask<ApiResponse<Dictionary<Guid,IList<BasicBike>>>> Get()
        {
            try
            {
                var allBikess = await BikeService.AllBikesOrderedAsync();
                return ApiUtils.CreateSuccessResponse(allBikess);
            }
            catch (Exception ex)
            {
                Logger.LogError(ex.Message);
                return ApiUtils.CreateErrorResponse<Dictionary<Guid,IList<BasicBike>>>(ex);
            }
        }

        // GET: api/OrderBike/5
        //[HttpGet("{userId}", Name = "Get")]
        [HttpGet, Route("api/orders/{userId}")]
        public async ValueTask<ApiResponse<IList<BasicBike>>> Get(Guid userId)
        {
            try
            {
                var userBikes = await BikeService.BikesOrderedByUserAsync(userId);
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
