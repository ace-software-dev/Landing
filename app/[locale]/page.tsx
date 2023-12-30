export const metadata = {
  title: 'ACE Software',
  description: 'Desarrollo de Software / Software Development',
}

import WhatsappButton from '@/components/whatsapp-button';
import Servicios from '@/components/servicios';
import PreviousClients from '@/components/previous-clients';
import Nosotros from '@/components/nosotros';
import Contactanos from '@/components/contactanos';


export default function Home() {

  return (
    <div className='mx-auto px-11 md:px-16 xl:px-0' id='body'>
      <Nosotros />
      <Servicios />
      <PreviousClients />
      <Contactanos />
      <WhatsappButton phoneNumber='+524423792074' message='Hola ACE! Estoy interesado en sus servicios de desarrollo de Software.'/>
    </div>
  );
}
