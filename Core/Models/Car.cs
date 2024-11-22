using System;

namespace net8store.Core.Models;
using net8store.Core.Enums;
using System.ComponentModel.DataAnnotations;

public class Car
{
  [Key]
  public int CarId { get; set; }
  public required string ShortDescription { get; set; }
  public required string FullDescription { get; set; }
  public EngineKinds EngineKind { get; set; }
  public int MyProperty { get; set; }
}
