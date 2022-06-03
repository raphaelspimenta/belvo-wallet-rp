import { AnyAction } from 'redux'

export interface Handlers<State> {
    [key: string]: (state: State, action: AnyAction) => State,
}

export enum Status {
    pristine = 'pristine',
    pending = 'pending',
    success = 'success',
    error = 'error'
}

export interface ResourceOperation {
    status: Status,
    error?: null | any,
}

export interface Resource<T> {
    data: T | null,
    load?: ResourceOperation,
    send?: ResourceOperation,
    request?: ResourceOperation,
    login?: ResourceOperation,
}

export interface Action {
    type: string,
    params?: Record<string, any>,
    error?: any,
    data?: any,
}
