import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { removeLoggedUser } from 'core/auth'
import { routes } from './constants'

const RedirectLogin = () => {

    useEffect(() => {
        removeLoggedUser()
    }, [])

    return <Navigate to={{ pathname: routes.SIGN_IN }} />
}

export default RedirectLogin
