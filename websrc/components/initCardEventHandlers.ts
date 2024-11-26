import { match } from "ts-pattern";
import {
  ON_PRODUCT_EVENT,
  PRODUCT_CARD_COMPONENT_NAME,
  ProductCardEventDetails,
  ProductCardEventsKind,
  type ProductCard,
} from "../webcomponents/ProductCard";

export default function initCardEventHandlers() {
  const productCards = Array.from(
    document.querySelectorAll<ProductCard>(PRODUCT_CARD_COMPONENT_NAME)
  );

  productCards.forEach(productCard => {
    productCard.addEventListener(ON_PRODUCT_EVENT, onCardEvent as EventListener)
  })
}

function onCardEvent({ detail }: CustomEvent<ProductCardEventDetails>) {
  const { kind, productId } = detail;

  match(kind)
    .with(ProductCardEventsKind.OnAddToCartClick, () => {
      alert("on add cart")
    })
    .with(ProductCardEventsKind.OnBuyClick, () => {
      alert("on buy")
    })
    .with(ProductCardEventsKind.OnDetailsClick, () => {
      alert("on details click")
    });
}
