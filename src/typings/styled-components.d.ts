import { theme } from 'core/constants/themeLight'

export type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme { }
}
