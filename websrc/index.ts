//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.


import Splide from '@splidejs/splide';
import "./components";
import { LitPaginator, LitPaginatorEvent, OnPageChangeDetails } from './components/LitPaginator';

window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector<HTMLElement>('.splide');
  const pagination = document.querySelector<LitPaginator>("lit-paginator");

  console.log("carousel: %o", carousel);
  
  if (carousel) {
    new Splide(carousel, {
      cover: true,
      heightRatio: 0.5,
      autoplay: true,
      pauseOnHover: true,
      interval: 2000
    }).mount();
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