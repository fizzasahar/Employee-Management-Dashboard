import React, { useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const Leaves = () => {
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("");
  const userId = 'your-user-id'; // Replace this with actual logged-in user ID

  const applyLeave = async () => {
    try {
      const response = await axios.post(`${apiUrl}api/leaves/${userId}`, {
        userId,
        reason
      });

      if (response.status === 201) {
        setStatus("Pending Approval");
        alert("Leave Applied Successfully!");
        setReason(""); // clear the input
      }
    } catch (err) {
      console.error("Error applying for leave:", err);
      alert("Failed to apply for leave.");
    }
  };

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-orange-600 mb-4">Leave Application</h1>

      <textarea
        placeholder="Enter leave reason..."
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full p-4 border rounded mb-4"
      />

      <button onClick={applyLeave} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Apply Leave
      </button>

      <div className="mt-6">
        <p><strong>Leave Status:</strong> {status}</p>
      </div>
    </div>
  );
};

export default Leaves;
