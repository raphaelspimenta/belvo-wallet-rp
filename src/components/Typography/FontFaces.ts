import { css } from 'styled-components'

export const FontStyles = css`
    @font-face {
        font-family: ${({ theme }) => theme.fonts.primary.name};
        src: ${({ theme }) => css`url(${theme.fonts.primary.url.regular}) format('${theme.fonts.type}')`};
    }

    @font-face {
        font-family: ${({ theme }) => theme.fonts.primary.name};
        src: ${({ theme }) => css`url(${theme.fonts.primary.url.bold}) format('${theme.fonts.type}')`};
        font-weight: bold;
    }

    @font-face {
        font-family: ${({ theme }) => theme.fonts.secondary.name};
        src: ${({ theme }) => css`url(${theme.fonts.secondary.url.regular}) format('${theme.fonts.type}')`};
    }

    @font-face {
        font-family: ${({ theme }) => theme.fonts.secondary.name};
        src: ${({ theme }) => css`url(${theme.fonts.secondary.url.bold}) format('${theme.fonts.type}')`};
        font-weight: bold;
    }
`

export const PrimaryFont = css`
    font-family: ${({ theme }) => theme.fonts.primary.name};
`

export const SecondaryFont = css`
font-family: ${({ theme }) => theme.fonts.secondary.name};
`
