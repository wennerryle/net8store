import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { AmountMapType, ProductsAmount } from "../core/signals/cart";
import getProductsItems, { CartProduct } from "../core/api/productItems";
import { Brand } from "../utilityTypes/brand";
import { buttonBase, secondaryButton } from "../styles/button-styles";
import formatPrice from "../core/priceFormatter";

const styles = css`
  .cart-item {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    border-bottom: 1px solid #eee;
  }

  .cart-item__image {
    width: 170px;
    height: 108px;
    object-fit: cover;
    border-radius: 8px;
  }

  .cart-item__content {
    flex: 1;
  }

  .cart-item__title {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
  }

  .cart-item__price {
    font-weight: bold;
    color: #333;
  }

  .cart-item__controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .cart-item__amount {
    min-width: 2rem;
    text-align: center;
  }
`;

export function initCart() {
  const cartRoot = document.querySelector("#cart-root");
  if (!cartRoot) return;

  ProductsAmount.subscribe((productsAmount) => {
    const cleanup = Object.fromEntries(
      Object.entries(productsAmount).filter(([, value]) => value !== 0)
    );
    renderCartItems(cartRoot, cleanup);
  });
}

async function renderCartItems(
  cartRoot: Element,
  productsAmount: AmountMapType
) {
  if (Object.keys(productsAmount).length === 0) {
    document.querySelector('#order-btn')!
      .setAttribute('disabled', '');
  }

  const products = await getProductsItems(
    Object.keys(productsAmount).map(Number)
  );
  if (products === null) return;

  let contractPrice = 0;

  cartRoot.innerHTML = "";
  products.forEach((product) => {
    contractPrice += product.cost * productsAmount[product.id];
    const cartElement = document.createElement("cart-element") as CartElement;
    cartElement.setAttribute("img", product.img);
    cartElement.setAttribute("name", product.name);
    cartElement.setAttribute("productid", product.id.toString());
    cartElement.setAttribute("cost", product.cost.toString());
    cartElement.setAttribute("amount", productsAmount[product.id].toString());

    cartRoot.append(cartElement);
  });
  cartRoot.insertAdjacentHTML("beforeend", `<center><br>Итоговая цена: ${formatPrice(contractPrice)}</center>`)
}

@customElement("cart-element")
class CartElement extends LitElement implements Omit<CartProduct, "id"> {
  static styles = [buttonBase, secondaryButton, styles];

  @property() img = "";
  @property() name = "";
  @property({ type: Number }) amount = 0;
  @property({ type: Number }) cost = -1;
  @property({ type: Number }) productId = -1;

  private updateAmount(change: number) {
    const newAmount = Math.max(0, this.amount + change);

    if (newAmount === 0) {
      const currentAmount = ProductsAmount.value;
      const { [this.productId]: removed, ...rest } = currentAmount;
      ProductsAmount.value = rest;
    } else {
      ProductsAmount.value = {
        ...ProductsAmount.value,
        [this.productId]: newAmount as Brand<number, "amount">,
      };
    }
  }

  render() {
    return html`
      <div class="cart-item">
        <img src="${this.img}" alt="${this.name}" class="cart-item__image" />
        <div class="cart-item__content">
          <h3 class="cart-item__title">${this.name}</h3>
          <div class="cart-item__price">
            ${formatPrice(this.cost * this.amount)}
          </div>

          <div class="cart-item__controls">
            <button
              class="secondary-button"
              @click=${() => this.updateAmount(-1)}
            >
              -
            </button>
            <span class="cart-item__amount">${this.amount}</span>
            <button
              class="secondary-button"
              @click=${() => this.updateAmount(1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
