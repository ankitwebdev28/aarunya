import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    name: "Cultural",
    description: "Experience the vibrancy of cultural events!",
    eventDetails: {
      title: "Analog Mastery",
      venue: "SAC",
      prize: "3000",
      date: "15 Feb 2025",
      time: "11AM - 1PM",
      description:
        "Analog Mastery is a competitive event that challenges participants in analog circuit design, testing both theoretical knowledge and practical simulation skills using LTSpice.",
      image:
        "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    name: "Technical",
    description: "Explore innovative technical events and challenges!",
    eventDetails: {
      title: "Tech Innovators",
      venue: "Tech Hall",
      prize: "5000",
      date: "20 Feb 2025",
      time: "2PM - 4PM",
      description:
        "A hands-on event where participants build and test the latest tech innovations.",
      image:
        "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    name: "Session & Workshop",
    description: "Engage in insightful sessions and hands-on workshops!",
    eventDetails: {
      title: "Workshop 101",
      venue: "Workshop Room",
      prize: "2000",
      date: "25 Feb 2025",
      time: "10AM - 12PM",
      description:
        "Join us for an interactive session on modern technologies and innovations.",
      image:
        "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    name: "Cultural",
    description: "Experience the vibrancy of cultural events!",
    eventDetails: {
      title: "Analog Mastery",
      venue: "SAC",
      prize: "3000",
      date: "15 Feb 2025",
      time: "11AM - 1PM",
      description:
        "Analog Mastery is a competitive event that challenges participants in analog circuit design, testing both theoretical knowledge and practical simulation skills using LTSpice.",
      image:
        "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    name: "Technical",
    description: "Explore innovative technical events and challenges!",
    eventDetails: {
      title: "Tech Innovators",
      venue: "Tech Hall",
      prize: "5000",
      date: "20 Feb 2025",
      time: "2PM - 4PM",
      description:
        "A hands-on event where participants build and test the latest tech innovations.",
      image:
        "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    },
  },
  {
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    name: "Session & Workshop",
    description: "Engage in insightful sessions and hands-on workshops!",
    eventDetails: {
      title: "Workshop 101",
      venue: "Workshop Room",
      prize: "2000",
      date: "25 Feb 2025",
      time: "10AM - 12PM",
      description:
        "Join us for an interactive session on modern technologies and innovations.",
      image:
        "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    },
  },
];

function Cultural() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openDialog = (event) => {
    setSelectedEvent(event);
    setIsVisible(true);
  };

  return (
    <div className="bg-[#1c1c1c] flex flex-col justify-center items-center pt-10 pb-6 md:py-20 overflow-hidden min-h-screen">
      <h1 className="mb-8 text-[#fff] text-3xl md:text-6xl font-semibold text-center font-seagram">
        Cultural Events
      </h1>

      <div className="flex justify-center w-full px-4 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 max-w-5xl">
          {cards.map((event, index) => (
            <motion.div
              key={index}
              className="relative w-80 bg-gradient-to-b from-[#212121] to-[#121212] backdrop-blur-lg border border-gray-600/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:translate-y-[-10px] ease-in-out cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              onClick={() => openDialog(event.eventDetails)}
            >
              {/* Image Section */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={event.image || "/images/default_event.jpg"}
                  alt={event.name}
                  className="w-full h-full object-cover rounded-t-2xl transform hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#ffcc00] text-center uppercase mb-3">
                  {event.eventDetails.title}
                </h2>
                <p className="text-white text-md font-semibold text-center">
                  {event.eventDetails.description}
                </p>
                <p className="mt-3 text-gray-300 text-sm text-center">
                  📍 <span className="font-semibold">Venue:</span>{" "}
                  {event.eventDetails.venue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal/Dialog */}
      {isVisible && selectedEvent && (
        <div className="bg-black bg-opacity-70 min-h-screen flex justify-center items-center p-4 fixed top-0 left-0 w-full h-full z-50">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full h-auto max-w-4xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-purple-500">
                {selectedEvent.title}
              </h1>
              <button
                className="text-red-500 hover:text-red-600 text-4xl font-bold cursor-pointer focus:outline-none w-20 h-20 flex justify-center items-center rounded-full"
                onClick={() => setIsVisible(false)} // Close the popup
              >
                &times;
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-3 rounded-lg flex justify-center items-center">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="rounded-lg h-80 w-auto object-cover"
                />
              </div>
              <div>
                <div className="bg-gray-700 p-4 rounded-lg h-40 overflow-y-auto">
                  <h2 className="text-lg font-semibold text-purple-400">
                    Event Description
                  </h2>
                  <p className="text-xs text-gray-300 mt-1">
                    {selectedEvent.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-700 p-4 rounded-lg text-center text-sm">
                    <p className="text-purple-400">Venue</p>
                    <p className="text-white">{selectedEvent.venue}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg text-center text-sm">
                    <p className="text-purple-400">Prize Worth</p>
                    <p className="text-white">{selectedEvent.prize}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg text-center text-sm">
                    <p className="text-purple-400">Date</p>
                    <p className="text-white">{selectedEvent.date}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg text-center text-sm">
                    <p className="text-purple-400">Time</p>
                    <p className="text-white">{selectedEvent.time}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cultural;
