import { CaretLeft, Receipt } from 'phosphor-react';
import { useNavigate, useParams } from 'react-router-dom';
import { items } from '../../utils/data';

import { Ingredient } from '../../components/Ingredient';
import styles from './details.module.scss';
import { Form } from '../../components/Form';

export function Details() {
  const navigate = useNavigate();

  // ---------- while no server ----------
  const { id } = useParams();
  const data = items.find((item) => item.id === Number(id));
  // --------------------------------------

  function handleGoBack() {
    navigate(-1);
  }

  function handleAddToCart() {
    addToCart(data);
  }

  return (
    <main className={styles.content}>
      <button className={styles.backBtn} onClick={handleGoBack}>
        <CaretLeft />
        voltar
      </button>

      <div className={styles.details}>
        <img className={styles.mainImg} src={data.src} alt="" />

        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>{data.title}</h1>

          <span className={styles.subtitle}>{data.description}</span>

          {data.ingredients && (
            <div className={styles.ingredients}>
              {data.ingredients.map((ingredient) => (
                <Ingredient data={ingredient} />
              ))}
            </div>
          )}

          <footer>
            <span className={styles.price}>R$ {data.price}</span>

            <Form data={data} className={styles.stepper} />
          </footer>
        </div>
      </div>
    </main>
  );
}
