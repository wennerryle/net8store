//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.


import Splide from '@splidejs/splide';
import "./components";

window.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.splide');
  
  console.log("carousel: %o", carousel);
  
  if (carousel) {
    new Splide(carousel as HTMLElement).mount();
  }
}, { once: true })
