import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../../Assets/profile.jpg";
import Button from "../Accessibility/Button";
const UserNavbar = (props) => {
  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <Link className="text-lg font-bold font-poppins tracking-widest ">
          LMS
        </Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          {`${props.login}` === "false" && (
            <Link
              to="/UserRegister"
              className="btn btn-ghost rounded-btn  text-xl"
            >
              Register
            </Link>
          )}
          {`${props.login}` === "true" && (
            <Link to="/" className="btn btn-ghost rounded-btn text-xl">
              Login
            </Link>
          )}
          {`${props.login}` === "user" && (
            <div className="flex justify-center items-center  ">
              <button
                className="btn btn-ghost hover:text-white tooltip tooltip-bottom"
                data-tip="Show all courses"
              >
                Courses
              </button>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-[50%] w-fit"
                >
                  <div className="avatar">
                    <div className="w-[50px] h-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img alt="Profile" src={profilePhoto} className="" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link>Profile</Link>
                  </li>
                  <li>
                    <Link>My Learning</Link>
                  </li>
                  <li>
                    <Link to="/UserLogout">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {`${props.login}` === "tutor" && (
            <div className="flex justify-center items-center  ">
              {/* <Button text="Create Course" className="btn-ghost"></Button> */}
              <Link to="CreateCourse" className="w-full">
                <button className="w-full btn btn-outline rounded-xl text-xl ">
                  Create Course
                  <span className="text-purple-700">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
                    </svg>
                  </span>{" "}
                </button>
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-[50%] w-fit"
                >
                  <div className="avatar">
                    <div className="w-[50px] h-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img alt="Profile" src={profilePhoto} className="" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/Tutor/TutorProfile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/Tutor">My Dashboard</Link>
                  </li>
                  <li>
                    <Link>My Courses</Link>
                  </li>
                  <li>
                    <Link to="/UserLogout">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {`${props.login}` === "admin" && (
            <div className="flex justify-center items-center  ">
              <Button text="Create Course" className="btn-ghost"></Button>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost rounded-[50%] w-fit"
                >
                  <div className="avatar">
                    <div className="w-[50px] h-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img alt="Profile" src={profilePhoto} className="" />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/Admin/AdminProfile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/Admin">My Dashboard</Link>
                  </li>
                  <li>
                    <Link>My Courses</Link>
                  </li>
                  <li>
                    <Link to="/UserLogout">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
