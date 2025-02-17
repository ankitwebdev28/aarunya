import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed z-50 -right-12 -rotate-90 top-1/2 transform-translate-y-1/2 bg-red-600 text-white py-4 px-6  rounded-t-2xl shadow-lg">
      <Link
        to="/register"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-lg font-semibold transition-all"
      >
        Get Your Pass
      </Link>
    </div>
  );
};

export default Sidebar;
