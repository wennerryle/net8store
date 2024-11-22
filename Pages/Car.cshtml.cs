using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net8store.Core;
using net8store.Core.Models;

namespace net8store.Pages
{
    public class CarModel(StoreContext storeContext) : PageModel
    {
        public Car car = null!;

        public IActionResult OnGet(int id)
        {
            var car = storeContext.Cars.FirstOrDefault(car => car.CarId == id);

            if (car == null) {
                Console.WriteLine($"Car by id {id} not found.");
                return NotFound();
            }

            this.car = car;
            return Page();
        }
    }
}
