import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import styles from './stepper.module.scss';

export function Stepper() {
  const [amount, setAmount] = useState(1);
  const reachedMinimalAmount = amount === 1;

  function handleRemove() {
    setAmount((state) => state - 1);
  }

  function handleAdd() {
    setAmount((state) => state + 1);
  }

  return (
    <div className={styles.stepper}>
      <button
        className={styles.stepperBtn}
        onClick={handleRemove}
        disabled={reachedMinimalAmount}
      >
        <Minus size={18} />
      </button>
      <span>{String(amount).padStart(2, '0')}</span>
      <button className={styles.stepperBtn} onClick={handleAdd}>
        <Plus size={18} />
      </button>
    </div>
  );
}
