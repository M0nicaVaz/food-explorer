import { Minus, Plus } from 'phosphor-react';
import { useEffect, useState } from 'react';
import styles from './stepper.module.scss';

import { useFormContext } from 'react-hook-form';

export function Stepper() {
  const [amount, setAmount] = useState(1);
  const { register, watch } = useFormContext();

  const reachedMinimalAmount = amount === 1;
  const formattedAmount = String(amount).padStart(2, '0');

  function handleRemove() {
    setAmount((state) => state - 1);
  }

  function handleAdd() {
    setAmount((state) => state + 1);
  }

  return (
    <div className={styles.stepper}>
      <button
        type="button"
        className={styles.stepperBtn}
        onClick={handleRemove}
        disabled={reachedMinimalAmount}
      >
        <Minus size={18} />
      </button>

      <input
        type="number"
        min={1}
        max={99}
        readOnly={true}
        value={amount}
        {...register('itemsAmount', { valueAsNumber: true })}
      />

      <button type="button" className={styles.stepperBtn} onClick={handleAdd}>
        <Plus size={18} />
      </button>
    </div>
  );
}
