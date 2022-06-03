import {
    FloatingMenu,
} from 'react-floating-button-menu'
import styled from 'styled-components'

export const StyeldFloatingMenu = styled(FloatingMenu)`
    bottom: 4rem;
    right: 4rem;
    position: absolute;
    
    & > a,li,svg {
        background: ${({ theme }) => theme.colors.general.primaryActive};
    }
`
