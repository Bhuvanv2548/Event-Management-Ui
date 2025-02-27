import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-black text-white h-full p-5 flex flex-col items-start">
      <FaBitcoin className="text-4xl text-purple-400 mb-3" />
      <h2 className="text-xl font-bold mb-5">Events</h2>
      <ul className="w-full">
        <li className="mb-3"><Link to="/" className="hover:text-purple-300">New Requests</Link></li>
        <li className="mb-3"><Link to="/event-details" className="hover:text-purple-300">Event Details</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;