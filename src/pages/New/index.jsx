import { CaretLeft } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';

import styles from './new.module.scss';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import { Ingredient } from '../../components/Ingredient';
import { useEffect } from 'react';

export function New() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
      data = { ...data, ingredients, image: image[0].name };
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
      data = { ...data, ingredients, image: isImage ? image[0].name : null };
      formData.append('data', JSON.stringify(data));

      const res = await api.put(`/products/${String(productId)}`, formData);

      toast.success('Prato editado com sucesso!');
      navigate(`/details/${res.data.id}`);
    } catch (error) {
      console.log(error);
    }
  });

  function handleAddIngredient() {
    if (newIngredient.trim().length === 0) {
      return null;
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient('');
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleDelete() {
    if (product.title) {
      try {
        await api.delete(`/products/${String(productId)}`);
        toast.success('Prato removido com sucesso!');
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    }
  }



  useEffect(() => {
    async function getProduct() {
      if (!productId) return;

      try {
        setIsLoading(true);
        const { data } = await api.get(`/products/${productId}`);
        const productImageUrl = `${api.defaults.baseURL}/files/${data.image}`;

        if (data) {
          const formatted = { ...data, src: productImageUrl }
          setProduct(formatted);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, []);

  useEffect(() => {
    const ingredients = product.ingredients || [];
    const newIngredients = ingredients.map((tag) => tag.name);
    setIngredients(newIngredients);

    console.log(product.title)
  }, [product]);

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
              <small>{image && image[0].name || product.image}</small>
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
                {ingredients.map((ingredient, index) => (
                  <Ingredient
                    key={String(index)}
                    value={ingredient}
                    onClick={() => {
                      handleRemoveIngredient(ingredient);
                    }}
                  />
                ))}

                <Ingredient
                  isNew
                  maxLength={30}
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
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
              <button
                className={styles.buttonRemove}
                onClick={handleDelete}
                type="button"
              >
                {' '}
                Excluir Prato
              </button>
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
