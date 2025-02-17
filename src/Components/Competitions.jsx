import { FaExternalLinkAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const competitions = [
  {
    id: "101",
    title: "UI/UX Competition",
    category: "Web Design",
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    venue: "Colloquium",
    club: "GDG Student Chapter",
  },
  {
    id: "104",
    title: "Dance Competition",
    category: "Dance",
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    venue: "SAC",
    club: "Dance Club",
  },

  {
    id: "103",
    title: "Singing Competition",
    category: "Music",
    image:
      "https://res.cloudinary.com/dgimh0a2j/image/upload/v1739351428/Event%20posters/Untitled_design_vji5qw.png",
    venue: "SAC",
    club: "Bandish",
  },
];

export default function CompetitionCards({ searchTerm, sortType }) {
  const [filteredCompetitions, setFilteredCompetitions] =
    useState(competitions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    let updatedCompetitions = [...competitions];

    // Search Filter
    if (searchTerm) {
      updatedCompetitions = updatedCompetitions.filter(
        (competition) =>
          competition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          competition.club.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sorting
    if (sortType === "name-asc") {
      updatedCompetitions.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "name-desc") {
      updatedCompetitions.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "category") {
      updatedCompetitions.sort((a, b) => a.category.localeCompare(b.category));
    }

    setFilteredCompetitions(updatedCompetitions);
  }, [searchTerm, sortType]);

  // Open Modal
  const openModal = (competition) => {
    setSelectedCompetition(competition);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setUserName("");
    setUserEmail("");
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-6 bg-gradient-to-b from-[#0a0f24] to-[#321951] min-h-screen">
      {filteredCompetitions.length > 0 ? (
        filteredCompetitions.map((competition) => (
          <div
            key={competition.id}
            className="flex flex-col items-center bg-[#0a0f24] p-4 rounded-md shadow-md border border-[#1a1e38] text-white max-w-xs mx-auto"
          >
            {/* Background & Image */}
            <div className="relative bg-[#eae5d9] py-4 rounded-md flex items-center justify-center">
              <img
                src={competition.image}
                alt={competition.title}
                className="relative w-[80%] rounded-md"
              />
            </div>

            {/* Competition Info */}
            <div className="mt-3 text-left w-full">
              <h2 className="text-xl font-semibold tracking-wide">
                {competition.title}
              </h2>
              <p className="text-2xl text-[#ff3d81] font-bold">
                {competition.category}
              </p>
            </div>

            {/* Register Button - Opens Modal */}
            <button
              onClick={() => openModal(competition)}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-black bg-white px-4 py-2 rounded-md transition w-full mt-3"
            >
              Register <FaExternalLinkAlt />
            </button>

            {/* Venue Button */}
            <a className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#321951] px-4 py-2 rounded-md transition w-full mt-2">
              {competition.venue}, MITS <FaMapMarkerAlt />
            </a>
          </div>
        ))
      ) : (
        <p className="text-white text-center w-full col-span-full mt-6">
          No competitions found.
        </p>
      )}

      {/* Modal (Dialog Box) */}
      {isModalOpen && selectedCompetition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#0a0f24] p-6 rounded-lg shadow-lg w-[90%] max-w-md border border-[#1a1e38]">
            <h2 className="text-2xl font-bold text-[#ff3d81] text-center">
              Register for {selectedCompetition.title}
            </h2>
            <p className="text-sm text-[#eae5d9] text-center">
              {selectedCompetition.category}
            </p>

            <form className="mt-4 space-y-4">
              {/* Competition ID - Auto-filled */}
              <div>
                <label className="block text-sm font-bold text-[#eae5d9]">
                  Competition ID
                </label>
                <input
                  type="text"
                  value={selectedCompetition.id}
                  readOnly
                  className="w-full px-3 py-2 border border-[#1a1e38] rounded-md bg-[#0a0f24] text-[#eae5d9]"
                />
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-sm font-bold text-[#eae5d9]">
                  Your Name
                </label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-[#1a1e38] rounded-md text-[#0a0f24]"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-bold text-[#eae5d9]">
                  Your Email
                </label>
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-[#1a1e38] rounded-md text-[#0a0f24]"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#1a1e38] text-white rounded-md hover:bg-[#321951] transition"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#ff3d81] text-white rounded-md hover:bg-[#F68318] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
