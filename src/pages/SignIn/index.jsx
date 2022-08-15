import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import styles from './signin.module.scss';

export function SignIn() {
  return (
    <div className={styles.wrapper}>
      <Logo />

      <form className={styles.form}>
        <legend>Faça login</legend>

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
        <Link to="/signup">Criar uma conta</Link>
      </form>
    </div>
  );
}
