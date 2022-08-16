import { Heart, Minus, Plus } from 'phosphor-react';
import spaguetti from '../../assets/Dishes/Mask-group-2.png';
import styles from './card.module.scss';

export function Card() {
  return (
    <article className={styles.wrapper}>
      <button className={styles.likeBtn}>
        <Heart size={26} />
      </button>

      <img src={spaguetti} alt="" />

      <a href="#">
        <strong className={styles.title}>Spaguetti Gambe </strong>
      </a>

      <span className={styles.subtitle}>
        Massa fresca com camarões e pesto.
      </span>

      <span className={styles.price}>R$ 79,97</span>

      <footer>
        <div className={styles.stepper}>
          <button className={styles.stepperBtn}>
            <Minus size={18} />
          </button>
          <span>01</span>
          <button className={styles.stepperBtn}>
            <Plus size={18} />
          </button>
        </div>

        <button className={styles.addBtn}>incluir</button>
      </footer>
    </article>
  );
}
