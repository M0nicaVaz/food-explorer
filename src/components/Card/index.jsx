import { Heart } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/useCart';
import { Stepper } from '../Stepper';

import styles from './card.module.scss';

export function Card({ data, ...rest }) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    addToCart(data);
  }

  return (
    <article className={styles.wrapper} data={data} {...rest}>
      <button className={styles.likeBtn}>
        <Heart size={26} />
      </button>

      <img src={data.src} alt="" />

      <Link to={`/details/${data.id}`}>
        <strong className={styles.title}>{data.title}</strong>
      </Link>

      <span className={styles.subtitle}>{data.description}</span>

      <span className={styles.price}>R$ {data.price}</span>

      <footer>
        <Stepper />

        <button className={styles.addBtn} onClick={handleAddToCart}>
          incluir
        </button>
      </footer>
    </article>
  );
}
