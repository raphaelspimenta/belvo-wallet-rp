export type CurrencyModel = 'ETH' | 'BTC' | 'DOGE'

export type TransactionStatus = 'Done' | 'Pending'

export interface BalanceModel {
    ETH: number,
    DOGE: number,
    BTC: number,
}

export interface TransactionModel {
    description: string,
    amount: number,
    currency: CurrencyModel,
    sender: string,
    receiver: string,
    status: TransactionStatus,
}

export interface WalletModel {
    email: string,
    transactions: TransactionModel[],
    balance: BalanceModel,
}
