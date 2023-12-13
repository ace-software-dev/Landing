export const metadata = {
  title: 'ACE Software',
  description: 'Desarrollo de Software / Software Development',
}

import Nosotros from '@/components/nosotros'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <div className='mx-auto' id='body'>
      <Nosotros />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </div>

  )
}
