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
    <div className="container-restriction">
      <h1 className="text-[32px] lg:text-[44px] sm:text-[54px] md:†ext-[64px] px-[40px]">
        We recommend
      </h1>

      <VSpacer size={40} />

      <Swiper
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        style={{ background: "none" }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="!bg-transparent !p-0">
            <div className="w-full relative">
              <div className="absolute top-[10px] left-[10px] rounded-[3px] bg-white px-[10px] py-[5px]">
                <p className="uppercase">new</p>
              </div>

              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="py-[10px] px-[10px] md:px-[20px]">
                <div className="flex md:flex-row flex-col items-start md:justify-between">
                  <p className="text-[12px] md:text-[14px] text-left">
                    {product.name}
                  </p>
                  <p className="text-[12px] md:text-[16px] text-gray-600 font-medium">
                    ${product.price}
                  </p>
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
