'use client'

import Spline from "@splinetool/react-spline"
import SectionTitle from "./ui/section-title"
import Title from "./ui/title"

export default function Nosotros() {
    return (
    <section>
        <div className="flex flex-col">
            <SectionTitle subtitle={"Nuestro valor agregado"} title={"¿Por qué nosotros?"}></SectionTitle>
            <div className=" flex justify-center">
                <p className="text-center text-2xl w-[70%]">Tendrás paz mental mientras nosotros trabajamos, manteniéndote en control con actualizaciones constantes y total transparencia</p>
            </div>


            <div className="flex flex-col gap-2">
                <div className=" w-full flex justify-between">
                    <Spline className="w-[45%]" scene="https://prod.spline.design/ARneM6HjXa7agl3K/scene.splinecode" />

                    <div className="w-[45%] flex flex-col justify-around">
                        <div className="flex items-start flex-col">
                            <Title children={"Experiencia de Usuario"}></Title>
                            <p>
                                Diseñamos con el usuario en mente, asegurando que tu software sea intuitivo y agradable de usar.
                            </p>
                        </div>

                        <div className="flex items-start flex-col">
                            <Title children={"Calidad"}></Title>
                            <p>
                                Compromiso con los más altos estándares de calidad, ofrecemos excelencia
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" w-full flex justify-between flex-row-reverse">
                <Spline className="w-[49%]" scene="https://prod.spline.design/2xwln-zE7r5pDrBG/scene.splinecode" />

                    <div className="w-[49%] flex flex-col justify-around">
                        <div className="flex items-start flex-col">
                            <Title children={"Soluciones personalizadas"}></Title>
                            <p>
                            Software a la medida que se adapta a las necesidades específicas de tu negocio.
                            </p>
                        </div>

                        <div className="flex items-start flex-col">
                            <Title children={"Desarrollo incremental"}></Title>
                            <p>
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
