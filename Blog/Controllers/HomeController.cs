using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {
        private IClass1 class1;
        public HomeController(IClass1 class11)
        {
            class1 = class11;
        }

        public IActionResult Index()
        {
            ViewData["Message"] = class1.GetName();
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
