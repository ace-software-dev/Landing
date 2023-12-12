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
    <div className='flex flex-col w-4/5 justify-center'>
      <Nosotros />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </div>

  )
}
