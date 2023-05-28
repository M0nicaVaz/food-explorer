import { CaretLeft, UploadSimple } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { api } from '../../services/api'

import styles from './new.module.scss'
import { toast } from 'react-toastify'
import { useState } from 'react'


export function New() {
  const [image, setImage] = useState(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
  } = useForm({})

  function handleGoBack() {
    navigate(-1)
  }

  const onSubmit = handleSubmit(async (data) => {
    const isImageEmpty = image === null
    const isStringFieldEmpty = data.title === '' || data.price === '' || data.description === ''
    const isTypeEmpty = data.type === null

    if (isImageEmpty | isStringFieldEmpty | isTypeEmpty) return toast.warning('Verifique todos os campos')

    try {
      const formData = new FormData();

      formData.append("image", image[0]);
      data = { ...data, image: image[0].name };
      formData.append("data", JSON.stringify(data));

      const res = await api.post('/products', formData)

      toast.success('Prato adicionado com sucesso!')
      navigate(`/details/${res.data.id}`)

    } catch (error) {
      console.log(error)
    }

  })

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
              <label htmlFor="image"> Imagem do prato</label>
              <input type="file" id="image" className={styles.inputFile} onChange={(e) => setImage(e.target.files)} />
            </div>

            <div className={`${styles.inputAndLabel} ${styles.big}`}>
              <label htmlFor="title">Nome</label>
              <input type="text" id="title" placeholder="Ex: Salada Ceasar"  {...register("title")} />
            </div>
          </div>

          <div className={styles.split}>
            <div className={`${styles.inputAndLabel} ${styles.big}`}>
              <label htmlFor="price">Preço</label>
              <input
                step="0.10"
                pattern="^\d*(\.\d{0,2})?$"
                id="price"
                type="number"
                placeholder="R$ 00,00"
                className={styles.small}
                {...register('price')}
              />
            </div>
            <div className={`${styles.radioGroup} ${styles.big}`}>
              <span>Tipo de prato</span>
              <div>
                <div>
                  <input id="meal" type="radio" name="type" value="meal"  {...register('type')} />
                  <label htmlFor="meal">Principal</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="type"
                    value="dessert"
                    id="dessert"
                    {...register('type')}
                  />
                  <label htmlFor="dessert">Sobremesa</label>
                </div>

                <div>
                  <input id="drink" type="radio" name="type" value="drink"  {...register('type')} />
                  <label htmlFor="drink">Bebida</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.inputAndLabel}>
            <label htmlFor="description">Descrição</label>
            <textarea
              {...register('description')}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>

          <button>Adicionar Prato</button>
        </form>
      </section>
    </main>
  )
}
