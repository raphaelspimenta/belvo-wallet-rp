import { FontStyles } from 'components/Typography/FontFaces'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.colors.general.white};
  }

  body, html, #root {
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.primary.name};
  }

  ${FontStyles}
`
