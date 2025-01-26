import React from "react";

const Divider = (props: { className: string }) => {
  const { className } = props;
  return (
    <div className={`bg-secondaryBgColor h-[1px] w-full ${className}`}></div>
  );
};

export default Divider;
