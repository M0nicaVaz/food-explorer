import { Receipt } from 'phosphor-react';
import styles from './paymentform.module.scss';

export function PaymentForm() {
  return (
    <form>
      <label htmlFor="card">Número do Cartão</label>
      <input type="number" id="card" placeholder="0000 0000 0000 0000" />

      <div className={styles.split}>
        <div>
          <label htmlFor="expiration">Validade</label>
          <input type="text" id="expiration" placeholder="04/25" />
        </div>

        <div>
          <label htmlFor="cvc">CVC</label>
          <input type="number" id="cvc" placeholder="000" />
        </div>
      </div>

      <button disabled>
        <Receipt size={22} />
        Finalizar Pagamento
      </button>
    </form>
  );
}
