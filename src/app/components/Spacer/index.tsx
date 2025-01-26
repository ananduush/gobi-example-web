import React from "react";

interface SpacerProps {
  size?: number;
  className?: string;
}

export const VSpacer: React.FC<SpacerProps> = ({
  size = 10,
  className = "",
}) => {
  const sizeClass = `h-[${size}px]`; // This won't work with Tailwind

  return <div style={{ height: `${size}px` }} className={`${className}`} />;
};

export const HSpacer: React.FC<SpacerProps> = ({
  size = 10,
  className = "",
}) => {
  return (
    <div
      style={{ width: `${size}px` }}
      className={`inline-block ${className}`}
    />
  );
};
