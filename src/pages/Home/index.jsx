import heroSVG from '../../assets/hero.svg';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import '../../styles/overrideCarousel.css';
import styles from './home.module.scss';

import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.imgWrapper}>
            <img src={heroSVG} alt="macarroons" />
          </div>
          <div className={styles.heroText}>
            <h1>Sabores inigualáveis</h1>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados
            </span>
          </div>
        </div>

        <section>
          <strong className={styles.sectionTitle}> Pratos principais</strong>

          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            className={styles.carousel}
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </section>

        <section>
          <strong className={styles.sectionTitle}> Sobremesas</strong>

          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            className={styles.carousel}
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </section>

        <section>
          <strong className={styles.sectionTitle}> Bebidas</strong>

          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            className={styles.carousel}
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </Carousel>
        </section>
      </main>
      <Footer />
    </div>
  );
}
