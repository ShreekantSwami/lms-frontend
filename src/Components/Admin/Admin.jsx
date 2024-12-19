import React, { useState, useEffect } from "react";
import UserNavbar from "../UserComponents/UserNavbar";
import {
  Link,
  Outlet,
  replace,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Button from "../Accessibility/Button";
import "./Admin.css";

const Admin = () => {
  const [animationClass, setAnimationClass] = useState("");
  const navigate = useNavigate();

  console.log(localStorage.getItem("tutorId"));

  useEffect(() => {
    localStorage.getItem("isAuthenticated") === "false"
      ? navigate("/", { replace: true })
      : setAnimationClass("zoom-out");
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-[8%]">
        <UserNavbar login="admin" />
      </div>
      <div className="w-full h-[92%] bg-base-200 flex justify-around items-center">
        <div className="w-full h-full flex justify-around gap-2">
          {/* Sidebar */}
          <div className="w-1/6 h-full">
            <div className="w-full h-full bg-base-100 p-5 flex flex-col justify-between">
              <div className="w-full h-fit flex flex-col space-y-5 gap-2">
                <Link to="CreateTutor" className="w-full">
                  <button className="w-full btn bg-base-200/80 text-xl text-purple-500">
                    Create Tutor
                    <span className="text-purple-700">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link to="/Admin">
                  <Button
                    text="Dashboard"
                    className="w-full btn-ghost bg-base-200/90"
                  />
                </Link>
                <Link to="MyTutor">
                  <Button
                    text="Tutors"
                    className="w-full btn-ghost bg-base-200/90"
                  />
                </Link>
              </div>
              <div className="w-full flex">
                <Link to="/UserLogout" className="w-full">
                  <Button
                    text="Logout"
                    className="w-full btn-ghost bg-red-600 text-white hover:rounded-full hover:text-red-600"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="w-5/6 h-full">
            <div className={`w-full h-full ${animationClass}`}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
