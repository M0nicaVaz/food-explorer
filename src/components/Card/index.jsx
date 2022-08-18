import { Heart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import spaguetti from '../../assets/Dishes/Mask-group-2.png';
import { Stepper } from '../Stepper';

import styles from './card.module.scss';

export function Card({ dish, rest }) {
  return (
    <article className={styles.wrapper} {...rest}>
      <button className={styles.likeBtn}>
        <Heart size={26} />
      </button>

      <img src={spaguetti} alt="" />

      <Link to="/details">
        <strong className={styles.title}>
          {'Spaguetti Gambe' || dish.name}
        </strong>
      </Link>

      <span className={styles.subtitle}>
        {'Massa fresca com camarões e pesto.' || dish.description}
      </span>

      <span className={styles.price}>R$ {'79,97' || dish.price}</span>

      <footer>
        <Stepper />

        <button className={styles.addBtn}>incluir</button>
      </footer>
    </article>
  );
}
