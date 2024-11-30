//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.

import { css, html, LitElement, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  buttonBase,
  primaryButton,
  secondaryButton,
} from "../styles/button-styles";

import {
  EngineKind,
  engineKindToString,
} from "../core/models/EngineKinds.enum";

import { ProductId, ProductsAmount } from "../core/signals/cart";
import { watch, computed } from "@lit-labs/preact-signals";

type ProductCounterChangedEvent = CustomEvent<{ amount: number }>;
@customElement("product-counter")
export class ProductCounter extends LitElement {
  static readonly COUNTER_CHANGED_EVENT = "counter-changed";
  static styles = [
    buttonBase,
    primaryButton,
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: stretch;
        border-radius: 4px;
        column-gap: 8px;
        text-align: center;
      }

      span {
        height: min-content;
        width: 40px;
      }

      input {
        border-radius: 6px;
        border: solid 1px #e5e7eb;
        padding: 0 6px;
        height: 30px;
        width: 100%;
      }
    `,
  ];

  constructor() {
    super();
  }

  @property({ type: Number }) amount = 1;

  render() {
    return html`
      <button @click=${this._add} class="primary-button">-</button>
      <button @click=${this._minus} class="primary-button">+</button>
      <input type="number" @input=${(
        event: { target: HTMLInputElement }
      ) => {
        this.amount = Number(event.target.value)
      }} .value=${this.amount.toString()}></input>
    `;
  }

  private _add() {
    this.amount--;
    this._raiseEvent();
  }

  private _minus() {
    this.amount++;
    this._raiseEvent();
  }

  private _raiseEvent() {
    this.dispatchEvent(
      new CustomEvent(ProductCounter.COUNTER_CHANGED_EVENT, {
        detail: { amount: this.amount },
      })
    );
  }
}

export const enum ProductCardEventsKind {
  OnBuyClick,
  OnProductAmountChanged,
  OnDetailsClick,
}

export interface ProductCardEventDetails {
  kind: ProductCardEventsKind;
  productId: number;
  amount?: number;
}

export const PRODUCT_CARD_COMPONENT_NAME = "product-card";
export const ON_PRODUCT_EVENT = "product-event";
const productCardStyles = css`
      :host {
        display: flex;
        flex-direction: column;
        outline: 1px solid #e5e7eb;
        border-radius: 8px;
        padding: 16px;
        font-family: Arial, sans-serif;
      }

      .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 12px;
      }

      .product-title {
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 8px 0;
        color: #333;
      }

      .product-description {
        font-size: 14px;
        color: #666;
        margin: 0 0 12px 0;
        line-height: 1.4;
      }

      .product-cost {
        font-size: 20px;
        font-weight: bold;
        color: #2c5282;
        margin: auto 0px 0px;
      }

      .product-actions {
        width: 100%;
        margin-top: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }`
@customElement(PRODUCT_CARD_COMPONENT_NAME)
export class ProductCard extends LitElement {
  static styles = [
    buttonBase,
    primaryButton,
    secondaryButton,
    productCardStyles,
  ];

  static instances = new WeakSet<ProductCard>;

  constructor() {
    super();
    ProductCard.instances.add(this);
  }

  @property() title = "";
  @property() description = "";
  @property() cost = "";
  @property() imageUrl: string | null = null;

  @property({ type: Number })
  productId: number | null = null;

  @property({ type: Number })
  engineKind: EngineKind | null = null;

  @state() amount = 0;

  private _onCounterChanged({ detail }: ProductCounterChangedEvent) {
    ProductsAmount.value =  { ...ProductsAmount.peek(), [this.productId!]: detail.amount };
  }

  disposables: (() => void)[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    const subscription =
      ProductsAmount.subscribe(pa => {
        if (!this.productId) return;
        this.amount = pa[this.productId as ProductId];
        console.log(pa);
      })
    
    this.disposables.push(subscription);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.disposables.forEach(it => it());
  }

  render() {
    if (!this.engineKind || !this.imageUrl) return null;
    const productAmount = watch(computed(() =>
      ProductsAmount.value[this.productId as ProductId]));

    return html`
      <img class="product-image" src=${this.imageUrl} alt=${this.title} />
      <h2 class="product-title">${this.title}</h2>
      <p class="product-description">
        ${engineKindToString(this.engineKind)}. ${this.description}
      </p>
      <p class="product-cost">${this.cost}</p>
      <div class="product-actions">
        <button class="primary-button" style="width: 100%" @click=${this._onBuyClick}>
          Купить сейчас
        </button>
        ${this.amount >= 1
          ? html`
            <product-counter
              style="width: 100%"
              amount=${this.amount}
              @counter-changed=${this._onCounterChanged}>
            </product-counter>`
          : html`
            <button class="secondary-button" style="width: 100%" @click=${this._onCartClick}>
              Добавить в корзину
            </button>`}
      </div>
      <div class="product-actions">
        <button class="secondary-button" style="width: 100%" @click=${this._onDetailsClick}>
          Подробнее
        </button>
      </div>
    `;
  }

  private _onBuyClick() {
    if (this.productId == null) return;

    this.dispatchEvent(
      new CustomEvent<ProductCardEventDetails>(ON_PRODUCT_EVENT, {
        detail: {
          productId: this.productId,
          kind: ProductCardEventsKind.OnBuyClick,
          amount: ProductsAmount.peek()[this.productId as ProductId],
        },
      })
    );
  }

  private _onCartClick() {
    if (this.productId == null) return;

    ProductsAmount.value =  { ...ProductsAmount.peek(), [this.productId]: 1 };
  }

  private _onDetailsClick() {
    if (this.productId == null) return;

    this.dispatchEvent(
      new CustomEvent<ProductCardEventDetails>(ON_PRODUCT_EVENT, {
        detail: {
          productId: this.productId,
          kind: ProductCardEventsKind.OnDetailsClick,
        },
      })
    );
  }
}
