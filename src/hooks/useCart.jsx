import { useEffect } from 'react';
import { createContext, useReducer, useState } from 'react';
import { addToCartAction, updateCart } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';

export const CartContext = createContext({});

const getCartFromLocalStorage = () => {
  const cartStoraged = localStorage.getItem('@food-explorer:cart');

  if (cartStoraged) {
    return JSON.parse(cartStoraged);
  } else {
    return [];
  }
};

const getHistoryFromLocalStorage = () => {
  const historyStoraged = localStorage.getItem('@food-explorer:history');

  if (historyStoraged) {
    return JSON.parse(historyStoraged);
  } else {
    return [];
  }
};

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    getCartFromLocalStorage
  );
  const [historyList, setHistoryList] = useState(getHistoryFromLocalStorage);
  const [formattedList, setFormattedList] = useState([]);

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

  function processOrder(order) {
    const formatted = order.product.map(
      (product) => `${product.amount}x ${product.title}. `
    );

    order.product = formatted;
    setHistoryList((state) => [...state, order]);

    const updatedCart = [];

    dispatch(updateCart(updatedCart));
  }

  useEffect(() => {
    localStorage.setItem('@food-explorer:cart', JSON.stringify(cartState));
    localStorage.setItem('@food-explorer:history', JSON.stringify(historyList));
  }, [cartState, historyList]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        processOrder,
        historyList,
        formattedList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
