import React, { useState } from "react";
import Badge from "./layout/Badge";
import ColorSelector from "./layout/ColorSelector";

// Components

const BlockWrapper = ({ className = "", children }) => (
  <div className={`flex flex-col gap-y-2 ${className}`}>{children}</div>
);

const BlockTitle = ({ className = "", children }) => (
  <h6
    className={`text-gray_dark font-semibold text-[16px] leading-[18.96px] uppercase ${className}`}
  >
    {children}
  </h6>
);

const DetailView = ({
  className = "",
  productName = "Name of your product",
  colorVarients = [],
  about = "",
}) => {
  const [state, setState] = useState({
    activeColor: colorVarients[0],
  });

  const { activeColor, activeSize } = state;

  const handleColorClick = (color) => {
    setState({ activeColor: color, activeSize });
  };

  return (
    <div className={`w-[32.57%] flex flex-col gap-y-8 ${className}`}>
      <div className="flex flex-col gap-y-4">
        <h3 className="text-gray_dark text-[32px] leading-[37.92px] font-semibold">
          {productName}
        </h3>
      </div>
      <BlockWrapper>
        <BlockTitle>Color</BlockTitle>
        <div className="flex flex-wrap gap-2 items-center justify-start">
          {colorVarients.map((hex, i) => (
            <>
              <ColorSelector
                key={i}
                color={hex}
                isSelected={colorVarients[i] === activeColor}
                onClick={() => activeColor !== c && handleColorClick(c)}
              />
            </>
          ))}
        </div>
      </BlockWrapper>
      <div className="flex flex-col gap-y-2">
        <BlockTitle>About the product</BlockTitle>
        <p className="text-[16px] leading-[22px] text-gray_dark opacity-80">
          {about}
        </p>
      </div>
    </div>
  );
};

export default DetailView;
