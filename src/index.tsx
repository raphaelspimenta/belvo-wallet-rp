import { FC } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from 'routes'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { I18nextProvider } from 'react-i18next'

import { theme as light } from 'core/constants/themeLight'
import { theme as dark } from 'core/constants/themeDark'
import { GlobalStyle } from 'core/constants/global.style'
import { ThemeContextProvider, useThemeContext } from 'store/themeContext'
import i18n from 'core/i18next/config'
import store from 'store'

import 'react-toastify/dist/ReactToastify.css'

const AppWithTheme: FC = ({ children }) => (
  <ThemeContextProvider>
    {children}
  </ThemeContextProvider>
)

const AppComponent = () => {
  const { currentTheme } = useThemeContext()
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
        <ToastContainer />
      </I18nextProvider>
    </ThemeProvider>
  )
}

export const App = () => (
  <AppWithTheme>
    <AppComponent />
  </AppWithTheme>
)

render(<App />, document.getElementById('root'))
