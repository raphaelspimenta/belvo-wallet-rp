import { FC, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiTransferAlt } from 'react-icons/bi'
import {
    MainButton,
    ChildButton,
    Directions,
} from 'react-floating-button-menu'
import { ContactModel } from 'store/reducers/contacts/model'
import { StyeldFloatingMenu } from './styled'

interface Props {
    onAddTransaction: (contact?: ContactModel) => void,
}

const AddTransactionButton: FC<Props> = ({ onAddTransaction }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <StyeldFloatingMenu
            slideSpeed={500}
            direction={Directions.Up}
            spacing={8}
            isOpen={isOpen}
        >
            <MainButton
                iconResting={<AiOutlinePlus />}
                iconActive={<AiOutlinePlus />}
                background="white"
                onClick={() => setIsOpen(!isOpen)}
                size={56}
                data-testid="add-transaction-button"
            />
            <ChildButton
                icon={<BiTransferAlt />}
                background="white"
                size={40}
                onClick={onAddTransaction}
            />
        </StyeldFloatingMenu>
    )
}

export default AddTransactionButton
