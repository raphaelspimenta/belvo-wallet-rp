import { FC } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { ContactModel } from 'store/reducers/contacts/model'
import {
    ActionWrapper,
    ContactEmail,
    ContactName,
    ContactWrapper,
    DescriptionWrapper,
    IconWrapper,
    InfoWrapper,
} from './styled'

interface Props {
    contact: ContactModel,
    onSendTransaction: (contact: ContactModel) => void,
}

const Contact: FC<Props> = ({ contact, onSendTransaction }) => (
    <ContactWrapper>
        <InfoWrapper>
            <IconWrapper>
                <FaRegUserCircle />
            </IconWrapper>
            <DescriptionWrapper>
                <ContactName>{contact.name}</ContactName>
                <ContactEmail>{contact.email}</ContactEmail><br />
            </DescriptionWrapper>
        </InfoWrapper>
        <ActionWrapper onClick={(e) => onSendTransaction(contact)}>
            <AiOutlineSend />
        </ActionWrapper>
    </ContactWrapper>
)

export default Contact
