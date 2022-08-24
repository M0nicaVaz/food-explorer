import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import styles from './signup.module.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';

const formValidationSchema = zod.object({
  name: zod.string().min(1, 'Insira um nome'),
  email: zod.string().email({ message: 'Digite um email válido' }),
  password: zod.string().min(6, { message: 'Digite uma senha maior' }),
});

export function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formValidationSchema),
  });

  const onSubmit = (data) => console.log(data);

  const name = watch('name');
  const email = watch('email');
  const password = watch('password');
  const isSubmitDisabled = !name || !email || !password;
  return (
    <div className={styles.wrapper}>
      <Logo />

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <legend>Crie sua conta</legend>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Exemplo: Maria da Silva"
            {...register('name')}
          />
          {errors.name?.message && (
            <span className={styles.error}>{errors.name?.message}</span>
          )}
        </div>
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
        <button type="submit" disabled={isSubmitDisabled}>
          Criar conta
        </button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </div>
  );
}
