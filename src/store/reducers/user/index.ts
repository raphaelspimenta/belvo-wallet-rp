import { Action, Resource, Status } from 'store/types'
import { createReducer } from '../../utils'
import { types } from './actions'
import { LoginModel } from './model'

const initialState: Resource<LoginModel> = {
  data: null,
  login: {
    status: Status.pristine,
    error: null,
  },
}

const actions = {
  [types.LOGIN]: (state: Resource<LoginModel>) =>
    ({ ...state, login: { status: Status.pending, error: null } }),
  [types.LOGIN_PENDING]: (state: Resource<LoginModel>) =>
    ({ ...state, login: { status: Status.pending } }),
  [types.LOGIN_ERROR]: (state: Resource<LoginModel>, { error }: Action) =>
    ({ ...state, login: { status: Status.error, error } }),
  [types.LOGIN_SUCCESS]: (state: Resource<LoginModel>, { data }: Action) =>
    ({ ...state, data, login: { status: Status.success, error: null } }),
  [types.RESET_LOGIN_STATUS]: (state: Resource<LoginModel>) =>
    ({ ...state, login: { status: Status.pristine, error: null } }),
}

export default createReducer(initialState, actions)
