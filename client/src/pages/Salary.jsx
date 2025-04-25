import React, { useEffect, useState } from "react";
import axios from "axios";

const Salary = () => {
  const [salaryData, setSalaryData] = useState(null);
  const [error, setError] = useState(null);

  const userId = 'your-user-id'; // replace this with actual user ID dynamically

  useEffect(() => {
    const fetchSalary = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/salary/${userId}`);
        setSalaryData(res.data);
      } catch (err) {
        console.error("Error fetching salary:", err);
        setError("Could not load salary info.");
      }
    };

    fetchSalary();
  }, []);

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-orange-600 mb-6">Salary Details</h1>
      {error && <p className="text-red-600">{error}</p>}
      {salaryData ? (
        <div className="bg-white p-6 shadow rounded-lg space-y-3">
          <p><strong>Monthly Salary:</strong> {salaryData.amount}</p>
          <p><strong>Last Paid:</strong> {salaryData.lastPaid}</p>
          <p><strong>Status:</strong> {salaryData.status}</p>
        </div>
      ) : (
        <p>Loading salary data...</p>
      )}
    </div>
  );
};

export default Salary;
