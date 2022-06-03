import { runSaga } from 'redux-saga'

import * as userApi from '../../core/api/login'
import * as contactsApi from '../../core/api/contacts'
import * as walletApi from '../../core/api/wallet'

import { types as userTypes } from '../reducers/user/actions'
import { types as contactsTypes } from '../reducers/contacts/actions'
import { types as walletTypes } from '../reducers/wallet/actions'
import { TransactionModel } from '../reducers/wallet/model'

import { login as loginSaga } from '../sagas/user'
import { fetchContacts } from '../sagas/contacts'
import { fetchWallet, postSendTransaction } from '../sagas/wallet'


describe('Store sagas for login', () => {
    it('should request login with success', async () => {
        const dummyResponse = { access_token: 'xyz', token_type: 'bearer' }
        const mockImplementation = (username: string, password: string) => Promise.resolve(dummyResponse)
        const requestLogin = jest.spyOn(userApi, 'login').mockImplementation(mockImplementation)

        const dispatched: any = []
        const params = { params: { username: 'test', password: 'test' } }

        await runSaga({ dispatch: (action) => dispatched.push(action) }, loginSaga, params).toPromise()
        expect(dispatched).toEqual([
            { type: userTypes.LOGIN_PENDING },
            { type: userTypes.LOGIN_SUCCESS, data: dummyResponse },
        ])

        expect(requestLogin).toHaveBeenCalledTimes(1)
        requestLogin.mockClear()
    })

    it('should request login with error', async () => {
        const mockImplementation = (username: string, password: string) => Promise.reject('test')
        const requestLogin = jest.spyOn(userApi, 'login').mockImplementation(mockImplementation)

        const dispatched: any = []
        const params = { params: { username: 'test', password: 'test' } }
        await runSaga({ dispatch: (action) => dispatched.push(action) }, loginSaga, params).toPromise()

        expect(dispatched).toEqual([
            { type: userTypes.LOGIN_PENDING },
            { type: userTypes.LOGIN_ERROR, error: 'test' },
        ])
        expect(requestLogin).toHaveBeenCalledTimes(1)
        requestLogin.mockClear()
    })
})

describe('Store sagas for contacts', () => {
    it('should request contacts with success', async () => {
        const dummyResponse = [{ email: 'test@test.com', name: 'test' }]
        const mockImplementation = () => Promise.resolve(dummyResponse)
        const requestContacts = jest.spyOn(contactsApi, 'getContacts').mockImplementation(mockImplementation)

        const dispatched: any = []
        await runSaga({ dispatch: (action) => dispatched.push(action) }, fetchContacts).toPromise()
        expect(dispatched).toEqual([
            { type: contactsTypes.LOAD_PENDING },
            { type: contactsTypes.LOAD_SUCCESS, data: dummyResponse },
        ])

        expect(requestContacts).toHaveBeenCalledTimes(1)
        requestContacts.mockClear()
    })

    it('should request login with error', async () => {
        const mockImplementation = () => Promise.reject('test')
        const requestContacts = jest.spyOn(contactsApi, 'getContacts').mockImplementation(mockImplementation)

        const dispatched: any = []
        await runSaga({ dispatch: (action) => dispatched.push(action) }, fetchContacts).toPromise()

        expect(dispatched).toEqual([
            { type: contactsTypes.LOAD_PENDING },
            { type: contactsTypes.LOAD_ERROR, error: 'test' },
        ])

        expect(requestContacts).toHaveBeenCalledTimes(1)
        requestContacts.mockClear()

    })
})

describe('Store sagas for wallet', () => {
    it('should request wallet with success', async () => {
        const dummyResponse = [{ email: 'test@test.com', transactions: [], balance: { ETH: 0, BTC: 0, DOGE: 0 } }]
        const mockImplementation = () => Promise.resolve(dummyResponse)
        const requestWallet = jest.spyOn(walletApi, 'getWallet').mockImplementation(mockImplementation)

        const dispatched: any = []
        await runSaga({ dispatch: (action) => dispatched.push(action) }, fetchWallet).toPromise()
        expect(dispatched).toEqual([
            { type: walletTypes.LOAD_PENDING },
            { type: walletTypes.LOAD_SUCCESS, data: dummyResponse },
        ])

        expect(requestWallet).toHaveBeenCalledTimes(1)
        requestWallet.mockClear()
    })

    it('should request login with error', async () => {
        const mockImplementation = () => Promise.reject('test')
        const requestWallet = jest.spyOn(walletApi, 'getWallet').mockImplementation(mockImplementation)

        const dispatched: any = []
        await runSaga({ dispatch: (action) => dispatched.push(action) }, fetchWallet).toPromise()

        expect(dispatched).toEqual([
            { type: walletTypes.LOAD_PENDING },
            { type: walletTypes.LOAD_ERROR, error: 'test' },
        ])

        expect(requestWallet).toHaveBeenCalledTimes(1)
        requestWallet.mockClear()

    })

    it('should send crypto with success', async () => {
        const dummyResponse: TransactionModel = {
            description: 'test',
            amount: 0.23,
            currency: 'BTC',
            sender: 'test@test.com',
            receiver: 'test@test.com',
            status: 'Done',
        }

        const mockImplementation = (transactionRequest: any) => Promise.resolve(dummyResponse)
        const sendTransaction = jest.spyOn(walletApi, 'sendTransaction').mockImplementation(mockImplementation)

        const dispatched: any = []
        const params = {
            description: 'test',
            amount: 0.23,
            currency: 'BTC',
            sender: 'test@test.com',
            receiver: 'test@test.com',
        }
        await runSaga({ dispatch: (action) => dispatched.push(action) }, postSendTransaction, { params, type: '' }).toPromise()
        expect(dispatched).toEqual([
            { type: walletTypes.SEND_PENDING },
            { type: walletTypes.SEND_SUCCESS, data: dummyResponse },
        ])

        expect(sendTransaction).toHaveBeenCalledTimes(1)
        sendTransaction.mockClear()
    })

    it('should send crypto with error', async () => {
        const mockImplementation = () => Promise.reject('test')
        const requestWallet = jest.spyOn(walletApi, 'sendTransaction').mockImplementation(mockImplementation)

        const dispatched: any = []
        const params = {
            description: 'test',
            amount: 0.23,
            currency: 'BTC',
            sender: 'test@test.com',
            receiver: 'test@test.com',
        }
        await runSaga({ dispatch: (action) => dispatched.push(action) }, postSendTransaction, { params, type: '' }).toPromise()
        expect(dispatched).toEqual([
            { type: walletTypes.SEND_PENDING },
            { type: walletTypes.SEND_ERROR, error: 'test' },
        ])

        expect(requestWallet).toHaveBeenCalledTimes(1)
        requestWallet.mockClear()

    })
})
