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

@customElement("product-card")
export class ProductCard extends LitElement {
  static styles = [
    buttonBase,
    primaryButton,
    secondaryButton,
    css`
      :host {
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
        margin: 0;
      }

      .product-actions {
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .primary-button,
      .secondary-button {
        flex: 1;
        min-width: max-content;
      }
    `,
  ];

  @property() title = "Product Title";
  @property() description = "Product description goes here";
  @property() cost = "$0.00";
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
          [EngineKinds.Diesel, () => html`Дизель`],
          [EngineKinds.Gas,    () => html`Газ`],
          [EngineKinds.Hybrid, () => html`Гибрид`],
          [EngineKinds.Manual, () => html`Механика`],
          [EngineKinds.Petrol, () => html`Бензин`]
        ])}. ${this.description}
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
    `;
  }

  private _onBuyClick() {
    this.dispatchEvent(new CustomEvent("buy-click", { detail: { productId: this.productId } }));
  }

  private _onCartClick() {
    this.dispatchEvent(new CustomEvent("cart-click", { detail: { productId: this.productId } }));
  }
}
