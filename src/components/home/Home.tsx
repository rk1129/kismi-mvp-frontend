import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ColumnsSelector from "../common/ColumnSelector";
import ViewItem from "../common/ViewItem";
import { setIsnotificationOpened } from "../routing/routeSlice";
import CongratModal from "./CongratModal";
import { selectIsBlur } from "./homeSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const isBlur = useAppSelector(selectIsBlur);

  useEffect(() => {
    dispatch(setIsnotificationOpened(false));
  }, []);

  const [selectedNum, setSelecteNum] = useState(4);

  return (
    <>
      <CongratModal />
      <div
        className={`w-full overflow-auto flex flex-col items-center py-11 gap-5 text-basic-dark dark:text-white ${
          isBlur === true ? "blur-sm" : ""
        }`}
      >
        <p className="font-bold text-[50px]">COMPETITION ROUND 001</p>
        <div className="w-full flex flex-col items-center gap-[10px]">
          <p className="font-semibold text-[30px]">Current Round Timer</p>
          <div className="flex gap-10 dark:text-white text-black">
            <div className="flex flex-col items-center gap-[10px]">
              <p className="text-[50px] font-semibold">07</p>
              <p className="text-[20px] font-semibold">DAYS</p>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <p className="text-[50px] font-semibold">12</p>
              <p className="text-[20px] font-semibold">HOURS</p>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <p className="text-[50px] font-semibold">34</p>
              <p className="text-[20px] font-semibold">MINS</p>
            </div>
            <div className="flex flex-col items-center gap-[10px]">
              <p className="text-[50px] font-semibold text-special-red">58</p>
              <p className="text-[20px] font-semibold">SECS</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-lg font-medium">Columns</p>
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
    </>
  );
};

export default Home;
