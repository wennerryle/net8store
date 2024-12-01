using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net8store.Core;
using Models = net8store.Core.Models;

namespace net8store.Pages.Car
{
    public class AddModel : PageModel
    {
        private readonly StoreContext db;

        [BindProperty]
        public Models.Car Car { get; set; } = default!;

        public AddModel(StoreContext db)
        {
            this.db = db;
        }

        public void OnGet() {}

        public IActionResult OnPost() {
            if (!ModelState.IsValid) {
                return Page();
            }

            db.Cars.Add(Car);
            db.SaveChanges();
            return RedirectToPage("/Index");
        }
    }
}
