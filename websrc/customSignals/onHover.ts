import { signal, Signal } from "@preact/signals-core";

export function onHover(target: HTMLElement, debounce: number = 0): Signal<boolean> {
  let timeoutId = -1;
  const isHovered = signal(false);

  target.addEventListener('mouseover', () => {
    clearTimeout(timeoutId);
    isHovered.value = true;
  });

  target.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
      isHovered.value = false;
    }, debounce);
  });

  return isHovered;
}