import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./components/SideBar"
import Dashboard from "./components/Dashboard"
import Login from "./pages/Login";
import SignUp from './pages/Signup';
import CheckIn from "./pages/Check-In-Out"
import Leaves from "./pages/Leaves";
import Profile from "./pages/Profile";
import Salary from "./pages/Salary";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"


const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />

      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkin" element={<CheckIn />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/salary" element={<Salary />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
