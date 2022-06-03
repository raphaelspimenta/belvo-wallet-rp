import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, es } from './languages'

const i18n = createInstance({
    resources: {
        en,
        es,
    },
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false,
    },
})

i18n.use(initReactI18next).init()

export default i18n
