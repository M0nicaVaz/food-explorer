import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from '../hooks/useCart';
import { CustomToaster } from '../components/CustomToaster';

import { AppRoutes } from './app.routes';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/overrideToast.css';
import { AuthProvider } from '../context/useAuth';
import { ScreenSizeContextProvider } from '../context/useScreenSize';
import { SearchContextProvider } from '../context/useSearch';

export function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartContextProvider>
          <ScreenSizeContextProvider>
            <SearchContextProvider>
              <CustomToaster />
              <AppRoutes />
            </SearchContextProvider>
          </ScreenSizeContextProvider>
        </CartContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
