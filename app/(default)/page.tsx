export const metadata = {
  title: 'ACE Software',
  description: 'Desarrollo de Software / Software Development',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Servicios from '@/components/servicios'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Servicios />
      <Newsletter />
    </>
  )
}
