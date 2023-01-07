import { CaretLeft, UploadSimple } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import styles from './new.module.scss'

export function New() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(),
  })

  function handleGoBack() {
    navigate(-1)
  }

  const onSubmit = handleSubmit(async (data) => {})

  return (
    <main className={styles.content}>
      <button className={styles.backBtn} onClick={handleGoBack}>
        <CaretLeft />
        voltar
      </button>

      <section className={styles.edit}>
        <strong>Editar prato</strong>

        <form onSubmit={onSubmit}>
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
              <label htmlFor="price">Preço</label>
              <input
                type="text"
                id="price"
                placeholder="R$ 00,00"
                className={styles.small}
              />
            </div>
            <div className={`${styles.radioGroup} ${styles.big}`}>
              <span>Tipo de prato</span>
              <div>
                <div>
                  <input type="radio" id="meal" name="type" value="meal" />
                  <label for="meal">Principal</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="dessert"
                    name="type"
                    value="dessert"
                  />
                  <label for="dessert">Sobremesa</label>
                </div>

                <div>
                  <input type="radio" id="drink" name="type" value="drink" />
                  <label for="drink">Bebida</label>
                </div>
              </div>
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
  )
}
