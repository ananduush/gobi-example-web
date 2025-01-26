import React from "react";
import UnderlinedButton from "../Buttons/UnderlinedButton";
import Divider from "../Divider";
import PrimaryButton from "../Buttons/PrimaryButton";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Autumn D.",
      date: "04/27/19",
      rating: 5,
      title: "Amazing and unique!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Autumn D.",
      date: "04/27/19",
      rating: 5,
      title: "Amazing and unique!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      name: "Autumn D.",
      date: "04/27/19",
      rating: 4,
      title: "Amazing and unique!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];

  return (
    <div className="max-w-[660px] mx-auto flex flex-col gap-[40px] container">
      <div className="flex flex-col gap-[15px]">
        <h1>Customer Reviews</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-mainBlack mr-2">★★★★★</div>
            <span>Based on 6 reviews</span>
          </div>
          <UnderlinedButton text="Write a review" />
        </div>
        <Divider className="mt-[10px]" />
      </div>

      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-b pb-[30px] border-secondaryBgColor flex flex-col gap-[15px]"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600">{review.name}</p>
            <span className="text-gray-500">{review.date}</span>
          </div>

          <div className="text-mainBlack">
            {Array(review.rating).fill("★").join("")}
          </div>

          <h2>{review.title}</h2>

          <p className="text-mainBlack md:text-[14px]">{review.description}</p>
        </div>
      ))}

      <PrimaryButton text={"Load more"} className="w-max mx-auto" />
    </div>
  );
};

export default CustomerReviews;
