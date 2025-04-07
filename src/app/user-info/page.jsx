import React from "react";
import UserSideBar from "../components/user-info/UserSideBar";
import UserInfo from "../components/user-info/UserInfo";

const page = () => {
  return (
    <div className="w-full px-[20vw] py-[132px] gap-7 h-fit flex flex-row bg-white">
      <UserSideBar />
      <UserInfo />
    </div>
  );
};

export default page;
