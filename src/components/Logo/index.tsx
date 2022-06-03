import React, { FC } from 'react'
import { ImageLogo, LabelLogo } from './styled'

export interface LogoProps {
    sizes?: 'small' | 'medium' | 'large',
}

export const getRemBySize = (sizes: LogoProps['sizes'] = 'small') => ({
    small: { width: '5em', height: '2rem' },
    medium: { width: '10rem', height: '3rem' },
    large: { width: '15rem', height: '4rem' },
})[sizes]

export const getLabelPaddingBySize = (sizes: LogoProps['sizes'] = 'small') => ({
    small: '2rem',
    medium: '6rem',
    large: '10rem',
})[sizes]

export const Logo: FC<LogoProps> = ({ sizes = 'small' }) => (
    <>
        <ImageLogo sizes={sizes} />
        <LabelLogo sizes={sizes}>wallet</LabelLogo>
    </>
)
