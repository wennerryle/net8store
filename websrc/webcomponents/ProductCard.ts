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

type ProductCounterChangedEvent = CustomEvent<{ amount: number }>;
@customElement("product-counter")
export class ProductCounter extends LitElement {
  static readonly COUNTER_CHANGED_EVENT = "counter-changed";
  static styles = [
    buttonBase,
    primaryButton,
    secondaryButton,
    css`
      :host {
        display: flex;
        align-items: center;
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
        flex: 1;
      }
    `,
  ];

  constructor() {
    super();
  }

  @state() amount = 1;

  protected shouldUpdate(propertyValues: PropertyValues): boolean {
    this.dispatchEvent(
      new CustomEvent(ProductCounter.COUNTER_CHANGED_EVENT, {
        detail: { amount: this.amount },
      })
    );

    return super.shouldUpdate(propertyValues);
  }

  render() {
    return html`
      <button @click=${() => this.amount--} class="primary-button">-</button>
      <button @click=${() => this.amount++} class="primary-button">+</button>
      <input type="number" @input=${(
        event: { target: HTMLInputElement }
      ) => {
        this.amount = Number(event.target.value)
      }} .value=${this.amount.toString()}></input>
    `;
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
@customElement(PRODUCT_CARD_COMPONENT_NAME)
export class ProductCard extends LitElement {
  static styles = [
    buttonBase,
    primaryButton,
    secondaryButton,
    css`
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
      }

      .product-actions > * {
        flex: 1;
        min-width: max-content;
      }`,
  ];

  @property() title = "";
  @property() description = "";
  @property() cost = "";
  @property() imageUrl: string | null = null;

  @property({ type: Number })
  productId: number | null = null;

  @property({ type: Number })
  engineKind: EngineKind | null = null;

  @property({ type: Number }) amount: number = 0;

  private _onCounterChanged({ detail }: ProductCounterChangedEvent) {
    this.amount = detail.amount;
    this._raiseOnAmountChanged();
  }

  render() {
    if (!this.engineKind || !this.imageUrl) return null;
    console.log(this.amount >= 1);

    return html`
      <img class="product-image" src=${this.imageUrl} alt=${this.title} />
      <h2 class="product-title">${this.title}</h2>
      <p class="product-description">
        ${engineKindToString(this.engineKind)}. ${this.description}
      </p>
      <p class="product-cost">${this.cost}</p>
      <div class="product-actions">
        <button class="primary-button" @click=${this._onBuyClick}>
          Купить сейчас
        </button>
        ${this.amount >= 1
          ? html`<product-counter
              amount=${this.amount}
              @counter-changed=${this._onCounterChanged}
            ></product-counter>`
          : html`<button class="secondary-button" @click=${this._onCartClick}>
              Добавить в корзину
            </button>`}
      </div>
      <div class="product-actions">
        <button class="secondary-button" @click=${this._onDetailsClick}>
          Подробнее
        </button>
      </div>
    `;
  }

  private _onBuyClick() {
    if (this.productId == null) return;
    if (this.amount == null) return;

    this.dispatchEvent(
      new CustomEvent<ProductCardEventDetails>(ON_PRODUCT_EVENT, {
        detail: {
          productId: this.productId,
          kind: ProductCardEventsKind.OnBuyClick,
          amount: this.amount,
        },
      })
    );
  }

  private _onCartClick() {
    if (this.productId == null) return;

    this.amount = 1;

    this._raiseOnAmountChanged();
  }

  private _raiseOnAmountChanged() {
    this.dispatchEvent(
      new CustomEvent<ProductCardEventDetails>(ON_PRODUCT_EVENT, {
        detail: {
          productId: this.productId!,
          kind: ProductCardEventsKind.OnProductAmountChanged,
          amount: this.amount,
        },
      })
    );
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
