import { List, MagnifyingGlass, Receipt, SignOut, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import styles from './header.module.scss';

import { CartContext } from '../../hooks/useCart';
import { useContext } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [amountOfItemsOnCart, setAmountOfItemsOnCart] = useState(0);

  const { cart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);

    setAmountOfItemsOnCart(cart.length);
  }, [cart]);

  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo variant={'small'} />
      </Link>

      <div className={styles.buttons}>
        <button
          title="Menu"
          className={styles.btnMenu}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>

        <button title="Sair" className={styles.btnLogOut}>
          <SignOut size={24} />
        </button>
      </div>

      <Link to="/archive" className={styles.desktopOnly}>
        <span>Meus favoritos</span>
      </Link>

      <div className={styles.search}>
        <MagnifyingGlass size={22} />

        <input type="text" id="search" placeholder="Busque opções de pratos" />
      </div>

      <div className={`${styles.menu} ${isOpen && styles.open}`}>
        <Link to="/archive">Meus favoritos</Link>

        <Link to="/order" className={styles.orderBtn}>
          <Receipt size={22} />
          Meu pedido {`(${amountOfItemsOnCart})`}
        </Link>
      </div>

      <Link to="/order" className={`${styles.orderBtn} ${styles.desktopOnly}`}>
        <Receipt size={22} />
        Meu pedido {`(${amountOfItemsOnCart})`}
      </Link>
    </header>
  );
}
