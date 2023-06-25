import { Link } from 'react-router-dom';
import { Form } from '../Form';
import { formatPrice } from '../../utils/formatPrice';
import { useAuth } from '../../context/useAuth';

import styles from './card.module.scss';
import { PencilSimple } from 'phosphor-react';

export function Card({ data, ...rest }) {
  const { isAdmin } = useAuth();

  return (
    <article className={styles.wrapper} {...rest}>
      {isAdmin ?
        <Link className={styles.editBtn} to={`admin/new?product=${data.id}`}>
          <PencilSimple size={28} />
        </Link>
        : null}

      <img src={data.src} alt="" />

      <div className={styles.textWrapper} >
        <Link to={`/details/${data.id}`}>
          <strong className={styles.title}>{data.title}</strong>
        </Link>

        <span className={styles.subtitle}>{data.description}</span>

        <span className={styles.price}>{formatPrice(data.price)}</span>
      </div>

      {isAdmin ? null : <Form data={data} />}
    </article>
  );
}
