import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));
      localStorage.setItem('@rocketnotes:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

      navigate('/');
    } catch (error) {
      if (error.response) {
        toast.warning(error.response.data.message);
      } else {
        toast.warning('Não foi possível entrar.');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketnotes:token');
    localStorage.removeItem('@rocketnotes:user');

    setData({});
    toast.success('Você não está logado.');
    navigate('/');
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem('@rocketnotes:user', JSON.stringify(user));

      setData({ user, token: data.token });

      toast.success('Perfil atualizado!');
    } catch (error) {
      if (error.response) {
        toast.warning(error.response.data.message);
      } else {
        toast.warning('Não foi possível atualizar o perfil.');
      }
    }
  }

  async function signUp({ name, email, password }) {
    if (!name || !email || !password) {
      toast.warning('Preencha todos os campos!');
      return null;
    }

    try {
      await api.post('/users', { name, email, password });
      navigate('/login');
    } catch (error) {
      toast.warning(error.response.data.message);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketnotes:token');
    const user = localStorage.getItem('@rocketnotes:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
