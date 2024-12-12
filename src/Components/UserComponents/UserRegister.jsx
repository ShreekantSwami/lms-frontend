import React, { useState } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notification from "../Helper/notification";
import Button from "../Accessibility/Button";
const UserRegister = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
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
    try {
      const data = await axios.post(
        "http://localhost:1402/api/saveUser",
        formData
      );
      notification("success", "Data saved successfully");
    } catch (error) {
      notification("error");
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
        <UserNavbar login="true" />
      </div>{" "}
      <div className="w-full h-[90%] flex justify-center items-center">
        <div className="w-[30%] h-fit  bg-base-100 p-10 rounded-xl shadow-xl">
          <h1 className="w-full text-6xl font-secondFont text-center">
            User Registration
          </h1>
          <br />
          <form
            method="post"
            onSubmit={submitHandler}
            className="w-full h-fit flex flex-col gap-2"
          >
            <label className="flex flex-col text-lg ">
              First Name:
              <input
                onChange={changeHandler}
                className="input input-bordered px-3 py-2 rounded-lg placeholder:text-sm font-normal focus:ring-2 ring-purple-400"
                placeholder="Enter your first name "
                type="text"
                name="fname"
                required
              />
            </label>

            <label className="flex flex-col text-lg ">
              Last Name:
              <input
                onChange={changeHandler}
                className=" input  input-bordered border-2 px-3 py-2 rounded-lg placeholder:text-sm font-normal focus:ring-2 ring-purple-400"
                placeholder="Enter your last name "
                type="text"
                name="lname"
                required
              />
            </label>

            <label className="flex flex-col text-lg ">
              Email:
              <input
                onChange={changeHandler}
                className=" input  input-bordered border-2 px-3 py-2 rounded-lg placeholder:text-sm font-normal focus:ring-2 ring-purple-400"
                placeholder="Enter email address "
                type="email"
                name="email"
                required
              />
            </label>

            <label className="flex flex-col text-lg ">
              Password:
              <input
                onChange={changeHandler}
                className=" input  input-bordered border-2 px-3 py-2 rounded-lg placeholder:text-sm font-normal focus:ring-2 ring-purple-400"
                placeholder="Enter password "
                type="password"
                name="password"
                required
              />
            </label>
            <label className="flex flex-col text-lg ">
              Confirm password:
              <input
                onChange={changeHandler}
                className=" input  input-bordered border-2 px-3 py-2 rounded-lg placeholder:text-sm font-normal focus:ring-2 ring-purple-400"
                placeholder="Re-enter your password "
                type="password"
                name="confirmPassword"
                required
              />
            </label>
            <br />
            {/* <button className="btn text-white bg-purple-400">Submit</button> */}
            <Button
              text="Submit"
              className="text-white bg-purple-400 w-[30%]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
