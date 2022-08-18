import styles from './wrapper.module.scss';

export function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
