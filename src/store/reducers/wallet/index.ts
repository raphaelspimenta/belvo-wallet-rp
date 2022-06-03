import { Action, Resource, Status } from 'store/types'
import { createReducer } from '../../utils'
import { types } from './actions'
import { WalletModel } from './model'

const initialState: Resource<WalletModel> = {
  data: null,
  load: {
    status: Status.pristine,
    error: null,
  },
  send: {
    status: Status.pristine,
    error: null,
  },
  request: {
    status: Status.pristine,
    error: null,
  },
}

const actions = {
  [types.LOAD_PENDING]: (state: Resource<WalletModel>) =>
    ({ ...state, load: { status: Status.pending, error: null } }),
  [types.LOAD_ERROR]: (state: Resource<WalletModel>, { error }: Action) =>
    ({ ...state, load: { status: Status.error, error } }),
  [types.LOAD_SUCCESS]: (state: Resource<WalletModel>, { data }: Action) =>
    ({ ...state, data, load: { status: Status.success, error: null } }),
  [types.RESET_LOAD_STATUS]: (state: Resource<WalletModel>) =>
    ({ ...state, load: { status: Status.pristine, error: null } }),

  [types.SEND_PENDING]: (state: Resource<WalletModel>) =>
    ({ ...state, send: { status: Status.pending, error: null } }),
  [types.SEND_ERROR]: (state: Resource<WalletModel>, { error }: Action) =>
    ({ ...state, send: { status: Status.error, error } }),
  [types.SEND_SUCCESS]: (state: Resource<WalletModel>, { data }: Action) =>
    ({ ...state, data, send: { status: Status.success, error: null } }),
  [types.RESET_SEND_STATUS]: (state: Resource<WalletModel>) =>
    ({ ...state, send: { status: Status.pristine, error: null } }),

  [types.REQUEST_PENDING]: (state: Resource<WalletModel>) =>
    ({ ...state, request: { status: Status.pending, error: null } }),
  [types.REQUEST_ERROR]: (state: Resource<WalletModel>, { error }: Action) =>
    ({ ...state, request: { status: Status.error, error } }),
  [types.REQUEST_SUCCESS]: (state: Resource<WalletModel>) =>
    ({ ...state, request: { status: Status.success, error: null } }),
  [types.RESET_REQUEST_STATUS]: (state: Resource<WalletModel>) =>
    ({ ...state, request: { status: Status.pristine, error: null } }),
}

export default createReducer(initialState, actions)
