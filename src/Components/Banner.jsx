'use client'
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';


const Banner = () => {
      const slides = [
    '/banner1.jpg',
    '/banner2.jpg',
    '/banner3.jpg',
  ];
  return (
    <div className="relative bg-gradient-to-r from-indigo-100 via-white to-pink-100 min-h-screen flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between px-6 lg:px-20">
        
        {/* Banner Text */}
        <div className="max-w-lg text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Discover <span className="text-primary">Amazing</span> Products
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl">
            Browse our curated collection of the finest products and find exactly what you need — stylish, modern, and affordable.
          </p>
          <button className="btn btn-primary btn-lg rounded-xl hover:scale-105 transition-transform duration-300">
            View Products
          </button>
        </div>

        
            {/* Banner Image Slider */}
        <div className="mb-10 lg:mb-0 w-80 lg:w-96 h-80 lg:h-96 mx-auto lg:mx-0">
          <Swiper
            spaceBetween={30}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  modules={[Autoplay]}
  className="rounded-3xl shadow-2xl overflow-hidden"
          >
            {slides.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-80 lg:h-96">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="object-cover w-full h-full"
                    fill
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Banner;
