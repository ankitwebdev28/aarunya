import React from "react";
import { FaInstagram, FaPhone } from "react-icons/fa";

const TeamCard = ({ member }) => (
  <div
    className="relative w-60 h-[400px] bg-cover bg-center flex flex-col items-center justify-center p-4 shadow-lg bg-transparent"
    style={{ backgroundImage: "url('/images/cardbackground.png')" }} // Ticket Background
  >
    {/* Position (Always at the Top) */}
    <h2 className="text-lg -mt-16 font-bold text-black opacity-70">
      {member.position}
    </h2>

    {/* Member Image */}
    <div className="w-32 h-32 flex items-center justify-center mt-4 border-2 border-black rounded-md overflow-hidden my-2">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Name */}
    <div className="w-28">
      <p className="text-md  break-words font-semibold text-black opacity-70">
        {member.name}
      </p>
    </div>

    {/* Social Icons at Bottom */}
    <div className="mt-2 flex gap-6 opacity-70">
      <a href={member.instagram} className="text-black hover:text-gray-700">
        <FaInstagram size={20} />
      </a>
      <a href={member.phone} className="text-black hover:text-gray-700">
        <FaPhone size={20} />
      </a>
    </div>
  </div>
);

export default TeamCard;
