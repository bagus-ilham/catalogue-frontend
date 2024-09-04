import React from "react";
import ProductCard from "../ProductCard";


const ProductCardsWrapper = ({
  productsData,
  className = "",
  productImageClassName = "",
}) => {
  return (
    <div className={`${className} grid`}>
      {productsData?.map((d, i) => (
        <ProductCard
          image={d.image}
          imageClassName={productImageClassName}
          name={d.name}
          color={d.color}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProductCardsWrapper;
