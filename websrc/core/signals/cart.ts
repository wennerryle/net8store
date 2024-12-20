import { createLocalStorageSignal } from "../../customSignals/localStorage";
import { Brand } from "../../utilityTypes/brand";

export type ProductId = Brand<number, "id">;
export type Amount = Brand<number, "amount">;

export type AmountMapType = Record<number, number>; // Record<productId, amount>

const AMOUNT_MAP_KEY = "amount_by_id";

const ProductsAmount = createLocalStorageSignal<AmountMapType>(AMOUNT_MAP_KEY, {})

export { ProductsAmount };