import { Route, Routes } from 'react-router-dom';
import { Archive } from '../pages/Archive';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Order } from '../pages/Order';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/order" element={<Order />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}
