export function calculateDiscount(order) {
  if (order.total >= 100) {
    return order.total * 0.1;
  }

  return 0;
}

export function getFirstItemName(order) {
  return order.items[0].name;
}
