import {
  MagnifyingGlass,
  Receipt,
  SignOut,
  X,
  ShoppingCartSimple,
} from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import styles from './header.module.scss'

import { useCart } from '../../hooks/useCart'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useAuth } from '../../context/useAuth'

export function AdminHeader() {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [amountOfItemsInCart, setAmountOfItemsInCart] = useState(0)

  const { signOut } = useAuth()
  const { cart } = useCart()

  const ref = useRef()
  useOnClickOutside(ref, () => setIsOpen(false))

  useEffect(() => {
    if (cart) {
      const itemsInCart = cart.map((item) => item.itemsAmount)
      const getTotalAmountOfItems = (total, num) => total + num
      const total = itemsInCart.reduce(getTotalAmountOfItems, 0)
      setAmountOfItemsInCart(total)
    }
  }, [cart])

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Link to="/">
          <Logo variant={'small'} />
        </Link>

        <span>admin</span>
      </div>

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
              setIsOpen(true)
            }}
          >
            <ShoppingCartSimple size={24} />
          </button>
        )}

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
