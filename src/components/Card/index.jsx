import { Heart } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../hooks/useCart';
import { Stepper } from '../Stepper';

import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

import styles from './card.module.scss';

const addToCartSchema = zod.object({
  itemsAmount: zod.number().min(1).max(99),
});

export function Card({ data, ...rest }) {
  const { addToCart } = useContext(CartContext);

  const addToCartForm = useForm({
    resolver: zodResolver(addToCartSchema),
    defaultValues: {
      itemsAmount: 0,
    },
  });

  const { handleSubmit, reset } = addToCartForm;

  function handleAddToCart(itemsAmount) {
    addToCart(itemsAmount, data);
    reset();
  }

  return (
    <article className={styles.wrapper} data={data} {...rest}>
      <button className={styles.likeBtn}>
        <Heart size={26} />
      </button>

      <img src={data.src} alt="" />

      <Link to={`/details/${data.id}`}>
        <strong className={styles.title}>{data.title}</strong>
      </Link>

      <span className={styles.subtitle}>{data.description}</span>

      <span className={styles.price}>R$ {data.price}</span>

      <form onSubmit={handleSubmit(handleAddToCart)}>
        <FormProvider {...addToCartForm}>
          <Stepper />
        </FormProvider>

        <button type="submit" className={styles.addBtn}>
          incluir
        </button>
      </form>
    </article>
  );
}
