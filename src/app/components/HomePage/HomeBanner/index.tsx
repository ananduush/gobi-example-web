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
      <div className="w-full">
        <img
          src="/images/banner.jpeg"
          alt="Banner"
          className="w-full h-screen min-h-screen max-h-[1200px] object-cover"
        />
        {/* Dimmed overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Centered text */}
      <div className="absolute inset-0 flex flex-col items-start justify-end z-10 container pb-[50px] gap-[30px]">
        <div className="max-w-[766px]">
          <h1 className="text-[44px] sm:text-[54px] md:text-[64px] text-white">
            Reborn Cashmere
          </h1>
          <p className="text-white md:text-[18px] mb-6">
            Our CashmeReborn Collection uses cashmere yarn manufactured from
            recycled yarn spinning waste to cut down on material waste and
            advance circularity. Compared to cashmere generated from raw fiber,
            reborn cashmere requires 31% less energy, 13% less water, and 16%
            less product dye to produce.
          </p>
          <UnderlinedButton
            text="Learn More"
            className="text-[14px] text-white after:bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
