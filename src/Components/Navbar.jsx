import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { XMarkIcon, Bars2Icon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    <header className="inset-x-0 top-0 py-4 z-50 fixed w-full">
      <nav>
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-2 flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            className="text-[#fff] z-[1001]"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            {open ? (
              <XMarkIcon className="w-[20%] md:w-[25%] transition-transform rotate-90" />
            ) : (
              <Bars2Icon className="w-[20%] md:w-[25%]" />
            )}
          </button>

          {/* Mobile Sidebar */}
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: open ? "0" : "-100vw" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-[#000000ad] text-white flex flex-col pt-16 md:pt-12 items-center shadow-xl z-[1000]"
          >
            <ul className="flex flex-col items-center space-y-6">
              {[
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Carnival", path: "/carnival" },
                { name: "Competitions", path: "/competitions" },
                { name: "Schedule", path: "/schedule" },
                { name: "Sponsors", path: "/sponsor" },
                { name: "Contact Us", path: "/contact-us" },
              ].map(({ name, path }, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    onClick={() => setOpen(false)}
                    className="relative text-[#FDC005] text-4xl font-seagram font-bold transition-transform hover:scale-110
                    bg-gradient-to-r from-[#FDC005] via-[#FDC005] to-[#ffffff] bg-clip-text text-transparent
                    hover:from-[#ffffff] hover:via-[#FDC005] hover:to-[#FDC005]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="fixed bottom-2 left-0 w-full flex flex-col items-center text-center">
              <a
                href="https://www.instagram.com/aarunya.mits/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-bold flex items-center gap-2 hover:text-[#FDC005] transition-transform hover:scale-110"
              >
                Follow us on
                <FaInstagram className="text-3xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-1 rounded-md" />
              </a>
              <p className="text-sm text-gray-300 mt-1">
                © 2025 Aarunya. All rights reserved.
              </p>
            </div>
          </motion.div>

          {/* Overlay (Closes menu when clicked outside) */}
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-40 z-[999]"
              onClick={() => setOpen(false)}
            ></motion.div>
          )}

          {/* SIGN IN Button */}
          <a
            href="https://chat.whatsapp.com/G1If97LAVDlA52ZzWuSLMZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-lg px-4 py-2 font-bold bg-[#FDC005] text-black tracking-wide rounded-md hover:bg-[#F68318] hover:text-white transition font-seagram"
          >
            Join Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
