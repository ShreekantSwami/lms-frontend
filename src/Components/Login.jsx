import axios from "axios";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import notification from "./Helper/notification";
import UserNavbar from "./UserComponents/UserNavbar";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
console.log(process.env.REACT_APP_BaseURL);
try {
  const response = await axios.post(
    `${process.env.REACT_APP_BaseURL}api/checkUser`,
    formData
  );
  localStorage.setItem("tutorId", response.data.checkUser._id);
  notification("success", response.data.message, 2000);
  setTimeout(() => {
    navigate("/UserDashboard");
  }, 3000);
} catch (error) {
  notification("error", error.response.data.message);
} 
  };
  return (
    <div className="w-full h-full bg-base-200 flex flex-col justify-center items-center ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="w-full h-[10%]">
        <UserNavbar login="false" />
      </div>{" "}
      <div className="w-full h-[90%] flex justify-center items-center">
        <div className="w-[30%] h-fit  bg-base-100 p-10 rounded-xl shadow-xl">
          <h1 className="w-full text-6xl font-secondFont text-center">
            User Login
          </h1>
          <br />
          <form
            method="post"
            onSubmit={submitHandler}
            className="w-full h-fit flex flex-col gap-2"
          >
            <label className="flex flex-col text-xl ">
              <p className="p-2"> Username:</p>
              <input
                onChange={changeHandler}
                className=" input  input-bordered font-bold border-2 px-3 py-2 rounded-lg placeholder:text-sm focus:ring-2 ring-purple-400"
                placeholder="Enter email address "
                type="email"
                name="email"
                required
              />
            </label>

            <label className="flex flex-col text-xl ">
              <div className="flex justify-between items-center">
                <p className="p-2">Password:</p>
                {/* <Link to="/forgotPassword"> */}
                <Link>
                  <p className="text-sm text-red-600 cursor-not-allowed">
                    Forgot password?
                  </p>
                </Link>
              </div>{" "}
              <input
                onChange={changeHandler}
                className=" input  input-bordered border-2 px-3 py-2 rounded-lg placeholder:text-sm font-bold focus:ring-2 ring-purple-400"
                placeholder="Enter password "
                type="password"
                name="password"
                required
              />
            </label>

            <br />
            <button className="btn text-white bg-purple-400 w-[30%] hover:text-stone-700 hover:font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
