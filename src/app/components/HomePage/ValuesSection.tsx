import React from "react";
import UnderlinedButton from "../Buttons/UnderlinedButton";

const ValuesSection = () => {
  const valuesData = [
    { imageUrl: "/images/values/img_1.png", title: "Affordable luxury" },
    { imageUrl: "/images/values/img_2.png", title: "Premium quality" },
    { imageUrl: "/images/values/img_3.png", title: "Locally Made in Mongolia" },
  ];

  return (
    <div className="grid grid-cols-4 h-[439px]">
      <div className="flex flex-col justify-between px-[40px]">
        <h1>Take comfort in traceable affordable exquisite quality</h1>

        <div className="flex flex-col gap-[10px]">
          <p className="md:text-[14px]">
            Our standards for our cashmere are as high as they come with a focus
            on accessibility responsibility and traceability.
          </p>

          <UnderlinedButton text="Learn more" className="w-max" />
        </div>
      </div>
      {valuesData.map((value) => (
        <div className="" key={value.imageUrl}>
          <img
            src={value.imageUrl}
            alt={value.title}
            className="w-full h-[360px] object-cover"
          />

          <h2 className="mt-[10px]">{value.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ValuesSection;
