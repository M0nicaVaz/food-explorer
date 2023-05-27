import { useContext, useEffect } from 'react';
import { createContext, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import { addToCartAction, updateCart } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';

export const CartContext = createContext({});

const initialHistoryState = () => {
  const historyStored = localStorage.getItem('@food-explorer:history');

  if (historyStored) {
    return JSON.parse(historyStored);
  } else {
    return [];
  }
};

export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  });
  const { cart } = cartState;

  const [historyList, setHistoryList] = useState(initialHistoryState);
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

    toast.success('Adicionado ao carrinho');
  }

  function removeItemFromCart(itemId) {
    const updatedCart = cart.filter((item) => item.product.id !== itemId);

    dispatch(updateCart(updatedCart));
  }

  function processOrder(order) {
    if (order.product.length > 0) {
      const formatted = order.product.map(
        (product) => `${product.amount}x ${product.title}. `
      );

      order.product = formatted;
      setHistoryList((state) => [...state, order]);

      const updatedCart = [];

      dispatch(updateCart(updatedCart));
      toast.success('Acompanhe seu pedido no histórico!');
    } else {
      toast.warning('Seu pedido está vazio!');
      return;
    }
  }

  useEffect(() => {
    localStorage.setItem('@food-explorer:history', JSON.stringify(historyList));
  }, [historyList]);

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

export function useCart() {
  return useContext(CartContext);
}
