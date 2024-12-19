import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../Accessibility/Button";
import notification from "../Helper/notification.js";
import { ToastContainer } from "react-toastify";
const EnrollCourse = () => {
  const [fetchCourse, setFetchCourse] = useState({});
  const [filteredText, setFilteredText] = useState({});
  const [showData, setShowData] = useState({});
  const [visibleData, setVisibleData] = useState(false);

  const getCourses = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BaseURL}api/getAllCourses`
    );
    setFetchCourse(response.data);
  };
  const filterOut = (e) => {
    const { name, value } = e.target;

    if (value) {
      // Filter fetchCourse when value is not empty
      const filtering = fetchCourse.filter((item) => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.description.toLowerCase().includes(value.toLowerCase())
        );
      });

      setFetchCourse(filtering);
    } else {
      // Reset the state when value is empty
      getCourses();
    }
  };
  const show = async (courseId) => {
    if (courseId) {
      console.log("This is to be processed", courseId);
      const data = await axios.post(
        `${process.env.REACT_APP_BaseURL}api/getSpecificCourse`,
        { courseId: courseId }
      );
      setShowData(data.data.data);
      setVisibleData(true);
      const divs = document.createElement("videoDiv");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const sendData = {
      courseId: showData._id,
      userId: localStorage.getItem("tutorId"),
    };

    const response = await axios.post(
      `${process.env.REACT_APP_BaseURL}api/EnrollCourse`,
      sendData
    );

    notification("success", response.data.message);
  };
  useEffect(() => {
    setTimeout(() => {
      getCourses().then((response) => {
        // console.log("this is response data", response.data);
      });
      console.log("This is fetched data", fetchCourse);
    }, 2000);
    console.log("This is filtered data", filteredText);
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
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
      <div className="w-full h-[8%]">
        <UserNavbar login="user" />
      </div>
      <div className="w-full h-[92%] flex flex-col justify-around items-center gap-4 p-5">
        <div className="w-full h-[15%] ">
          <div class=" w-full h-full flex flex-col items-center justify-center">
            <div class="h-full flex flex-col items-center justify-center">
              <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                <form className="w-full h-full flex items-center">
                  <div class="relative  w-full flex  items-center justify-between rounded-md">
                    <svg
                      class="absolute left-2 block h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" class=""></circle>
                      <line
                        x1="21"
                        y1="21"
                        x2="16.65"
                        y2="16.65"
                        class=""
                      ></line>
                    </svg>
                    <input
                      type="name"
                      name="search"
                      onChange={filterOut}
                      class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-10 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="Search by title or description"
                    />
                  </div>

                  {/* <div class="grid grid-cols-1 gap-6 ">
                    <div class="flex flex-col">
                      <label
                        for="name"
                        class="text-sm font-medium text-stone-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Raspberry juice"
                        class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div class="flex flex-col">
                      <label
                        for="manufacturer"
                        class="text-sm font-medium text-stone-600"
                      >
                        Manufacturer
                      </label>

                      <select
                        id="manufacturer"
                        class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      >
                        <option>Cadberry</option>
                        <option>Starbucks</option>
                        <option>Hilti</option>
                      </select>
                    </div>

                    <div class="flex flex-col">
                      <label
                        for="date"
                        class="text-sm font-medium text-stone-600"
                      >
                        Date of Entry
                      </label>
                      <input
                        type="date"
                        id="date"
                        class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>

                    <div class="flex flex-col">
                      <label
                        for="status"
                        class="text-sm font-medium text-stone-600"
                      >
                        Status
                      </label>

                      <select
                        id="status"
                        class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      >
                        <option>Dispached Out</option>
                        <option>In Warehouse</option>
                        <option>Being Brought In</option>
                      </select>
                    </div>
                  </div> */}

                  <div class="grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                    <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                      Reset
                    </button>
                    <button class="rounded-lg bg-purple-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[85%] flex justify-around gap-6">
          <div className="w-4/5 h-full bg-white rounded-xl overflow-hidden">
            <div className="w-full h-full shadow-2xl p-6 bg-white">
              <div className="overflow-x-auto w-full h-full ">
                {/* {fetchCourse < 0 ? ( */}
                {fetchCourse.length > 0 ? (
                  <div className="w-full h-fit">
                    {/* Header Section */}
                    <div className="flex flex-col justify-center gap-5">
                      {fetchCourse.map((item, index) => (
                        <Link
                          key={item._id} // Key moved to the Link component
                          className="block hover:bg-gray-100 p-3 rounded-lg"
                          onClick={() => show(item._id)}
                        >
                          <div className="flex items-center space-x-5">
                            {/* Course Index */}
                            <p className="text-gray-500">{index + 1}</p>

                            {/* Video Preview */}
                            <div className="w-1/6">
                              <video
                                src={item.videoUrl}
                                className="rounded-lg w-full h-auto"
                              >
                                Your browser does not support the video tag.
                              </video>
                            </div>

                            {/* Course Details */}
                            <div className="w-5/6">
                              <p className="font-bold text-xl first-letter:uppercase">
                                {item.title}
                              </p>
                              <p className="text-gray-700 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <span className="size-52 loading loading-infinity loading-lg"></span>
                    <p className="flex items-center">No Records</p>
                  </div>
                )}
                {/* ) : (
                <div className=" ">
                  <span className="loading loading-infinity loading-lg"></span>
                </div>
              )} */}
              </div>
            </div>
          </div>
          {visibleData && (
            <div
              id="videoDiv"
              className="w-1/5 h-full bg-purple-500 rounded-2xl shadow-xl overflow-hidden relative p-2 flex flex-col justify-between items-center"
            >
              <div className="w-full h-full flex flex-col justify-between items-center">
                <div>
                  <video
                    src={showData.videoUrl}
                    controls
                    muted
                    autoPlay
                    loop
                    className="w-full max-h-[310px] overflow-hidden rounded-xl shadow-xl"
                  ></video>
                  <div className="py-5 flex flex-col gap-5">
                    <p className="font-bold ">
                      <span className="text-white text-3xl">Title:</span>
                      <br />
                      <p className="first-letter:uppercase text-stone-200 tracking-wider">
                        {showData.title}
                      </p>
                    </p>
                    <p className="font-bold">
                      <span className="text-white text-2xl  ">
                        Description:
                      </span>
                      <br />
                      <p className="first-letter:uppercase text-stone-200 tracking-wider">
                        {showData.description}
                      </p>
                    </p>
                  </div>
                </div>
                <form
                  className="w-5/6  flex items-center justify-around my-10"
                  onSubmit={submitHandler}
                >
                  <Button
                    text="Close"
                    className="w-[30%] btn-outline text-white rounded-xl"
                    onClick={() => {
                      console.log("hi");
                      setVisibleData(false);
                    }}
                  />
                  <Button
                    type="submit"
                    text="Enroll"
                    className="w-[60%] rounded bottom-10 left-52"
                  />
                </form>
              </div>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollCourse;
