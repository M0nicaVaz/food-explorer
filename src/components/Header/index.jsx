import {
  List,
  MagnifyingGlass,
  Receipt,
  SignOut,
  X,
  ShoppingCartSimple,
} from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import styles from './header.module.scss';

import { CartContext } from '../../hooks/useCart';
import { useContext } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export function Header() {
  const { cart } = useContext(CartContext);
  const [amountOfItemsInCart, setAmountOfItemsInCart] = useState(0);

  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    if (cart) {
      const itemsInCart = cart.map((item) => item.itemsAmount);
      const getTotalAmountOfItems = (total, num) => total + num;
      const total = itemsInCart.reduce(getTotalAmountOfItems, 0);
      setAmountOfItemsInCart(total);
    }
  }, [cart]);

  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo variant={'small'} />
      </Link>

      <div className={styles.buttons}>
        {isOpen ? (
          <span>
            <X size={24} />
          </span>
        ) : (
          <button
            title="Menu"
            className={styles.btnMenu}
            data-count={amountOfItemsInCart}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <ShoppingCartSimple size={24} />
          </button>
        )}

        <button title="Sair" className={styles.btnLogOut}>
          <SignOut size={24} />
        </button>
      </div>

      <Link to="/archive" className={styles.desktopOnly}>
        <span>Histórico de pedidos</span>
      </Link>

      <div className={styles.search}>
        <MagnifyingGlass size={22} />

        <input type="text" id="search" placeholder="Busque opções de pratos" />
      </div>

      <div
        className={`${styles.menu} ${isOpen && styles.open}`}
        ref={ref}
        onClick={() => setIsOpen(false)}
      >
        <Link to="/archive">Histórico de pedidos</Link>

        <Link to="/order" className={styles.orderBtn}>
          <Receipt size={22} />
          Meu pedido {`(${amountOfItemsInCart})`}
        </Link>
      </div>

      <Link to="/order" className={`${styles.orderBtn} ${styles.desktopOnly}`}>
        <Receipt size={22} />
        Meu pedido {`(${amountOfItemsInCart})`}
      </Link>
    </header>
  );
}
