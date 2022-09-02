import { createContext, useReducer } from 'react';
import { addToCartAction, updateCart } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const { cart } = cartState;

  function addToCart(data, product) {
    const itemAlreadyInCart = cart.find(
      (item) => item.product.id === product.id
    );

    const amount = itemAlreadyInCart
      ? data.itemsAmount + itemAlreadyInCart.itemsAmount
      : data.itemsAmount;

    const item = {
      onCartId: new Date(),
      itemsAmount: amount,
      product: product,
    };

    if (itemAlreadyInCart) {
      const updatedCart = cart.filter((item) => item.product.id !== product.id);

      dispatch(updateCart(updatedCart));
      dispatch(addToCartAction(item));
    } else {
      dispatch(addToCartAction(item));
    }
  }

  function removeItemFromCart(itemId) {
    const updatedCart = cart.filter((item) => item.product.id !== itemId);

    dispatch(updateCart(updatedCart));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
