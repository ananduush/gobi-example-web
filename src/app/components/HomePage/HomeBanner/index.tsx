"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import { Autoplay } from "swiper/modules";
import UnderlinedButton from "../../Buttons/UnderlinedButton";

const HomeBanner = () => {
  const slides = [
    { name: "", image: "/images/banner.jpeg" },
    { name: "", image: "/images/banner.jpeg" },
    { name: "", image: "/images/banner.jpeg" },
    { name: "", image: "/images/banner.jpeg" },
  ];

  return (
    <div className="relative">
      <Swiper
        className="mySwiper max-h-[80vh]"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={`home-slider-${idx}`}>
            <div className="relative">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover min-h-[600px]"
              />
              {/* Dimmed overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Centered text */}
      <div className="absolute inset-[50px] flex flex-col items-start justify-end z-10 container gap-[30px]">
        <div className="max-w-[766px]">
          <h1 className="text-[44px] sm:text-[54px] md:†ext-[64px] text-white">
            Reborn Cashmere
          </h1>
          <p className="text-white md:text-[18px]">
            Our CashmeReborn Collection uses cashmere yarn manufactured from
            recycled yarn spinning waste to cut down on material waste and
            advance circularity. Compared to cashmere generated from raw fiber,
            reborn cashmere requires 31% less energy, 13% less water, and 16%
            less product dye to produce.
          </p>
        </div>

        <UnderlinedButton
          text="Learn More"
          className="text-[14px] text-white after:bg-white"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
