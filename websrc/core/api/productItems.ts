export type CartProduct = {
  img: string,
  name: string,
  cost: number,
  id: number
};

export default function getProductsItems(ids: number[]): Promise<CartProduct[] | null> {
  return fetch('/api/products/get_by_ids', {
    method: 'POST',
    body: JSON.stringify(ids),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(it => it.json())
    .catch(() => null);
}