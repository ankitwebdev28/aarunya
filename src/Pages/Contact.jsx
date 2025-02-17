import React, { useState, useEffect } from "react";
import TeamCard from "../Components/TeamCard";
import backgroundimg from "/images/texture.png"; // Background image

// GitHub JSON URL
const GIT_JSON_URL =
  "https://raw.githubusercontent.com/ankitwebdev28/aarunya-event-managment/main/contact.json"; // Replace with actual GitHub JSON URL

export default function ContactPage() {
  const [teamMembers, setTeamMembers] = useState([]);

  // Fetch team members from GitHub JSON
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch(GIT_JSON_URL);
        const data = await response.json();
        setTeamMembers(data.teamMembers || []);
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchTeam();
  }, []);

  // Group team members by position
  const groupedTeam = teamMembers.reduce((acc, member) => {
    if (!acc[member.position]) {
      acc[member.position] = [];
    }
    acc[member.position].push(member);
    return acc;
  }, {});

  if (teamMembers.length === 0) {
    return <p className="text-center text-white">Loading team members...</p>;
  }

  return (
    <div className="bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-center py-12 min-h-screen relative">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src={backgroundimg}
        alt="Background"
      />
      <h1 className="text-5xl font-bold text-yellow-400 mb-12 drop-shadow-lg">
        Contact Us
      </h1>
      <div className="flex flex-col gap-12 items-center bg-transparent">
        {Object.entries(groupedTeam).map(([position, members], index) => (
          <div key={index} className="w-full bg-transparent">
            <h2 className="text-3xl font-bold text-yellow-300 mb-6 uppercase tracking-wider drop-shadow-md">
              {position}
            </h2>
            <div className="flex flex-wrap justify-center gap-10 bg-transparent">
              {members.map((member, idx) => (
                <TeamCard key={idx} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
