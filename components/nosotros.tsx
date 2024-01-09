'use client'

import getDictionary from "@/app/dictionaries"
import SectionTitle from "./ui/section-title"
import Title from "./ui/title"
import { Player } from "@lottiefiles/react-lottie-player"


export default function Nosotros() {

  const dict = getDictionary();
  
  return (
    <section id="nosotros" className="flex justify-center">
      <div className="flex flex-col max-w-6xl py-12 md:py-20 gap-11 w-[100vw]">
        <div className="text-center">
          <SectionTitle subtitle={dict.nosotros.subtitle} title={dict.nosotros.title}></SectionTitle>
          <div className=" flex justify-center">
            <p className="text-center text-[1.34rem] lg:text-2xl md:w-[70%]">{dict.nosotros.description}</p>
          </div>
        </div>


        <div className="flex flex-col gap-6 ">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 justify-between gap-4 md:gap-24">
            <div className=" px-14 md:px-0">
              <Player
                hover={true}
                src="/animations/UI_UX.json"
                className='h-full'
              ></Player>

            </div>

            <div className=" flex flex-col gap-12 justify-center">
              <div className="flex items-start flex-col" data-aos="fade-right">
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">{dict.nosotros.ux.title}</Title>
                <p className="text-xl">
                  {dict.nosotros.ux.description}
                </p>
              </div>


              <div className="flex items-start flex-col" data-aos="fade-right">
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">{dict.nosotros.quality.title}</Title>
                <p className="text-xl">
                  {dict.nosotros.quality.description}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4 md:gap-24 xl:gap-0   ">
            <div className=" flex md:order-last ">
              <Player
                hover={true}
                src="/animations/Girl_Working.json"
                className='h-full'
              ></Player>
            </div>

            <div className="flex flex-col gap-12">
              <div className="flex items-start flex-col" data-aos="fade-right">
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">{dict.nosotros.tailored.title}</Title>
                <p className="text-xl">
                  {dict.nosotros.tailored.description}
                </p>
              </div>


              <div className="flex items-start flex-col" data-aos="fade-right">
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">{dict.nosotros.agile.title}</Title>
                <p className="text-xl">
                  {dict.nosotros.agile.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
