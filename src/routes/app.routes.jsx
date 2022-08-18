import { Route, Routes } from 'react-router-dom';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { Orders } from '../pages/Orders';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}
