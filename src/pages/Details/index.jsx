import styles from './details.module.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CaretLeft } from 'phosphor-react';
import { Form } from '../../components/Form';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { useAuth } from '../../context/useAuth';

export function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { isAdmin } = useAuth();

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await api.get(`/products/${id}`);
        const productImageUrl = `${api.defaults.baseURL}/files/${data.image}`;

        if (data) {

          setProduct({ ...data, src: productImageUrl });
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, []);

  return (
    <>
      {isLoading ? (
        <span className={styles.loading}>Carregando...</span>
      ) : (
        <main className={styles.content}>
          <button className={styles.backBtn} onClick={handleGoBack}>
            <CaretLeft />
            voltar
          </button>

          <div className={styles.details}>
            <img className={styles.mainImg} src={product.src} alt="" />

            <div className={styles.contentWrapper}>
              <h1 className={styles.title}>{product.title}</h1>

              <span className={styles.subtitle}>{product.description}</span>

              {product.ingredients.length > 0 && (
                <div className={styles.ingredients}>
                  {product.ingredients.map((ingredient) => (
                    <span key={ingredient.id}>{ingredient.name}</span>
                  ))}
                </div>
              )}

              {isAdmin ? (
                <Link
                  to={`/admin/new?product=${id}`}
                  className={`${styles.orderBtn}`}
                >
                  Editar prato
                </Link>
              ) : (
                <footer>
                  <span className={styles.price}>
                    {formatPrice(product.price)}
                  </span>
                  <Form data={product} className={styles.stepper} />
                </footer>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
