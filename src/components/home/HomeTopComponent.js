"use client"
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export const HomeTopComponent = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>
        <div className='w-full h-full'>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="h-full"
    >
        <SwiperSlide className="relative w-full h-full">
            <Image 
                className="absolute inset-0 object-cover w-full h-full"
                src="https://www.apexgsm.com/image/cache/catalog/bb02a-768x500.jpg"
                alt="Catalog 1"
                width={1000}
                height={1000}
                quality={90}
                format="webp"
            />
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full">
            <Image 
                className="absolute inset-0 object-cover w-full h-full"
                src="https://www.apexgsm.com/image/cache/catalog/X%C4%B0AOM%C4%B0%20%C4%B0NG%C4%B0L%C4%B0ZCE-1536x1000w.png"
                alt="Catalog 2"
                width={1000}
                height={1000}
                quality={90}
                format="webp"
            />
        </SwiperSlide>
    </Swiper>
</div>


    </div>
  )
}
