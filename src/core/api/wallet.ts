import { getAccessToken } from 'core/auth'
import { getCurrentEnvConfig } from 'core/config'
import { WalletModel, TransactionModel } from 'store/reducers/wallet/model'
import createAPI from '.'

const { apiURL } = getCurrentEnvConfig()
const BaseAPI = createAPI(apiURL)

export type TransactionRequest = Omit<TransactionModel, 'sender' | 'receiver'>

type GetWalletRequest = () => Promise<WalletModel[]>
export const getWallet: GetWalletRequest = () => BaseAPI.get('/wallet', {
    headers: {
        'Authorization': getAccessToken(),
    },
})

type SendTransactionRequest = (body: TransactionRequest) => Promise<TransactionModel>
export const sendTransaction: SendTransactionRequest = (body) => BaseAPI.post('/wallet/send', body, {
    headers: {
        'Authorization': getAccessToken(),
    },
})

type RequestTransactionRequest = (body: TransactionRequest) => Promise<TransactionModel>
export const requestTransaction: RequestTransactionRequest = (body) => BaseAPI.post('/wallet/request', body, {
    headers: {
        'Authorization': getAccessToken(),
    },
})
