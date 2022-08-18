import lettuce from '../../assets/Ingredients/lettuce.png';
import styles from './ingredient.module.scss';

export function Ingredient({ title, src }) {
  return (
    <figure className={styles.wrapper}>
      <img src={src || lettuce} alt={title} />
      <figcaption>{title || 'alface'}</figcaption>
    </figure>
  );
}
