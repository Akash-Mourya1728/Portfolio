import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Resume from "../assets/Resume.pdf"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white">
      <div className="flex items-center justify-between px-5 md:px-10 py-5">
        {/* Left Side */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <h1 className="text-xl font-bold text-purple-400 ml-auto md:ml-0">
            Akash Mourya
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          <a
            className="hover:scale-105 hover:underline transition"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:scale-105 hover:underline transition"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:scale-105 hover:underline transition"
            href="#project"
          >
            Project
          </a>
          <a
            className="hover:scale-105 hover:underline transition"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:scale-105 hover:underline transition"
            href="#contact"
          >
            Contact
          </a>

          <a
            href= {Resume}
            download
            className="px-5 py-2 bg-purple-600 rounded-lg"
          >
            Download Resume
          </a>

        </div>

        {/* Resume Button */}

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-5" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 bg-black/95 pb-5">
          <a onClick={() => setMenuOpen(false)} href="#home">
            Home
          </a>

          <a onClick={() => setMenuOpen(false)} href="#about">
            About
          </a>

          <a onClick={() => setMenuOpen(false)} href="#project">
            Project
          </a>

          <a onClick={() => setMenuOpen(false)} href="#skills">
            Skills
          </a>

          <a onClick={() => setMenuOpen(false)} href="#contact">
            Contact
          </a>

          <a
            href= {Resume}
            download
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
