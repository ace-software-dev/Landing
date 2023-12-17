import Button from './button'
import Link from 'next/link';
import getDictionary from '@/app/dictionaries';
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '@/i18nConfig'

export default function Header() {
  const locale = useCurrentLocale(i18nConfig);
  const dict = getDictionary();

  const setLocaleCookie = (locale: 'en' | 'es') => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
  }

  return (
    <header className="fixed w-full z-30 top-0">
      <div className="sticky top-0 w-full h-[70px] px-8 py-3 bg-blue-1001 bg-opacity-95 justify-between items-center inline-flex">
        <Link href="/">
          <div className="w-24 flex items-center">
            <img src = "/images/AceLogo.svg" alt="ACE Logo" className="mt-2 mb-2 mr-2 ml-2" />
          </div>
        </Link>
        <ul className="justify-center items-center gap-8 hidden md:flex space-x-2 mr-8 ml-8 text-lg font-normal">
          <li>
            <Link href="/">
              <div className=" hover:underline">{dict.topbar.home}</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:underline">{dict.topbar.us}</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:underline">{dict.topbar.services}</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="hover:underline">{dict.topbar.clients}</div>
            </Link>
          </li>
        </ul>

        <div className="justify-start items-center gap-6 flex">
          <div className="hidden lg:flex ml-2 text-base">
            <Link href="/en" locale="en" onClick={() => setLocaleCookie('en')}>
              <span className={locale == 'en'? 'font-bold' : ''}> {dict.global.en} </span>
            </Link>
            <span> &nbsp;/&nbsp;</span>
            <Link href="/" locale="es" onClick={() => setLocaleCookie('es')}>
            <span className={locale == 'es'? 'font-bold' : ''}> {dict.global.es} </span>
            </Link>
          </div>
          <Link href="">
            <Button classes='text-lg'>{dict.global.ctaButton}</Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white"></div>
    </header>
  )
}
