import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Button from "./layout/Button";
import Text from "./layout/Text";

// Images
import DropProductImg1 from "../assets/products/Lovila1.png";
import DropProductImg2 from "../assets/products/Maxel2.png";
import DropProductImg3 from "../assets/products/Shinar Sonic.png";
import DropProductImg4 from "../assets/products/Tierack Jacquard Bunga.png";
import ProductCardsWrapper from "./layout/ProductCardsWrapper";

const NewDropsSection = ({ className = "" }) => {
  const navigate = useNavigate();

  const data = [
    {
      image: DropProductImg1,
      name: "Lovita1",
      color: "Aqua",
    },
    {
      image: DropProductImg2,
      name: "Maxel2",
      color: "Flower Red",
    },
    {
      image: DropProductImg3,
      name: "Shinar Sonic",
      color: "Brown Brick",
    },
    {
      image: DropProductImg4,
      name: "Tierack Jacquard Bunga",
      color: "Light Purple",
    },
  ];

  return (
    <section className={`${className}`}>
      <div className="flex justify-between flex-col items-start sm:flex-row sm:items-end">
        <Text
          type="sectionHeading"
          className="max-w-[68vw] sm:max-w-[50vw] md:max-w-[46vw] lg:max-w-[589px] leading-[95%] text-gray_dark"
        >
          New drops
        </Text>
        <Button
          onClick={() => {
            navigate("/product/all");
          }}
          className="max-w-[190px] mt-6 text-white bg-blue"
        >
          See all catalogue
        </Button>
      </div>
      <ProductCardsWrapper
        className="mt-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px] xl:gap-[16px]"
        productsData={data}
        productImageClassName="max-h-[360px] lg:max-h-[399px]"
      />
    </section>
  );
};

export default NewDropsSection;
