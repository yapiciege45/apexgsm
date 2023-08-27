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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBasketShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

export const HomeProductsComponent = () => {
  return (
    <div className='w-full bg-slate-100 flex justify-center p-3 py-8'>
        <div className='w-11/12 h-full flex flex-col'>
            <p className='uppercase border-b-2 border-b-orange-500 font-bold w-1/12'>Products</p>
            <div className='mt-2'>
                    <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-64 w-48 bg-orange-500'>
                        <div className='h-3/4 w-full p-3'>
                            <img className='w-full h-full' src='https://www.apexgsm.com/image/cache/catalog/iPhone/category/iphone-x-series-lcd-350x350.jpg' />
                        </div>
                        <div className='h-1/4 w-full p-1 flex flex-col items-center'>
                            <p>Samsung Series</p>
                            <div className='flex justify-around w-full'>
                                <FontAwesomeIcon icon={faBasketShopping} className='text-black w-4 h-4' />
                                <FontAwesomeIcon icon={faHeart} className='text-black w-4 h-4' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
  )
}
