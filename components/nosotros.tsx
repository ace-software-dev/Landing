'use client'

import Spline from "@splinetool/react-spline"
import SectionTitle from "./ui/section-title"
import Title from "./ui/title"

export default function Nosotros() {
    return (
    <section>
        <div className="flex flex-col max-w-6xl px-16 xl:px-0 py-14 gap-11 w-[100vw]">
            <div className="text-center">
                <SectionTitle subtitle={"Nuestro valor agregado"} title={"¿Por qué nosotros?"}></SectionTitle>
                <div className=" flex justify-center">
                    <p className="text-center text-2xl md:w-[70%]">Tendrás paz mental mientras nosotros trabajamos, manteniéndote en control con actualizaciones constantes y total transparencia</p>
                </div>
            </div>


            <div className="flex flex-col gap-6 ">
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 justify-between gap-4 md:gap-24">
                    <div className=" px-14 md:px-0">
                        <img src="\images\ui-ux.png" alt="ui-ux" />
                    </div>

                    <div className=" flex flex-col gap-12 justify-center">
                        <div className="flex items-start flex-col" data-aos="fade-right">
                            <Title size="text-4xl">Experiencia de Usuario</Title>
                            <p className="text-xl">
                                Diseñamos con el usuario en mente, asegurando que tu software sea intuitivo y agradable
                            </p>
                        </div>
                        

                        <div className="flex items-start flex-col" data-aos="fade-right">
                            <Title size="text-4xl">Calidad</Title>
                            <p className="text-xl">
                                Compromiso con los más altos estándares de calidad, ofrecemos excelencia
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4 md:gap-24 xl:gap-0   ">
                    <div className=" flex md:order-last ">
                        <img  className="object-scale-down object-center" src="\images\chica-ace.png" alt="chica-ace" />
                    </div>

                    <div className="flex flex-col gap-12">
                        <div className="flex items-start flex-col" data-aos="fade-right">
                                <Title size="text-4xl">Soluciones personalizadas</Title>
                                <p className="text-xl">
                                Software a la medida que se adapta a las necesidades específicas de tu negocio.
                                </p>
                        </div>


                        <div className="flex items-start flex-col" data-aos="fade-right">
                            <Title size="text-4xl">Desarrollo incremental</Title>
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
