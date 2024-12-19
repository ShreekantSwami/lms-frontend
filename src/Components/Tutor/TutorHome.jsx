import React from "react";
import { useNavigate } from "react-router-dom";

const TutorHome = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (isAuthenticated === "false") {
    navigate("/");
  }

  return (
    <>
      {/* <div className="w-1/6 h-full bg-base-100 flex flex-col space-y-5 gap-2 p-5">
        <Link to="CreateCourse" className="w-full">
          <button className="w-full btn bg-base-200/80 text-xl text-purple-500">
            Create Course
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
            </span>{" "}
          </button>
        </Link>
        <Button text="Dashboard" className="btn-ghost bg-base-200/90"></Button>
        <Button text="My Courses" className="btn-ghost bg-base-200/90"></Button>
        <Button text="Settings" className="btn-ghost bg-base-200/90"></Button>
      </div> */}
      <div className="w-full h-full bg-base-200/50 py-5 px-10 flex flex-col  ">
        {/* Dashboard */}
        {/* Top portion */}
        <div className="w-full h-[10%] flex flex-col justify-center gap-2">
          <span className="font-semibold text-gray-500">Dashboard</span>
          <p className="flex gap-2">
            <span className="font-bold">Monday</span>
            <span className="text-stone-400">02 March 2024</span>
          </p>
        </div>
        {/* middle portion */}
        <div className="w-full h-[25%] bg-purple-500 rounded-box p-10 flex flex-col justify-center">
          <h1 className="text-6xl font-medium text-white">Hello, Shree</h1>

          <h4 className="mt-2 text-gray-100">Ready to start your day?</h4>
        </div>
        {/* Middle Bottom */}
        <div className="py-5 w-full h-[25%] flex flex-col justify-between">
          <p className="w-full h-[10%] text-lg font-semibold text-gray-500">
            Overview
          </p>
          <div className="w-full h-[80%] flex justify-around items-center gap-2 ">
            <div className="w-1/3 h-full rounded-box  bg-yellow-500 flex items-center gap-3 p-10 shadow-lg">
              <span className="text-white bg-white/10 p-5 rounded shadow">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 16 16"
                  height="2.5em"
                  width="2.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"></path>
                  <path
                    fill-rule="evenodd"
                    d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="text-white font-semibold flex flex-col gap-2">
                <span className="text-xl">Total Courses</span>
                <span className="text-sm">50</span>
              </div>{" "}
            </div>
            <div className="w-1/3 h-full rounded-box  bg-green-500 flex items-center gap-3 p-10 shadow-lg">
              <span className="text-white bg-white/10 p-5 rounded shadow">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="2.5em"
                  width="2.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
                </svg>
              </span>
              <div className="text-white font-semibold flex flex-col gap-2">
                <span className="text-xl">Total student enrolled</span>
                <span className="text-sm">50</span>
              </div>{" "}
            </div>
            <div className="w-1/3 h-full rounded-box  bg-blue-500 flex items-center gap-3 p-10 shadow-lg">
              <span className="text-white bg-white/10 p-5 rounded shadow">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="2.5em"
                  width="2.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="text-white font-semibold flex flex-col gap-2">
                <span className="text-xl">Private Courses</span>
                <span className="text-sm">50</span>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="w-full max-h-[40%] overflow-hidden overflow-y-scroll rounded-lg shadow-lg">
          <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
            <div>
              <h3 class="text-lg font-semibold text-slate-800">
                Generated Invoice for this Month
              </h3>
              <p class="text-slate-500">Overview of the invoices.</p>
            </div>
            <div class="ml-3">
              <div class="w-full max-w-sm min-w-[200px] relative">
                <div class="relative">
                  <input
                    class="bg-white w-full pr-11 h-10 pl-3 py-2  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                    placeholder="Search for invoice..."
                  />
                  <button
                    class="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      class="w-8 h-8 text-slate-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <table class="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">
                      Invoice Number
                    </p>
                  </th>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">
                      Customer
                    </p>
                  </th>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">
                      Amount
                    </p>
                  </th>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">
                      Issued
                    </p>
                  </th>
                  <th class="p-4 border-b border-slate-300 bg-slate-50">
                    <p class="block text-sm font-normal leading-none text-slate-500">
                      Due Date
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="block font-semibold text-sm text-slate-800">
                      INV-1001
                    </p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">John Doe</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">$1,200.00</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">2024-08-01</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">2024-08-15</p>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="block font-semibold text-sm text-slate-800">
                      INV-1002
                    </p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">Jane Smith</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">$850.00</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">2024-08-05</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">2024-08-20</p>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="block font-semibold text-sm text-slate-800">
                      INV-1003
                    </p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">Acme Corp</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">$2,500.00</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">2024-08-07</p>
                  </td>
                  <td class="p-4 border-b border-slate-200 py-5">
                    <p class="text-sm text-slate-500">2024-08-21</p>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 py-5">
                    <p class="block font-semibold text-sm text-slate-800">
                      INV-1004
                    </p>
                  </td>
                  <td class="p-4 py-5">
                    <p class="text-sm text-slate-500">Global Inc</p>
                  </td>
                  <td class="p-4 py-5">
                    <p class="text-sm text-slate-500">$4,750.00</p>
                  </td>
                  <td class="p-4 py-5">
                    <p class="text-sm text-slate-500">2024-08-10</p>
                  </td>
                  <td class="p-4 py-5">
                    <p class="text-sm text-slate-500">2024-08-25</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorHome;
