import React from "react";
import Background from "../common/Background";
import BlackLogo from "../../img/black-logo.svg";
import WhiteLogo from "../../img/white-logo.svg";

const Landing = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Background lightOpacity={60} darkOpacity={80} />
      <div className="flex flex-col gap-7 items-center">
        <div className="relative h-[190px] w-[680px]">
          <div className="absolute right-0 top-0 ">
            <img src={WhiteLogo} />
          </div>
          <div className="absolute right-0 top-0 dark:hidden">
            <img src={BlackLogo} />
          </div>
        </div>
        <p className="text-2xl w-[1010px] text-center text-basic-dark dark:text-basic-light font-normal">
          Read writing from KISMI.APP on Medium. Web3 Photo Voting App. Every
          day, <br /> KISMI.APP and thousands of other voices read, write, and
          share important stories on <br /> Medium.
        </p>
      </div>
    </div>
  );
};

export default Landing;
