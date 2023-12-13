import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import localFont from '@next/font/local'
import Hero from '@/components/hero'

const filson_pro = localFont({
  src: [
    {
      path: '../public/fonts/FilsonProLight.otf',
      weight: '200'
    },
    {
      path: '../public/fonts/FilsonProBook.otf',
      weight: '300'
    },
    {
      path: '../public/fonts/FilsonProRegular.otf',
      weight: '400'
    },
    {
      path: '../public/fonts/FilsonProMedium.otf',
      weight: '500'
    },
    {
      path: '../public/fonts/FilsonProBold.otf',
      weight: '600'
    },
    {
      path: '../public/fonts/FilsonProHeavy.otf',
      weight: '700'
    },
  ],
  variable: '--font-filson-pro'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'ACE Software',
  description: 'Desarrollo de Software / Software Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${filson_pro.variable} ${inter.variable} ${architects_daughter.variable} font-filson-pro antialiased bg-blue-1000 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <Hero />
          {children}
        </div>
      </body>
    </html>
  )
}
