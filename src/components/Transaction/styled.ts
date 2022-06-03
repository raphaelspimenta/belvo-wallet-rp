import { Paragraph, Label } from 'components/Typography'
import styled from 'styled-components'

export const TransactionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    width: 100%;
`

export const InfoWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const IconWrapper = styled.div`
    & > svg {
        font-size: 1.5rem;
    }
`

export const DescriptionWrapper = styled.div``

export const TransactionTitle = styled(Paragraph)``

export const TransactionReceiver = styled(Label)``

export const TransactionAmount = styled(Label)``

export const StatusWrapper = styled.div`
    & > svg {
        color: ${({ theme }) => theme.colors.feedback.success};
        font-size: 1.5rem;
    }
`
