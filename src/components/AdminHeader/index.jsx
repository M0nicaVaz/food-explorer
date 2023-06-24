import {
  MagnifyingGlass,
  SignOut,
  X,
  ShoppingCartSimple,
} from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import styles from './header.module.scss'

import { useAuth } from '../../context/useAuth'

export function AdminHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { signOut } = useAuth()

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Link to="/">
          <Logo variant={'small'} />
        </Link>

        <span>admin</span>
      </div>

      <div className={styles.buttons}>
        {/* {isOpen ? (
          <span>
            <X size={24} />
          </span>
        ) : (
          <button
            title="Menu"
            className={styles.btnMenu}
            data-count={amountOfItemsInCart}
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <ShoppingCartSimple size={24} />
          </button>
        )} */}

        <button title="Sair" className={styles.btnLogOut} onClick={signOut}>
          <SignOut size={24} />
        </button>
      </div>

      <div className={styles.search}>
        <MagnifyingGlass size={22} />
        <input type="text" id="search" placeholder="Busque por pratos ou ingredientes" />
      </div>


      <Link to="/admin/new" className={`${styles.orderBtn} ${styles.desktopOnly}`}>
        Novo prato
      </Link>
    </header>
  )
}
