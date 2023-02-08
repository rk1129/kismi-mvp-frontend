import React from "react";
import DesktopBackground from "../../img/desktop-background.png";

const Background = ({
  lightOpacity,
  darkOpacity,
}: {
  lightOpacity: number;
  darkOpacity: number;
}) => {
  return (
    <div>
      <div
        className={` w-full h-screen fixed top-0 left-0 -z-10 bg-white opacity-${lightOpacity} dark:bg-black dark:opacity-${darkOpacity} `}
      />
      <img
        className="w-full h-screen fixed top-0 left-0 -z-20"
        src={DesktopBackground}
      />
    </div>
  );
};

export default Background;
