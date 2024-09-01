import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { registerLocale, setDefaultLocale } from 'react-datepicker'
import ptBrDateFns from 'date-fns/locale/pt-BR'
import spanish from 'date-fns/locale/es'
import * as en from './en.json'
import * as ptBr from './pt-br.json'
import * as es from './es.json'

// Translation react-datepicker

const enTranslation = { en: { translation: en.default } }
const ptBrTranslation = { 'pt-BR': { translation: ptBr.default } }
const esTranslation = { es: { translation: es.default } }
const languages = { ...enTranslation, ...ptBrTranslation, ...esTranslation }
/**
 * I18n configurations.
 */
i18n
  .use(initReactI18next)
  .init({
    resources: languages,
    lng: 'pt-br',
    fallbackLng: 'pt-br',
    interpolation: {
      escapeValue: false,
    },
  })

registerLocale('pt-br', ptBrDateFns)
registerLocale('es', spanish)
setDefaultLocale('pt-br')

export default i18n

export const t = i18n.t.bind(i18n)
