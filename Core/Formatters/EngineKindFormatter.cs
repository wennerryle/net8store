using net8store.Core.Enums;

namespace net8store.Core.Formatters;

public static class EngineKindFormatter
{
    public static string Format(this EngineKind kind)
    => kind switch
    {
        EngineKind.Petrol  => "Бензин",
        EngineKind.Diesel  => "Дизель",
        EngineKind.Gas     => "Газ",
        EngineKind.Hybrid  => "Гибрид",
        EngineKind.Electro => "Электро",
        _                  => "Неожиданный тип " + kind,
    };
}