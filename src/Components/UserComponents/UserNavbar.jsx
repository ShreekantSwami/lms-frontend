import React from "react";
import { Link } from "react-router-dom";
import profilePhoto from "../../Assets/profile.jpg";
const UserNavbar = (props) => {
  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold font-poppins tracking-widest ">LMS</a>
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
            <div
              className="flex justify-center items-center tooltip tooltip-bottom "
              data-tip="Show all courses"
            >
              <button className="btn btn-ghost hover:text-white">
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
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
