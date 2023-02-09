import React, { useState } from "react";

const ColumnsSelector = ({
  min = 2,
  max = 6,
  setBodyNum,
}: {
  setBodyNum: React.Dispatch<React.SetStateAction<number>>;
  min?: number;
  max?: number;
}) => {
  const [selectedNum, setSelectedNum] = useState(Math.floor((max + min) / 2));
  const count = max - min + 1;
  const buttons: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    if (selectedNum - min !== i)
      buttons.push(
        <button
          key={i}
          type="button"
          onClick={() => {
            setSelectedNum(i + min), setBodyNum(i + min);
          }}
          className="outline-none flex-1 h-1"
        ></button>
      );
    else
      buttons.push(
        <button
          key={i}
          type="button"
          onClick={() => setSelectedNum(i + min)}
          className="outline-none flex-1 h-1 relative flex justify-center"
        >
          <div className="absolute -top-1 w-3 h-3 rounded-[50%] bg-special-red flex justify-center items-center ">
            <p className="text-white text-[12px]">{selectedNum}</p>
          </div>
        </button>
      );
  }
  return <div className="w-[148px] h-0.5 rounded bg-white flex">{buttons}</div>;
};

export default ColumnsSelector;
