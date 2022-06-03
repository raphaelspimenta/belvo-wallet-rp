import { ContactsModel } from './model'

export const namespace = 'CONTACTS'

export const types = {
    LOAD: `${namespace}/LOAD`,
    LOAD_PENDING: `${namespace}/LOAD_PENDING`,
    LOAD_ERROR: `${namespace}/LOAD_ERROR`,
    LOAD_SUCCESS: `${namespace}/LOAD_SUCCESS`,
    RESET_LOAD_STATUS: `${namespace}/RESET_LOAD_STATUS`,
}

export const actions = {
    load: (params?: any) => ({ type: types.LOAD, params }),
    setLoadPending: () => ({ type: types.LOAD_PENDING }),
    setLoadSuccess: (data: ContactsModel) => ({ type: types.LOAD_SUCCESS, data }),
    setLoadError: (error: any) => ({ type: types.LOAD_ERROR, error }),
    resetLoadStatus: () => ({ type: types.RESET_LOAD_STATUS }),
}
