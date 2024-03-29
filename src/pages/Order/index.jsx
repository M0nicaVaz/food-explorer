import { CreditCard } from 'phosphor-react';
import { useEffect, useState } from 'react';
import Pix from '../../assets/pix.svg';
import qrCode from '../../assets/qrCode.svg';
import { OrderItem } from '../../components/OrderItem';
import { PaymentForm } from '../../components/PaymentForm';
import styles from './order.module.scss';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/formatPrice';

export function Order() {
  const [paymentType, setPaymentType] = useState('card');
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useCart();

  const pixSelected = paymentType === 'pix';
  const cardSelected = paymentType === 'card';

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
    if (cart) {
      calculateTotalPrice();
    }
  }, [cart]);

  return (
    <main className={styles.content}>
      <div className={styles.order}>
        <strong>Meu Pedido</strong>

        <ul>
          {cart &&
            cart.map((item) => (
              <OrderItem
                item={item}
                key={`${String(new Date().getTime())}+${Math.random() * 100}`}
              />
            ))}
        </ul>

        <span className={styles.total}>Total: {formatPrice(totalPrice)} </span>
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
