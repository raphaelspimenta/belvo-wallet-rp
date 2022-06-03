import { Routes, Route } from 'react-router-dom'
import DynamicRoute from 'components/DynamicRoute'
import MainLayout from 'components/Layout'
import PrivateRoute from './private-route'
import { routes } from './constants'
import RedirectLogin from './RedirectLogin'

const Home = DynamicRoute(() => import('containers/Home'/* webpackChunkName: 'home' */))
const Contacts = DynamicRoute(() => import('containers/Contacts'/* webpackChunkName: 'contacts' */))
const Login = DynamicRoute(() => import('containers/Login'/* webpackChunkName: 'login' */))

const ApplicationRoutes = () => (
  <Routes>
    <Route path={routes.HOME} element={(
      <PrivateRoute>
        <MainLayout>
          <Home />
        </MainLayout>
      </PrivateRoute>
    )} />
    <Route path={routes.CONTACTS} element={(
      <PrivateRoute>
        <MainLayout>
          <Contacts />
        </MainLayout>
      </PrivateRoute>
    )} />
    <Route path={routes.SIGN_IN} element={<Login />} />
    <Route path={routes.SIGN_OUT} element={<RedirectLogin />} />
  </Routes>
)

export default ApplicationRoutes
