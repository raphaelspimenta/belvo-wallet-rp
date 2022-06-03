import { FC } from 'react'
import { CurrencyModel } from 'store/reducers/wallet/model'
import bitcoin from 'core/assets/bitcoin.png'
import dogecoin from 'core/assets/dogecoin.png'
import ethereum from 'core/assets/ethereum.png'
import { BalanceImg, BalanceValue, BalanceWrapper } from './styled'


interface Props {
    value: string,
    type: CurrencyModel,
}

const getBalanceImg = (type: CurrencyModel) => ({
    'BTC': bitcoin,
    'ETH': ethereum,
    'DOGE': dogecoin,
})[type]

const Balance: FC<Props> = ({ value, type }) => {
    const icon = getBalanceImg(type)

    return (
        <BalanceWrapper>
            <BalanceImg src={icon} />
            <BalanceValue>{value} {type}</BalanceValue>
        </BalanceWrapper>
    )

}

export default Balance
