import React from "react";
import UserImg1 from "../../img/users/1.png";
import LipsImg from "../../img/lips.svg";

const ViewItem = () => {
  return (
    <div className="relative w-full h-full rounded-xl">
      <img className="w-full h-full rounded-xl" src={UserImg1} />
      <div className="absolute w-full top-0 p-2.5">
        <p className="text-base text-white font-medium">
          <i>@USERNAME</i>
        </p>
        <p className="text-sm text-white font-light">Country</p>
      </div>
      <div className="absolute rounded-[10px] w-full bottom-0 h-1/4 bg-gradient-to-b from-transparent to-black">
        <div className="h-full flex flex-col justify-end">
          <div className="flex gap-2 w-10/12 justify-center mx-auto max-h-14 h-1/3">
            <button
              type="button"
              className="w-full h-full border-2 border-special-red bg-special-red text-white text-xl font-bold rounded-full hover:bg-white  hover:text-special-red flex items-center justify-center"
            >
              KISS
            </button>
            <div className="w-full h-full border-2 border-special-red text-white text-xl font-bold rounded-full text-center flex gap-2 justify-center items-center">
              <p>189</p>
              <img src={LipsImg} />
            </div>
          </div>
          <div className="h-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
