import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GIT_JSON_URL =
  "https://raw.githubusercontent.com/ankitwebdev28/aarunya-event-managment/main/masterevent.json"; // Replace with your actual GitHub JSON URL

function Discover() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images from GitHub JSON
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(GIT_JSON_URL);
        const data = await response.json();
        setCards(data.images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    if (cards.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [cards]);

  if (cards.length === 0) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;

  return (
    <div className="bg-[#000000] flex flex-col justify-center items-center py-6 md:py-20 overflow-hidden">
      <h1 className="mb-6 text-[#fff] text-3xl md:text-8xl font-semibold text-center font-seagram">
        Discover More
      </h1>

      <div className="relative h-auto w-full flex">
        <div className="relative w-full max-w-5xl h-96 hidden md:flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={prevIndex}
              className="absolute w-full max-w-xs h-80 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={cards[prevIndex]}
                alt={`Event ${prevIndex + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative w-full max-w-5xl h-96 flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute w-full max-w-xs h-80 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={cards[currentIndex]}
                alt={`Event ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative w-full max-w-5xl h-96 hidden md:flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={nextIndex}
              className="absolute w-full max-w-xs h-80 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={cards[nextIndex]}
                alt={`Event ${nextIndex + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Discover;
