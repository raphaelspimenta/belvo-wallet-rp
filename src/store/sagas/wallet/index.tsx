import { call, put, takeEvery } from 'redux-saga/effects'
import { getWallet, sendTransaction, requestTransaction } from 'core/api/wallet'
import { Action } from 'store/types'
import { actions, types } from 'store/reducers/wallet/actions'

export function* fetchWallet(): Generator<any, void, never> {
    const { setLoadPending, setLoadError, setLoadSuccess } = actions

    try {
        yield put(setLoadPending())
        const data = yield call(getWallet)
        yield put(setLoadSuccess(data))
    } catch (error) {
        yield put(setLoadError(error))
    }
}

export function* postSendTransaction(action: Action): Generator<any, void, never> {
    const { params } = action
    const { setSendPending, setSendError, setSendSuccess } = actions

    try {
        yield put(setSendPending())
        // @ts-ignore
        const data = yield call(sendTransaction, params)
        yield put(setSendSuccess(data))
    } catch (error) {
        yield put(setSendError(error))
    }
}


export function* postRequestTransaction(action: Action): Generator<any, any, any> {
    const { params } = action
    const { setRequestPending, setRequestError, setRequestSuccess } = actions

    try {
        yield put(setRequestPending())
        // @ts-ignore
        const data = yield call(requestTransaction, params)
        yield put(setRequestSuccess(data))
    } catch (error) {
        yield put(setRequestError(error))
    }
}


export default [
    takeEvery(types.LOAD, fetchWallet),
    takeEvery(types.SEND, postSendTransaction),
    takeEvery(types.REQUEST, postRequestTransaction),
]
