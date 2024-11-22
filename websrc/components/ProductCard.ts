import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js"

@customElement("product-card")
export class ProductCard extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
  `

  @property()
  description?: string

  @property()
  cost?: string;

  render() {
    alert("whooaaaa rendering component!!")

    return html`<p>Hello, ${this.description}<br>cost is ${this.cost}!</p>`
  }
}