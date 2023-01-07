import { ArrowLeft, HouseSimple } from 'phosphor-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import styles from './authlayout.module.scss'

export function AuthLayout() {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Outlet />
    </div>
  )
}
