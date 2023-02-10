import React, { useEffect, useRef } from "react";

const BuyKiss = ({
  setIsBuyKissOpened,
}: {
  setIsBuyKissOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as any)
    ) {
      setIsBuyKissOpened(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="absolute w-full h-screen top-0 left-0 bg-transparent blur-none z-20 flex items-center justify-center text-basic-dark dark:text-white">
      <div
        ref={wrapperRef}
        className="py-5 px-[30px] rounded-[20px] flex flex-col gap-[4] dark:bg-basic-dark bg-white w-[656px]"
      >
        <p className="text-center text-[35px] w-full">Buy Kisses</p>
        <div className="flex flex-col gap-2.5">
          <div className="flex w-full justify-between items-center px-2 border-b-[1px] border-[#B3B3B3] py-2.5">
            <p className="text-[22px] font-medium">100 kisses for $4.95</p>
            <button
              type="button"
              className="dark:text-basic-dark text-white py-2 px-14 dark:bg-white bg-basic-dark rounded-full text-[22px] font-semibold"
            >
              BUY
            </button>
          </div>
          <div className="flex w-full justify-between items-center px-2 border-b-[1px] border-[#B3B3B3] py-2.5">
            <p className="text-[22px] font-medium">200 kisses for $8.95</p>
            <button
              type="button"
              className="dark:text-basic-dark text-white py-2 px-14 dark:bg-white bg-basic-dark rounded-full text-[22px] font-semibold"
            >
              BUY
            </button>
          </div>
          <div className="flex w-full justify-between items-center px-2 border-b-[1px] border-[#B3B3B3] py-2.5">
            <p className="text-[22px] font-medium">500 kisses for $21.95</p>
            <button
              type="button"
              className="dark:text-basic-dark text-white py-2 px-14 dark:bg-white bg-basic-dark rounded-full text-[22px] font-semibold"
            >
              BUY
            </button>
          </div>
          <div className="flex w-full justify-between items-center px-2 border-b-[1px] border-[#B3B3B3] py-2.5">
            <p className="text-[22px] font-medium">1000 kisses for $39.95</p>
            <button
              type="button"
              className="dark:text-basic-dark text-white py-2 px-14 dark:bg-white bg-basic-dark rounded-full text-[22px] font-semibold"
            >
              BUY
            </button>
          </div>
          <div className="flex w-full justify-between items-center px-2 py-2.5">
            <p className="text-[22px] font-medium">2000 kisses for $79.95</p>
            <button
              type="button"
              className="dark:text-basic-dark text-white py-2 px-14 dark:bg-white bg-basic-dark rounded-full text-[22px] font-semibold"
            >
              BUY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyKiss;
