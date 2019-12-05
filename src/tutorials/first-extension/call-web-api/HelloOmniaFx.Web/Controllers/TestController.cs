using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelloOmniaFx.Web.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]
        [Authorize]
        public string Hello(string name)
        {
            return $"Hello {name}, nice to meet you. I am Omnia Fx Web API";
        }
    }
}