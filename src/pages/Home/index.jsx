import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import styles from './home.module.scss';

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>Content</main>
      <Footer />
    </div>
  );
}
