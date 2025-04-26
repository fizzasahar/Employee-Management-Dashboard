import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt, FaCalendarCheck, FaSuitcase, FaMoneyBill } from "react-icons/fa";
const Sidebar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) return null; // agar login nahi, to sidebar mat dikhao

  return (
    <div className="fixed md:static top-0 left-0 h-full w-64 bg-black text-white p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">Employee Panel</h2>
      <nav className="space-y-4">
        <Link to="/dashboard" className="flex items-center gap-3 hover:text-orange-400"><FaHome /> Dashboard</Link>
        <Link to="/checkin" className="flex items-center gap-3 hover:text-orange-400"><FaCalendarCheck /> Check-In/Out</Link>
        <Link to="/leaves" className="flex items-center gap-3 hover:text-orange-400"><FaSuitcase /> Leaves</Link>
        <Link to="/profile" className="flex items-center gap-3 hover:text-orange-400"><FaUser /> Profile</Link>
        <Link to="/salary" className="flex items-center gap-3 hover:text-orange-400"><FaMoneyBill /> Salary</Link>
        <Link to="/logout" className="flex items-center gap-3 mt-10 text-red-400 hover:text-red-600"><FaSignOutAlt /> Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
