export const metadata = {
  title: 'ACE Software',
  description: 'Desarrollo de Software / Software Development',
}

import Nosotros from '@/components/nosotros'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Servicios from '@/components/servicios'

export default function Home() {
  return (
    <div className='mx-auto' id='body'>
      <Nosotros />
      <Zigzag />
      <Servicios />
      <Newsletter />
    </div>

  )
}
