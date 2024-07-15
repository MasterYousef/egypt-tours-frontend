"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay,Pagination } from "swiper/modules";
import Image from "next/image";
import { useEffect } from "react";

function Slider({images}: {images?: string[] }) {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay:3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay,Pagination]}
      loop={true}
      className="h-1/2 w-full lg:w-1/2 lg:h-full m-0"
    >
      {images
        ? images.map((im) => (
            <SwiperSlide className="h-full">
              <Image
                src={im}
                alt=""
                width={2000}
                height={2000}
                className="w-full h-full"
              />
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
}

export default Slider;
