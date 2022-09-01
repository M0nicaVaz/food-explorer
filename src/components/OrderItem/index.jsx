import spaghetti from '../../assets/Dishes/Mask-group-2.png';
import styles from './orderitem.module.scss';

export function OrderItem({ item, ...rest }) {
  return (
    <li className={styles.orderItem} {...rest}>
      <img src={spaghetti} alt={spaghetti} />
      <div>
        <div>
          <span>{item.itemsAmount} x</span>
          <span>{item.product.title} </span>
          <span className={styles.price}> R$ {item.product.price} </span>
        </div>
        <button>Excluir</button>
      </div>
    </li>
  );
}
