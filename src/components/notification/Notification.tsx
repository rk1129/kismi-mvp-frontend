import React, { useRef, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { setIsnotificationOpened } from "../routing/routeSlice";
import AchivementNotification from "./AchivementNotification";
import GetNotificationItem from "./GetNotificationItem";

const Notification = ({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
}) => {
  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as any) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as any)
    ) {
      dispatch(setIsnotificationOpened(false));
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="absolute w-full flex justify-center z-30 top-20">
      <div
        ref={wrapperRef}
        className="bg-white w-10/12 max-w-[678px] rounded-b-xl px-5 py-2.5 shadow-lg shadow-black-500/50"
      >
        <GetNotificationItem />
        <GetNotificationItem />
        <GetNotificationItem />
        <GetNotificationItem />
        <AchivementNotification />
        <GetNotificationItem />
        <GetNotificationItem />
        <AchivementNotification />
        <p className="text-center font-semibold text-xl py-2.5">See more</p>
      </div>
    </div>
  );
};

export default Notification;
