using Microsoft.AspNetCore.Mvc.RazorPages;
using net8store.Core;

namespace net8store.Pages;

public class IndexModel(StoreContext storeContext) : PageModel
{
    const int TO_SHOW_CARD_AMOUNT = 10;

    public readonly string[] carsImages = storeContext.Cars.Select(car => car.ImageURL).Take(10).ToArray();

    public void OnGet()
    {

    }
}
