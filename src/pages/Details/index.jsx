import { CaretLeft, Receipt } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import spaguetti from '../../assets/Dishes/Mask-group-2.png';

import { Ingredient } from '../../components/Ingredient';
import { Stepper } from '../../components/Stepper';
import styles from './details.module.scss';

export function Details({ dish }) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <main className={styles.content}>
      <button className={styles.backBtn} onClick={handleGoBack}>
        <CaretLeft />
        voltar
      </button>

      <div className={styles.details}>
        <img className={styles.mainImg} src={spaguetti} alt="" />

        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Salada Ravanello</h1>

          <span className={styles.subtitle}>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </span>

          <div className={styles.ingredients}>
            <Ingredient />
            <Ingredient />
            <Ingredient />
            <Ingredient />
          </div>

          <footer>
            <span className={styles.price}>R$ {'79,97' || dish.price}</span>

            <div className={styles.stepper}>
              <Stepper />

              <button className={styles.addBtn}>
                <Receipt />
                incluir
              </button>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
