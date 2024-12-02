using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using net8store.Core.Models;
using net8store.Core.Models.Cart;

namespace net8store.Core.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly StoreContext storeContext;

        public OrderController(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        [HttpPost("create")]
        public IActionResult CreateOrder([FromBody] Dictionary<int, uint> idToAmountMap)
        {
            try {
                
            var orderItems = idToAmountMap
                .Where(it => it.Value != 0)
                .Select(kv => new OrderItem { Amount = kv.Value, Car = new Models.Car { CarId = kv.Key } })
                .ToList();

            var orderDetail = new OrderDetail { OrderItems = orderItems };

                return StatusCode(500);
            } catch {
                return StatusCode(500);
            }
        }
    }
}
