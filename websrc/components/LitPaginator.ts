//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.

import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { buttonBase, primaryButton, secondaryButton } from "../styles/button-styles";

type PageType = number | null;

export const enum LitPaginatorEvent {
  PageChange = "page-change"
}

export interface OnPageChangeDetails {
  page: number,
  isMiddleButtonClicked: boolean,
}

@customElement("lit-paginator")
export class LitPaginator extends LitElement {
  @property({ type: Number }) total = 0;
  @property({ type: Number }) currentPage = 1;

  static styles = [
    buttonBase,
    primaryButton,
    secondaryButton,
    css`
      :host {
        display: flex;
        align-items: center;
        gap: 10px;
        user-select: none;
      }

      button {
        padding: 8px 12px;
      }
    `,
  ];

  render() {
    const pages = this.generatePageNumbers();

    return html`
      </button>

      ${pages.map((page) =>
        page === null
          ? html`<div></div>`
          : html`
              <button
                class="${page === this.currentPage ? "primary-button" : "secondary-button"}"
                @click=${(event: MouseEvent) => this.changePage(event, page)}
                @auxclick=${(event: MouseEvent) => this.changePage(event, page)}
              >
                ${page}
              </button>
            `
      )}
    `;
  }

  generatePageNumbers(): PageType[] {
    const currentPage = this.currentPage;
    const total = this.total;

    if (total < 1) {
      return []
    }

    if (this.total <= 6) {
      return Array.from({ length: this.total })
        .fill(0)
        .map((_, i) => i + 1);
    }

    if (currentPage >= total - 2) {
      return [1, null, total - 3, total - 2, total - 1, total];
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, null, total];
      
    }
    return [
      1,
      null,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      null,
      total,
    ];
  }

  changePage(event: MouseEvent, page: number): void {
    if (page < 1 || page > this.total || this.currentPage == page) return;

    const isWheel = event?.which === 2 || event.button === 4;

    if (!isWheel) {
      this.currentPage = page;
    }

    this.dispatchEvent(
      new CustomEvent<OnPageChangeDetails>(LitPaginatorEvent.PageChange, {
        detail: {
          page,
          isMiddleButtonClicked: isWheel,
        },
      })
    );
  }
}
