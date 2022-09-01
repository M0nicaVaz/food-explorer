import { createContext, useContext, useReducer } from 'react';
import { addToCartAction } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
    amount: null,
  });

  const { cart } = cartState;

  function addToCart(data, product) {
    const item = {
      onCartId: new Date(),
      itemsAmount: data.itemsAmount,
      product: product,
    };

    dispatch(addToCartAction(item));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
