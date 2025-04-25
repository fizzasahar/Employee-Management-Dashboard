// pages/CheckIn.js
import React, { useState } from "react";

const CheckIn = () => {
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);

  const handleCheckIn = () => {
    setCheckInTime(new Date().toLocaleTimeString());
  };

  const handleCheckOut = () => {
    setCheckOutTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="flex-1 p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-orange-600">Check-In / Check-Out</h1>
      <div className="mt-6 flex gap-6">
        <button onClick={handleCheckIn} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Check In</button>
        <button onClick={handleCheckOut} className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Check Out</button>
      </div>
      <div className="mt-6 space-y-4">
        {checkInTime && <p><strong>Checked In At:</strong> {checkInTime}</p>}
        {checkOutTime && <p><strong>Checked Out At:</strong> {checkOutTime}</p>}
      </div>
    </div>
  );
};

export default CheckIn;
