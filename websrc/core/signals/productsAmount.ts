import { createLocalStorageSignal } from "../localStorage";

type ProductAmount = Record<number, number>;

const PRODUCT_AMOUNT_MAP = "PRODUCT_AMOUNT_MAP_KEY";

const productsAmountMap = createLocalStorageSignal<ProductAmount>(PRODUCT_AMOUNT_MAP, {})

export default productsAmountMap;