import styled from 'styled-components'
import { PrimaryFont, SecondaryFont } from './FontFaces'

export const Title = styled.h2`
    ${PrimaryFont}
    font-size: ${({ theme }) => theme.sizes.xLarge};
    color: ${({ theme }) => theme.colors.font.primary};
`

export const Subtitle = styled.h4`
    ${PrimaryFont}
    font-size: ${({ theme }) => theme.sizes.large};
    color: ${({ theme }) => theme.colors.font.primary};
`

export const Paragraph = styled.p`
    ${SecondaryFont}
    font-size: ${({ theme }) => theme.sizes.base};
    color: ${({ theme }) => theme.colors.font.primary};
`

export const Label = styled.label`
    ${SecondaryFont}
    font-size: ${({ theme }) => theme.sizes.xSmall};
    color: ${({ theme }) => theme.colors.font.primary};
`

export const Link = styled.a`
    ${SecondaryFont}
    font-size: ${({ theme }) => theme.sizes.base};
    color: ${({ theme }) => theme.colors.font.primary};
`
