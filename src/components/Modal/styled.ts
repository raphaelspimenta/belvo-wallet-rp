import { AiOutlineClose } from 'react-icons/ai'
import styled, { createGlobalStyle } from 'styled-components'

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background.transparentStrong};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.general.white};
    padding: 30px;
    border-radius: 20px;
    max-width: 90%;
    max-height: 90%;
    box-shadow: 0 3px 15px -3px ${({ theme }) => theme.colors.background.medium};
    position: relative;
    width: 400px;
`

export const HeaderRow = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`

export const XButton = styled(AiOutlineClose)`
    cursor: pointer;
`

export const ScrollDisabler = createGlobalStyle`
    body {
        overflow-y: hidden;
    }
`
