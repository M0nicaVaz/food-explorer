import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from '../hooks/useCart';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <AppRoutes />
      </CartContextProvider>
    </BrowserRouter>
  );
}
