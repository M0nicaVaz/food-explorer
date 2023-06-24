import { CaretLeft, UploadSimple, Plus } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { api } from '../../services/api';

import styles from './new.module.scss';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { NewTag } from '../../components/NewTag';
import { useEffect } from 'react';

export function New() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newTag, setNewTag] = useState('');
  const navigate = useNavigate();
  const form = useRef(null);
  const searchParams = new URLSearchParams(document.location.search);
  const productId = searchParams.get('product');
  const { register, handleSubmit } = useForm({});

  function handleGoBack() {
    navigate(-1);
  }

  const onSubmit = handleSubmit(async (data) => {
    const isImageEmpty = image === null;
    const isStringFieldEmpty =
      data.title === '' || data.price === '' || data.description === '';
    const isTypeEmpty = data.type === null;

    if (isImageEmpty | isStringFieldEmpty | isTypeEmpty)
      return toast.warning('Verifique todos os campos');

    try {
      const formData = new FormData();

      formData.append('image', image[0]);
      data = { ...data, image: image[0].name };
      formData.append('data', JSON.stringify(data));

      const res = await api.post('/products', formData);

      toast.success('Prato adicionado com sucesso!');
      navigate(`/details/${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  });

  const onEdit = handleSubmit(async (data) => {
    const isImage =
      typeof image !== 'string' && image !== null && image !== undefined;

    try {
      const formData = new FormData();

      if (isImage) formData.append('image', image[0]);
      data = { ...data, image: isImage ? image[0].name : null };
      formData.append('data', JSON.stringify(data));

      const res = await api.put(`/products/${String(productId)}`, formData);

      toast.success('Prato editado com sucesso!');
      navigate(`/details/${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  });

  function handleAddTag() {
    if (newTag.trim().length === 0) {
      return null;
    }

    setIngredients((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    ingredients((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  useEffect(() => {
    const ingredients = [];
    const newingredients = ingredients.map((tag) => tag.name);
    setNewTag(newingredients);
  }, []);

  useEffect(() => {
    async function getProduct() {
      if (!product) return;

      try {
        const { data } = await api.get(`/products/${productId}`);
        const productImageUrl = `${api.defaults.baseURL}/files/${data.image}`;

        if (data) {
          setProduct({ ...data, src: productImageUrl });
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, []);

  return (
    <main className={styles.content}>
      <button className={styles.backBtn} onClick={handleGoBack}>
        <CaretLeft />
        voltar
      </button>

      <section className={styles.edit}>
        <strong>Editar prato</strong>

        <form ref={form} onSubmit={product.title ? onEdit : onSubmit}>
          <div className={styles.split}>
            <div className={`${styles.inputAndLabel} ${styles.small}`}>
              <label htmlFor="image"> Imagem do prato</label>
              <input
                name="image"
                type="file"
                id="image"
                className={styles.inputFile}
                onChange={(e) => setImage(e.target.files)}
              />
              <small>{image && image[0].name}</small>
            </div>

            <div className={`${styles.inputAndLabel} ${styles.big}`}>
              <label htmlFor="title">Nome</label>
              <input
                name="title"
                defaultValue={product && product.title}
                type="text"
                id="title"
                placeholder="Ex: Salada Ceasar"
                {...register('title')}
              />
            </div>

            <div className={`${styles.inputAndLabel} ${styles.big}`}>
              <label htmlFor="price">Preço</label>
              <input
                name="price"
                step="0.10"
                pattern="^\d*(\.\d{0,2})?$"
                id="price"
                type="number"
                placeholder="R$ 00,00"
                className={styles.small}
                defaultValue={product && product.price}
                {...register('price')}
              />
            </div>
          </div>

          <div className={styles.split}>
            <div>
              <label htmlFor="ingredients">Ingredientes</label>
              <div className={styles.ingredients}>
                {ingredients.map((tag, index) => (
                  <NewTag
                    key={String(index)}
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                ))}

                <NewTag
                  isNew
                  maxLength={30}
                  placeholder="Adicionar"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </div>

            <div className={`${styles.radioGroup} ${styles.big}`}>
              <span>Tipo de prato</span>
              <div>
                <div>
                  <input
                    id="meal"
                    type="radio"
                    name="type"
                    value="meal"
                    {...register('type')}
                  />
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
                  <input
                    id="drink"
                    type="radio"
                    name="type"
                    value="drink"
                    {...register('type')}
                  />
                  <label htmlFor="drink">Bebida</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.inputAndLabel}>
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              defaultValue={product && product.description}
              {...register('description')}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>

          {product.title ? (
            <div className={styles.buttons}>
              <button className={styles.buttonRemove}> Excluir Prato</button>
              <button className={styles.buttonSave} type="submit">
                {' '}
                Salvar alterações
              </button>
            </div>
          ) : (
            <button className={styles.buttonAdd}>Adicionar Prato</button>
          )}
        </form>
      </section>
    </main>
  );
}
