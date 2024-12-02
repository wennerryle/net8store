namespace net8store.Core.Models.Cart;

public class OrderItem
{
  public int OrderItemId { get; set; }
  public Car Car { get; set; } = null!;
  public uint Amount { get; set; }
}

