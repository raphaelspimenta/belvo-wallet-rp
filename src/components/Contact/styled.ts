import { Paragraph, Label } from 'components/Typography'
import styled from 'styled-components'

export const ContactWrapper = styled.div`
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

export const ContactName = styled(Paragraph)``

export const ContactEmail = styled(Label)``


export const ActionWrapper = styled.div`
    & > svg {
        color: ${({ theme }) => theme.colors.general.primaryActive};
        font-size: 1.5rem;
    }
    cursor: pointer;
`
