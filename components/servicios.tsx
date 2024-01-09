'use client'

import Image from 'next/image'
import SectionTitle from './ui/section-title'
import Browser from '@/public/images/Browser.svg'
import Rocket from '@/public/images/Rocket.svg'
import Mobile from '@/public/images/Mobile.svg'
import getDictionary from '@/app/dictionaries'

export default function Servicios() {

  const dict = getDictionary();

  return (
    <section id="servicios">
      <div className="relative">
        <div className="absolute -z-10 opacity-20 bg-radial-gradient-blue
          left-[-30vw] top-72 w-[80vw] h-[80vw]
          sm:left-[-20vw] sm:w-[60vw] sm:h-[60vw]
          lg:w-[32rem] lg:h-[32rem] lg:left-[24rem] lg:top-8
        "></div>
      </div>
      <div className="max-w-6xl mx-auto sm:px-6">
        <div className="py-12 md:py-20">

          <SectionTitle subtitle={dict.servicios.subtitle} title={dict.servicios.title} />

          <div className="max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none pt-11">

            <div className="flex flex-col h-full p-6 grow shrink basis-0 self-stretch bg-white bg-opacity-7 rounded-2xl border-2 border-blue-600 justify-start items-center gap-6" data-aos="fade-up">
              <div>
                <Image className="w-full h-11" src={Browser} width={48} height={48} alt="Web Browser" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-center text-2xl font-medium">{dict.servicios.web.title}</div>
                <div className="text-justify text-lg text-gray-400">{dict.servicios.web.description}</div>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 grow shrink basis-0 self-stretch bg-white bg-opacity-7 rounded-2xl border-2 border-blue-600 justify-start items-center gap-6" data-aos="fade-up">
              <div>
                <Image className="w-full h-11" src={Rocket} width={48} height={48} alt="Landing Page" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-center text-2xl font-medium">{dict.servicios.landing.title}</div>
                <div className="text-justify text-lg text-gray-400">{dict.servicios.landing.description}</div>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 grow shrink basis-0 self-stretch bg-white bg-opacity-7 rounded-2xl border-2 border-blue-600 justify-start items-center gap-6" data-aos="fade-up">
              <div>
                <Image className="w-full h-11" src={Mobile} width={48} height={48} alt="Mobile App" />
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-center text-2xl font-medium">{dict.servicios.mobile.title}</div>
                <div className="text-justify text-lg text-gray-400">{dict.servicios.mobile.description}</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
