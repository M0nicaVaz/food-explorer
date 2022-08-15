import { Icon } from './Icon';
import styles from './logo.module.scss';

export function Logo({ variant }) {
  return (
    <div
      className={`${styles.logo} 
        ${variant === 'small' && styles.logoSmall}
        ${variant === 'gray' && `${styles.logoSmall} ${styles.gray}`}`}
    >
      <Icon />
      <h1>food explorer</h1>
    </div>
  );
}
