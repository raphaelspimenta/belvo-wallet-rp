import { AnyAction } from 'redux'
import { useSelector } from 'react-redux'
import { Handlers, Resource } from './types'

export const createReducer = <State>(
  initialState: State,
  handlers: Handlers<State>,
) => (state = initialState, action: AnyAction) =>
    handlers[action.type] ? handlers[action.type](state, action) : state

export const useResource = <T>(resourceName: string) =>
  useSelector((state: Record<string, Resource<T>>) => state[resourceName])
