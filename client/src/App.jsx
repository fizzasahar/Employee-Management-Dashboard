import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import SignUp from './pages/Signup';
import CheckIn from "./pages/Check-In-Out";
import Leaves from "./pages/Leaves";
import Profile from "./pages/Profile";
import Salary from "./pages/Salary";
import ProtectedRoute from './components/ProtectedRoute'; // import karo
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} />

      <div className="flex">
        {isAuthenticated && <Sidebar />}

        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/checkin" element={
            <ProtectedRoute><CheckIn /></ProtectedRoute>
          } />
          <Route path="/leaves" element={
            <ProtectedRoute><Leaves /></ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          } />
          <Route path="/salary" element={
            <ProtectedRoute><Salary /></ProtectedRoute>
          } />
        </Routes>
      </div>
    </>
  );
};

export default App;
