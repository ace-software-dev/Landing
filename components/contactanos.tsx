import Image from 'next/image'
import Button from './ui/button'
import Title from './ui/title'

export default function Contactanos() {
    return (
        <section>
            <div className="relative">
                <div className="flex gap-4">
                    <div className="absolute -z-10 opacity-30 bg-radial-gradient-blue
                        -left-12 top-30 w-[70vw] h-[50vw]
                        xs:left-[3px] xs:-top-5 xs:w-[25rem] xs:h-[18rem]
                        sm:left-[5rem] sm:-top-5 sm:w-[30rem] sm:h-[18rem]
                        md:left-2 md:top-[20rem] md:w-[55vw] md:h-[50vw] md:place-self-start
                    ">
                    </div>
                    <div className="absolute -z-10 opacity-30 bg-radial-gradient-purple
                        -right-12 top-30 w-[70vw] h-[50vw]
                        xs:right-[3px] xs:-top-5 xs:w-[25rem] xs:h-[18rem]
                        sm:right-[5rem] sm:-top-5 sm:w-[30rem] sm:h-[18rem]
                        md:right-2 md:top-[20rem] md:w-[55vw] md:h-[50vw] md:place-self-start
                    ">
                    </div>
                    <div className="absolute -z-10 opacity-30 bg-radial-gradient-purple
                        -right-32 top-[30rem] w-[90vw] h-[90vw]
                        xs:top-[24rem]
                        sm:top-[20rem] sm:w-[70vw] sm:h-[70vw]
                        md:hidden
                    ">
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-20">
                <div className="">
                    <div className='flex-col justify-start items-center gap-4 flex text-center'>
                        <Title>¿Listo para llevar tu negocio <br/> al siguiente nivel? </Title>
                        <div className="text-[1.34rem] lg:text-3xl">Escríbenos para cotizar tu proyecto</div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="items-center gap-16 flex">
                        <img className=" hidden md:block object-cover w-1/4" src='\images\CoolRocket.svg' />
                        <form className="w-full md:w-3/4">
                            <div className="flex-col justify-start items-center gap-8 flex">
                                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                    <label className="text-slate-50 text-base font-medium">Nombre completo*</label>
                                    <input type="text" id="nombre" name="nombre" placeholder="Nombre" required className="self-stretch px-4 py-4 bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                                </div>
                                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                    <label className="text-slate-50 text-base font-medium">Correo*</label>
                                    <input type="email" id="correo" name="correo" placeholder="ace@gmail.com" required className="self-stretch px-4 py-4 bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                                </div>
                                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                    <label className="text-slate-50 text-base font-medium">WhatsApp</label>
                                    <div className="flex w-full">
                                        <div className="relative inline-block">
                                            <select  id="country-code" name="country-code" className="form-select px-4 py-4 bg-slate-700 rounded-l-xl text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-24">
                                                <option value="52" defaultValue={1}>+52</option>
                                                <option value="1">+1</option>
                                            </select>
                                        </div>
                                        <input type="number" id="numero" name="numero" placeholder="123 456 7890" required className="w-full self-stretch px-4 py-4 bg-slate-700 rounded-r-xl gap-2.5 text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                                    </div>
                                </div>

                                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                    <label className="text-slate-50 text-base font-medium">Cuéntanos un poco más de tu idea</label>
                                    <textarea id="numero" name="numero" placeholder="Escribe aquí..." required className="self-stretch h-40 px-4 py-4 bg-slate-700 rounded-xl justify-top items-start gap-2.5 inline-flex text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <span className='flex justify-center'>
                        <Button classes='px-8 py-4 text-slate-50 text-lg font-bold'>Contáctanos</Button>
                    </span>
                </div>
            </div>
        </section>
    )
}
