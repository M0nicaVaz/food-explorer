export function addToCartAction(item) {
  return {
    type: 'ADD_TO_CART',
    payload: {
      item,
    },
  };
}

export function updateCart(updatedCart) {
  return {
    type: 'UPDATE_CART',
    payload: {
      updatedCart,
    },
  };
}
