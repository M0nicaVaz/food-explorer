// import { Heart } from 'phosphor-react';

import { Link } from 'react-router-dom';
import { Form } from '../Form';

import styles from './card.module.scss';

export function Card({ data, ...rest }) {
  return (
    <article className={styles.wrapper} data={data} {...rest}>
      <img src={data.src} alt="" />

      <Link to={`/details/${data.id}`}>
        <strong className={styles.title}>{data.title}</strong>
      </Link>

      <span className={styles.subtitle}>{data.description}</span>

      <span className={styles.price}>R$ {data.price}</span>

      <Form data={data} />
    </article>
  );
}
