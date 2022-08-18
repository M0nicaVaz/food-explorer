import { Route, Routes } from 'react-router-dom';
import { Archive } from '../pages/Archive';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Order } from '../pages/Order';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/ORDER" element={<Order />} />
    </Routes>
  );
}
