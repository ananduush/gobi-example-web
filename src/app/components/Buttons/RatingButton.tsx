"use client";
import React, { useState } from "react";
import Image from "next/image";

const RatingButton = () => {
  const [rating, setRating] = useState<Number>(0);

  const handleStarClick = (selectedRating: Number) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <button
          key={starNumber}
          onClick={() => handleStarClick(starNumber)}
          className="p-1 focus:outline-none"
        >
          <Image src={"/icons/star.svg"} width={14} height={14} alt="Star" />
        </button>
      ))}
    </div>
  );
};

export default RatingButton;
