import React from "react";
import Image from "next/image";

const ProductFeatures = () => {
  const productData = [
    {
      imageUrl: "/images/shoe_detail/img_1.png",
      title: "Premium Look and Feel",
      description:
        "Good design goes with everything. From work to play, these sneakers are designed to seamlessly integrate into your everyday life.",
    },
    {
      imageUrl: "/images/shoe_detail/img_2.png",
      title: "Innovative Natural Materials",
      description:
        "Uppers made from finely spun and highly durable FELTON cashmere.",
    },
    {
      imageUrl: "/images/shoe_detail/img_3.png",
      title: "Tried-and-Tested Comfort",
      description:
        "Mongolian cashmere is renowned for being lightweight, comfy and exceptionally soft. The insoles will adapt to your feet over time, making these sneakers so easy to wear.",
    },
    {
      imageUrl: "/images/shoe_detail/img_4.png",
      title: "Breathable, Warm and Moisture-Wicking",
      description:
        "Designed to take advantage of the natural temperature-regulating properties of its cashmere uppers and wool lining for a first-rate walking experience.",
    },
    {
      imageUrl: "/images/shoe_detail/img_5.png",
      title: "Better for the Environment and You",
      description:
        "Thick polyurethane insoles and EVA outsoles containing 15% algae and 20% sugarcane to keep sustainability at the forefront of everything we do.",
    },
  ];
  return (
    <div className="">
      {productData.map((item, index) => (
        <div key={index} className="grid grid-cols-2">
          <Image
            src={item.imageUrl}
            width={720}
            height={540}
            alt=""
            className={`w-full ${
              index % 2 == 0 ? "order-first" : "order-last"
            }`}
          />

          <div className="flex flex-col gap-[30px] px-[40px] py-[100px]">
            <h1>{item.title}</h1>

            <p className="text-[16px] text-mainBlack">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFeatures;
