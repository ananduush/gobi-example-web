import React from "react";
import { VSpacer } from "../Spacer";

const ProductDetails = () => {
  return (
    <div>
      <h2 className="text-[12px] uppercase mb-[15px]">Product Details</h2>
      <ul className="space-y-1 text-[14px]">
        <li>- T-neck</li>
        <li>- 100% Mongolian cashmere</li>
        <li>- 525 grams</li>
        <li>- 8 ply</li>
        <li>- 2.5 gauge</li>
        <li>- Cable and fisherman rib stitches</li>
        <li>- Loose fit</li>
      </ul>

      <VSpacer size={40} />

      <h3 className="text-[12px] uppercase mb-[15px]">Organic Cashmere</h3>
      <ul className="space-y-1 text-[14px]">
        <li>- Made with 100% organic cashmere</li>
        <li>- Certified by SFA</li>
        <li>
          - GOTS organic production uses 100% organic cashmere with no dyes and
          bleaches, keeping the 4 natural colors of cashmere fiber
        </li>
      </ul>

      <VSpacer size={40} />

      <h3 className="text-[12px] uppercase mb-[15px]">Shipping Information</h3>
      <ul className="space-y-1 text-[14px]">
        <li>- Standard shipping rate: Starting from $79.00</li>
        <li>- Delivery time: 1-3 business days</li>
        <li>
          - The shipping rate and delivery time apply for US only. For other
          information, please see Shipping Policy.
        </li>
      </ul>
    </div>
  );
};

export default ProductDetails;
