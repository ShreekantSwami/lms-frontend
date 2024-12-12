import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import UserRegister from "./Components/UserComponents/UserRegister";
import ForgotPassword from "./Components/ForgotPassword";
import UserDashboard from "./Components/UserComponents/UserDashboard";
import UserLogout from "./Components/UserComponents/UserLogout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserRegister" element={<UserRegister />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/UserLogout" element={<UserLogout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
