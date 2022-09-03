import { Receipt } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';
import styles from './paymentform.module.scss';

export function PaymentForm() {
  const { cart, processOrder } = useContext(CartContext);

  function handleOrder() {
    let itemsFormatted = cart.map((item) => {
      return {
        amount: item.itemsAmount,
        title: item.product.title,
      };
    });
    const time = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date());

    const newOrder = { product: [...itemsFormatted], orderTime: time };

    processOrder(newOrder);
  }

  return (
    <form className={styles.paymentForm}>
      <label htmlFor="card">Número do Cartão</label>
      <input
        type="number"
        id="card"
        placeholder="0000 0000 0000 0000"
        disabled={true}
      />

      <div className={styles.split}>
        <div>
          <label htmlFor="expiration">Validade</label>
          <input
            type="text"
            id="expiration"
            placeholder="04/25"
            disabled={true}
          />
        </div>

        <div>
          <label htmlFor="cvc">CVC</label>
          <input type="number" id="cvc" placeholder="000" disabled={true} />
        </div>
      </div>

      <button onClick={handleOrder} type="button">
        <Receipt size={22} />
        Finalizar Pagamento
      </button>
    </form>
  );
}
