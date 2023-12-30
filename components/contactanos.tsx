import Image from 'next/image'
import Button from './ui/button'
import Title from './ui/title'

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
                    <img className=" hidden md:block w-[234px] h-[300px]" src='\images\CoolRocket.svg' />
                    <form>
                        <div className="w-[760px] flex-col justify-start items-center gap-7 inline-flex">
                            <div className="self-stretch h-[87px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">Nombre completo*</label>
                                <input type="text" id="nombre" name="nombre" placeholder="Nombre" required className="self-stretch px-4 py-[18px] bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:outline-none" />
                            </div>
                            <div className="self-stretch h-[87px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">Correo*</label>
                                <input type="email" id="correo" name="correo" placeholder="ace@gmail.com" required className="self-stretch px-4 py-[18px] bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xlfocus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                            </div>
                            <div className="self-stretch h-[89px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">WhatsApp</label>
                                <div className="flex w-full">
                                    <div className="relative inline-block">
                                        <select  id="country-code" name="country-code" className="form-select px-4 py-[18px] bg-slate-700 rounded-l-xl text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-24">
                                            <option value="52" defaultValue={1}>+52</option>
                                            <option value="1">+1</option>
                                        </select>
                                    </div>
                                    <input type="text" id="numero" name="numero" placeholder="123 456 7890" required className="w-full self-stretch px-4 py-[18px] bg-slate-700 rounded-r-xl gap-2.5 text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                                </div>
                            </div>

                            <div className="self-stretch h-[187px] flex-col justify-start items-start gap-2 flex">
                                <label className="text-slate-50 text-base font-medium">Cuéntanos un poco más de tu idea</label>
                                <input type="text" id="numero" name="numero" placeholder="Escribe aquí..." required className="self-stretch h-40 px-4 py-[18px] bg-slate-700 rounded-xl justify-top items-start gap-2.5 inline-flex text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                            </div>
                            <Button classes='px-8 py-4  text-slate-50 text-lg font-bold'>Contáctanos</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
