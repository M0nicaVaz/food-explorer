import { Logo } from '../../components/Logo';
import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo variant={'gray'} />
      <span>© 2022 - Todos os direitos reservados.</span>
    </footer>
  );
}
