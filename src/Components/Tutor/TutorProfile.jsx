import React from "react";
import { useNavigate } from "react-router-dom";

const TutorProfile = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    navigate("/");
  }

  return <div>TutorProfile</div>;
};

export default TutorProfile;
