import React from "react";
import Background from "../common/Background";
import BlackLogo from "../../img/black-logo.svg";
import WhiteLogo from "../../img/white-logo.svg";
import FacebookLogo from "../../img/facebook.svg";
import TwitterLogo from "../../img/twitter.svg";
import TikTokLogo from "../../img/tiktok.svg";
import GoogleLogo from "../../img/google.svg";
import InstagramLogo from "../../img/instagram.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginSuccess, selectIsAuthenticated } from "./authSlice";
import { Link, Navigate } from "react-router-dom";

const Signup = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginSuccess());
  };
  if (isAuthenticated) return <Navigate to="/home" replace={true} />;
  return (
    <div className="w-full h-screen flex items-center justify-center rounded-[20px]">
      <Background lightOpacity={50} darkOpacity={50} />
      <div className="w-[576px] py-10 px-[60px] bg-white dark:bg-basic-dark flex flex-col items-center rounded-[20px]">
        <div className="relative h-[57px] w-[203px]">
          <div className="absolute right-0 top-0 ">
            <img src={WhiteLogo} />
          </div>
          <div className="absolute right-0 top-0 dark:hidden">
            <img src={BlackLogo} />
          </div>
        </div>
        <h1 className="text-basic-dark dark:text-white text-3xl mt-8 font-medium">
          Welcome to Kismi.app
        </h1>
        <form className="mt-[50px]" onSubmit={onSubmit}>
          <div>
            <div className="flex gap-4">
              <div>
                <p className="font-normal text-base text-basic-dark dark:text-white">
                  Name
                </p>
                <div className="mt-[10px] border-[1px] rounded-[10px] border-basic-dark dark:border-white py-4 px-5">
                  <input
                    className="outline-none bg-transparent text-white"
                    placeholder="Type Name"
                  />
                </div>
              </div>
              <div>
                <p className="font-normal text-base text-basic-dark dark:text-white">
                  Sir Name
                </p>
                <div className="mt-[10px] border-[1px] rounded-[10px] border-basic-dark dark:border-white py-4 px-5">
                  <input
                    className="outline-none bg-transparent text-white"
                    placeholder="Type Sir Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <p className="font-normal text-base text-basic-dark dark:text-white">
                  Gender
                </p>
                <div className="mt-[10px] border-[1px] rounded-[10px] border-basic-dark dark:border-white py-4 px-5">
                  <input
                    className="outline-none bg-transparent text-white"
                    placeholder="Select Your Gender"
                  />
                </div>
              </div>
              <div>
                <p className="font-normal text-base text-basic-dark dark:text-white">
                  Age
                </p>
                <div className="mt-[10px] border-[1px] rounded-[10px] border-basic-dark dark:border-white py-4 px-5">
                  <input
                    className="outline-none bg-transparent text-white"
                    placeholder="Ener Your Age"
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-[20px]">
              <p className="font-normal text-base text-basic-dark dark:text-white">
                E-mail Address
              </p>
              <div className="mt-[10px] w-full border-[1px] rounded-[10px] border-basic-dark dark:border-white py-4 px-5 flex justify-between items-center">
                <input
                  type="email"
                  className="outline-none bg-transparent text-basic-dark dark:text-white"
                  placeholder="Type Your E-mail Address"
                />
              </div>
            </div>
            <div className="w-full mt-[20px]">
              <p className="font-normal text-base text-basic-dark dark:text-white">
                Password
              </p>
              <div className="mt-[10px] w-full border-[1px] rounded-[10px] border-basic-dark dark:border-white py-4 px-5 flex justify-between items-center">
                <input
                  type="password"
                  className="outline-none bg-transparent text-basic-dark dark:text-white"
                  placeholder="Type Your Password"
                />
              </div>
            </div>
            <div className="w-full mt-[20px]">
              <p className="font-normal text-base text-basic-dark dark:text-white">
                Confirm Password
              </p>
              <div className="mt-[10px] w-full border-[1px] rounded-[10px] border-basic-dark dark:border-white py-4 px-5 flex justify-between items-center">
                <input
                  type="password"
                  className="outline-none bg-transparent text-basic-dark dark:text-white"
                  placeholder="Confirm Your password"
                />
              </div>
            </div>
          </div>
          <div className="py-[20px] flex flex-col gap-[10px]">
            <button
              type="submit"
              className="outline-none bg-special-red rounded-[10px] w-full py-4 text-white text-xl font-bold"
            >
              SIGN UP
            </button>
          </div>
          <div className="flex gap-[30px] justify-center">
            <button type="button">
              <img src={GoogleLogo} />
            </button>
            <button type="button">
              <img src={FacebookLogo} />
            </button>
            <button type="button">
              <img src={TwitterLogo} />
            </button>
            <button type="button">
              <img src={TikTokLogo} />
            </button>
            <button type="button">
              <img src={InstagramLogo} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
