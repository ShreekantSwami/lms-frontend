import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import UserRegister from "./Components/UserComponents/UserRegister";
import ForgotPassword from "./Components/ForgotPassword";
import UserDashboard from "./Components/UserComponents/UserDashboard";
import UserLogout from "./Components/UserComponents/UserLogout";
import Admin from "./Admin/Admin";
import AdminProfile from "./Admin/AdminProfile";
import AdminHome from "./Admin/AdminHome";
import Tutor from "./Components/Tutor/Tutor";
import TutorHome from "./Components/Tutor/TutorHome";
import TutorProfile from "./Components/Tutor/TutorProfile";
import CreateCourse from "./Components/Tutor/CreateCourse";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserLogout" element={<UserLogout />} />
        <Route path="/Admin" element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path="AdminProfile" element={<AdminProfile />} />
        </Route>
        <Route path="/Tutor" element={<Tutor />}>
          <Route index element={<TutorHome />} />
          <Route path="TutorProfile" element={<TutorProfile />} />
          <Route path="CreateCourse" element={<CreateCourse />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
