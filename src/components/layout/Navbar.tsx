import React, { useEffect, useRef, useState } from "react";
import Background from "../common/Background";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "../auth/authSlice";
import { Link, Navigate } from "react-router-dom";
import SmallLogo from "../../img/small-logo.svg";
import UserAvatar from "../../img/user-avatar.png";
import Notification from "../notification/Notification";
import {
  selectIsNotificationOpened,
  setIsnotificationOpened,
} from "../routing/routeSlice";

const Navbar = () => {
  const isNotificationOpened = useAppSelector(selectIsNotificationOpened);
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);

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
          <button
            ref={buttonRef}
            type="button"
            className="text-basic-dark text-2xl font-normal"
            onClick={() =>
              dispatch(setIsnotificationOpened(!isNotificationOpened))
            }
          >
            NOTIFICATION
          </button>
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
      {isNotificationOpened ? <Notification buttonRef={buttonRef} /> : <></>}
    </div>
  );
};

export default Navbar;
