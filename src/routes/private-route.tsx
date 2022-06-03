import { getLoggedUser, isAuthenticated } from 'core/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from './constants'

function PrivateRoute({ children }: { children: JSX.Element }) {
  const navigate = useNavigate()
  const redirectLogin = () => navigate(routes.SIGN_IN)

  function parseJwt(token: string) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))

    return JSON.parse(jsonPayload)
  }

  useEffect(() => {
    if (!isAuthenticated()) redirectLogin()

    try {
      const user = JSON.parse(getLoggedUser())
      if (!user)
        redirectLogin()


      const { exp } = parseJwt(user.access_token)
      if (exp * 1000 < Date.now())
        redirectLogin()
    } catch (e) {
      redirectLogin()
    }

  }, [])

  return children
}

export default PrivateRoute
