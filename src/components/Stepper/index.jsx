import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import styles from './stepper.module.scss';

import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

export function Stepper() {
  const { register, setValue } = useFormContext();
  const [amount, setAmount] = useState(1);

  const reachedMinAmount = amount === 1;
  const reachedMaxAmount = amount === 99;

  function handleRemove() {
    setAmount((state) => state - 1);
  }

  function handleAdd() {
    setAmount((state) => state + 1);
  }

  setValue('itemsAmount', amount, { shouldValidate: true });

  return (
    <div className={styles.stepper}>
      <button
        type="button"
        className={styles.stepperBtn}
        onClick={handleRemove}
        disabled={reachedMinAmount}
      >
        <Minus size={18} />
      </button>

      <input
        type="number"
        min={1}
        max={99}
        readOnly={true}
        {...register('itemsAmount', { valueAsNumber: true })}
      />

      <button
        type="button"
        className={styles.stepperBtn}
        onClick={handleAdd}
        disabled={reachedMaxAmount}
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
