import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { useAuth } from '../../context/useAuth';

import styles from './signin.module.scss';

const formValidationSchema = zod.object({
  email: zod.string().email({ message: 'Digite um email válido' }),
  password: zod.string().min(6, { message: 'Digite uma senha maior' }),
});

export function SignIn() {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formValidationSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    signIn({ email, password });
  });

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <legend>Faça login</legend>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            {...register('email')}
          />
          {errors.email?.message && (
            <span className={styles.error}>{errors.email?.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
            {...register('password')}
          />
          {errors.password?.message && (
            <span className={styles.error}>{errors.password?.message}</span>
          )}
        </div>

        <button type="submit">Entrar</button>
        <Link to="/signup">Criar uma conta</Link>
      </form>
    </>
  );
}
