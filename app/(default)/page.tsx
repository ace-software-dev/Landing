export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import WhatsappButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <WhatsappButton phoneNumber='+524423792074' message='Hola ACE! Estoy interesado en sus servicios de desarrollo de Software.'/>
    </>
  )
}
