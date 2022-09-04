import { useEffect } from 'react';
import { createContext, useReducer, useState } from 'react';
import { addToCartAction, updateCart } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';

export const CartContext = createContext({});

const initialCartState =
  JSON.parse(localStorage.getItem('@food-explorer:cart')) || [];

const getHistoryFromLocalStorage = () => {
  const historyStoraged = localStorage.getItem('@food-explorer:history');

  if (historyStoraged) {
    return JSON.parse(historyStoraged);
  }
};

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
  const { cart } = cartState;

  const [historyList, setHistoryList] = useState(getHistoryFromLocalStorage);
  const [formattedList, setFormattedList] = useState([]);

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
      const item = {
        onCartId: new Date(),
        itemsAmount: data.itemsAmount,
        product: product,
      };
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
