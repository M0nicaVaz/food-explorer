import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import styles from './defaultlayout.module.scss';
import { AdminHeader } from '../../components/AdminHeader';

export function AdminLayout() {
  return (
    <div className={styles.wrapper}>
      <AdminHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
