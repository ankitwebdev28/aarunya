import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link

const cards = [
  {
    image: "/images/events/cult_image.png",
    name: "Cultural",
    link: "/events/cultural", // Update to relative path
  },
  {
    image: "/images/events/tech_image.png",
    name: "Technical",
    link: "/events/technical",
  },
  {
    image: "/images/events/cult_image.png",
    name: "Session & Workshops ",
    link: "/events/workshop",
  },
];

function Events() {
  return (
    <div className="bg-[#000] flex flex-col justify-center items-center pt-10 pb-6 md:py-20 overflow-hidden min-h-screen">
      <h1 className="mb-6 text-[#fff] text-3xl md:text-8xl font-semibold text-center font-seagram">
        Our Events
      </h1>

      {/* Centered Grid Layout */}
      <div className="flex justify-center w-full px-4 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 max-w-4xl">
          {cards.map((card, index) => (
            < Link to={`${card.link}`}>
            <motion.div
              key={index}
              className="relative w-64 h-72 rounded-lg overflow-hidden flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Event Image */}
              <img
                src={card.image}
                alt={card.name}
                className="h-56 object-center object-scale-down rounded-lg w-full"
              />

              {/* Event Name */}
              <div className="mt-2 text-white text-lg font-semibold text-center">
                {card.name}
              </div>
          </motion.div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
