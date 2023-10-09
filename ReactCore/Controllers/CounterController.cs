using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CounterController : ControllerBase
    {

        [HttpGet]
        public IActionResult Get()
        {
            return Inertia.Render("Counter");
        }
    }
}
