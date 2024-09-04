import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./layout/Button";


const ProductCard = ({
  className = "",
  name,
  image,
  imageClassName = "",
  color,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`relative flex flex-col flex-wrap gap-y-4 ${className}`}>
      <div className="absolute top-[8px] left-[8px] z-[1] bg-blue w-fit rounded-tl-[21px] rounded-br-[21px] py-3 px-4">
        <p className="text-[12px] leading-[14.22px] text-white font-semibold">
          New
        </p>
      </div>
      <div
        className={`relative overflow-auto border-[8px] w-full border-white rounded-[28px] h-[56vw] sm:h-[36vw] lg:h-[26vw] ${imageClassName}`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-center uppercase text-[3.4vw] sm:text-[2.3vw] md:text-[2.1vw] leading-[initial] lg:text-[18px] lg:leading-[26px]  xl:text-[22px] xl:leading-[28.44px] xxl:text-[24px] font-semibold text-gray_dark">
        {name}
      </h3>
      <Button
        onClick={() => {
          const removeWhiteSpaces = name.replace(/\s+/g, "-");
          const convertToLowercase = removeWhiteSpaces.toLowerCase();
          navigate(`/product/${convertToLowercase}`);
        }}
        className="bg-gray_dark text-white"
      >
        View product - <span className="text-yellow">{color}</span>
      </Button>
    </div>
  );
};

export default ProductCard;
