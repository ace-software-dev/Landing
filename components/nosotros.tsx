'use client'

import SectionTitle from "./ui/section-title"
import Title from "./ui/title"
import { Player } from "@lottiefiles/react-lottie-player"

export default function Nosotros() {
  return (
    <section className="flex justify-center">

      {/* Illustration behind hero content */}
      <div className="relative">
        <div className="absolute -z-10 lg:block pointer-events-none opacity-30 bg-radial-gradient-blue
          -top-24 w-[60vw] h-[60vw] left-16
          xs:left-20
          sm:left-32
          md:left-72 md:right-16 md:w-[50vw] md:h-[50vw] md:place-self-start
          lg:left-[32rem] lg:-top-32
        "></div>
        <div className="absolute -z-10 opacity-40 bg-radial-gradient-purple
          -left-32 top-80 w-[75vw] h-[75vw]
          xs:top-[24rem]
          sm:w-[60vw] sm:h-[60vw]
          md:top-[20rem] md:w-[50vw] md:h-[50vw] md:place-self-start
          lg:top-[32rem] lg:-left-[12rem] lg:opacity-30 lg:w-[30vw] lg:h-[30vw]
        "></div>
        <div className="absolute -z-10 opacity-30 bg-radial-gradient-blue
          left-[38vw] top-[52rem] w-[75vw] h-[75vw]
          xs:top-[60rem] xs:left-[30rem] xs:w-[30rem] xs:h-[30rem]
          sm:w-[60vw] sm:h-[60vw]
          md:top-[35rem] md:left-[35rem] md:w-[50vw] md:h-[50vw] md:place-self-start
          lg:hidden
        "></div>
      </div>


      <div className="flex flex-col max-w-6xl py-12 md:py-20 gap-11 w-[100vw]">
        <div className="text-center">
          <SectionTitle subtitle={"Nuestro valor agregado"} title={"¿Por qué nosotros?"}></SectionTitle>
          <div className=" flex justify-center">
            <p className="text-center text-[1.34rem] lg:text-2xl md:w-[70%]">Tendrás paz mental mientras nosotros trabajamos, manteniéndote en control con actualizaciones constantes y total transparencia</p>
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
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">Experiencia de Usuario</Title>
                <p className="text-xl">
                  Diseñamos con el usuario en mente, asegurando que tu software sea intuitivo y agradable
                </p>
              </div>


              <div className="flex items-start flex-col" data-aos="fade-right">
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">Calidad</Title>
                <p className="text-xl">
                  Compromiso con los más altos estándares de calidad, ofrecemos excelencia
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
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">Soluciones personalizadas</Title>
                <p className="text-xl">
                  Software a la medida que se adapta a las necesidades específicas de tu negocio.
                </p>
              </div>


              <div className="flex items-start flex-col" data-aos="fade-right">
                <Title classes="text-start" size="text-[1.84rem] lg:text-4xl">Desarrollo incremental</Title>
                <p className="text-xl">
                  Entregas continuas que te permiten aprovechar rápidamente las ventajas de tu nuevo software
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
