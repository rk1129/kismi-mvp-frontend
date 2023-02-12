import React from "react";
import ComingEventItem from "./ComingEventItem";
import EndEventItem from "./EndEventItem";

const Kissbox = () => {
  return (
    <div className="w-full py-10 px-[60px] dark:text-white text-basic-dark flex flex-col items-center gap-[18px]">
      <p className="font-bold text-[50px]">Kissbox</p>
      <p className="font-semibold text-2xl ">Top Contestants</p>
      <div className="flex gap-9 justify-center w-full max-w-[1400px]">
        <div className="dark:bg-[#0D0D0D] bg-[#D1D1D1] flex-1 rounded-[20px] pb-[17px] flex items-center flex-col px-6">
          <p className="font-bold text-[50px] pt-10">Past Events</p>
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
          <EndEventItem />
        </div>
        <div className="dark:bg-[#0D0D0D] bg-[#D1D1D1] flex-1 rounded-[20px] pb-[17px] flex items-center flex-col px-6">
          <p className="font-bold text-[50px] pt-10 pb-1.5">Upcomming Events</p>
          <ComingEventItem />
          <ComingEventItem />
          <ComingEventItem />
          <ComingEventItem />
        </div>
      </div>
    </div>
  );
};

export default Kissbox;
