'use client'

import Spline from '@splinetool/react-spline'
import Button from './ui/button'
import Image from 'next/image'
import getDictionary from '@/app/dictionaries';
import TextRolling from './ui/text-rolling';

export default function Hero() {
  const dict = getDictionary();

  return (
    <section>
      <div className="w-full mx-auto px-4 sm:px-6 relative flex justify-center overflow-hidden	h-[45vw]">

        {/* Illustration behind hero content */}
        <div className="absolute lg:block pointer-events-none top-48 w-4/5" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <div className="flex">
            <div className="bg-radial-gradient-blue w-[50vw] h-0 pb-[50vw] -bottom-5"></div>
            <div className="bg-radial-gradient-purple w-[50vw] h-[50vw] -ml-60"></div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative flex pt-12 pb-10 md:pt-12 md:pb-16">

          {/* Section header */}
          <div className="flex justify-between w-full">
            <div className="flex justify-center flex-col gap-10 w-1/2" data-aos="fade-up">
              <div className="text-4xl">
                {dict.header.title}
                <div className="inline-flex h-14">
                  <p>{dict.header.title2}</p>
                  <TextRolling />
                </div>
              </div>
              <div className="flex gap-8">
                <Button>{dict.global.ctaButton}</Button>
                <div className="inline-flex gap-4">
                  <Image
                    src="/images/instagram_icon.svg"
                    alt='Instagram Logo Icon'
                    width={32}
                    height={32}
                    className='hover:cursor-pointer hover:opacity-90'
                  />
                  <Image
                    src="/images/linkedin_icon.svg"
                    alt='Instagram Logo Icon'
                    width={32}
                    height={32}
                    className='hover:cursor-pointer hover:opacity-90'
                  />
                  <Image
                    src="/images/facebook_icon.svg"
                    alt='Instagram Logo Icon'
                    width={32}
                    height={32}
                    className='hover:cursor-pointer hover:opacity-90'
                  />
                </div>
              </div>
              <div className="text-3xl font-book">
                {dict.header.slogan}
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white"></div>
    </section>
  )
}
