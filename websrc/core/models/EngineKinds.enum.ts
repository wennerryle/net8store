import { match } from "ts-pattern"

export enum EngineKind
{
  Petrol,
  Diesel,
  Gas,
  Hybrid,
  Electro
}

export function engineKindToString(value: EngineKind) {
  return match(value)
    .with(EngineKind.Petrol, () => "Бензин")
    .with(EngineKind.Diesel, () => "Дизель")
    .with(EngineKind.Gas,    () => "Газ")
    .with(EngineKind.Hybrid, () => "Гибрид")
    .with(EngineKind.Electro,() => "Электро")
    .otherwise(unknownKind => `Неизвестный тип '${unknownKind}'`)
}