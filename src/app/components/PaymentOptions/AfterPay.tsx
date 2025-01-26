import Image from "next/image";
import React from "react";
import UnderlinedButton from "../Buttons/UnderlinedButton";

const AfterPay = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <p className="text-lightMain text-[12px]">
        or 4 interest-free payments of $ 43.35 with
      </p>

      <Image src={"/afterpay.svg"} width={96} height={24} alt="" />

      <p className="text-lightMain text-[12px]">ⓘ</p>
    </div>
  );
};

export default AfterPay;
