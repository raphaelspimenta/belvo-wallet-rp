import { useState } from 'react'
import { AiOutlineHome, AiOutlineLeft } from 'react-icons/ai'
import { MdLogout } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'

import { Logo } from 'components/Logo'
import Select from 'components/FormControl/Select'
import { useThemeContext } from 'store/themeContext'
import { routes } from 'routes/constants'
import { languagesOptions } from 'core/i18next/languages'

import {
    Divider,
    Link,
    LinkContainer,
    LinkIcon,
    LinkLabel,
    LinkNotification,
    Sidebar as StyledSidebar,
    SidebarButton,
    Theme,
    ThemeLabel,
    ThemeToggler,
    ToggleThumb,
    LogoWrapper,
} from './styles'

const Sidebar = () => {
    const { changeTheme, currentTheme } = useThemeContext()
    const { i18n, t } = useTranslation()
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const { pathname } = useLocation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <StyledSidebar isOpen={sidebarOpen}>
            <SidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                <AiOutlineLeft />
            </SidebarButton>
            <LogoWrapper>
                <Logo sizes={sidebarOpen ? 'medium' : 'small'} />
            </LogoWrapper>
            <Divider />
            {linksArray(t).map(({ icon, label, notification, to }) => (
                <LinkContainer key={label} isActive={pathname === to}>
                    <Link to={to} isOpen={sidebarOpen}>
                        <LinkIcon>{icon}</LinkIcon>
                        {sidebarOpen && (
                            <>
                                <LinkLabel>{label}</LinkLabel>
                                {!!notification && (
                                    <LinkNotification>{notification}</LinkNotification>
                                )}
                            </>
                        )}
                    </Link>
                </LinkContainer>
            ))}
            <Divider />
            <Select onChange={changeLanguage} options={languagesOptions} value={i18n.language} />
            <LinkContainer key='logout'>
                <Link to={routes.SIGN_OUT} isOpen={sidebarOpen}>
                    <LinkIcon><MdLogout /></LinkIcon>
                    {sidebarOpen && <LinkLabel>{t('nav.logout')}</LinkLabel>}
                </Link>
            </LinkContainer>
            <Divider />
            <Theme>
                {sidebarOpen && <ThemeLabel>{t('nav.darkMode')}</ThemeLabel>}
                <ThemeToggler
                    isActive={currentTheme === 'dark'}
                    onClick={changeTheme}
                >
                    <ToggleThumb />
                </ThemeToggler>
            </Theme>
        </StyledSidebar>
    )
}

const linksArray = (t: TFunction) => [{
    label: t('nav.wallet'),
    icon: <AiOutlineHome />,
    to: routes.HOME,
    notification: 0,
}, {
    label: t('nav.contacts'),
    icon: <BsPeople />,
    to: routes.CONTACTS,
    notification: 0,
}]

export default Sidebar
