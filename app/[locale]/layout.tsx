'use client'

import '../css/style.css';
import Header from '@/components/ui/header';
import localFont from '@next/font/local';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/ui/footer';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';
import Hero from '@/components/hero';


const filson_pro = localFont({
  src: [
    {
      path: '../../public/fonts/FilsonProLight.otf',
      weight: '200'
    },
    {
      path: '../../public/fonts/FilsonProBook.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/FilsonProRegular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/FilsonProMedium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/FilsonProBold.otf',
      weight: '600'
    },
    {
      path: '../../public/fonts/FilsonProHeavy.otf',
      weight: '700'
    },
  ],
  variable: '--font-filson-pro'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useCurrentLocale(i18nConfig);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  return (
    <html lang={locale} className="text-[12px] md:text-sm lg:text-base">
      <body className={`${filson_pro.variable} font-filson-pro antialiased bg-blue-10 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <div className="grow mt-[70px]" >
            <Hero />
          </div>
          <main>

            {children}

          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
