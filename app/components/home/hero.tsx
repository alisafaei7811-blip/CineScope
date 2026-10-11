"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const images = [
  "/image/1.jpg",
  "/image/2.jpg",
  "/image/3.jpg",
  "/image/4.jpg",
  "/image/5.jpg"
];

export default function Hero() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay, Pagination]}
      effect="fade"
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop
      className="h-[700px] w-full overflow-hidden bg-black max-md:h-[300px]"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="absolute inset-0 animate-cinematic-zoom bg-cover bg-center"
              style={{ backgroundImage: `url("${image}")` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
