import { call, put, takeLatest } from 'redux-saga/effects'
import { login as requestLogin } from 'core/api/login'
import { actions, types } from 'store/reducers/user/actions'

export function* login(action?: any): Generator<any, void, never> {
    const { username, password } = action.params
    const { setLoginPending, setLoginError, setLoginSuccess } = actions

    try {
        yield put(setLoginPending())
        const data = yield call(requestLogin, username, password)
        yield put(setLoginSuccess(data))
    } catch (error) {
        yield put(setLoginError(error))
    }
}

export default [
    takeLatest(types.LOGIN, login),
]
