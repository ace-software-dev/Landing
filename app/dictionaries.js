import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '@/i18nConfig'
import en from '@/dictionaries/en.json';
import es from '@/dictionaries/es.json';

const locales = {
  en,
  es,
};

// Function to get the value of a specific cookie
function getCookie(name) {
  // Split the cookies into an array
  let cookies = document.cookie.split('; ');

  // Iterate through the cookies to find the one with the specified name
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      // Return the value of the cookie
      return cookie[1];
    }
  }

  // If the cookie is not found, return null
  return 'es';
}

export default function getDictionary() {
  let locale = getCookie('NEXT_LOCALE');
  console.log('locale', locale)
  return locales[locale] || es;
}