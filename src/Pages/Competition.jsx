import React, { useState } from "react";
import CompetitionCards from "../Components/Competitions.jsx";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { div } from "framer-motion/client";

function Competition() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("id-asc"); // Default sort by ID
  const [isOpen, setIsOpen] = useState(false); // Controls list visibility

  return (
    // <div className="min-h-screen bg-gradient-to-b from-[#0a0f24] to-[#321951]">
    //   {/* Hero Section */}

    <div className="bg-gradient-to-b from-[#0a0f24] to-[#321951] pt-24 pb-10 md:py-10">
      <div className="text-center pb-10">
        <h1 className="text-5xl font-semibold text-[#fff7e3] sm:text-7xl font-seagram tracking-widest">
          Competitions
        </h1>
        <p className="mt-8 text-2xl font-medium text-[#ff3d81] sm:text-4xl">
          “Unleash Your Talent, Conquer the Stage – Where Legends Compete!”
        </p>
      </div>
      {/* Search & Sort Controls */}
      <div className="bg-[#0a0f24] px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Type here to search..."
          className="placeholder-[#fff7e3] placeholder:font-bold w-full md:w-1/3 px-4 py-2 rounded-md text-[#fff7e3] bg-[#fe3989] focus:outline-none focus:ring-2 focus:ring-[#fff7e3]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sort List Box */}
      </div>

      {/* Competitions List */}
      <CompetitionCards searchTerm={searchTerm} sortType={sortType} />
    </div>
  );
}

export default Competition;
