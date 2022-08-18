import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';

import styles from './orders.module.scss';

export function Orders() {
  return (
    <Wrapper>
      <Header />
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
              <tr>
                <td>
                  <div className={`${styles.dot} ${styles.red}`} />
                  Pendente
                </td>
                <td>00000004</td>
                <td>
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td> 20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <div className={`${styles.dot} ${styles.yellow}`} />
                  Preparando
                </td>
                <td>00000004</td>
                <td>
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td> 20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <div className={`${styles.dot} ${styles.green}`} />
                  Entregue
                </td>
                <td>00000004</td>
                <td>
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td> 20/05 às 18h00</td>
              </tr>
              <tr>
                <td>
                  <div className={`${styles.dot} ${styles.green}`} />
                  Entregue
                </td>
                <td>00000004</td>
                <td>
                  1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1
                  x Suco de Maracujá
                </td>
                <td> 20/05 às 18h00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
}
