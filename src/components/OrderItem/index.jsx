import spaghetti from '../../assets/Dishes/Mask-group-2.png';
import styles from './orderitem.module.scss';

export function OrderItem({ ...rest }) {
  return (
    <li {...rest} className={styles.orderItem}>
      <img src={spaghetti} alt={spaghetti} />
      <div>
        <div>
          <span>1 x</span>
          <span>Salada Radish</span>
          <span className={styles.price}>R$ 25,97</span>
        </div>
        <button>Excluir</button>
      </div>
    </li>
  );
}
