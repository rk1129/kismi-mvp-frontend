import React, { useState } from "react";
import UserAvatar from "../../img/user-avatar.png";
import LightSettingImg from "../../img/light-setting.svg";
import DarkSettingImg from "../../img/dark-setting.svg";
import TabView from "./TabView";
import DarkDownVectorImg from "../../img/dark-down-vector.svg";
import LightDownVecorImg from "../../img/light-down-vector.svg";
import BuyKiss from "./BuyKiss";

const Profile = () => {
  const [isBuyKissOpened, setIsBuyKissOpened] = useState(false);
  return (
    <>
      {isBuyKissOpened && <BuyKiss setIsBuyKissOpened={setIsBuyKissOpened} />}

      <div
        className={`w-full p-[60px] flex flex-col gap-[34px] dark:text-white text-basic-dark ${
          isBuyKissOpened ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="w-full flex justify-center gap-[100px] py-12 bg-black bg-opacity-30 rounded-[20px]">
          <img src={UserAvatar} className="w-[220px] h-[220px] rounded-full" />
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between items-center px-4">
              <p className="font-semibold text-[35px]">Username</p>
              <button
                type="button"
                className="text-lg font-semibold dark:text-[#222222] text-white dark:bg-white bg-basic-dark rounded-full py-2 px-7"
              >
                Edit profile
              </button>
              <div className="relative">
                <img src={LightSettingImg} />
                <img
                  className="absolute top-0 left-0 dark:hidden"
                  src={DarkSettingImg}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-[10px] items-center">
                <p className="text-[50px]  font-semibold">07</p>
                <p className="text-xl">Total Photos</p>
              </div>
              <div className="flex flex-col gap-[10px] items-center">
                <p className="text-[50px] font-semibold">12</p>
                <p className="text-xl">Kisses Received</p>
              </div>
              <div className="flex flex-col gap-[10px] items-center">
                <p className="text-[50px] font-semibold">34</p>
                <p className="text-xl">Kiss Given</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-semibold text-[25px]">User’s Name</p>
              <p className="text-base max-w-[523px] min-w-[450]">
                BIO Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </p>
            </div>
            <div className="flex gap-[30px]">
              <button
                type="button"
                className="border-[1px] border-white py-3 bg-transparent rounded-full flex-1 text-lg font-semibold px-6"
                onClick={() => setIsBuyKissOpened(true)}
              >
                Buy Kisses
              </button>
              <button
                type="button"
                className="border-[1px] dark:border-white border-basic-dark py-3 dark:bg-white bg-basic-dark rounded-full flex-1 dark:text-basic-dark text-white text-lg font-semibold px-6 flex items-center justify-between"
              >
                Get more
                <div className="relative">
                  <img src={DarkDownVectorImg} />
                  <img
                    className="absolute top-0 left-0 dark:hidden"
                    src={LightDownVecorImg}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <TabView />
      </div>
    </>
  );
};

export default Profile;
