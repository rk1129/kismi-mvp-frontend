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
      <div className="dark:bg-opacity-80 dark:bg-opacity-50 bg-opacity-50 bg-opacity-60 bg-opacity-100" />
      <div
        className={`w-full h-screen fixed top-0 left-0 -z-10 ${
          lightOpacity === 100 ? "bg-basic-light" : "bg-white"
        } bg-white bg-opacity-${lightOpacity} dark:bg-black dark:bg-opacity-${darkOpacity} `}
      />
      <img
        className="w-full h-screen fixed top-0 left-0 -z-20"
        src={DesktopBackground}
      />
    </div>
  );
};

export default Background;
