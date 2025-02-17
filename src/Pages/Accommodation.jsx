import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import leftCircle from "/assets/leftCircle.svg";
import rightCircle from "/assets/rightCircle.svg";
import midCircle from "/assets/midCircle.svg";

const Accommodation = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDoorsOpen(true);
    }, 1000);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Left Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: doorsOpen ? (window.innerWidth >= 768 ? "-45%" : "-150%") : 0,
        }} // Responsive movement
        transition={{ duration: 1 }}
        className="absolute left-0 top-0 h-full w-1/2 z-50 flex justify-end items-center bg-gray-900"
      >
        <img
          src={leftCircle}
          alt="Left Circle"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-72"
        />
        <motion.img
          src={midCircle}
          alt="Mid Circle"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="relative left-20 z-40 w-40 "
        />
      </motion.div>

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: doorsOpen ? (window.innerWidth >= 768 ? "45%" : "150%") : 0,
        }} // Responsive movement// Move right door halfway
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 h-full w-1/2  z-50 flex justify-start items-center bg-gray-900"
      >
        <img
          src={rightCircle}
          alt="Right Circle"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-72"
        />
        <motion.img
          src={midCircle}
          alt="Mid Circle"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="relative right-20 z-40 w-40 "
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative text-center text-white z-10 md:w-1/3 w-10/12 h-screen mt-20">
        <h1 className="text-4xl font-bold text-[#E5C100]">Accommodation</h1>
        <div className="text-lg mt-4 h-full overflow-y-scroll scrollbar-hide">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            itaque sit doloribus natus, ipsa similique quis corporis quaerat!
            Reiciendis harum, illum natus amet ipsa dignissimos iste dolorem
            possimus maxime ratione? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt itaque sit doloribus natus, ipsa
            similique quis corporis quaerat! Reiciendis harum, illum natus amet
            ipsa dignissimos iste dolorem possimus maxime ratione? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nesciunt itaque sit
            doloribus natus, ipsa similique quis corporis quaerat! Reiciendis
            harum, illum natus amet ipsa dignissimos iste dolorem possimus
            maxime ratione? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt itaque sit doloribus natus, ipsa similique quis
            corporis quaerat! Reiciendis harum, illum natus amet ipsa
            dignissimos iste dolorem possimus maxime ratione?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            itaque sit doloribus natus, ipsa similique quis corporis quaerat!
            Reiciendis harum, illum natus amet ipsa dignissimos iste dolorem
            possimus maxime ratione? Lorem ipsum dolor sit amet consectetur
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            itaque sit doloribus natus, ipsa similique quis corporis quaerat!
            Reiciendis harum, illum natus amet ipsa dignissimos iste dolorem
            possimus maxime ratione? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt itaque sit doloribus natus, ipsa
            similique quis corporis quaerat! Reiciendis harum, illum natus amet
            ipsa dignissimos iste dolorem possimus maxime ratione? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nesciunt itaque sit
            doloribus natus, ipsa similique quis corporis quaerat! Reiciendis
            harum, illum natus amet ipsa dignissimos iste dolorem possimus
            maxime ratione? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nesciunt itaque sit doloribus natus, ipsa similique quis
            corporis quaerat! Reiciendis harum, illum natus amet ipsa
            dignissimos iste dolorem possimus maxime ratione?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
