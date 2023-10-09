using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ReactCore.Controllers;


[Route("/")]
public class HomeController : Controller
{
    public Task<Response> Index()
    {
        var data = new
        {
            title = "InertiaCore + React + Mantine",
            Time = DateTime.Now.ToString("HH:mm:ss"),
            Description = @"
                This starter Aspnet Core + InertiaJS + React project includes a minimal
                setup for server side rendering, if you want to learn more on Mantine +
                InertiaJS + Aspnet core integration follow these guides
                <a href='https://react.dev/'>React JS</a>,
                <a href='https://mantine.dev/guides/next/'>mantine</a>,
                <a href='https://inertiajs.com/'>InertiaJS </a>,
                <a href='https://learn.microsoft.com/en-us/aspnet/core/getting-started/?view=aspnetcore-7.0&tabs=macos'>Aspnet Core</a>.
                To get started edit index.tsx file.
            "
        };

        return Task.FromResult(Inertia.Render("Index", data));
    }
}