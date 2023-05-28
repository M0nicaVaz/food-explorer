import styles from './orderitem.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';

export function OrderItem({ item, ...rest }) {
  const { removeItemFromCart } = useContext(CartContext);

  function handleRemoveItem() {
    removeItemFromCart(item.product.id);
  }

  return (
    <li className={styles.orderItem} {...rest}>
      <img src={item.product.src} alt={item.product.title} />
      <div>
        <div>
          <span>{item.itemsAmount} x</span>
          <span>{item.product.title} </span>
          <span className={styles.price}>{formatPrice(item.product.price)}</span>
        </div>
        <button onClick={handleRemoveItem}>Excluir</button>
      </div>
    </li>
  );
}
