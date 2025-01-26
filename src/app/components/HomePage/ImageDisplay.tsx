"use client";
import React from "react";
import Image from "next/image";
import productData from "../../../../public/productData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const ImageDisplay = () => {
  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-2">
        {productData.images.map((e, idx) => (
          <img key={`image-${idx}`} src={e.url} alt="Gobi logo" className="" />
        ))}
      </div>

      <div className="lg:hidden relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={true}
          className="relative max-w-[400px]"
        >
          <button className="absolute top-10 right-10 z-10">
            <Image src={"/icons/heart.svg"} alt="icon" width={24} height={24} />
          </button>
          {productData.images.map((e, idx) => (
            <SwiperSlide
              key={`swiper-image-${idx}`}
              className="!bg-transparent"
            >
              <img src={e.url} alt="Gobi logo" className="max-w-[400px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageDisplay;
