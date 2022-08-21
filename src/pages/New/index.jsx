import { CaretLeft, UploadSimple } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';

import styles from './new.module.scss';

export function New() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Wrapper>
      <Header />

      <main className={styles.content}>
        <button className={styles.backBtn} onClick={handleGoBack}>
          <CaretLeft />
          voltar
        </button>

        <section className={styles.edit}>
          <strong>Editar prato</strong>

          <form>
            <div className={styles.split}>
              <div className={`${styles.inputAndLabel} ${styles.small}`}>
                <label htmlFor="img">Imagem do prato</label>

                <input type="file" id="img" className={styles.inputFile} />
              </div>
              <div className={`${styles.inputAndLabel} ${styles.big}`}>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Ex: Salada Ceasar" id="name" />
              </div>
            </div>

            <div className={styles.split}>
              <div className={`${styles.inputAndLabel} ${styles.big}`}>
                <label htmlFor="ingredients">Ingredientes</label>
                <input type="text" />
              </div>
              <div className={`${styles.inputAndLabel} ${styles.small}`}>
                <label htmlFor="price">Preço</label>
                <input
                  type="text"
                  id="price"
                  placeholder="R$ 00,00"
                  className={styles.small}
                />
              </div>
            </div>

            <div className={styles.inputAndLabel}>
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              />
            </div>

            <button>Adicionar Prato</button>
          </form>
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
}
