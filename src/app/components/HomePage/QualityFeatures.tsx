import React from "react";
import Image from "next/image";
import UnderlinedButton from "../Buttons/UnderlinedButton";
import { VSpacer } from "../Spacer";

const QualityFeatures = () => {
  const textToRender = [
    { type: "text", value: "Cashmere from" },
    { type: "icon", value: "/icons/goat_gray.svg" },
    { type: "text", value: "and" },
    { type: "icon", value: "/icons/goat_white.svg" },
    { type: "text", value: "goats" },
  ];
  return (
    <div className="">
      <h1 className="text-[44px] sm:text-[54px] md:†ext-[64px] px-[40px]">
        Quality You Can Feel
      </h1>
      <VSpacer size={40} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className="relative bg-[url(/images/quality/img_1.png)] h-[250px] lg:h-[320px] bg-no-repeat bg-cover">
          <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-center">
            <p className="uppercase text-[12px] text-white">sourced from</p>
            <h2 className="text-white mb-[40px] leading-[28px]">
              Bayanhongor Province
            </h2>
            <UnderlinedButton
              text="Learn More"
              className="text-[14px] text-white after:bg-white"
            />
          </div>
        </div>

        <div className="bg-secondaryBgColor p-[30px] flex flex-col h-[250px] lg:h-[320px]">
          <p className="uppercase text-[12px] mb-[20px] text-mainBlack">
            the process
          </p>
          <h2 className="underline-on-hover w-max">1 Washing</h2>
          <h2 className="underline-on-hover w-max">2 Yarns</h2>
          <h2 className="underline-on-hover w-max">3 Knitting</h2>
        </div>

        <div className="bg-[url(/images/quality/img_2.png)] bg-no-repeat bg-cover h-[250px] lg:h-[320px]"></div>

        <div className="relative bg-[url(/images/quality/img_3.jpeg)] bg-no-repeat bg-cover h-[250px] lg:h-[320px]">
          <p className="md:text-[16px] absolute inset-[40px] text-mainBlack text-center flex flex-col justify-center">
            The softest lightweight cashmere at 13 microns
          </p>
        </div>

        <div className="bg-highlight flex flex-col justify-center text-center h-[250px] lg:h-[320px]">
          <h1 className="text-[44px] sm:text-[54px] md:†ext-[64px]">100%</h1>
          <p className="uppercase">cashmere</p>
        </div>

        <div className="bg-secondaryBgColor flex flex-col justify-center items-center text-center h-[250px] lg:h-[320px]">
          <div className="flex flex-wrap px-[40px] gap-x-[10px] justify-center mb-[40px]">
            {textToRender.map((e) =>
              e.type == "text" ? (
                <h2 key={e.value}>{e.value}</h2>
              ) : (
                <Image
                  key={e.value}
                  src={e.value}
                  alt=""
                  width={24}
                  height={28}
                />
              )
            )}
          </div>

          <UnderlinedButton text="Learn More" className="text-[14px] w-max" />
        </div>
      </div>
    </div>
  );
};

export default QualityFeatures;
