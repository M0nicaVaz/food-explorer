import { List, MagnifyingGlass, Receipt, SignOut, X } from 'phosphor-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import styles from './header.module.scss';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <SignOut size={22} />
        </button>
      </div>

      <a href="#" className={styles.desktopOnly}>
        <span>Meus favoritos</span>
      </a>

      <div className={styles.search}>
        <MagnifyingGlass size={22} />

        <input type="text" id="search" placeholder="Busque opções de pratos" />
      </div>

      <div className={`${styles.menu} ${isOpen && styles.open}`}>
        <a href="#">Meus favoritos</a>

        <Link to="/orders" className={styles.orderBtn}>
          <Receipt size={22} />
          Meus pedidos(0)
        </Link>
      </div>

      <Link to="/orders" className={`${styles.orderBtn} ${styles.desktopOnly}`}>
        <Receipt size={22} />
        Meus pedidos(0)
      </Link>
    </header>
  );
}
