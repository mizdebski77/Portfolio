import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import pl from '../common/translation/polish.json';
import en from '../common/translation/english.json';
import ger from '../common/translation/german.json';

// Define the type for resources
const resources = {
    pl: { translation: pl },
    en: { translation: en },
    ger: { translation: ger },
} as const;

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });

export default i18n;
