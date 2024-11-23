using System;

namespace net8store.Core.Models;
using System.ComponentModel.DataAnnotations;

public class UserCart
{
  [Key]
  [MaxLength(36)]
  public string UserCartId { get; set; } = null!;
  public required ICollection<Car> Cars { get; set; }
}
