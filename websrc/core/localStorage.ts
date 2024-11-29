//  Copyright (c) 2024 Vladislav Pozdeev. All rights reserved.
//  Use this source code is governed by an MIT license
//  that can be found in the LICENSE file.
//  Inspired by https://github.com/Budibase/budibase/blob/master/packages/frontend-core/src/stores/localStorage.js

import { signal } from "@preact/signals-core";

type AsJson<T> = T extends string | number | boolean | null
  ? T
  : T extends Function
  ? never
  : T extends object
  ? { [K in keyof T]: AsJson<T[K]> }
  : never;

/**
 * @param localStorageKey the key is used for localStorage access
 * @param initialValue MUST BE primitive or pojo
 */
export const createLocalStorageSignal = <T>(
  localStorageKey: string,
  initialValue: T & AsJson<T>
) => {
  const getValue = () => {
    const localValue = localStorage.getItem(localStorageKey);
    let result = initialValue;

    if (localValue !== null) {
      try {
        result = JSON.parse(localValue);
      } catch {
        console.log(
          "[createLocalStorageSignal]: cannot JSON.parse value by key " +
            localStorageKey
        );
      }
    }
    return result;
  };

  const store = signal<T>(getValue());

  const storageListener = ({ key }: StorageEvent) => {
    if (key === localStorageKey) {
      store.value = getValue();
    }
  };

  // This event is fired only when localStorage is changed in another
  // page AND the new value is not the same as the old value.
  window.addEventListener("storage", storageListener);

  store.subscribe((pojo) => {
    localStorage.setItem(localStorageKey, JSON.stringify(pojo));

    return () => window.removeEventListener("storage", storageListener);
  });

  return store;
};
