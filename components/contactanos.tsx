'use client'
import getDictionary from '@/app/dictionaries'

import Button from './ui/button';
import Title from './ui/title';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import React, { useState } from 'react';;

export default function Contactanos() {
    const dict = getDictionary();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    numero: '',
    comentarios: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('');
  const [token, setToken] = useState(null);

  const captchaRef = React.useRef<HCaptcha>(null);

  async function handleSubmit(event) {
    try{
      event.preventDefault();
      const formData = new FormData(event.target);
      if(token){
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
          setFormData({ nombre: '', correo: '', numero: '', comentarios: '' });
          setSubmissionStatus(dict.contactform.submitSuccess);
          await captchaRef.current.resetCaptcha();
        } else {
          setFormData({ nombre: '', correo: '', numero: '', comentarios: '' });
          setSubmissionStatus(dict.contactform.submitError);
          await captchaRef.current.resetCaptcha();
        }
      }
    } catch (e) {
      setFormData({ nombre: '', correo: '', numero: '', comentarios: '' });
      setSubmissionStatus(dict.contactform.submitError);
      await captchaRef.current.resetCaptcha();
    }
  }

  const onExpire = () => {
    setToken(null);
  }

  return (
    <section id="contactanos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col gap-20">
        <div className="">
          <div className='flex-col justify-start items-center gap-4 flex text-center'>
            <Title>{dict.contactform.title} <br/> {dict.contactform.title2} </Title>
            <div className="text-[1.34rem] lg:text-3xl">{dict.contactform.subtitle}</div>
          </div>
        </div>
        <div className="flex flex-col gap-10" data-aos="fade-up">
          <div className="items-center gap-16 flex sm:px-8 md:px-20">
            <img className=" hidden md:block object-cover w-1/4" src='\images\CoolRocket.svg' alt='Rocket' loading="lazy"/>
            <form onSubmit={handleSubmit} className="w-full md:w-3/4">
              <input type="hidden" name="from_name" value="Landing: Nuevo Cliente"/>
              <input type="hidden" name="subject" value="Alguien quiere cotactarse a través de ACE Landing." />
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">{dict.contactform.name} *</label>
                  <input type="text" id="nombre" name="nombre" placeholder={dict.contactform.namePlacehoder} value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} required className="self-stretch px-4 py-2 bg-slate-700 rounded-xl gap-2.5 text-slate-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">{dict.contactform.email} *</label>
                  <input type="email" id="correo" name="correo" placeholder={dict.contactform.emailPlaceholder} value={formData.correo} onChange={(e) => setFormData({ ...formData, correo: e.target.value })} required className="self-stretch px-4 py-2 bg-slate-700 rounded-xl gap-2.5 text-slate-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">{dict.contactform.whatsapp}</label>
                  <div className="flex w-full">
                    <div className="relative inline-block">
                      <select id="country-code" name="country-code" className="form-select text-center py-2 bg-slate-700 rounded-l-xl text-slate-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-24">
                        <option value="1">+1</option>
                        <option value="52" defaultValue={1}>+52</option>
                        <option value="593">+593</option>
                        <option value="+">+</option>
                      </select>
                    </div>
                    <input type="number" id="numero" name="numero" min="0" max="0" placeholder={dict.contactform.whatsappPlaceholder} value={formData.numero} onChange={(e) => setFormData({ ...formData, numero: e.target.value })} className="w-full self-stretch px-4 py-2 bg-slate-700 rounded-r-xl gap-2.5 text-slate-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"/>
                  </div>
                </div>

                <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                  <label className="text-slate-50 text-base font-medium">{dict.contactform.message}</label>
                  <textarea id="comentarios" name="comentarios" placeholder={dict.contactform.messagePlaceholder} value={formData.comentarios} onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })} className="self-stretch h-28 px-4 py-2 bg-slate-700 rounded-xl justify-top items-start gap-2.5 inline-flex text-slate-50 focus:ring-2 focus:ring-inset focus:ring-indigo-600"/>
                </div>

                <HCaptcha
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  theme="dark"
                  onVerify={setToken}
                  onExpire={onExpire}
                  ref={captchaRef}
                /> 
                <span className='flex justify-center'>
                  <Button type='submit' classes='text-slate-50 text-lg font-bold' disabled={!token}>{dict.global.ctaButton}</Button>
                </span>

                {submissionStatus && <label className="text-purple-300 text-base font-medium"> {submissionStatus} </label>}

              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
