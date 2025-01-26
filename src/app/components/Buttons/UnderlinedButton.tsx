import React from "react";

interface UnderlinedButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const UnderlinedButton: React.FC<UnderlinedButtonProps> = ({
  text,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`text-[14px] pb-[2px] font-[400] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gray-500 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default UnderlinedButton;
