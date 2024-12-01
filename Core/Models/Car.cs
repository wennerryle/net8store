namespace net8store.Core.Models;
using net8store.Core.Enums;
using System.ComponentModel.DataAnnotations;

public class Car
{
  [Key]
  public int CarId { get; set; }
  public string Brand { get; set; } = string.Empty;
  public string Model { get; set; } = string.Empty;
  public string ShortDescription { get; set; } = string.Empty;
  public string FullDescription { get; set; } = string.Empty;
  public string ImageURL { get; set; } = string.Empty;
  public EngineKind EngineKind { get; set; }
  public string EngineDescription { get; set; } = string.Empty;

  [Range(1, ushort.MaxValue, ErrorMessage = "Разрешены только позитивные числа")]
  public double Acceleration { get; set; } // 0 - 100
  public ushort TopSpeed { get; set; }
  public ulong Cost { get; set; }
}
