import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Carnival() {
  const [events, setEvents] = useState([]);

  // ✅ Correct GitHub Raw JSON URL
  const jsonUrl =
    "https://raw.githubusercontent.com/ankitwebdev28/aarunya-event-managment/main/carnival.json";

  const fetchData = async () => {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok)
        throw new Error(`HTTP Error! Status: ${response.status}`);
      const data = await response.json();
      setEvents(data.Carnival);
    } catch (error) {
      console.error("Error fetching carnival data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initially

    const interval = setInterval(() => {
      fetchData(); // Fetch every 60 seconds
    }, 60000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-[#0a0f24] flex flex-col justify-center items-center pt-24 md:pt-10 pb-6 md:py-20 overflow-hidden min-h-screen">
      <h1 className="mb-6 text-white text-4xl md:text-7xl font-bold text-center font-seagram tracking-wide">
        🎪 Carnival Events
      </h1>

      {/* Centered Grid Layout */}
      <div className="flex justify-center w-full px-4 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 max-w-6xl">
          {events.length > 0 ? (
            events.map((event, index) => (
              <motion.div
                key={index}
                className="relative w-80 bg-white/10 backdrop-blur-lg border border-gray-600/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                {/* Image Section */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={event["Image"] || "/images/default_event.jpg"} // Default if no image
                    alt={event["Event Name"]}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-[#ffcc00] text-center uppercase">
                    {event["Club Name"]}
                  </h2>
                  <p className="mt-2 text-white text-md font-semibold text-center">
                    {event["Event Name"]}
                  </p>
                  <p className="mt-1 text-gray-300 text-sm text-center">
                    📍 <span className="font-semibold">Venue:</span>{" "}
                    {event["Venue"]}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-white text-center text-lg">Loading events...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carnival;
