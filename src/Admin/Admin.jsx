import React from "react";
import UserNavbar from "../Components/UserComponents/UserNavbar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="w-full h-screen flex flex-col ">
      <div className="w-full h-[8%] ">
        <UserNavbar login="admin" />
      </div>
      <div className="w-full h-[92%] bg-base-200 flex justify-around items-center ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
