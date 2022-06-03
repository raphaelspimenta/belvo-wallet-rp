import { all } from 'redux-saga/effects'
import walletSaga from './wallet'
import contactsSaga from './contacts'
import userSaga from './user'

export default function* rootSaga() {
    yield all([
        ...walletSaga,
        ...contactsSaga,
        ...userSaga,
    ])
}
