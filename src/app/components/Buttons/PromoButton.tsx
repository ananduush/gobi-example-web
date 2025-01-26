import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const PromoButton: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const variantStyles = {
    primary: "bg-highlight text-mainBlack hover:opacity-70",
    secondary: "bg-mainBlack text-white hover:opacity-70",
  };

  return (
    <button
      className={`text-[12px] px-[8px] py-[2px] rounded-md transition-colors ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default PromoButton;
