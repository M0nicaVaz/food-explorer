import Carousel from 'react-elastic-carousel';
import heroSVG from '../../assets/hero.svg';
import { Card } from '../../components/Card';
import '../../styles/overrideCarousel.css';
import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 640, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1024, itemsToShow: 4 },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      try {
        const { data } = await api.get(`/products/`)

        if (data) {
          const dataWithFormattedImageUrl = data.map((product) => {
            return {
              ...product, src: `${api.defaults.baseURL}/files/${product.image}`
            }
          })

          const meals = dataWithFormattedImageUrl.filter((product) => product.type === 'meal')
          const desserts = dataWithFormattedImageUrl.filter((product) => product.type === 'dessert')
          const drinks = dataWithFormattedImageUrl.filter((product) => product.type === 'drink')

          setProducts({ meals, desserts, drinks })
          setIsLoading(false)
        }
      }
      catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])



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

      <section >
        <strong className={styles.sectionTitle}> Pratos principais</strong>
        {
          isLoading ? <span className={styles.loading} >Carregando...</span> :
            <Carousel itemPosition='START' breakPoints={breakPoints} pagination={false}>
              {products.meals.map((meal) => (
                <Card data={meal} key={meal.id} />
              ))}
            </Carousel>
        }
      </section>

      <section >
        <strong className={styles.sectionTitle}> Sobremesas</strong>
        {
          isLoading ? <span className={styles.loading} >Carregando...</span> :
            <Carousel
              itemPosition='START'
              breakPoints={breakPoints}
              pagination={false}
              outerSpacing={20}
            >
              {products.desserts.map((dessert) => (
                <Card data={dessert} key={dessert.id} />
              ))}
            </Carousel>
        }
      </section>

      <section  >
        <strong className={styles.sectionTitle}> Bebidas</strong>
        {
          isLoading ? <span className={styles.loading} >Carregando...</span> :
            <Carousel
              itemPosition='START'
              breakPoints={breakPoints}
              pagination={false}
            >
              {products.drinks.map((drink) => (
                <Card data={drink} key={drink.id} />
              ))}
            </Carousel>
        }
      </section>
    </main>
  );
}
