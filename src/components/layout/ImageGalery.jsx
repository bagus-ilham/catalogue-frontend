import React from "react";

const ImageGallery = ({ className, galleryImages, productName }) => {
  return (
    <div
      className={`w-[67.43%] flex flex-wrap gap-4 rounded-[48px] overflow-hidden ${
        className ?? ""
      }`}
    >
      {galleryImages.map((img, i) => (
        <div
          key={i}
          className="relative basis-[49%] grow h-[40vw] max-h-[580px]"
        >
          <img
            src={img}
            alt={productName ?? "Name of your product"}
            fill
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
