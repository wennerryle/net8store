using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net8store.Core;
using Models = net8store.Core.Models;

namespace net8store.Pages.Order
{
    public class CreateModel : PageModel
    {
        public Models.Order Order { get; set; } = default!;

        private readonly StoreContext storeContext;

        public CreateModel(StoreContext storeContext) {
            this.storeContext = storeContext;
        }

        public void OnGet()
        {

        }
    }
}
