import Image from 'next/image'
import Button from './ui/button'
import Title from './ui/title'
import OrangeRocket from '@/public/images/Rocket.svg'

export default function Contactanos() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className='flex-col justify-start items-center gap-4 flex text-center'>
                        <Title>¿Listo para llevar tu negocio <br />al siguiente nivel?</Title>
                        <div className="text-[32px]">Escríbenos para cotizar tu proyecto</div>
                    </div>
                </div>
                <div className="justify-center items-center gap-24 inline-flex">
                    <img className="w-[234px] h-[300px]" src={OrangeRocket} />
                    <form>
                        <div className="w-[760px] flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-[87px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">Nombre completo*</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Nombre" required className="self-stretch px-4 py-[18px] bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:outline-none" />
                            </div>
                            <div className="self-stretch h-[87px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">Correo*</label>
                                <input type="email" id="correo" name="correo" placeholder="ace@gmail.com" required className="self-stretch px-4 py-[18px] bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:outline-none" />
                            </div>
                            <div className="self-stretch h-[89px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">WhatsApp</label>
                                <input type="text" id="numero" name="numero" placeholder="444 123 4444" required className="self-stretch px-4 py-[18px] bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:outline-none" />
                            </div>
                            <div className="self-stretch h-[187px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">Cuéntanos un poco más de tu idea</label>
                                <input type="text" id="numero" name="numero" placeholder="Escribe aquí..." required className="self-stretch h-40 px-4 py-[18px] bg-slate-700 rounded-xl justify-start items-start gap-2.5 inline-flex text-slate-50 text-xl focus:outline-none" />
                            </div>
                            <div className="px-8 py-4 bg-gradient-to-l from-violet-600 to-cyan-600 rounded-[52px] justify-center items-center inline-flex">
                                <div className="text-slate-50 text-2xl font-bold">Contáctanos</div>
                            </div>
                            <Button classes='text-lg'>Contáctanos</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
