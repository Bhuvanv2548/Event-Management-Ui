import React, { useState } from "react";

const EventRequests = ({ searchQuery }) => {
  const events = [
    { eventName: "Bhuvan Verma", eventStart: "Feb 26, 2025", eventEnd: "Feb 27, 2025", clientName: "Muhammad Asad", contactInfo: "+91 62835 74089", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Spiderweb Name", eventStart: "Feb 25, 2025", eventEnd: "Feb 27, 2025", clientName: "Hafeez Ali", contactInfo: "+91 33234 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvantwo Name", eventStart: "Jan 12, 2025", eventEnd: "Jan 14, 2025", clientName: "Rohit Sharma", contactInfo: "+91 98976 45450", venue: "CP Delhi" },
    { eventName: "Filled Name", eventStart: "Jan 12, 2024", eventEnd: "Jan 14, 2024", clientName: "Mohit Garg", contactInfo: "+91 89685 72038", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Shubham Sharma", eventStart: "March 25, 2024", eventEnd: "March 27, 2024", clientName: "Ishaank Gupta", contactInfo: "+91 79672 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvnesh Dhiman", eventStart: "Jan 05, 2025", eventEnd: "Jan 08, 2025", clientName: "Vaibhav Shahi", contactInfo: "+91 98888 46750", venue: "Jalandhar, Punjab" },
    { eventName: "Second Name", eventStart: "Jan 23, 2024", eventEnd: "Jan 25, 2024", clientName: "Tanish Mahajan", contactInfo: "+91 89685 44332", venue: "Khanna, Ludhiana, Punjab" }, 
    { eventName: "Bhuvan Verma", eventStart: "Feb 26, 2025", eventEnd: "Feb 27, 2025", clientName: "Muhammad Asad", contactInfo: "+91 62835 74089", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Spiderweb Name", eventStart: "Feb 25, 2025", eventEnd: "Feb 27, 2025", clientName: "Hafeez Ali", contactInfo: "+91 33234 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvantwo Name", eventStart: "Jan 12, 2025", eventEnd: "Jan 14, 2025", clientName: "Rohit Sharma", contactInfo: "+91 98976 45450", venue: "CP Delhi" },
    { eventName: "Filled Name", eventStart: "Jan 12, 2024", eventEnd: "Jan 14, 2024", clientName: "Mohit Garg", contactInfo: "+91 89685 72038", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Shubham Sharma", eventStart: "March 25, 2024", eventEnd: "March 27, 2024", clientName: "Ishaank Gupta", contactInfo: "+91 79672 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvnesh Dhiman", eventStart: "Jan 05, 2025", eventEnd: "Jan 08, 2025", clientName: "Vaibhav Shahi", contactInfo: "+91 98888 46750", venue: "Jalandhar, Punjab" },
    { eventName: "Second Name", eventStart: "Jan 23, 2024", eventEnd: "Jan 25, 2024", clientName: "Tanish Mahajan", contactInfo: "+91 89685 44332", venue: "Khanna, Ludhiana, Punjab" },    
    { eventName: "Bhuvan Verma", eventStart: "Feb 26, 2025", eventEnd: "Feb 27, 2025", clientName: "Muhammad Asad", contactInfo: "+91 62835 74089", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Spiderweb Name", eventStart: "Feb 25, 2025", eventEnd: "Feb 27, 2025", clientName: "Hafeez Ali", contactInfo: "+91 33234 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvantwo Name", eventStart: "Jan 12, 2025", eventEnd: "Jan 14, 2025", clientName: "Rohit Sharma", contactInfo: "+91 98976 45450", venue: "CP Delhi" },
    { eventName: "Filled Name", eventStart: "Jan 12, 2024", eventEnd: "Jan 14, 2024", clientName: "Mohit Garg", contactInfo: "+91 89685 72038", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Shubham Sharma", eventStart: "March 25, 2024", eventEnd: "March 27, 2024", clientName: "Ishaank Gupta", contactInfo: "+91 79672 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvnesh Dhiman", eventStart: "Jan 05, 2025", eventEnd: "Jan 08, 2025", clientName: "Vaibhav Shahi", contactInfo: "+91 98888 46750", venue: "Jalandhar, Punjab" },
    { eventName: "Second Name", eventStart: "Jan 23, 2024", eventEnd: "Jan 25, 2024", clientName: "Tanish Mahajan", contactInfo: "+91 89685 44332", venue: "Khanna, Ludhiana, Punjab" },       
    { eventName: "Bhuvan Verma", eventStart: "Feb 26, 2025", eventEnd: "Feb 27, 2025", clientName: "Muhammad Asad", contactInfo: "+91 62835 74089", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Spiderweb Name", eventStart: "Feb 25, 2025", eventEnd: "Feb 27, 2025", clientName: "Hafeez Ali", contactInfo: "+91 33234 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvantwo Name", eventStart: "Jan 12, 2025", eventEnd: "Jan 14, 2025", clientName: "Rohit Sharma", contactInfo: "+91 98976 45450", venue: "CP Delhi" },
    { eventName: "Filled Name", eventStart: "Jan 12, 2024", eventEnd: "Jan 14, 2024", clientName: "Mohit Garg", contactInfo: "+91 89685 72038", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Shubham Sharma", eventStart: "March 25, 2024", eventEnd: "March 27, 2024", clientName: "Ishaank Gupta", contactInfo: "+91 79672 78654", venue: "Lorem Ipsum Dolor Sit Amet" },
    { eventName: "Bhuvnesh Dhiman", eventStart: "Jan 05, 2025", eventEnd: "Jan 08, 2025", clientName: "Vaibhav Shahi", contactInfo: "+91 98888 46750", venue: "Jalandhar, Punjab" },
    { eventName: "Second Name", eventStart: "Jan 23, 2024", eventEnd: "Jan 25, 2024", clientName: "Tanish Mahajan", contactInfo: "+91 89685 44332", venue: "Khanna, Ludhiana, Punjab" },    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredEvents = events.filter(event =>
    Object.values(event).some(value =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  return (
    <div>
      <table className="w-full text-left border-collapse border border-purple-500">
        <thead>
          <tr className="bg-purple-600 text-white" >
            <th className="p-2 border border-purple-400 text-2xl">Event Name</th>
            <th className="p-2 border border-purple-400 text-2xl">Event Start</th>
            <th className="p-2 border border-purple-400 text-2xl">Event End</th>
            <th className="p-2 border border-purple-400 text-2xl">Client Name</th>
            <th className="p-2 border border-purple-400 text-2xl">Contact Info</th>
            <th className="p-2 border border-purple-400 text-2xl">Venue</th>
          </tr>
        </thead>
        <tbody>
            { currentEvents.map((event, index) => (
          <tr key={index} className="border border-purple-500 h-16 font-medium">
              <td className="p-4 border border-purple-400 text-lg">{event.eventName}</td>
              <td className="p-4 border border-purple-400 text-lg">{event.eventStart}</td>
              <td className="p-4 border border-purple-400 text-lg">{event.eventEnd}</td>
              <td className="p-4 border border-purple-400 text-lg">{event.clientName}</td>
              <td className="p-4 border border-purple-400 text-lg">{event.contactInfo}</td>
              <td className="p-4 border border-purple-400 text-lg">{event.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 text-white">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 mx-1 border border-purple-400 rounded ${currentPage === index + 1 ? 'bg-purple-600' : ''}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default EventRequests;