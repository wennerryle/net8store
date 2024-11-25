//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.

import "./webcomponents";
import { LitPaginator, LitPaginatorEvent, OnPageChangeDetails } from './webcomponents/LitPaginator';
import { initCarousel } from './components/initCarousel';
import { initAboutUsPopover } from "./components/initHeaderSubmenu";

window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector<HTMLElement>('.splide');
  const pagination = document.querySelector<LitPaginator>("lit-paginator");

  console.log("carousel: %o", carousel);

  initAboutUsPopover();
  
  if (carousel) {
    initCarousel(carousel);
  }

  if (pagination) {
    pagination.addEventListener(LitPaginatorEvent.PageChange, onPaginate as EventListener);
  }
}, { once: true })

function onPaginate({ detail }: CustomEvent<OnPageChangeDetails>) {
  const { page, isMiddleButtonClicked } = detail;

  const url = location.origin + "/" + page;

  console.log(detail);

  if (isMiddleButtonClicked) {
    open(url, "_blank");
    return;
  }

  open(url, "_self");
}