import React, { useEffect } from "react";
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  useEffect(() => {
    if (isAuthenticated === "false") {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-base-200">
      <div className="w-full h-[10%]">
        <UserNavbar login="user" />
      </div>
      <div className="w-full h-[90%] p-10 flex flex-col items-center">
        <p className="text-3xl font-bold w-full">Recently Viewed</p>
        <hr className="outline-none border-none bg-base-100 h-[3px] w-full my-5" />
        <div className="w-[80%] h-[300px] px-10 flex items-center justify-around gap-3">
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
