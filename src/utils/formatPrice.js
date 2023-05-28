export function formatPrice(price) {
  return `R$ ${Number(price).toFixed(2).toString().replace('.', ',')}`;
}
