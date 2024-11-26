//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.

import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { choose } from "lit/directives/choose.js";
import {
  buttonBase,
  primaryButton,
  secondaryButton,
} from "../styles/button-styles";

import { EngineKinds } from "../core/EngineKinds.enum";

export const ON_PRODUCT_EVENT = "product-event";
export const PRODUCT_CARD_COMPONENT_NAME = "product-card";

export const enum ProductCardEventsKind {
  OnBuyClick,
  OnAddToCartClick,
  OnDetailsClick
}

export interface ProductCardEventDetails {
  kind: ProductCardEventsKind;
  productId: number;
}

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
        align-self: flex-end;
        gap: 8px;
      }

      .primary-button,
      .secondary-button {
        flex: 1;
        min-width: max-content;
      }
    `,
  ];

  @property() title = "";
  @property() description = "";
  @property() cost = "";
  @property() imageUrl: string | null = null;

  @property({ type: Number })
  productId: number | null = null;

  @property({ type: Number })
  engineKind: EngineKinds | null = null;

  render() {
    return html`
      ${this.imageUrl &&
      html`<img
        class="product-image"
        src=${this.imageUrl}
        alt=${this.title}
      />`}
      <h2 class="product-title">${this.title}</h2>
      <p class="product-description">
        ${choose(this.engineKind, [
          [EngineKinds.Diesel,  () => html`Дизель`],
          [EngineKinds.Gas,     () => html`Газ`],
          [EngineKinds.Hybrid,  () => html`Гибрид`],
          [EngineKinds.Manual,  () => html`Механика`],
          [EngineKinds.Petrol,  () => html`Бензин`],
          [EngineKinds.Electro, () => html`Электрический`],
        ])}.
        ${this.description}
      </p>
      <p class="product-cost">${this.cost}</p>
      <div class="product-actions">
        <button class="primary-button" @click=${this._onBuyClick}>
          Купить сейчас
        </button>
        <button class="secondary-button" @click=${this._onCartClick}>
          Добавить в корзину
        </button>
      </div>
      <div class="product-actions">
        <button class="secondary-button" @click=${this._onDetailsClick}>Подробнее</button>
      </div>
    `;
  }

  private _onBuyClick() {
    if (this.productId == null) return;

    this.dispatchEvent(
      new CustomEvent<ProductCardEventDetails>(ON_PRODUCT_EVENT, {
        detail: {
          productId: this.productId,
          kind: ProductCardEventsKind.OnBuyClick
        },
      })
    );
  }

  private _onCartClick() {
    if (this.productId == null) return;

    this.dispatchEvent(
      new CustomEvent<ProductCardEventDetails>(ON_PRODUCT_EVENT, {
        detail: {
          productId: this.productId,
          kind: ProductCardEventsKind.OnAddToCartClick,
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
          kind: ProductCardEventsKind.OnDetailsClick
        }
      })
    )
  }
}
