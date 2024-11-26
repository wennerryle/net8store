//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.

import "./webcomponents";
import { initCarousel } from './components/initCarousel';
import { initAboutUsPopover } from "./components/initHeaderSubmenu";
import initCardEventHandlers from "./components/initCardEventHandlers";
import { initPaginateHandler } from "./components/initPaginateHandler";

window.addEventListener('DOMContentLoaded', () => {
  initAboutUsPopover();
  initCardEventHandlers();
  initCarousel();
  initPaginateHandler();
}, { once: true })
