"use client";
import React, { useState } from "react";
import UnderlinedButton from "../components/Buttons/UnderlinedButton";

const SizePicker = () => {
  const [selectedSize, setSelectedSize] = useState<String>("M");

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"];

  const handleSizeClick = (size: String) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex justify-between items-center">
        <p className="text-mainBlack">Select a size:</p>

        <div className="flex gap-[20px]">
          <UnderlinedButton text="Find My Size" />
          <UnderlinedButton text="Size Guide" />
        </div>
      </div>

      <div className="flex gap-[13px] flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            className={`text-[14px] w-[60px] h-[40px] rounded-md border-[1px] transition-colors ${
              selectedSize === size
                ? "border-mainBlack"
                : "border-secondaryBgColor"
            }`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizePicker;
