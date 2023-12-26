export const metadata = {
  title: 'ACE Software',
  description: 'Desarrollo de Software / Software Development',
}

import Hero from '@/components/hero';
import Features from '@/components/features';
import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import WhatsappButton from '@/components/whatsapp-button';
import Servicios from '@/components/servicios';
import PreviousClients from '@/components/previous-clients'

export default function Home() {

  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Servicios />
      <PreviousClients />
      <Newsletter />
      <WhatsappButton phoneNumber='+524423792074' message='Hola ACE! Estoy interesado en sus servicios de desarrollo de Software.'/>
    </>
  );
}
