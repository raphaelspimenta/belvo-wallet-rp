import { FC } from 'react'
import { BsBoxArrowUp } from 'react-icons/bs'
import { IoMdDoneAll } from 'react-icons/io'
import { formatNumber } from 'core/utils'
import { TransactionModel } from 'store/reducers/wallet/model'
import {
    DescriptionWrapper,
    IconWrapper,
    InfoWrapper,
    StatusWrapper,
    TransactionAmount,
    TransactionReceiver,
    TransactionTitle,
    TransactionWrapper,
} from './styled'

interface Props {
    transaction: TransactionModel,
}

const getIconByStatus = (status: string) => ({
    'DONE': <IoMdDoneAll />,
})[status] || <IoMdDoneAll />

const Transaction: FC<Props> = ({ transaction }) => (
    <TransactionWrapper>
        <InfoWrapper>
            <IconWrapper>
                <BsBoxArrowUp />
            </IconWrapper>
            <DescriptionWrapper>
                <TransactionTitle>{transaction.description}</TransactionTitle>
                <TransactionReceiver>{transaction.receiver}</TransactionReceiver><br />
                <TransactionAmount>{formatNumber(transaction.amount)} {transaction.currency}</TransactionAmount>
            </DescriptionWrapper>
        </InfoWrapper>
        <StatusWrapper>
            {getIconByStatus(transaction?.status)}
        </StatusWrapper>
    </TransactionWrapper>
)

export default Transaction
