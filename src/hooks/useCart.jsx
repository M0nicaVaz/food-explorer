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

  function addToCart(data) {
    const item = {
      id: data.id,
      title: data.title,
      description: data.description,
      src: data.src,
      price: data.price,
      type: data.type,
      ingredients: data.ingredients,
    };

    dispatch(addToCartAction(item));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
