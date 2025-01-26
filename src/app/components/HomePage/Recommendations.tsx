"use client";
import React from "react";
import Image from "next/image";
import UnderlinedButton from "../Buttons/UnderlinedButton";
import { VSpacer } from "../Spacer";
import { Swiper, SwiperSlide } from "swiper/react";
import ColorPicker from "@/app/utils/ColorPicker";

const Recommendation = () => {
  const products = [
    {
      imageUrl: "/images/product.png",
      name: "Turtle Neck with Cable Stitches",
      price: "49.99",
      colors: [
        { name: "", hex: "#000000" },
        { name: "", hex: "#ffffff" },
      ],
    },
    {
      imageUrl: "/images/product.png",
      name: "Turtle Neck with Cable Stitches",
      price: "49.99",
      colors: [
        { name: "", hex: "#000000" },
        { name: "", hex: "#ffffff" },
      ],
    },
    {
      imageUrl: "/images/product.png",
      name: "Turtle Neck with Cable Stitches",
      price: "49.99",
      colors: [
        { name: "", hex: "#000000" },
        { name: "", hex: "#ffffff" },
      ],
    },
    {
      imageUrl: "/images/product.png",
      name: "Turtle Neck with Cable Stitches",
      price: "49.99",
      colors: [
        { name: "", hex: "#000000" },
        { name: "", hex: "#ffffff" },
      ],
    },
    {
      imageUrl: "/images/product.png",
      name: "Turtle Neck with Cable Stitches",
      price: "49.99",
      colors: [
        { name: "", hex: "#000000" },
        { name: "", hex: "#ffffff" },
      ],
    },
  ];
  return (
    <div className="">
      <h1 className="text-[44px] sm:text-[54px] md:†ext-[64px] px-[40px]">
        We recommend
      </h1>

      <VSpacer size={40} />

      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        style={{ background: "none" }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="!bg-transparent !p-0">
            <div className="w-full">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="py-[10px] px-[20px]">
                <div className="flex justify-between">
                  <p className="md:text-[14px]">{product.name}</p>
                  <p className="text-gray-600 font-medium">${product.price}</p>
                </div>

                <div>
                  <ColorPicker withTitle={false} colors={product.colors} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendation;
