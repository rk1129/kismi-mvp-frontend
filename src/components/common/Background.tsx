import React from "react";
import DesktopBackground from "../../img/desktop-background.png";

const Background = () => {
  return (
    <div>
      <div className="w-full h-screen fixed top-0 left-0 -z-10 bg-white opacity-60 dark:bg-black dark:opacity-80" />
      <img
        className="w-full h-screen fixed top-0 left-0 -z-20"
        src={DesktopBackground}
      />
    </div>
  );
};

export default Background;
