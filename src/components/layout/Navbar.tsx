import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIsAuthenticated } from "../auth/authSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SmallLogo from "../../img/small-logo.svg";
import UserAvatar from "../../img/user-avatar.png";
import Notification from "../notification/Notification";
import {
  selectIsNotificationOpened,
  setIsnotificationOpened,
} from "../routing/routeSlice";
import WhiteVector from "../../img/vector-white.png";

const Navbar = () => {
  const wrappedRef = useRef<HTMLDivElement>(null);
  const [moreViewVisible, setMoreViewVisible] = useState(false);
  const isNotificationOpened = useAppSelector(selectIsNotificationOpened);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    document.addEventListener("mousedown", (e: MouseEvent) => {
      if (wrappedRef.current && !wrappedRef.current.contains(e.target as any))
        setMoreViewVisible(false);
    });
  }, []);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  if (isAuthenticated === false) return <></>;

  const onProfileBtnClicked = () => {
    setMoreViewVisible(false);
    return navigate("/profile");
  };

  const onFaqsBtnClicked = () => {
    setMoreViewVisible(false);
    return navigate("/faq");
  };

  return (
    <div className="w-full">
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
          <Link
            to="/kissbox"
            replace={true}
            className="text-basic-dark text-2xl font-normal"
          >
            KISSBOX
          </Link>
        </div>
        <div ref={wrappedRef} className="relative flex gap-[30px] items-center">
          {moreViewVisible && (
            <div className="absolute dark:bg-basic-dark rounded-[20px] z-50 top-2 left-[-70px] w-[213px] py-2.5 px-4 dark:text-white text-basic-dark flex-col flex">
              <button
                type="button"
                className="flex justify-between items-center py-4 border-b-[1px] border-[#B3B3B3]"
                onClick={onProfileBtnClicked}
              >
                <p className="text-[22px] font-medium">Profile</p>
                <img src={WhiteVector} className="w-2.5 h-4" />
              </button>
              <button
                type="button"
                className="flex justify-between items-center py-4 border-b-[1px] border-[#B3B3B3]"
              >
                <p className="text-[22px] font-medium">Wallet</p>
                <img src={WhiteVector} className="w-2.5 h-4" />
              </button>
              <button
                type="button"
                className="flex justify-between items-center py-4 border-b-[1px] border-[#B3B3B3]"
                onClick={onFaqsBtnClicked}
              >
                <p className="text-[22px] font-medium">FAQs</p>
                <img src={WhiteVector} className="w-2.5 h-4" />
              </button>
              <button
                type="button"
                className="flex justify-between items-center py-4 border-b-[1px] border-[#B3B3B3]"
              >
                <p className="text-[22px] font-medium">Setting</p>
                <img src={WhiteVector} className="w-2.5 h-4" />
              </button>
              <button
                type="button"
                className="flex justify-between items-center py-4 border-b-[1px] border-[#B3B3B3]"
              >
                <p className="text-[22px] font-medium">Contact</p>
                <img src={WhiteVector} className="w-2.5 h-4" />
              </button>
              <button
                type="button"
                className="flex justify-between items-center py-4"
              >
                <p className="text-[22px] font-medium">Sign Out</p>
                <img src={WhiteVector} className="w-2.5 h-4" />
              </button>
            </div>
          )}
          <p className="text-special-red text-2xl font-semibold">985 Kisses</p>
          <button
            type="button"
            onClick={() => setMoreViewVisible(!moreViewVisible)}
          >
            <img className="w-[50px] h-[50px] rounded-[50%]" src={UserAvatar} />
          </button>
        </div>
      </div>
      <div className="absolute w-full h-screen dark:bg-[#2f2f2f] bg-basic-light top-0 left-0 -z-10"></div>

      {isNotificationOpened ? <Notification buttonRef={buttonRef} /> : <></>}
    </div>
  );
};

export default Navbar;
