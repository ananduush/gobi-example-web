import React from "react";

const PrimaryButton = (props: { text: String; className?: string }) => {
  const { text, className } = props;
  return (
    <button
      className={`text-[14px] w-full bg-mainBlack py-[15px] px-[20px] text-white rounded-[4px] hover:opacity-80 ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
