import { CreditCard } from 'phosphor-react';
import { useState } from 'react';
import Pix from '../../assets/pix.svg';
import qrCode from '../../assets/qrCode.svg';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PaymentForm } from '../../components/PaymentForm';
import { Wrapper } from '../../components/Wrapper';
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
    <Wrapper>
      <Header />

      <main className={styles.content}>
        <div className={styles.order}>
          <strong>Meu Pedido</strong>

          <ul>
            <li className={styles.orderItem}>
              <img src="" alt="" />
              <span>1 x Salada Radish</span>
              <span>R$ 25,97</span>
              <button>Excluir</button>
            </li>
          </ul>

          <span>Total: R$ 103,88</span>
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
      <Footer />
    </Wrapper>
  );
}
