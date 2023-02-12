import React from "react";

const ComingEventItem = () => {
  return (
    <div className="py-5 flex flex-col items-center border-b-[1px] px-7 border-b-[#B3B3B3]">
      <p className="text-[22px] font-medium text-center">
        Example Event will start on 03/03/2023
      </p>
      <div className="flex gap-[30px] mt-[10px]">
        <div className="flex flex-col gap-[7px]">
          <p className="text-[36px] font-semibold text-center">07</p>
          <p className="text-[15px] font-semibold text-center">DAYS</p>
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="text-[36px] font-semibold text-center">12</p>
          <p className="text-[15px] font-semibold text-center">HOURS</p>
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="text-[36px] font-semibold text-center">34</p>
          <p className="text-[15px] font-semibold text-center">MINS</p>
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="text-[36px] font-semibold text-center text-special-red">
            58
          </p>
          <p className="text-[15px] font-semibold text-center">SECS</p>
        </div>
      </div>
    </div>
  );
};

export default ComingEventItem;
