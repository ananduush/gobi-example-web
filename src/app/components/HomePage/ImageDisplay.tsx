import React from "react";
import productData from "../../../../public/productData.json";

const ImageDisplay = () => {
  return (
    <div className="grid grid-cols-2">
      {productData.images.map((e, idx) => (
        <img key={`image-${idx}`} src={e.url} alt="Gobi logo" className="" />
      ))}
    </div>
  );
};

export default ImageDisplay;
