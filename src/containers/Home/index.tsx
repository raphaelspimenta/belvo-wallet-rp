import { FC, useEffect, useMemo, useState } from 'react'
import { map } from 'lodash'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { actions } from 'store/reducers/wallet/actions'
import { CurrencyModel, TransactionModel, WalletModel } from 'store/reducers/wallet/model'
import { Resource } from 'store/types'
import { useResource } from 'store/utils'

import Balance from 'components/Balance'
import { formatNumber } from 'core/utils'
import Transaction from 'components/Transaction'
import AddTransactionButton from 'components/AddTransactionButton'
import Modal from 'components/Modal'
import TransactionForm from 'containers/Transaction/TransactionForm'
import { Label, Subtitle } from 'components/Typography'
import Loader from 'components/Loader'
import { BalancesWrapper, Section, TransactionsWrapper } from './styled'

const Home: FC = () => {
    const dispatch = useDispatch()
    const walletState: Resource<WalletModel> = useResource('wallet')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(actions.load())
    }, [])

    const onAddTransaction = () => setIsOpenModal(true)

    const onSuccessTransaction = () => setIsOpenModal(false)

    const walletLoadStatus = useMemo(() => walletState?.load?.status, [walletState])
    const walletLoadData = useMemo(() => walletState?.data, [walletState])
    const lastFiveTransactions = useMemo(() => walletState?.data?.transactions?.slice(0, 5), [walletState])

    if (walletLoadStatus === 'pending') return <Loader />

    return (
        <>
            <AddTransactionButton onAddTransaction={onAddTransaction} />
            <Section>
                <Subtitle>{t('wallet.title')}</Subtitle>
                <Label>{walletLoadData?.email}</Label>

                <BalancesWrapper>
                    {walletLoadData?.balance &&
                        map(Object.keys(walletLoadData?.balance), (key: CurrencyModel) =>
                            <Balance key={key} type={key} value={formatNumber(walletLoadData?.balance[key])} />
                        )}
                </BalancesWrapper>
            </Section>

            <Section>
                <Subtitle>{t('wallet.lastTransactionsTitle')}</Subtitle>
                <TransactionsWrapper>
                    {map(lastFiveTransactions, (transaction: TransactionModel, index: number) =>
                        <Transaction key={`${transaction.description}-${index}`} transaction={transaction} />
                    )}
                </TransactionsWrapper>
            </Section>

            <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                <TransactionForm callback={onSuccessTransaction} />
            </Modal>
        </>
    )
}

export default Home
