export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import PreviousClients from '@/components/previous-clients'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <PreviousClients />
      <Testimonials />
      <Newsletter />
    </>
  )
}
