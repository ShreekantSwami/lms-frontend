import axios from "axios";
import React, { useEffect, useState } from "react";

const TutorCourseDashboard = () => {
  const [fetchCourse, setFetchCourse] = useState({});
  const [filteredText, setFilteredText] = useState({});

  const getCourses = async () => {
    const tutor = localStorage.getItem("tutorId");
    const response = await axios.post(
      `${process.env.REACT_APP_BaseURL}api/getCoursesById`,
      { tutorId: tutor }
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
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col gap-2 overflow-hidden">
        <div className="w-full h-1/6 overflow-hidden rounded-lg border-4 border-stone-100 shadow-xl px-10 flex  items-center">
          <h1 className="text-4xl font-bold">My Courses</h1>
        </div>
        <div className="w-full h-5/6 overflow-hidden rounded-lg  shadow-xl flex  items-center ">
          <div className="w-2/6 h-full z-10 overflow-hidden shadow-2xl">
            <div class="w-full h-full overflow-hidden">
              <div class="w-full h-full flex flex-col overflow-hidden">
                <div class="w-full h-full   bg-white p-6 shadow-lg overflow-hidden">
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
            </div>
          </div>
          <div className="w-4/6 h-[95%] shadow-2xl p-6 bg-white">
            <div className="overflow-x-auto w-full h-full ">
              {/* {fetchCourse < 0 ? ( */}
              {fetchCourse.length > 0 ? (
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fetchCourse.map((item, index) => (
                      <tr key={item.id}>
                        <th>{index + 1}</th>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
      </div>
    </div>
  );
};

export default TutorCourseDashboard;
