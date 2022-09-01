import { CreditCard } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import Pix from '../../assets/pix.svg';
import qrCode from '../../assets/qrCode.svg';
import { OrderItem } from '../../components/OrderItem';
import { PaymentForm } from '../../components/PaymentForm';
import styles from './order.module.scss';
import { CartContext } from '../../hooks/useCart';

export function Order() {
  const [paymentType, setPaymentType] = useState('pix');
  const [totalPrice, setTotalPrice] = useState(0);

  const pixSelected = paymentType === 'pix';
  const cardSelected = paymentType === 'card';
  const { cart } = useContext(CartContext);

  function calculateTotalPrice() {
    const prices = cart.map((item) => item.itemsAmount * item.product.price);

    const sumAllPrices = (total, num) => total + num;
    const total = prices.reduce(sumAllPrices, 0);

    setTotalPrice(total);
  }

  function handlePix() {
    setPaymentType('pix');
  }

  function handleCreditCard() {
    setPaymentType('card');
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <main className={styles.content}>
      <div className={styles.order}>
        <strong>Meu Pedido</strong>

        <ul>
          {cart.map((item) => (
            <OrderItem item={item} key={item.onCartId} />
          ))}
        </ul>

        <span className={styles.total}>Total: R$ {totalPrice} </span>
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
