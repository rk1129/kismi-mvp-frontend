import React, { useEffect, useState } from "react";
import ColumnsSelector from "../common/ColumnSelector";
import ViewItem from "../common/ViewItem";

const Home = () => {
  const [selectedNum, setSelecteNum] = useState(4);

  return (
    <div className="w-full overflow-auto flex flex-col items-center py-11 gap-5">
      <p className="text-white font-bold text-[50px]">COMPETITION ROUND 001</p>
      <div className="w-full flex flex-col items-center gap-[10px]">
        <p className="font-semibold text-[30px] text-white">
          Current Round Timer
        </p>
        <div className="flex gap-10">
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[50px] font-semibold text-white">07</p>
            <p className="text-[20px] font-semibold text-white">DAYS</p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[50px] font-semibold text-white">12</p>
            <p className="text-[20px] font-semibold text-white">HOURS</p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[50px] font-semibold text-white">34</p>
            <p className="text-[20px] font-semibold text-white">MINS</p>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <p className="text-[50px] font-semibold text-special-red">58</p>
            <p className="text-[20px] font-semibold text-white">SECS</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-lg text-white font-medium">Columns</p>
          <ColumnsSelector setBodyNum={setSelecteNum} />
        </div>
        <div
          className={`w-full grid grid-cols-${selectedNum} gap-${
            18 - selectedNum * 2
          } px-[60px]`}
        >
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
          <ViewItem />
        </div>
        <div className="grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 gap-6 gap-8 gap-10 gap-12 gap-14" />
      </div>
    </div>
  );
};

export default Home;
