import React from "react";
import Image from "next/image";

import ColorPicker from "@/app/utils/ColorPicker";
import SizePicker from "@/app/utils/SizePicker";
import PrimaryButton from "../Buttons/PrimaryButton";
import PromoButton from "../Buttons/PromoButton";
import RatingButton from "../Buttons/RatingButton";
import AfterPay from "../PaymentOptions/AfterPay";
import Klarna from "../PaymentOptions/Klarna";

const ProductSidebar = () => {
  const colors = [
    { hex: "#0075FF", name: "Blue" },
    { hex: "#8B4513", name: "Brown" },
    { hex: "#FFFF00", name: "Yellow" },
    { hex: "#808080", name: "Gray" },
    { hex: "#008080", name: "Teal" },
    { hex: "#008000", name: "Green" },
    { hex: "#000080", name: "Navy" },
    { hex: "#00008B", name: "Dark Blue" },
    { hex: "#000000", name: "Black" },
    { hex: "#1E90FF", name: "Dodger Blue" },
    { hex: "#A52A2A", name: "Brown" },
    { hex: "#FFA500", name: "Orange" },
    { hex: "#D3D3D3", name: "Light Gray" },
    { hex: "#00CED1", name: "Dark Turquoise" },
    { hex: "#00FA9A", name: "Spring Green" },
    { hex: "#4169E1", name: "Royal Blue" },
    { hex: "#00BFFF", name: "Deep Sky Blue" },
    { hex: "#FFFFFF", name: "White" },
  ];

  return (
    <div className="px-[40px] py-[60px] flex flex-col gap-[20px]">
      {/* Title */}
      <div className="flex flex-col gap-[10px]">
        <div className="flex justify-between items-center">
          <p className="text-lightMain">Women / The Organic Collection</p>

          <button>
            <Image src={"/icons/heart.svg"} alt="icon" width={24} height={24} />
          </button>
        </div>

        <h1 className="font-[400]">
          Reborn Cashmere Turtle Neck with Cable Stitches
        </h1>
      </div>

      {/* Detail */}
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[10px] items-center">
          <RatingButton />

          <p className="text-[12px] h-max">6 reviews</p>
        </div>

        <div className="flex gap-[10px] items-center">
          <h2>$ 173.40</h2>
          <h2 className="line-through text-lightMain">$ 280.00</h2>
          <h2 className="bg-highlight px-[8px]">- 40%</h2>
        </div>

        <p className="text-lightMain">Inkl. MwSt. zzgl. Versandkosten</p>

        <div className="flex gap-[10px]">
          <PromoButton text="This is Promo Text" variant="primary" />
          <PromoButton text="CashmeReborn ↓" variant="secondary" />
        </div>
      </div>

      {/* Color & Sizing */}
      <ColorPicker colors={colors} />

      <SizePicker />

      <Image src={"/fitfinder.svg"} width={149} height={80} alt="Fit Finder" />

      <p className="text-center text-lightMain">Only 2 left!</p>

      <PrimaryButton text={"Add to Bag"} />

      <Klarna />

      <AfterPay />
    </div>
  );
};

export default ProductSidebar;
