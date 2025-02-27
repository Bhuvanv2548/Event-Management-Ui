import React, { useState } from "react";

const EventDetails = () => {
  const [selectedRoom, setSelectedRoom] = useState(1);
  return (
    <div className="p-5">
      <div className="bg-purple-800 bg-opacity-25 p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Event Name (Venue Details)</h1>
        <div className="flex justify-between mb-4 border-b border-purple-500 pb-2">
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-black-600 rounded-lg">Event Details</button>
            <button className="px-4 py-2 bg-purple-600 rounded-lg">Assign Coordinator/Coordinator</button>
            <button className="px-4 py-2 bg-black-600 rounded-lg">Session Management</button>
            <button className="px-4 py-2 bg-black-600 rounded-lg">Generate SOW</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
            <h2 className="text-lg font-semibold">Assign Coordinator</h2>
            
            <select
              placeholder="Search Coordinator" 
              className="w-full p-2 rounded bg-black bg-opacity-15 text-white border border-purple-400 mt-2"
            >
               <option className="bg-gray-950 text-white" value="" disabled selected>
                  Select a Coordinator
                </option>
                <option className="bg-gray-950 text-white">Bhuvan Verma</option>
                <option className="bg-gray-950 text-white">Coordinator 2</option>
            </select>
            <button className="mt-2 text-purple-300">Add New Coordinator</button>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Event Information</h2>
            <div className="bg-black p-4 rounded-lg mt-2">
              <p>Start: 12-12-2023</p>
              <p>Ends: 15-12-2023</p>
              <p>Venue Address: Some Location 12, Name Here, City, State.</p>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold mt-5">Assign Contractor</h2>
      <div className=" flex gap-4 mt-4">
      <div className="bg-black p-5 rounded-lg shadow-lg w-1/2">
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5].map((room) => (
              <div
                key={room}
                className={`p-4 rounded-lg border ${selectedRoom === room ? 'bg-pink-500 text-black' : 'border-purple-400 text-white'}`}
                onClick={() => setSelectedRoom(room)}
              >
                <h3 className="font-semibold">Meeting Room {room} | 12 Positions</h3>
                <p className="text-sm">Start from 12 Jan, 2023 - Ends at 15 Jan, 2023</p>
              </div>
            ))}
       </div>
      </div>
      <div className="w-1/2">
            <table className="w-full text-left border-collapse border border-purple-500">
              <thead>
                <tr className="bg-purple text-white">
                  <th className="p-2 border border-purple-400">Position</th>
                  <th className="p-2 border border-purple-400">Time</th>
                  <th className="p-2 border border-purple-400">Info</th>
                  <th className="p-2 border border-purple-400">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(7)].map((_, index) => (
                  <tr key={index} className="border border-purple-500">
                    <td className="p-2 border border-purple-400">Camera {index + 1} (Video)</td>
                    <td className="p-2 border border-purple-400">9 am - 7 pm</td>
                    <td className="p-2 border border-purple-400">LP default</td>
                    <td className="p-2 border border-purple-400 flex justify-between items-center">
                      <span className="mr-4">20</span>
                      <select className="bg-black text-white border border-purple-400 p-1 rounded-lg">
                        <option>Select Contractor</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="px-5 py-2 bg-pink-600 rounded-lg">Save Edits</button>
        </div>
      </div>
      </div>
  );
};

export default EventDetails;