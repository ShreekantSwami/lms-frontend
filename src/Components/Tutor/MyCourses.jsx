import React from "react";
import Button from "../Accessibility/Button";
import UserNavbar from "../UserComponents/UserNavbar";
import { Link, Outlet } from "react-router-dom";

const MyCourses = () => {
  return (
    <div className="w-full h-full flex gap-2 p-5 ">
      <div className=" w-1/6 h-full rounded-2xl border-2 border-stone-100 shadow-xl overflow-hidden z-10">
        <div className="w-full h-full overflow-hidden flex flex-col justify-center items-center">
          <div className="w-full h-[250px] flex justify-center items-center text-6xl bg-white">
            <p className="drop-shadow-[8px_5px_5px_grey] hover:tracking-[15px] ">
              LMS
            </p>
          </div>
          <div className="w-full h-[calc(100%-250px)] ">
            <Link to="">
              <div className="w-full hover:bg-gradient-to-r from-purple-600 to-purple-300 transition-colors duration-1000 flex justify-center items-center ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M3.211 9.967c-2.29 0-2.617 1.49-2.832 2.393C.093 13.538 0 14.02 0 14.02h8.947c2.29 0 2.617-1.492 2.832-2.394.285-1.178.379-1.66.379-1.66zM15.72 2.259H6.983L6.26 6.307l7.885.01c3.885 0 5.03 1.41 4.997 3.748-.019 1.196-.537 3.225-.762 3.884-.598 1.753-1.827 3.749-6.436 3.744l-7.666-.004-.725 4.052h8.718c3.076 0 4.38-.36 5.768-.995 3.071-1.426 4.899-4.455 5.633-8.41C24.76 6.448 23.404 2.26 15.72 2.26Z"></path>
                </svg>
                <Button
                  text="Dashboard"
                  className="w-[80%] btn-ghost flex justify-start hover:text-white"
                ></Button>
              </div>
            </Link>

            <Link to="MyCourses/TutorCourseDashboard">
              <div className="w-full hover:bg-gradient-to-r from-purple-600 to-purple-300 transition-colors duration-1000 flex justify-center items-center ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M3.211 9.967c-2.29 0-2.617 1.49-2.832 2.393C.093 13.538 0 14.02 0 14.02h8.947c2.29 0 2.617-1.492 2.832-2.394.285-1.178.379-1.66.379-1.66zM15.72 2.259H6.983L6.26 6.307l7.885.01c3.885 0 5.03 1.41 4.997 3.748-.019 1.196-.537 3.225-.762 3.884-.598 1.753-1.827 3.749-6.436 3.744l-7.666-.004-.725 4.052h8.718c3.076 0 4.38-.36 5.768-.995 3.071-1.426 4.899-4.455 5.633-8.41C24.76 6.448 23.404 2.26 15.72 2.26Z"></path>
                </svg>
                <Button
                  text="Courses"
                  className="w-[80%] btn-ghost flex justify-start hover:text-white"
                ></Button>
              </div>
            </Link>
            <div className="w-full hover:bg-gradient-to-r from-purple-600 to-purple-300 transition-colors duration-1000 flex justify-center items-center ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M3.211 9.967c-2.29 0-2.617 1.49-2.832 2.393C.093 13.538 0 14.02 0 14.02h8.947c2.29 0 2.617-1.492 2.832-2.394.285-1.178.379-1.66.379-1.66zM15.72 2.259H6.983L6.26 6.307l7.885.01c3.885 0 5.03 1.41 4.997 3.748-.019 1.196-.537 3.225-.762 3.884-.598 1.753-1.827 3.749-6.436 3.744l-7.666-.004-.725 4.052h8.718c3.076 0 4.38-.36 5.768-.995 3.071-1.426 4.899-4.455 5.633-8.41C24.76 6.448 23.404 2.26 15.72 2.26Z"></path>
              </svg>
              <Button
                text="Students"
                className="w-[80%] btn-ghost flex justify-start hover:text-white"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-5/6 h-full rounded-2xl  shadow-2xl overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MyCourses;
