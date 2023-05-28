import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from '../hooks/useCart';
import { CustomToaster } from '../components/CustomToaster';

import { AppRoutes } from './app.routes';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/overrideToast.css';
import { AuthProvider } from '../context/useAuth';
import { ScreenSizeContextProvider } from '../context/useScreenSize';

export function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartContextProvider>
          <ScreenSizeContextProvider>
            <CustomToaster />
            <AppRoutes />
          </ScreenSizeContextProvider>
        </CartContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
