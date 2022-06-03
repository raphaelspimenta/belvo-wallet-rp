import { call, put, takeEvery } from 'redux-saga/effects'
import { getContacts } from 'core/api/contacts'
import { actions, types } from 'store/reducers/contacts/actions'

export function* fetchContacts(): Generator<any, void, never> {
    const { setLoadPending, setLoadError, setLoadSuccess } = actions

    try {
        yield put(setLoadPending())
        const data = yield call(getContacts)
        yield put(setLoadSuccess(data))
    } catch (error) {
        yield put(setLoadError(error))
    }
}

export default [
    takeEvery(types.LOAD, fetchContacts),
]
