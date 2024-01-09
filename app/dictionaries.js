import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '@/i18nConfig'
import en from '@/dictionaries/en.json';
import es from '@/dictionaries/es.json';

const locales = {
  en,
  es,
};

export default function getDictionary(locale) {
  return locales[locale] || es;
}