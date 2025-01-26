"use client";
import React, { useState } from "react";

const ColorPicker = (props: {
  withTitle?: boolean;
  colors: { hex: string; name: string }[];
}) => {
  const { colors, withTitle = true } = props;
  const [selectedColor, setSelectedColor] = useState("#0075FF");

  const handleColorChange = (color: { hex: any; name?: string }) => {
    setSelectedColor(color.hex);
  };

  const chunkArray = (array: any[], size: number) => {
    return array.reduce((chunks, item, index) => {
      if (index % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  const colorChunks = chunkArray(colors, 11);

  return (
    <div className="flex flex-col gap-[10px]">
      {withTitle && (
        <p className="text-lightMain">
          Color:{" "}
          <span className="text-mainBlack">
            {colors.find((c) => c.hex === selectedColor)?.name}
          </span>
        </p>
      )}
      {colorChunks.map((chunk: any[], index: React.Key | null | undefined) => (
        <div key={index} className="flex flex-wrap gap-2">
          {chunk.map(
            (
              color: { hex: any; name?: string | undefined },
              i: React.Key | null | undefined
            ) => (
              <div
                key={i}
                className={`p-[4px] rounded-full ${
                  selectedColor === color.hex ? "ring-[1px] ring-mainBlack" : ""
                }`}
              >
                <div
                  className={`w-[18px] h-[18px] rounded-full cursor-pointer transition-transform hover:scale-110`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => handleColorChange(color)}
                />
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
