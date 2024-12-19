// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Tutors = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [tutors, setTutors] = useState([]);
//   // const navigating = () => {
//   // };
//   const checking = () => {
//     const datas = localStorage.getItem("isAuthenticated");
//     datas !== "true" ? navigate("/") : "";
//   };
//   useEffect(() => {
//     checking();
//   }, []);

//   // Fetch tutors data from an API or a database
//   useEffect(() => {
//     // Replace this with your actual API or database call
//     const fetchTutors = async () => {
//       const response = await fetch("https://api.example.com/tutors");
//       const data = await response.json();
//       setTutors(data);
//     };

//     fetchTutors();
//   }, []);

//   // Filter tutors based on the search query
//   const filteredTutors = tutors.filter((tutor) =>
//     tutor.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Sort tutors based on the selected column
//   const sortTutors = (column) => {
//     // Replace this with your actual sorting logic
//     const sortedTutors = [...filteredTutors].sort((a, b) =>
//       a[column] > b[column] ? 1 : -1
//     );
//     setTutors(sortedTutors);
//   };

//   // Paginate tutors
//   const tutorsPerPage = 10;
//   const indexOfLastTutor = currentPage * tutorsPerPage;
//   const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
//   const currentTutors = filteredTutors.slice(
//     indexOfFirstTutor,
//     indexOfLastTutor
//   );

//   return (
//     <div className="w-full h-full bg-white rounded-xl overflow-hidden">
//       <div class="w-full h-full flex flex-col">
//         <div class="w-full h-full">
//           <div class="inline-block min-w-full h-full py-2 sm:px-6 lg:px-8">
//             <div class="w-full h-full">
//               <table class="min-w-full h-[5%]  text-left text-sm font-light text-surface dark:text-white">
//                 <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
//                   <tr>
//                     <th scope="col" class="px-6 py-4">
//                       #
//                     </th>
//                     <th scope="col" class="px-6 py-4">
//                       First
//                     </th>
//                     <th scope="col" class="px-6 py-4">
//                       Last
//                     </th>
//                     <th scope="col" class="px-6 py-4">
//                       Handle
//                     </th>
//                   </tr>
//                 </thead>
//               </table>
//               <div className="w-full h-[95%] overflow-hidden overflow-y-scroll">
//                 <table class="min-w-full h-full text-left text-sm font-light text-surface dark:text-white">
//                   <tbody className="overflow-hidden overflow-y-scroll">
//                     {currentTutors.map((tutor) => (
//                       <tr
//                         key={tutor.id}
//                         class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
//                       >
//                         <td class="whitespace-nowrap px-6 py-4 font-medium">
//                           {tutor.id}
//                         </td>
//                         <td class="whitespace-nowrap px-6 py-4">
//                           {tutor.first_name}
//                         </td>
//                         <td class="whitespace-nowrap px-6 py-4">
//                           {tutor.last_name}
//                         </td>
//                         <td class="whitespace-nowrap px-6 py-4">
//                           {tutor.handle}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tutors;

import React from "react";

const Tutors = () => {
  return <div>Tutors</div>;
};

export default Tutors;
