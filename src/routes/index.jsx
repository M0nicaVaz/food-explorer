import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CartContextProvider } from '../hooks/useCart';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/overrideToast.css';

export function Routes() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="dark"
        />
        <AppRoutes />
      </CartContextProvider>
    </BrowserRouter>
  );
}
