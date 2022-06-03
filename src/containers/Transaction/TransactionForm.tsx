import { FC, useEffect, memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'

import { Subtitle } from 'components/Typography'
import { Form } from 'components/FormControl/Form'
import { Input } from 'components/FormControl/Input'
import { PrimaryButton } from 'components/Button'
import Select from 'components/FormControl/Select'
import Loader from 'components/Loader'

import { actions as walletActions } from 'store/reducers/wallet/actions'
import { actions as contactsActions } from 'store/reducers/contacts/actions'
import { Resource } from 'store/types'
import { useResource } from 'store/utils'
import useNotification from 'hooks/useNotification'
import { TransactionModel, WalletModel } from 'store/reducers/wallet/model'
import { ContactsModel } from 'store/reducers/contacts/model'
import { CurrencyModel } from 'store/reducers/wallet/model'

import { MainWrapper } from './styled'
import { transactionSchema } from './transaction.validation'
import { TRANSACTION_CURRENCY } from './constants'

type FormValues = Omit<TransactionModel, 'sender' | 'status'>

interface TransactionFormProps {
    receiver?: string,
    callback?: () => void,
    shouldNotLoadContacts?: boolean,
}

interface Option {
    value: string,
    label: string,
}

const TransactionForm: FC<TransactionFormProps> = ({ receiver, callback, shouldNotLoadContacts }) => {
    const dispatch = useDispatch()
    const { error, success } = useNotification()
    const { t } = useTranslation()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [contactsOptions, setContactOptions] = useState<Option[]>()
    const walletState: Resource<WalletModel> = useResource('wallet')
    const contactsState: Resource<ContactsModel> = useResource('contacts')
    const initialValues: FormValues = { description: '', receiver: receiver || '', amount: 0, currency: 'ETH' }
    const currencyOptions = Object.keys(TRANSACTION_CURRENCY).map(key => ({ value: key, label: TRANSACTION_CURRENCY[key as CurrencyModel] }))

    useEffect(() => {
        if (!shouldNotLoadContacts) dispatch(contactsActions.load())
    }, [])

    useEffect(() => {
        const status = walletState?.send?.status

        if (status === 'success' && walletState?.data) {
            setIsSubmitting(false)
            success(t('transaction.success'))
            dispatch(walletActions.resetSendStatus())
            dispatch(walletActions.load())
            callback?.()
        }

        if (status === 'error') {
            setIsSubmitting(false)
            error(t('transaction.error'))
            dispatch(walletActions.resetSendStatus())
        }

        if (status === 'pending')
            setIsSubmitting(true)


    }, [walletState])

    useEffect(() => {
        const status = contactsState?.load?.status

        if (status === 'success') {
            const options = contactsState?.data?.map(contact => ({ value: contact.email, label: contact.name }))
            setContactOptions(options)
            setIsLoading(false)
            dispatch(contactsActions.resetLoadStatus())
        }

        if (status === 'error') {
            setIsLoading(false)
            error(t('contacts.error'))
            dispatch(walletActions.resetSendStatus())
        }

        if (status === 'pending')
            setIsLoading(true)

    }, [contactsState])

    const onSubmitLogin = (values: FormValues) => {
        dispatch(walletActions?.send(values))
    }

    if (isLoading) return <Loader />

    return (
        <MainWrapper>
            <Subtitle>{t('transaction.title')}</Subtitle>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => onSubmitLogin(values)}
                validationSchema={transactionSchema}
                validateOnMount
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isValid,
                    setFieldValue,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder={t('transaction.description')}
                        />

                        <Select
                            options={currencyOptions}
                            value={values.currency}
                            placeholder="BTC"
                            onChange={(value: any) => setFieldValue('currency', value)}
                        />

                        <Input
                            type="number"
                            name="amount"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.amount}
                            placeholder="0.00"
                        />

                        <Select
                            options={contactsOptions}
                            value={values.receiver}
                            onChange={(value: any) => setFieldValue('receiver', value)}
                        />

                        <PrimaryButton type="submit" disabled={isSubmitting || !isValid}>
                            {t('transaction.submit')}
                        </PrimaryButton>
                    </Form>
                )}
            </Formik>
        </MainWrapper>
    )
}

export default memo(TransactionForm)
