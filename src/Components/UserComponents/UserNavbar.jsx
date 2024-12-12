import React from "react";
import { Link } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
