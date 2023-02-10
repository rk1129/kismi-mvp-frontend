import React from "react";
import UserAvatar from "../../img/user-avatar.png";

const GetNotificationItem = () => {
  return (
    <div className="w-full flex items-center px-5 py-2.5 gap-5 border-b-[1px] border-[#DEDEDE]">
      <div className="flex-none">
        <img className="w-[50px] h-[50px] rounded-full" src={UserAvatar} />
      </div>
      <p className="text-xl text-basic-dark flex-1">
        <b>Username</b> gave you a kiss.
      </p>
      <p className="text-xl text-basic-dark flex-none font-semibold">2:36 AM</p>
    </div>
  );
};

export default GetNotificationItem;
