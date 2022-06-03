import styled from 'styled-components'
import { v } from 'core/constants/layout'

export const SLayout = styled.div`
    display: flex;
`

export const SMain = styled.main`
    width: 100%;
    padding: calc(${v.smSpacing} * 5) calc(${v.smSpacing} * 10);

    h1 {
        font-size: 14px;
    }
`
