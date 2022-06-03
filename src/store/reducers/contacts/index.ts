import { Action, Resource, Status } from 'store/types'
import { createReducer } from '../../utils'
import { types } from './actions'
import { ContactsModel } from './model'

const initialState: Resource<ContactsModel> = {
  data: null,
  load: {
    status: Status.pristine,
    error: null,
  },
}

const actions = {
  [types.LOAD_PENDING]: (state: Resource<ContactsModel>) =>
    ({ ...state, load: { status: Status.pending, error: null } }),
  [types.LOAD_ERROR]: (state: Resource<ContactsModel>, { error }: Action) =>
    ({ ...state, load: { status: Status.error, error } }),
  [types.LOAD_SUCCESS]: (state: Resource<ContactsModel>, { data }: Action) =>
    ({ ...state, data, load: { status: Status.success, error: null } }),
  [types.RESET_LOAD_STATUS]: (state: Resource<ContactsModel>) =>
    ({ ...state, load: { status: Status.pristine, error: null } }),
}

export default createReducer(initialState, actions)
