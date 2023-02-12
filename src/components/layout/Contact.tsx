import React, { useEffect, useRef } from "react";
import PlayStoreLogo from "../../img/playstore-sm.svg";
import AppStoreLogo from "../../img/appstore-sm.svg";
import TwitterLogo from "../../img/twitter-sm.svg";
import FacebookLogo from "../../img/facebook-sm.svg";
import InstagramLogo from "../../img/instagram-sm.svg";
import MediumLogo from "../../img/medium-sm.svg";
import { useAppDispatch } from "../../app/hooks";
import { setContactOpened } from "../routing/routeSlice";

const Contact = () => {
  const wrappedRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener("mousedown", (e: MouseEvent) => {
      if (wrappedRef.current && !wrappedRef.current.contains(e.target as any))
        // console.log("outside is clicked");
        dispatch(setContactOpened(false));
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center z-50">
      <div
        ref={wrappedRef}
        className="dark:bg-basic-dark bg-white rounded-[20px] dark:text-white text-basic-dark shadow-[0_0_25px_rgba(0,0,0,0.25)] flex flex-col px-[14px] items-center pb-2.5"
      >
        <p className="text-special-red font-semibold text-[35px] pt-5 pb-[4px]">
          Contact Links
        </p>
        <button
          type="button"
          className="flex justify-center gap-[25px] items-center w-[278px] font-medium text-[22px] text-center border-b-[1px] py-5 border-[#B3B3B3]"
        >
          <img src={PlayStoreLogo} />
          <p>kismiapp</p>
        </button>
        <button
          type="button"
          className="flex justify-center gap-[25px] items-center w-[278px] font-medium text-[22px] text-center border-b-[1px] py-5 border-[#B3B3B3]"
        >
          <img src={AppStoreLogo} />
          <p>kismiapp</p>
        </button>
        <button
          type="button"
          className="flex justify-center gap-[25px] items-center w-[278px] font-medium text-[22px] text-center border-b-[1px] py-5 border-[#B3B3B3]"
        >
          <img src={TwitterLogo} />
          <p>@kismiapp</p>
        </button>
        <button
          type="button"
          className="flex justify-center gap-[25px] items-center w-[278px] font-medium text-[22px] text-center border-b-[1px] py-5 border-[#B3B3B3]"
        >
          <img src={FacebookLogo} />
          <p>@kismiapp</p>
        </button>
        <button
          type="button"
          className="flex justify-center gap-[25px] items-center w-[278px] font-medium text-[22px] text-center border-b-[1px] py-5 border-[#B3B3B3]"
        >
          <img src={InstagramLogo} />
          <p>@kismiapp</p>
        </button>
        <button
          type="button"
          className="flex justify-center gap-[25px] items-center w-[278px] font-medium text-[22px] text-center py-5"
        >
          <img src={MediumLogo} />
          <p>@kismiapp</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;
