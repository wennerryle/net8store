import { type LitPaginator } from "../webcomponents";
import { LitPaginatorEvent, OnPageChangeDetails } from "../webcomponents/LitPaginator";

export function initPaginateHandler() {
  const pagination = document.querySelector<LitPaginator>("lit-paginator");

  if (pagination) {
    pagination.addEventListener(LitPaginatorEvent.PageChange, onPaginate as EventListener);
  }
}

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