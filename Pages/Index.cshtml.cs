using Microsoft.AspNetCore.HttpLogging;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using net8store.Core;

namespace net8store.Pages;

public class IndexModel : PageModel
{
    const short TO_SHOW_CARD_AMOUNT = 10;
    private readonly StoreContext storeContext;
    public IndexModel(StoreContext storeContext)
    {
        this.storeContext = storeContext;
        pagesAmount
            = (uint)Math.Ceiling((double)storeContext.Cars.Count() / TO_SHOW_CARD_AMOUNT);

        Console.WriteLine($"RESULLLLTTT::: {pagesAmount}, {storeContext.Cars.Count()}");
    }

    public uint CurrentPage { get; set; } = 1;


    public required Core.Models.Car[] cars;
    public required string[] carsImages;
    public uint pagesAmount = 0;

    public IActionResult OnGet(uint currentPage = 0)
    {
        CurrentPage = currentPage == 0 ? 1 : currentPage;

        if (CurrentPage > pagesAmount)
            CurrentPage = 1;

        if (CurrentPage * TO_SHOW_CARD_AMOUNT > int.MaxValue)
            return NotFound();

        carsImages = [.. storeContext.Cars.Select(car => car.ImageURL).Take(TO_SHOW_CARD_AMOUNT)];


        cars = storeContext
                .Cars
                .OrderBy(c => c.CarId)
                .Skip(((int)CurrentPage - 1) * TO_SHOW_CARD_AMOUNT)
                .Take(TO_SHOW_CARD_AMOUNT)
                .ToArray();


        return Page();
    }
}
