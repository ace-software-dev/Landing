export const metadata = {
  title: 'ACE Software',
  description: 'Desarrollo de Software / Software Development',
}

import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import WhatsappButton from '@/components/whatsapp-button';
import Servicios from '@/components/servicios';
import PreviousClients from '@/components/previous-clients';
import Nosotros from '@/components/nosotros';

export default function Home() {

  return (
    <div className='mx-auto' id='body'>
      <Nosotros />
      <Zigzag />
      <Servicios />
      <PreviousClients />
      <Newsletter />
      <WhatsappButton phoneNumber='+524423792074' message='Hola ACE! Estoy interesado en sus servicios de desarrollo de Software.'/>
    </div>
  );
}
