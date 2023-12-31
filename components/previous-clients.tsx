'use client'

import Image from 'next/image'
import Title from './ui/title'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import CampanarioLogo from '@/public/images/CampanarioLogo.png'
import NefroVidaLogo from '@/public/images/NefroVidaLogo.png'
import MonarcaLogo from '@/public/images/MonarcaLogo.png'
import { get } from 'http';
import getDictionary from '@/app/dictionaries';


export default function PreviousClients() {
  const images = [
    MonarcaLogo,
    CampanarioLogo,
    NefroVidaLogo,
    MonarcaLogo,
    CampanarioLogo,
    NefroVidaLogo
  ];
  const dict = getDictionary();

  return (
    <section id="clientes">
      <div className="max-w-3xl md:max-w-3xl lg:max-w-6xl mx-auto">
        <div className='py-12 md:py-20'>
          <Title classes='w-11/12 md:w-full'>{dict.previousclients.title}</Title>
          <div className="flex pt-11" data-aos="fade-up">
            <Swiper
              spaceBetween={60}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              modules={[Autoplay]}>
              {images.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <div className='h-full flex justify-center items-center'>
                    <Image src={imageUrl} loading="lazy" alt={`Image ${index + 1}`} className="w-64 h-auto" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}