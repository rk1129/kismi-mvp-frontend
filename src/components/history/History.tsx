import React from "react";
import HistoryItem from "./HistoryItem";

const History = () => {
  return (
    <div className="px-[60px] py-7">
      <div className="bg-black bg-opacity-30 w-full rounded-[20px] dark:text-white text-basic-dark">
        <p className=" text-[50px] font-bold text-center pt-5 pb-[30px] border-b-[1px] w-full dark:border-[#6B6B6B]">
          History
        </p>
        <div className="w-full flex flex-col items-center px-2 py-4">
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
          <HistoryItem />
        </div>
      </div>
    </div>
  );
};

export default History;
