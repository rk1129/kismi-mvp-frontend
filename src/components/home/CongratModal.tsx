import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectCongratNotification,
  setCongratNotificationVisible,
} from "./homeSlice";

const CongratModal = () => {
  const wrappedRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const isCongratModalVisible = useAppSelector(selectCongratNotification);

  useEffect(() => {
    window.addEventListener("mousedown", (e: MouseEvent) => {
      if (wrappedRef.current && !wrappedRef.current.contains(e.target as any))
        dispatch(setCongratNotificationVisible());
    });
  }, []);

  if (isCongratModalVisible === false) return <></>;

  return (
    <div className="flex justify-center items-center absolute w-full h-screen bg-transparent z-[999]">
      <div
        ref={wrappedRef}
        className="px-[112px] py-[50px]  bg-[#E9E9E9] dark:bg-[#202020] rounded-[20px] drop-shadow-[0_0_25px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] flex flex-col justify-center"
      >
        <p className="text-special-red font-semibold text-[100px]">
          CONGRATULATIONS
        </p>
        <p className="mt-[17px] dark:text-white text-basic-dark text-center font-semibold text-[45px]">
          You have won the competition
        </p>
        <div className="flex justify-center">
          <button className="mt-[44px] rounded-full bg-special-red text-white py-5 px-[60px] text-[30px]">
            CLAIM REWARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratModal;
