
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Resume from "../assets/resume4.pdf";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 inset-x-0 w-full max-w-full z-50
    bg-black/40 backdrop-blur-md text-white">

      <div className="flex items-center justify-between
      w-full px-5 md:px-10 py-5">

        {/* Left Side */}
        <div className="flex items-center justify-between
        w-full md:w-auto">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <h1 className="text-xl font-bold text-purple-400
          ml-auto md:ml-0 whitespace-nowrap">
            Akash Mourya
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="hover:scale-105 hover:underline transition">Home</a>
          <a href="#about" className="hover:scale-105 hover:underline transition">About</a>
          <a href="#project" className="hover:scale-105 hover:underline transition">Project</a>
          <a href="#skills" className="hover:scale-105 hover:underline transition">Skills</a>
          <a href="#contact" className="hover:scale-105 hover:underline transition">Contact</a>

          <a href={Resume} download
            className="px-5 py-2 bg-purple-600 rounded-lg whitespace-nowrap">
            Download Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full overflow-hidden
        transition-all duration-300 ${
          menuOpen ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6
        bg-black/95 pb-5">

          {["Home", "About", "Project", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            href={Resume}
            download
            onClick={closeMenu}
            className="px-5 py-2 bg-purple-600 rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
