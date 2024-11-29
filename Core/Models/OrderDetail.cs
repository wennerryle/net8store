using System;
using net8store.Core.Models.Cart;

namespace net8store.Core.Models;

public class OrderDetail
{
  public int OrderDetailId { get; set; }
  public int OrderId { get; set; }
  public int CarId { get; set; }
  public int Price { get; set; }
  public ICollection<OrderItem> OrderItems { get; set; } = null!;
  public Order Order { get; set; } = null!;
}