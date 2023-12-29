'use client'

import Image from 'next/image'
import Title from './ui/title'
import { Swiper, SwiperSlide } from 'swiper/react';


import CampanarioLogo from '@/public/images/CampanarioLogo.png'
import NefroVidaLogo from '@/public/images/NefroVidaLogo.png'
import MonarcaLogo from '@/public/images/MonarcaLogo.png'

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';

export default function PreviousClients() {
    const images = [
        MonarcaLogo,
        CampanarioLogo,
        NefroVidaLogo,
        NefroVidaLogo,
        NefroVidaLogo,
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className='pb-12 md:pb-20'>
                    <Title>Empresas que confían en nosotros</Title>
                    <div className="py-4 flex pt-11" data-aos="fade-up">
                        <Swiper 
                            spaceBetween={0}
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