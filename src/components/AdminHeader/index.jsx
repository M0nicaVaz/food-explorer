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
import { useSearch } from '../../context/useSearch'

export function AdminHeader() {
  const { setSearch } = useSearch()
  const { signOut } = useAuth()
  const { pathname } = window.location
  const isAtHomePage = pathname === '/'

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
        <input disabled={!isAtHomePage} type="text" id="search" placeholder={isAtHomePage ? "Busque por pratos ou ingredientes" : "Busca ativa na tela de início"} onChange={(e) => setSearch(e.target.value)} />
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
