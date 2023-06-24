import {
  MagnifyingGlass,
  SignOut,
  X,
  ShoppingCartSimple,
} from 'phosphor-react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import styles from './header.module.scss'

import { useAuth } from '../../context/useAuth'

export function AdminHeader() {
  const { signOut } = useAuth()

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Link to="/">
          <Logo variant={'small'} />
        </Link>
        <span>admin</span>
      </div>


      <div className={styles.search}>
        <MagnifyingGlass size={22} />
        <input type="text" id="search" placeholder="Busque por pratos ou ingredientes" />
      </div>


      <Link to="/admin/new" className={`${styles.orderBtn}`}>
        Novo prato
      </Link>

      <div className={styles.buttons}>
        <button title="Sair" className={styles.btnLogOut} onClick={signOut}>
          <SignOut size={24} />
        </button>
      </div>

    </header>
  )
}
