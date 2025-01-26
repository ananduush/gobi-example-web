import Image from "next/image";
import React from "react";
import UnderlinedButton from "../Buttons/UnderlinedButton";

const KlarnaPayment = () => {
  return (
    <div className="flex items-center gap-[10px] flex-wrap">
      <p className="text-lightMain text-[12px]">Pay within 30 days</p>

      <Image src={"/klarna.svg"} width={70} height={24} alt="" />

      <p className="text-lightMain text-[12px]">No fees.</p>

      <UnderlinedButton text="Learn More" />
    </div>
  );
};

export default KlarnaPayment;
