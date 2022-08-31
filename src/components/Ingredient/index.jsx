import lettuce from '../../assets/Ingredients/lettuce.png';
import styles from './ingredient.module.scss';

import { Question } from 'phosphor-react';

export function Ingredient({ data }) {
  return (
    <figure className={styles.wrapper}>
      {data.src.lenght > 1 ? (
        <img src={data.src} alt={data.title} />
      ) : (
        <Question size={32} />
      )}
      <figcaption>{data.title}</figcaption>
    </figure>
  );
}
