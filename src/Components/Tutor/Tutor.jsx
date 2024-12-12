import React from "react";
import UserNavbar from "../UserComponents/UserNavbar";
import { Outlet } from "react-router-dom";

const Tutor = () => {
  return (
    <div className="w-full h-screen flex flex-col ">
      <div className="w-full h-[8%] ">
        <UserNavbar login="tutor" />
      </div>
      <div className="w-full h-[92%] bg-base-200 flex justify-around items-center ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Tutor;
