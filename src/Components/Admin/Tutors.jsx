import React from "react";
import { useNavigate } from "react-router-dom";

const Tutors = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    navigate("/");
  }

  return (
    <div>
      <div>this is </div>
      <div>nothing</div>
    </div>
  );
};

export default Tutors;
