import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { AuthLayout } from '../layouts/AuthLayout'
import { Archive } from '../pages/Archive'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { New } from '../pages/New'
import { Order } from '../pages/Order'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { useAuth } from '../context/useAuth'

export function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      {user ? (
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/order" element={<Order />} />
          <Route path="/new" element={<New />} />
        </Route>
      ) : (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      )}
    </Routes>
  )
}
