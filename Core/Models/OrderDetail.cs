using System;

namespace net8store.Core.Models;

public class OrderDetail
{
  public int OrderDetailId { get; set; }
  public int OrderId { get; set; }
  public int CarId { get; set; }
  public int Price { get; set; }
  public Car Car { get; set; } = null!;
  public Order Order { get; set; } = null!;
}