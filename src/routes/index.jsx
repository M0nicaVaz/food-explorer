import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from '../hooks/useCart';
import { CustomToaster } from '../components/CustomToaster';

import { AppRoutes } from './app.routes';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/overrideToast.css';
import { AuthProvider } from '../context/useAuth';

export function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartContextProvider>
          <CustomToaster />
          <AppRoutes />
        </CartContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
