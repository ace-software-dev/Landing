'use client'

import Image from 'next/image'
import Button from './ui/button'
import Title from './ui/title'
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contactanos() {
  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const hcaptchaToken = formData.get("h-captcha-response");
    if(hcaptchaToken){
      formData.append("access_key", process.env.NEXT_PUBLIC_H_CAPTCHA as string);
      formData.delete('g-recaptcha-response');

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
    }
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-20">
        <div className="">
          <div className='flex-col justify-start items-center gap-4 flex text-center'>
            <Title>¿Listo para llevar tu negocio <br /> al siguiente nivel? </Title>
            <div className="text-[1.34rem] lg:text-3xl">Escríbenos para cotizar tu proyecto</div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="items-center gap-16 flex">
            <img className=" hidden md:block object-cover w-1/4" src='\images\CoolRocket.svg' alt='Rocket' loading="lazy"/>
            <form onSubmit={handleSubmit} className="w-full md:w-3/4">
              <input type="hidden" name="from_name" value="Landing: Nuevo Cliente"/>
              <input type="hidden" name="subject" value="Alguien quiere cotactarse a través de ACE Landing." />
              <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
              <div className="flex-col justify-start items-center gap-8 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">Nombre completo*</label>
                  <input type="text" id="nombre" name="nombre" placeholder="Nombre" required className="self-stretch px-4 py-4 bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">Correo*</label>
                  <input type="email" id="correo" name="correo" placeholder="acesoftwaremx@gmail.com" required className="self-stretch px-4 py-4 bg-slate-700 rounded-xl gap-2.5 text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">WhatsApp</label>
                  <div className="flex w-full">
                    <div className="relative inline-block">
                      <select id="country-code" name="country-code" className="form-select px-4 py-4 bg-slate-700 rounded-l-xl text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-24">
                        <option value="52" defaultValue={1}>+52</option>
                        <option value="1">+1</option>
                      </select>
                    </div>
                    <input type="number" id="numero" name="numero" placeholder="123 456 7890" className="w-full self-stretch px-4 py-4 bg-slate-700 rounded-r-xl gap-2.5 text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                  </div>
                </div>

                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">Cuéntanos un poco más de tu idea</label>
                  <textarea id="comentarios" name="comentarios" placeholder="Escribe aquí..." className="self-stretch h-40 px-4 py-4 bg-slate-700 rounded-xl justify-top items-start gap-2.5 inline-flex text-slate-50 text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600" />
                </div>

                <HCaptcha
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  theme="dark"
                /> 
                <span className='flex justify-center'>
                  <Button type='submit' classes='px-8 py-4 text-slate-50 text-lg font-bold'>Contáctanos</Button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
