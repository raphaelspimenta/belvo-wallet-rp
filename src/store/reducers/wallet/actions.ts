import { WalletModel } from './model'

export const namespace = 'WALLET'

export const types = {
    LOAD: `${namespace}/LOAD`,
    LOAD_PENDING: `${namespace}/LOAD_PENDING`,
    LOAD_ERROR: `${namespace}/LOAD_ERROR`,
    LOAD_SUCCESS: `${namespace}/LOAD_SUCCESS`,
    RESET_LOAD_STATUS: `${namespace}/RESET_LOAD_STATUS`,

    SEND: `${namespace}/SEND`,
    SEND_PENDING: `${namespace}/SEND_PENDING`,
    SEND_ERROR: `${namespace}/SEND_ERROR`,
    SEND_SUCCESS: `${namespace}/SEND_SUCCESS`,
    RESET_SEND_STATUS: `${namespace}/RESET_SEND_STATUS`,

    REQUEST: `${namespace}/REQUEST`,
    REQUEST_PENDING: `${namespace}/REQUEST_PENDING`,
    REQUEST_ERROR: `${namespace}/REQUEST_ERROR`,
    REQUEST_SUCCESS: `${namespace}/REQUEST_SUCCESS`,
    RESET_REQUEST_STATUS: `${namespace}/RESET_REQUEST_STATUS`,
}

export const actions = {
    load: (params?: any) => ({ type: types.LOAD, params }),
    setLoadPending: () => ({ type: types.LOAD_PENDING }),
    setLoadSuccess: (data: WalletModel) => ({ type: types.LOAD_SUCCESS, data }),
    setLoadError: (error: any) => ({ type: types.LOAD_ERROR, error }),
    resetLoadStatus: () => ({ type: types.RESET_LOAD_STATUS }),

    send: (params?: any) => ({ type: types.SEND, params }),
    setSendPending: () => ({ type: types.SEND_PENDING }),
    setSendSuccess: (data: WalletModel) => ({ type: types.SEND_SUCCESS, data }),
    setSendError: (error: any) => ({ type: types.SEND_ERROR, error }),
    resetSendStatus: () => ({ type: types.RESET_SEND_STATUS }),

    request: (params?: any) => ({ type: types.REQUEST, params }),
    setRequestPending: () => ({ type: types.REQUEST_PENDING }),
    setRequestSuccess: (data: WalletModel) => ({ type: types.REQUEST_SUCCESS, data }),
    setRequestError: (error: any) => ({ type: types.REQUEST_ERROR, error }),
    resetRequestStatus: () => ({ type: types.RESET_REQUEST_STATUS }),
}
