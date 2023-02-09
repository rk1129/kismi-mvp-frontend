import React from "react";
import Background from "../common/Background";
import { useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "../auth/authSlice";
import { Link, Navigate } from "react-router-dom";
import SmallLogo from "../../img/small-logo.svg";
import UserAvatar from "../../img/user-avatar.png";

const Navbar = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated === false) return <></>;
  return (
    <div className="w-full">
      <Background lightOpacity={100} darkOpacity={80} />
      <div className="w-full h-20 bg-white px-[60px] flex items-center justify-between">
        <img className="w-[138px] h-10" src={SmallLogo} />
        <div className="flex gap-[50px]">
          <Link
            to="/home"
            replace={true}
            className="text-basic-dark text-2xl font-semibold"
          >
            HOME
          </Link>
          <Link
            to="/notification"
            replace={true}
            className="text-basic-dark text-2xl font-normal"
          >
            NOTIFICATION
          </Link>
          <Link
            to="/history"
            replace={true}
            className="text-basic-dark text-2xl font-normal"
          >
            HISTORY
          </Link>
        </div>
        <div className="flex gap-[30px] items-center">
          <p className="text-special-red text-2xl font-semibold">985 Kisses</p>
          <img className="w-[50px] h-[50px] rounded-[50%]" src={UserAvatar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
