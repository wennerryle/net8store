using Microsoft.AspNetCore.Mvc;

namespace net8store.Core.Controllers
{
    [Route("api/products")]
    [Produces("application/json")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext storeDB;

        public ProductsController(StoreContext storeDB)
        {
            this.storeDB = storeDB;
        }

        [HttpPost("get_by_ids")]
        public IActionResult GetByIds([FromBody] List<int> ids)
        {
            return Ok(
                storeDB.Cars
                    .Where(car => ids.Contains(car.CarId))
                    .Select(car => new {
                        id   = car.CarId,
                        img  = car.ImageURL,
                        name = $"{car.Brand} {car.Model}",
                        cost = car.Cost
                    })
            );
        }
    }
}
