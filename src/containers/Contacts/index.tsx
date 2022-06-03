import { FC, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { actions } from 'store/reducers/contacts/actions'
import { ContactModel, ContactsModel } from 'store/reducers/contacts/model'
import { Resource } from 'store/types'
import { useResource } from 'store/utils'
import TransactionForm from 'containers/Transaction/TransactionForm'
import { Subtitle } from 'components/Typography'
import Contact from 'components/Contact'
import Modal from 'components/Modal'
import Loader from 'components/Loader'

import { ContactsWrapper, Section } from './styled'

const Contacts: FC = () => {
    const dispatch = useDispatch()
    const contactsState: Resource<ContactsModel> = useResource('contacts')
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [selectedContact, setSelectedContact] = useState<ContactModel | undefined>(undefined)
    const { t } = useTranslation()

    useEffect(() => {
        dispatch(actions.load())
    }, [])

    const onSendTransaction = (contact: ContactModel) => {
        setSelectedContact(contact)
        setIsOpenModal(true)
    }

    const onSuccessTransaction = () => {
        setIsOpenModal(false)
    }

    const contactsLoadStatus = useMemo(() => contactsState?.load?.status, [contactsState])
    const contactsData = useMemo(() => contactsState?.data, [contactsState?.data])

    if (contactsLoadStatus === 'pending') return <Loader />

    return (
        <>
            <Section>
                <Subtitle>{t('contacts.title')}</Subtitle>
                <ContactsWrapper>
                    {contactsData?.map(contact => (
                        <Contact key={contact.email} contact={contact} onSendTransaction={onSendTransaction} />
                    ))}
                </ContactsWrapper>
            </Section>
            <Modal isOpen={isOpenModal} close={() => setIsOpenModal(false)}>
                <TransactionForm receiver={selectedContact?.email} callback={onSuccessTransaction} shouldNotLoadContacts />
            </Modal>
        </>
    )
}

export default Contacts
