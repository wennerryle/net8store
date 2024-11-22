using System;

namespace net8store.Core.Models;
using System.ComponentModel.DataAnnotations;

public class UserCart
{
  [Key]
  public Guid UserCartId { get; set; }

  
}
