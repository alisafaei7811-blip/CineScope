"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const images = [
  "/shows/1.jpg",
  "/shows/2.jpg",
  "/shows/3.jpg",
  "/shows/4.jpg",
  "/shows/5.jpg",
];

export default function Hero() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay, Pagination]}
      effect="fade"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop
      className="h-[450px] w-full overflow-hidden bg-black sm:h-[550px] md:h-[700px]"
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <div className="relative h-full w-full">
            <div
              className="absolute inset-0 animate-cinematic-zoom bg-cover bg-center"
              style={{ backgroundImage: `url("${image}")` }}
            />

            {/* موبایل: تیره یکدست تا متن خوانا باشد | دسکتاپ: گرادینت */}
            <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-6 text-white sm:px-10 md:px-20">
              <span className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-red-500 md:mb-4 md:text-sm">
                CineScope Original
              </span>

              <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:mb-5 md:text-6xl">
                Discover Your Next
                <span className="block text-red-500">Favorite Show</span>
              </h1>

              <p className="mb-6 max-w-xl text-sm leading-6 text-gray-300 md:mb-8 md:text-lg md:leading-7">
                Explore amazing series, discover new stories, and find your next
                favorite show with CineScope.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/movies"
                  className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-red-700 md:px-7 md:py-3 md:text-base"
                >
                  Explore Shows
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
