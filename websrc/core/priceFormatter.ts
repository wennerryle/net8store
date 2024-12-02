export default function formatPrice(cost: number) {
    if ((cost << 0) < cost) {
      return Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'rub'
      }).format(cost)
    }
    
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'rub', maximumFractionDigits: 0 }).format(cost)
}