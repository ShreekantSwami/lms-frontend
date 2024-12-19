import React from "react";
import UserNavbar from "../UserComponents/UserNavbar";
import { Outlet, useNavigate } from "react-router-dom";

const Tutor = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    navigate("/");
  }

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
