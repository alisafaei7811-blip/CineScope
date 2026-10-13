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
      className="h-[700px] w-full overflow-hidden bg-black max-md:h-[450px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={image}>
          <div className="relative h-full w-full">
            {/* Background image */}
            <div
              className="absolute inset-0 animate-cinematic-zoom bg-cover bg-center"
              style={{ backgroundImage: `url("${image}")` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-8 text-white md:px-20">
              <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
                CineScope Original
              </span>

              <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-6xl">
                Discover Your Next
                <span className="block text-red-500">Favorite Show</span>
              </h1>

              <p className="mb-8 max-w-xl text-sm leading-7 text-gray-300 md:text-lg">
                Explore amazing series, discover new stories, and find your next
                favorite show with CineScope.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/movies">
                  <button className="rounded-lg bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-700">
                    Explore Shows
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
