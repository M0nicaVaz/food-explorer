import { CreditCard } from 'phosphor-react';
import { useState } from 'react';
import Pix from '../../assets/pix.svg';
import qrCode from '../../assets/qrCode.svg';
import { OrderItem } from '../../components/OrderItem';
import { PaymentForm } from '../../components/PaymentForm';
import styles from './order.module.scss';

export function Order() {
  const [paymentType, setPaymentType] = useState('pix');
  const pixSelected = paymentType === 'pix';
  const cardSelected = paymentType === 'card';

  function handlePix() {
    setPaymentType('pix');
  }

  function handleCreditCard() {
    setPaymentType('card');
  }

  return (
    <main className={styles.content}>
      <div className={styles.order}>
        <strong>Meu Pedido</strong>

        <ul>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </ul>

        <span className={styles.total}>Total: R$ 103,88</span>
      </div>

      <div className={styles.payment}>
        <strong>Pagamento</strong>

        <div className={styles.paymentBox}>
          <div className={styles.btnWrapper}>
            <button onClick={handlePix} disabled={pixSelected}>
              <img src={Pix} />
              PIX
            </button>
            <button onClick={handleCreditCard} disabled={cardSelected}>
              <CreditCard size={24} />
              Crédito
            </button>
          </div>
          <div>
            {paymentType === 'pix' ? <img src={qrCode} /> : <PaymentForm />}
          </div>
        </div>
      </div>
    </main>
  );
}
