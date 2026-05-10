import React from "react";
import { motion } from "motion/react";
import profile from "../assets/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-14 px-6 md:px-20 py-16"
    >
      {/* left side content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl text-center md:text-left"
      >
        <h3 className="text-gray-400 text-lg">Hii, I'am</h3>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-2">
          A Full Stack{" "}
          <span className="text-purple-400">Developer</span>
        </h1>

        <p className="text-base md:text-lg md:w-[70%] mt-4 text-gray-400 mx-auto md:mx-0">
          I build modern, responsive and high-performance web applications with
          great user experiences.
        </p>

        {/* buttons */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#project"
            className="px-6 py-3 bg-purple-600 rounded-lg hover:scale-105 transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-purple-500 rounded-lg hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>

        {/* social icons */}
        <div className="flex gap-6 text-2xl mt-8 justify-center md:justify-start">
          <a
            className="hover:text-purple-400 hover:scale-125 transition"
            href="http://github.com/Akash-Mourya1728"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            className="hover:text-blue-400 hover:scale-125 transition"
            href="https://linkedin.com/in/akash-mourya1728"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            className="hover:text-cyan-400 hover:scale-125 transition"
            href="https://twitter.com/AkashMourya64"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>

          <a
            className="hover:text-pink-400 hover:scale-125 transition"
            href="https://instagram.com/its__akash_mourya"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>

      {/* right side image */}
      <div className="relative flex justify-center">
        <div className="w-72 h-72 bg-purple-500 blur-[120px] absolute"></div>

        <img
          className="w-60 rounded-lg glow md:w-80 lg:w-96 relative z-10"
          src={profile}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;