import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const leavesCount = 105; // Number of leaves falling
const leafImages = [
  "/images/leaf/leaf_1.png",
  "/images/leaf/leaf_2.png",
  "/images/leaf/leaf_3.jpg",
]; // Different leaf images

const Main = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves = Array.from({ length: leavesCount }).map((_, index) => ({
        id: index,
        left: Math.random() * 100, // Random horizontal position
        top: Math.random() * -50, // Start from different heights (-10% to -50%)
        delay: Math.random() * 3, // Random delay for a natural effect
        duration: Math.random() * 5 + 2, // Duration between 2s - 7s
        image: leafImages[Math.floor(Math.random() * leafImages.length)], // Random leaf image
        size: Math.random() * 20 + 20, // Size between 20px - 40px
        rotation: Math.random() * 360, // Random initial rotation
      }));
      setLeaves(newLeaves);
    };
    generateLeaves();
  }, []);

  return (
    <div className="relative bg-black w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Falling Leaves Animation */}
      {leaves.map((leaf) => (
        <motion.img
          key={leaf.id}
          src={leaf.image}
          alt="Falling Leaf"
          className="absolute -top-10 opacity-80 z-40"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
          initial={{ y: `${leaf.top}%`, rotate: leaf.rotation, opacity: 1 }}
          animate={{ y: "102vh", rotate: leaf.rotation + 360, opacity: 1 }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* Centered Poster */}
      <div
        className="absolute z-50 w-full h-4/5 bg-center bg-no-repeat bg-contain opacity-90 pointer-events-none"
        style={{
          backgroundImage: "url('/images/aarunya_poster_1.png')",
        }}
      ></div>
      <div
        className="absolute z-50 w-4/5 md:w-1/2 h-full bg-center bg-no-repeat bg-contain opacity-90 pointer-events-none"
        style={{
          backgroundImage: "url('/images/aarunya_poster3.png')",
        }}
      ></div>

      {/* Background Image */}
      <div
        className="relative w-full h-full bg-cover bg-center transition-all duration-500 cursor-pointer hover:opacity-80 opacity-30"
        style={{ backgroundImage: "url('/images/bg/home-bg.jpg')" }}
      ></div>
    </div>
  );
};

export default Main;
