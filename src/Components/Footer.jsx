"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";

// GitHub JSON URLs
const SPONSORS_JSON_URL =
  "https://raw.githubusercontent.com/ankitwebdev28/aarunya-event-managment/main/sponsor.json"; // Replace with actual GitHub URL
const TEAM_JSON_URL =
  "https://raw.githubusercontent.com/ankitwebdev28/aarunya-event-managment/main/devteam.json"; // Replace with actual GitHub URL

const Footer = () => {
  const [sponsors, setSponsors] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch sponsors
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch(SPONSORS_JSON_URL);
        const data = await response.json();
        setSponsors(data.sponsors || []);
      } catch (error) {
        console.error("Error loading sponsors:", error);
      }
    };

    fetchSponsors();
  }, []);

  // Fetch team members
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch(TEAM_JSON_URL);
        const data = await response.json();
        setTeamMembers(data.teamMembers || []);
      } catch (error) {
        console.error("Error loading team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      {/* Footer Wrapper */}
      <footer className="bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Hidden on Mobile */}
        <div className="hidden md:block bg-red-600 px-6 py-3 rounded-r-lg text-left">
          <h1 className="text-5xl font-bold leading-tight">Aarunya</h1>
          <Link
            className="flex gap-4 mt-3 text-xl items-center"
            to="https://www.instagram.com/aarunya.mits?utm_source=qr&igsh=Z3dodjV5OXg0dWt4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on <FaInstagram />
          </Link>
        </div>

        {/* Sponsor Logo Scrolling - Centered in Desktop, Moves to Top in Mobile */}
        <div className="w-full md:w-auto overflow-hidden bg-red-600 md:bg-black py-4 order-first md:order-none">
          <div className="flex gap-10 animate-scroll">
            {[...sponsors, ...sponsors].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Sponsor"
                className="h-12 md:h-16 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Right Section - Team Members */}
        <div className="bg-red-600 w-full md:w-auto py-3 text-center z-40 flex flex-col items-center md:rounded-l-lg md:px-6 md:py-4">
          <h2 className="text-lg font-semibold">Developed by MITS DevOps</h2>
          <div className="flex mt-4 gap-0">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`relative group cursor-pointer hover:z-50 ${
                  index !== 0 ? "-ml-2 md:-ml-3" : ""
                }`}
              >
                {/* Instagram Profile Link */}
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover transition-transform transform hover:scale-110 duration-300"
                  />
                </a>
                {/* Tooltip on Hover - Name on Top, Position on Next Line */}
                <div className="hidden group-hover:flex flex-col absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded text-center gap-1">
                  <span className="font-bold">{member.name}</span>
                  <span className="text-xs whitespace-nowrap">
                    {member.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(90%); }
          50% { transform: translateX(-90%); }
          100% { transform: translateX(90%); }
        }

        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Footer;
