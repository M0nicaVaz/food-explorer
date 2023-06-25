import heroSVG from '../../assets/hero.svg';
import { Card } from '../../components/Card';
import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useScreenSize } from '../../context/useScreenSize';
import { useSearch } from '../../context/useSearch';
import { Section } from './Section';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);
  const [foundProducts, setFoundProducts] = useState([]);
  const { screenSize } = useScreenSize();
  const { search } = useSearch();
  const isSearchActive = search !== undefined && search !== '';

  function getSlidesPerView() {
    if (screenSize === 'fullHd') return 3;
    if (screenSize === 'desktop') return 3;
    if (screenSize === 'tablet') return 2;
    return 1;
  }

  async function getProducts() {
    try {
      const { data } = await api.get(`/products/`);

      if (data) {
        const dataWithFormattedImageUrl = data.map((product) => {
          return {
            ...product,
            src: `${api.defaults.baseURL}/files/${product.image}`,
          };
        });

        const meals = dataWithFormattedImageUrl.filter(
          (product) => product.type === 'meal'
        );
        const desserts = dataWithFormattedImageUrl.filter(
          (product) => product.type === 'dessert'
        );
        const drinks = dataWithFormattedImageUrl.filter(
          (product) => product.type === 'drink'
        );

        setProducts({ meals, desserts, drinks });
        setSearchProducts(dataWithFormattedImageUrl);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const foundByTitle = searchProducts.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    const foundByIngredient = searchProducts.filter((product) =>
      product.ingredients.find((ingredient) =>
        ingredient.name.toLowerCase().includes(search.toLowerCase())
      )
    );

    const foundByTitleOrIngredient = new Set([
      ...foundByTitle,
      ...foundByIngredient,
    ]);
    setFoundProducts([...foundByTitleOrIngredient]);
  }, [search]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className={styles.content}>
      <div className={styles.hero}>
        <div className={styles.imgWrapper}>
          <img src={heroSVG} alt="macarroons" />
        </div>
        <div className={styles.heroText}>
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </div>
      </div>

      {isSearchActive ? (
        <Section
          title="Item(s) encontrado(s)"
          data={foundProducts}
          getSlidesPerView={getSlidesPerView}
          isLoading={false}
          isSearch
        />
      ) : (
        <>
          <Section
            title="Pratos principais"
            data={products.meals}
            getSlidesPerView={getSlidesPerView}
            isLoading={isLoading}
          />
          <Section
            title="Sobremesas"
            data={products.desserts}
            getSlidesPerView={getSlidesPerView}
            isLoading={isLoading}
          />
          <Section
            title="Bebidas"
            data={products.drinks}
            getSlidesPerView={getSlidesPerView}
            isLoading={isLoading}
          />
        </>
      )}
    </main>
  );
}
