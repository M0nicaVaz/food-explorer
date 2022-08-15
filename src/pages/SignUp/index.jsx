import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import styles from './signup.module.scss';

export function SignUp() {
  return (
    <div className={styles.wrapper}>
      <Logo />

      <form className={styles.form}>
        <legend>Crie sua conta</legend>

        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Exemplo: Maria da Silva" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
          />
        </div>

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </div>
  );
}
