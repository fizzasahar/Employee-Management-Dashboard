import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState({
    user: {},
    lastAttendance: {},
    recentLeaves: [],
    salary: {}
  });
  const userId = 'your-user-id'; // Replace with actual user ID

  useEffect(() => {
    // Fetch dashboard data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/dashboard/${userId}`);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Welcome Back, {data.user.name}!</h1>
      <p className="text-gray-600 mt-2">Here's a quick summary of your day 👇</p>

      {/* Check-in/Check-out Time */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Check-In Time</h2>
          <p className="text-green-500 text-lg font-bold">{data.lastAttendance ? data.lastAttendance.checkIn : "N/A"}</p>
        </div>
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Check-Out Time</h2>
          <p className="text-red-500 text-lg font-bold">{data.lastAttendance ? data.lastAttendance.checkOut : "N/A"}</p>
        </div>
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Leave Status</h2>
          <p className="text-yellow-500 font-medium">{data.recentLeaves.length > 0 ? "Pending Approval" : "No Pending Leaves"}</p>
        </div>
      </div>

      {/* Profile Summary and Salary */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Profile Summary</h2>
          <p><strong>Name:</strong> {data.user.name}</p>
          <p><strong>Gender:</strong> {data.user.gender}</p>
          <p><strong>Department:</strong> {data.user.department}</p>
        </div>

        <div className="bg-white p-5 shadow rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Salary Info</h2>
          <p><strong>Monthly Salary:</strong> Rs. {data.salary ? data.salary.amount : "N/A"}</p>
          <p><strong>Status:</strong> {data.salary ? (data.salary.status === "Paid" ? "Paid ✅" : "Pending") : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
