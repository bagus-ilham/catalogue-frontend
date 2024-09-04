import React from "react";
import { Link, useNavigate } from "react-router-dom";

import HeaderLogo from "../assets/icons/logo.png";
import SearchIcon from "../assets/icons/search.svg";
// import UserIcon from "../assets/icons/user.svg";

const Header = ({ className }) => {
  const navigate = useNavigate();

  return (
    <header
      className={`bg-fa_white rounded-3xl flex justify-between items-center p-[28px] lg:p-8  ${className}`}
    >
      <div className="w-[40%] justify-start items-center gap-x-10 hidden sm:flex">
          <Link
            to="/product/all"
            className="font-semibold text-base text-gray_dark"
          >
            New Drops 🔥
          </Link>
      </div>
      <div className="sm:w-[20%] flex justify-center items-center">
        <img
          className="cursor-pointer w-[80px] h-[auto] sm:w-[128px] sm:h-[32px]"
          src={HeaderLogo}
          alt="Kicks - Ecommerce store"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="w-[40%] flex justify-end items-center gap-x-[28px] sm:gap-x-[20px] md:gap-x-[28px] lg:gap-x-10">
        <button>
          <img
            className="cursor-pointer w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
            src={SearchIcon}
            alt="Search your fav shoe now!"
          />
        </button>
        {/* <button>
          <img
            className="cursor-pointer w-[22px] h-[22px] md:w-[28px] md:h-[28px]"
            src={UserIcon}
            alt="View your profile"
          />
        </button>
        <Link
          to="/cart"
          className="bg-yellow w-[28px] h-[28px] md:w-[32px] md:h-[32px] flex justify-center items-center rounded-full"
        >
          <p
            className={`text-gray_dark text-base ${className} font-semibold cursor-pointer`}
          >
            0
          </p>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
