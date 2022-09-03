import styles from './archive.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../hooks/useCart';

export function Archive() {
  const { historyList } = useContext(CartContext);

  return (
    <main className={styles.content}>
      <h1 className={styles.title}>Pedidos</h1>

      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e Hora</th>
            </tr>
          </thead>

          <tbody>
            {historyList &&
              historyList.map((order, index) => (
                <tr key={`${order.orderTime}+${Math.random() * 100}`}>
                  <td>
                    <div className={`${styles.dot} ${styles.red}`} />
                    Pendente
                  </td>
                  <td>{String(index + 1).padStart(5, '0')}</td>
                  <td>
                    <span>{order.product} </span>
                  </td>
                  <td> {order.orderTime} </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
