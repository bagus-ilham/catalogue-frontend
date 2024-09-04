import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/layout/Button";
import Text from "../components/layout/Text";
import BannerImage1 from "../assets/products/heroBanner1.png";
import BannerImage2 from "../assets/products/heroBanner2.png";
import BannerImage3 from "../assets/products/heroBanner3.png";

const ImageSwitcher = ({ className = "", style = "" }) => {
  return (
    <div className={`flex flex-col gap-y-4 ${className}`} style={style}>
      <img
        src={BannerImage2}
        className="border-[3px] border-gray rounded-[32px] w-full h-auto max-w-[160px]"
        alt="Banner Image"
      />
      <img
        src={BannerImage3}
        className="border-[3px] border-gray rounded-[32px] w-full h-auto max-w-[160px]"
        alt="Banner Image"
      />
    </div>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-4">
      <h1
        className={`
          w-full mx-auto my-6 uppercase font-bold text-center text-gray_dark
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          leading-tight
          font-rubik
        `}
      >
        Premium <span className="text-blue">Scarves</span>
      </h1>

      <div className="w-full rounded-[30px] lg:rounded-[48px] xl:rounded-[64px] relative overflow-hidden flex justify-start items-end aspect-[3/2] sm:aspect-[16/9] lg:aspect-[2/1]">
        <div
          className="
          hidden sm:block absolute
          bg-gray_dark px-4 sm:px-6 rounded-b-2xl
          py-2 sm:py-3 top-[130px] right-[-84px] transform rotate-90
          lg:top-[0px] lg:left-[48px] lg:right-[auto] lg:transform-none
          xl:top-[166px] xl:left-[-84px] xl:transform xl:-rotate-90
        "
          style={{ zIndex: 11 }}
        >
          <p className="text-white text-sm sm:text-base font-semibold font-openSans">
            Ansania Hijaber's Scarves
          </p>
        </div>

        <div className="absolute inset-0 z-10">
          <img
            src={BannerImage1}
            alt="Banner Hero"
            className="w-full h-full object-cover"
          />
        </div>

        <ImageSwitcher className="hidden lg:flex absolute bottom-8 right-8" 
        style={{ zIndex: 11 }}/>

        <div
          className="w-full sm:w-2/3 md:w-1/2 lg:w-2/5 p-6 sm:p-8 lg:p-12"
          style={{ zIndex: 11 }}
        >
          <Text
            type="sectionHeading"
            className="max-w-[589px] text-black leading-[normal] lg:leading-[88px] font-rubik"
          >
            Ansania
          </Text>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black mb-6 font-rubik">
            Ansania introducing the new hijab for everyone's comfort
          </p>

          <Button
            onClick={() => {
              navigate("/product/all");
            }}
            className="max-w-[138px] text-white bg-blue mt-[20px] lg:mt-6 z-50"
          >
            Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
