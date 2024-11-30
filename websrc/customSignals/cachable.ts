//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.

import { createLocalStorageSignal } from "./localStorage";

export default function createCachableSignal<T>(
  key: string,
  query: (() => T) | PromiseLike<T>
) {
  const signal = createLocalStorageSignal<T | null>(key, null);

  if (isPromiseLike(query)) {
    query.then((value) => signal.value = value);
  } else {
    signal.value = query();
  }

  return signal;
}

function isPromiseLike<T>(
  value: any | PromiseLike<T>
): value is PromiseLike<T> {
  return typeof value?.then === "function";
}
