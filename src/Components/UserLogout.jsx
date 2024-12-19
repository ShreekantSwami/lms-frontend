import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("tutorId");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1>Thanks for using</h1>
      <h3>See you soon!</h3>
    </div>
  );
};

export default UserLogout;
