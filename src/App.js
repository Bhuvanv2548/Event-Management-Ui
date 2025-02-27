import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import EventRequests from "./components/EventRequests";
import Sidebar from "./components/Sidebar";
import './index.css';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const isEventDetailsPage = location.pathname === "/event-details";

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-gradient-to-br from-black to-purple-900 text-white">
      <Sidebar className="w-full md:w-1/4 lg:w-1/5" />
      <div className="flex-1 overflow-auto p-5">
        {!isEventDetailsPage && (
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mt-20">
              <h1 className="text-2xl font-bold">Event Requests</h1>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="mt-20">
                <input 
                  type="text" 
                  placeholder="Search here" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-2 rounded bg-black text-white border border-purple-400 w-full md:w-auto"
                />
              </div>
              <span className="text-xl">ℹ️</span>
              <span className="text-xl">🔔</span>
              <div className="flex items-center gap-2">
                <img 
                  src={`${process.env.PUBLIC_URL}/Bhuvan_passportsize.jpg`} 
                  alt="Avatar" 
                  className="rounded-full w-10 h-10"
                />
                <span>Hi, Bhuvan!</span>
              </div>
            </div>
          </div>
        )}
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<EventRequests searchQuery={searchQuery} />} />
            <Route path="/event-details" element={<EventDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;