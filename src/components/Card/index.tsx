import styled from 'styled-components'

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.background.medium};
    box-shadow: 0px 19px 25px ${({ theme }) => theme.colors.background.soft};
    border-radius: 24px;
`
