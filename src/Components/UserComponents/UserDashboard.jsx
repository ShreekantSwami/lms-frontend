import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./zoom.css";
import Button from "../Accessibility/Button";
const UserDashboard = () => {
  const [VideoUrl, setVideoUrl] = useState("");
  const userId = localStorage.getItem("tutorId");
  const [fetchMyCourses, setFetchMyCourses] = useState({});
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const fetchCourses = async () => {
    const data = await axios.post(
      `${process.env.REACT_APP_BaseURL}api/GetUserCourses`,
      { userId: userId }
    );
    console.log("This is fetching recent data", data.data.courses);
    setFetchMyCourses(data.data.courses);
  };
  useEffect(() => {
    fetchCourses();
    // setTimeout(() => {
    //   console.log("This is fetchMy Course", fetchMyCourses);
    // }, 2000);
    if (isAuthenticated === "false") {
      navigate("/");
    }
  }, []);

  return (
    <div className="w-full h-full flex flex-col bg-base-200">
      <div className="w-full h-[10%]">
        <UserNavbar login="user" />
      </div>
      <div className="w-full h-[90%] p-10 flex flex-col items-center">
        {/* Only View if the user recently viewed something */}

        {/* <p className="text-3xl font-bold w-full">Recently Viewed</p>
        <hr className="outline-none border-none bg-base-100 h-[3px] w-full my-5" />
        <div className="w-[80%] h-[300px] px-10 flex items-center justify-around gap-3">
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
          <div className="w-1/4 h-full bg-white rounded-xl hover:shadow-xl hover:scale-[1.03] "></div>
        </div> */}

        <p className="text-3xl font-bold w-full">My Courses</p>
        <hr className="outline-none border-none bg-base-100 h-[3px] w-full my-5" />
        <div className="w-full h-full flex justify-around items-center gap-3 overflow-hidden">
          <div className="w-1/6 h-full rounded-2xl shadow-xl bg-base-100 overflow-hidden">
            <div class="w-full h-full  bg-white p-6 shadow-lg overflow-hidden">
              <form autoComplete="off">
                <div class="relative mb-10 w-full flex  items-center justify-between rounded-md">
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
                    <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
                  </svg>
                  <input
                    type="name"
                    name="search"
                    // onChange={filterOut}
                    class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Search by name , type, manufacturer, etc"
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

                <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
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
          <div className="w-5/6 h-full rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full h-full flex flex-wrap  overflow-hidden overflow-y-scroll">
              {fetchMyCourses.length > 0 ? (
                <>
                  {console.log("Getting data", fetchMyCourses)}
                  {fetchMyCourses.map((course) => (
                    <div className="card h-fit rounded-2xl card-compact w-80 m-5  bg-base-100 shadow-xl opacity-70 hover:opacity-100 hover:scale-[1.01]">
                      <figure>
                        <video src={`${course.videoUrl}`} className="" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title line-clamp-2">{`${course.title}`}</h2>
                        <p className="line-clamp-2">{`${course.description}`}</p>
                        {/* <p>{`${course.userId}`}</p> */}
                        <div className="card-actions justify-end">
                          <button
                            className="btn bg-purple-600 text-white rounded-2xl shadow-xl"
                            onClick={() => {
                              document.getElementById("my_modal_3").showModal();
                              setVideoUrl(`${course.videoUrl}`);
                            }}
                          >
                            Watch
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"></path>
                            </svg>
                          </button>
                          <dialog
                            id="my_modal_3"
                            className="modal w-screen h-screen"
                          >
                            <div className="bg-white min-w-1/2 min-h-1/2 relative">
                              <form
                                method="dialog"
                                className="p-10 w-full h-full absolute "
                              >
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-2 text-white z-10">
                                  ✕
                                </button>
                              </form>
                              <video
                                className="w-full h-full"
                                src={VideoUrl}
                                controls
                                muted
                                loop
                                autoPlay
                              ></video>
                            </div>
                          </dialog>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                "No Courses Found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
