namespace net8store.Core.Models.Cart;

public class OrderItem
{
  public int OrderDetailItemId { get; set; }
  public Car Car { get; set; } = null!;
  public int Amount { get; set; }
}

