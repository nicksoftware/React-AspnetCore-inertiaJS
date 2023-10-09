using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CounterController : ControllerBase
    {
        private int _counter = 0;

        [HttpGet]
        public IActionResult Get()
        {
            return Inertia.Render("Counter", new { Count = _counter });
        }
    }
}
