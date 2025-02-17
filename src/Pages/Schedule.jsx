import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ScheduleItem({ item, index }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      key={index}
      className={`flex flex-col md:flex-row ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      } items-center justify-between gap-4 relative`}
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Image Section (If Available) */}
      {item?.image && (
        <div className="hidden md:flex w-2/5">
          <img
            src={item.image}
            alt={item["Event Name"] || "Event"}
            className="rounded-lg shadow-lg w-full h-40 object-cover"
          />
        </div>
      )}

      {/* Card Section */}
      <motion.div
        className="relative w-80 md:w-96 bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 text-left transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      >
        {/* Decorative Border Gradient */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-[#ff758c] to-[#ff7eb3] p-0.5"></div>

        {/* Card Content */}
        <div className="relative z-10 bg-white/80 rounded-xl p-5 shadow-md">
          {/* Event Name */}
          <h2 className="text-2xl font-bold text-[#321951] mb-2">
            {item["Event Name"]}
          </h2>

          {/* Timing */}
          <p className="text-md font-semibold text-gray-700">
            🕒 {item["Timing"]}
          </p>

          {/* Category */}
          {item["Activity Type"] && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">📌 Category:</span>{" "}
              {item["Activity Type"]}
            </p>
          )}

          {/* Venue */}
          <p className="text-sm text-gray-600">
            <span className="font-semibold">📍 Venue:</span> {item["Venue"]}
          </p>

          {/* Club Name */}
          {item["Club Name"] && item["Club Name"].trim() !== "-" && (
            <p className="text-sm text-gray-600">
              <span className="font-semibold">🏆 Club:</span>{" "}
              {item["Club Name"]}
            </p>
          )}
        </div>
      </motion.div>

      {/* Timeline Dot */}
      <div className="w-12 h-12 bg-[#ff758c] border-4 border-white rounded-full absolute -left-3 md:left-1/2 transform -translate-x-1/2 md:inline"></div>
    </motion.div>
  );
}

function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Day 1");
  const [daySchedules, setDaySchedules] = useState({});

  // Fetch JSON Data
  const jsonUrl =
    "https://raw.githubusercontent.com/ankitwebdev28/aarunya-event-managment/main/schedule.json";
  // const jsonUrl = "https://raw.githubusercontent.com/ankitwebdev28/aarunya-event-managment/refs/heads/main/schedule.json?token=GHSAT0AAAAAAC6IDT4UDKKSU3KAMEODXTBUZ5R3IHA");

  const fetchData = async () => {
    try {
      const response = await fetch(jsonUrl);
      if (!response.ok)
        throw new Error(`HTTP Error! Status: ${response.status}`);
      const data = await response.json();
      setDaySchedules(data);
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
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0a0f24] to-[#321951] flex justify-center items-center pt-10 md:pb-20 overflow-hidden">
      <div className="relative px-6 lg:px-8 w-full max-w-4xl md:mt-6 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-semibold text-[#fff7e3] sm:text-7xl font-seagram tracking-widest">
            Schedule
          </h1>
        </div>

        {/* Day Selector */}
        <div className="text-[#ff3d81] w-full flex items-center justify-center rounded-lg shadow-lg pb-6 mx-auto">
          <ul className="flex flex-row space-x-8 lg:space-x-16 text-xl md:text-2xl font-extrabold font-seagram">
            {Object.keys(daySchedules).map((day) => (
              <li key={day} className="text-center">
                <button
                  onClick={() => setSelectedDay(day)}
                  className={`transition-all duration-300 ${
                    selectedDay === day
                      ? "text-[#ffffff] underline"
                      : "hover:text-[#ff7597]"
                  }`}
                >
                  {day}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="absolute w-1 bg-white h-full left-1/2 transform -translate-x-1/2 hidden md:inline"></div>
        <div className="absolute w-1 bg-white h-full md:hidden"></div>

        {/* Day-wise Schedule */}
        <div className="my-8 space-y-8 ml-4 md:ml-0">
          {daySchedules[selectedDay]?.length > 0 ? (
            daySchedules[selectedDay].map((item, index) => (
              <ScheduleItem key={index} item={item} index={index} />
            ))
          ) : (
            <p className="text-white text-center">
              No events scheduled for this day.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
