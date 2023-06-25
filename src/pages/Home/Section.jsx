import { Swiper as SwiperComponent } from 'swiper/react';
import styles from './home.module.scss';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../components/Card';
import { NotFound } from '../../components/NotFound';
import 'swiper/css';

export function Section({ getSlidesPerView, data, isLoading, title, isSearch }) {
    return (
        <section>
            <strong className={styles.sectionTitle}>{title}</strong>
            {isLoading ? (
                <span className={styles.loading}>Carregando...</span>
            ) : (
                <>
                    {data.length > 0 ? (
                        <SwiperComponent
                            className={styles.swiper}
                            spaceBetween={24}
                            slidesPerView={getSlidesPerView()}
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Card data={item} />
                                </SwiperSlide>
                            ))}
                        </SwiperComponent>
                    ) : (
                        <NotFound isSearch={isSearch} />
                    )}
                </>
            )}
        </section>
    );
}
