import { LoginModel } from './model'

export const namespace = 'LOGIN'

export const types = {
    LOGIN: `${namespace}/LOGIN`,
    LOGIN_PENDING: `${namespace}/LOGIN_PENDING`,
    LOGIN_ERROR: `${namespace}/LOGIN_ERROR`,
    LOGIN_SUCCESS: `${namespace}/LOGIN_SUCCESS`,
    RESET_LOGIN_STATUS: `${namespace}/RESET_LOGIN_STATUS`,
}

export const actions = {
    login: (params?: any) => ({ type: types.LOGIN, params }),
    setLoginPending: () => ({ type: types.LOGIN_PENDING }),
    setLoginSuccess: (data: LoginModel) => ({ type: types.LOGIN_SUCCESS, data }),
    setLoginError: (error: any) => ({ type: types.LOGIN_ERROR, error }),
    resetLoginStatus: () => ({ type: types.RESET_LOGIN_STATUS }),
}
