import { Paragraph } from 'components/Typography'
import styled from 'styled-components'

export const BalanceWrapper = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.colors.general.white};
    box-shadow: 0 16px 22px -16px rgb(15 50 86 / 32%);
    border-radius: 24px;
    gap: 1rem;
`

export const BalanceValue = styled(Paragraph)``

export const BalanceImg = styled.img`
    width: 4rem;
    height: 4rem;
`
