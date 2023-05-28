import { Link } from 'react-router-dom';
import { Form } from '../Form';
import { formatPrice } from '../../utils/formatPrice';

import styles from './card.module.scss';

export function Card({ data, ...rest }) {
  return (
    <article className={styles.wrapper} {...rest}>
      <img src={data.src} alt="" />

      <Link to={`/details/${data.id}`}>
        <strong className={styles.title}>{data.title}</strong>
      </Link>

      <span className={styles.subtitle}>{data.description}</span>

      <span className={styles.price}>{formatPrice(data.price)}</span>

      <Form data={data} />
    </article>
  );
}
