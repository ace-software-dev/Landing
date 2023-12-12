import Image from 'next/image'
import SectionTitle from './ui/section-title'
import Browser from '@/public/images/Browser.svg'
import Rocket from '@/public/images/Rocket.svg'
import Mobile from '@/public/images/Mobile.svg'

export default function Servicios() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <SectionTitle subtitle='Servicios' title='¿Qué hacemos?' />

          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-11">

            <div className="flex flex-col h-full p-6 grow shrink basis-0 self-stretch bg-white bg-opacity-7 rounded-2xl border-2 border-blue-600 justify-start items-center gap-6" data-aos="fade-up">
              <div>
                <Image className="w-full h-11" src={Browser} width={48} height={48} alt="Web Browser" />
              </div>
              <div className="text-center text-2xl font-medium">Aplicaciones Web </div>
              <div className="text-justify text-lg text-gray-400">Creadas para adaptarse a los flujos de trabajo de tu empresa e integrar sin esfuerzo tus operaciones existentes.</div>
            </div>

            <div className="flex flex-col h-full p-6 grow shrink basis-0 self-stretch bg-white bg-opacity-7 rounded-2xl border-2 border-purple-600 justify-start items-center gap-6" data-aos="fade-up">
              <div>
                <Image className="w-full h-11" src={Rocket} width={48} height={48} alt="Landing Page" />
              </div>
              <div className="text-center text-2xl font-medium">Landing Page </div>
              <div className="text-justify text-lg text-gray-400">Diseñamos y desarrollamos la página que hará crecer tu negocio y le dará confianza a tus clientes desde un inicio.</div>
            </div>

            <div className="flex flex-col h-full p-6 grow shrink basis-0 self-stretch bg-white bg-opacity-7 rounded-2xl border-2 border-blue-400 justify-start items-center gap-6" data-aos="fade-up">
              <div>
                <Image className="w-full h-11" src={Mobile} width={48} height={48} alt="Mobile App" />
              </div>
              <div className="text-center text-2xl font-medium">Aplicaciones Móviles </div>
              <div className="text-justify text-lg text-gray-400">Sabemos que tener todo en la palma de la mano es esencial. Colaboración y comunicación donde quiera que estés.</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
