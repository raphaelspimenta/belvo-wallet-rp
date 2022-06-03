import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme as lightTheme } from 'core/constants/themeLight'
import { theme as darkTheme } from 'core/constants/themeDark'

export const ThemeContext = createContext<{ currentTheme: string, setCurrentTheme?: Dispatch<SetStateAction<string>> }>({
    currentTheme: 'dark',
})

export const ThemeContextProvider = ({ children }: any) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') return 'dark'
        return 'light'
    })

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

    function changeTheme() {
        if (currentTheme === 'dark') {
            setCurrentTheme?.('light')
            localStorage.setItem('theme', 'light')
        }
        if (currentTheme === 'light') {
            setCurrentTheme?.('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    return {
        changeTheme,
        currentTheme,
    }
}
