export type CartProduct = {
  img: string,
  name: string,
  price: number,
  id: number
};

export default function getProductsItems(ids: number[]): Promise<CartProduct | null> {
  return fetch('/api/products/get_by_ids', {
    method: 'POST',
    body: JSON.stringify(ids)
  }).then(it => it.json())
    .catch(() => null);
}