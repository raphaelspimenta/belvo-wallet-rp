import styled from 'styled-components'
import BelvoLogo from 'core/assets/logo.svg'
import { Label } from 'components/Typography'
import { getLabelPaddingBySize, getRemBySize, LogoProps } from '.'


export const ImageLogo = styled(BelvoLogo) <LogoProps>`
    width: ${({ sizes }) => getRemBySize(sizes).width};
    height: ${({ sizes }) => getRemBySize(sizes).height};
`

export const LabelLogo = styled(Label) <LogoProps>`
    padding-left: ${({ sizes }) => getLabelPaddingBySize(sizes)};
    font-style: italic;
`
