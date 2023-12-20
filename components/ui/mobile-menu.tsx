'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import getDictionary from '@/app/dictionaries'
import i18nConfig from '@/i18nConfig'
import { useCurrentLocale } from 'next-i18n-router/client'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)
  const dict = getDictionary();
  const locale = useCurrentLocale(i18nConfig);

  const setLocaleCookie = (locale: 'en' | 'es') => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/`;
  }

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-slate-900 px-4 py-3 font-medium rounded bg-opacity-95">
          <li>
            <Link href="/">
              <div className="flex py-2 justify-center w-full hover:underline text-2xl">{dict.topbar.home}</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="flex py-2 justify-center w-full hover:underline text-2xl">{dict.topbar.us}</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="flex py-2 justify-center w-full hover:underline text-2xl">{dict.topbar.services}</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div className="flex py-2 justify-center w-full hover:underline text-2xl">{dict.topbar.clients}</div>
            </Link>
          </li>
          <li className="flex justify-center">
            <div className="flex py-2 justify-between w-24 text-2xl">
              <Link
                href="/en"
                className={`${locale == 'en'? 'font-bold' : ''} hover:underline`}
                onClick={() => setLocaleCookie('en')}
              >
                {dict.global.en}
              </Link>
              <div>/</div>
              <Link
                href="/"
                className={`${locale == 'es'? 'font-bold' : ''} hover:underline`}
                onClick={() => setLocaleCookie('es')}
              >
                {dict.global.es}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
