
import heroSVG from '../../assets/hero.svg';
import { Card } from '../../components/Card';
import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreenSize } from '../../context/useScreenSize';
import 'swiper/css';


export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const { screenSize } = useScreenSize()

  function getSlidesPerView() {
    if (screenSize === 'fullHd') return 3
    if (screenSize === 'desktop') return 3
    if (screenSize === 'tablet') return 2
    return 1
  }

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
            <Swiper
              className={styles.swiper}
              spaceBetween={24}
              slidesPerView={getSlidesPerView()}
            >
              {products.meals.map((meal) => (
                <SwiperSlide key={meal.id}>
                  <Card data={meal} />
                </SwiperSlide>
              ))}
            </Swiper>
        }
      </section>

      <section >
        <strong className={styles.sectionTitle}> Sobremesas</strong>
        {
          isLoading ? <span className={styles.loading} >Carregando...</span> :
            <Swiper
              className={styles.swiper}
              spaceBetween={24}
              slidesPerView={getSlidesPerView()}
            >
              <div>
                {products.desserts.map((dessert) => (
                  <SwiperSlide key={dessert.id}>
                    <Card data={dessert} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
        }
      </section>

      <section  >
        <strong className={styles.sectionTitle}> Bebidas</strong>
        {
          isLoading ? <span className={styles.loading} >Carregando...</span> :
            <Swiper
              className={styles.swiper}
              spaceBetween={24}
              slidesPerView={getSlidesPerView()}
            >
              <div>
                {products.drinks.map((drink) => (
                  <SwiperSlide key={drink.id}>
                    <Card data={drink} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
        }
      </section>
    </main>
  );
}
