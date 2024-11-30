import { match } from "ts-pattern";
import {
  ON_PRODUCT_EVENT,
  PRODUCT_CARD_COMPONENT_NAME,
  ProductCard,
  ProductCardEventDetails,
  ProductCardEventsKind,
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
  const { kind, productId, amount } = detail;

  match(kind)
    .with(ProductCardEventsKind.OnProductAmountChanged, () => {
      alert(amount);
    })
    .with(ProductCardEventsKind.OnBuyClick, () => {
      alert("on buy")
    })
    .with(ProductCardEventsKind.OnDetailsClick, () => {
      location.pathname = "/Car/" + productId;
    });
}
