export function addToCartAction(item) {
  return {
    type: 'ADD_TO_CART',
    payload: {
      item,
    },
  };
}

export function removeFromCartAction() {
  return {
    type: 'REMOVE_FROM_CART',
    payload: {},
  };
}
