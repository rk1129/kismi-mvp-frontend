import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";

enum HeaderItems {
  PHOTOS = "Photos",
  SAVED_FOR_LATER = "Saved Fot Later",
  DRAFTS = "Drafts",
}

const TabHeaderItems = ({
  headerItems,
  setSelectedHeader,
  selecteHeader,
}: {
  headerItems: string[];
  setSelectedHeader: React.Dispatch<React.SetStateAction<string>>;
  selecteHeader: string;
}) => {
  return (
    <>
      {headerItems.map((header, index) => (
        <button
          key={index}
          type="button"
          className={`${
            selecteHeader === header
              ? "border-t-[3px] font-semibold"
              : "border-none font-normal"
          }  dark:border-white border-basic-dark py-5 px-2 text-2xl`}
          onClick={() => setSelectedHeader(header)}
        >
          {header}
        </button>
      ))}
    </>
  );
};

const TabView = () => {
  const [selectedHeader, setSelectedHeader] = useState("Photos");
  return (
    <div className="w-full relative">
      <div className="absolute border-t-[3px] border-[#878787] rounded top-0 w-full -z-20" />
      <div className="flex justify-center gap-[53px]">
        <TabHeaderItems
          selecteHeader={selectedHeader}
          headerItems={Object.values(HeaderItems)}
          setSelectedHeader={setSelectedHeader}
        />
      </div>
      <div className="pt-2.5 grid grid-cols-4 gap-5">
        <button
          type="button"
          className="dark:bg-basic-dark bg-[#B3B3B3] flex flex-col items-center justify-center rounded-[10px]"
        >
          <p className="text-[60px]">+</p>
          <p className="font-medium text-2xl">Add Photo</p>
        </button>
        <ProfilePicture />
        <ProfilePicture />
        <ProfilePicture />
        <ProfilePicture />
        <ProfilePicture />
        <ProfilePicture />
        <ProfilePicture />
      </div>
    </div>
  );
};

export default TabView;
