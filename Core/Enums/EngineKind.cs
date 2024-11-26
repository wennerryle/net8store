using System.ComponentModel.DataAnnotations;

namespace net8store.Core.Enums;


public enum EngineKind
{
    [Display(Name = "Бензин")]
    Petrol,
    
    [Display(Name = "Дизель")]
    Diesel,
    
    [Display(Name = "Газ")]
    Gas,
    
    [Display(Name = "Гибрид")]
    Hybrid,
    
    [Display(Name = "Электро")]
    Electro
}
