using System;

namespace net8store.Core.Models;
using net8store.Core.Enums;
using System.ComponentModel.DataAnnotations;

public class Car
{
  [Key]
  public int CarId { get; set; }
  public required string Brand { get; set; }
  public required string Model { get; set; }
  public required string ShortDescription { get; set; }
  public required string FullDescription { get; set; }
  public required string ImageURL { get; set; }
  public EngineKinds EngineKind { get; set; }
  public required string EngineDescription { get; set; }
  public ushort Acceleration { get; set; } // 0 - 100
  public ushort TopSpeed { get; set; }
  public uint Cost { get; set; }
}
