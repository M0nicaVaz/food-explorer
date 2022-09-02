import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';
import { Stepper } from '../Stepper';

import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

const addToCartSchema = zod.object({
  itemsAmount: zod.number().min(1).max(99),
});

export function Form({ data, ...rest }) {
  const { addToCart } = useContext(CartContext);

  const addToCartForm = useForm({
    resolver: zodResolver(addToCartSchema),
  });

  const { handleSubmit, reset } = addToCartForm;

  function handleAddToCart(itemsAmount) {
    addToCart(itemsAmount, data);

    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleAddToCart)} {...rest}>
      <FormProvider {...addToCartForm}>
        <Stepper />
      </FormProvider>

      <button type="submit">incluir</button>
    </form>
  );
}
