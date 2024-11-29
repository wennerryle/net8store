using System;

namespace net8store.Core.Models;

public class Category
{
  public int CategoryId { get; set; }
  public required string Name { get; set; }
  public required string Description { get; set; }
  public ICollection<Car> cars { get; set; } = null!;
}
