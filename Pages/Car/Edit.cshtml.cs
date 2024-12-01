using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net8store.Core;
using Models = net8store.Core.Models;

namespace net8store.Pages.Car
{
    public class EditModel : PageModel
    {
        private readonly StoreContext db;

        [BindProperty]
        public Models.Car Car { get; set; } = null!;

        public EditModel(StoreContext db)
        {
            this.db = db;
        }

        [BindProperty(SupportsGet= true )]
        public int CarId { get; set; }


        public IActionResult OnGet() {
            var car = db.Cars.Where(car => car.CarId == CarId).FirstOrDefault();

            if (car == null) {
                return NotFound();
            }

            Car = car;
            return Page();
        }

        public IActionResult OnPost() {
            if (!ModelState.IsValid) {
                return Page();
            }
            
            Car.CarId = CarId;
            db.Cars.Update(Car);

            db.SaveChanges();
            return RedirectToPage("/Index");
        }
    }
}
