import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-20"
    >

      {/* left side */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <h3 className="text-gray-400">Hii, I'am</h3>
        <h1 className="text-5xl  font-bold">
          A Full Stack <span className="text-purple-400">Developer</span>{" "}
        </h1>

        <p className=" w-[55%] mt-4 text-gray-400">
          I build modern, responsive and high-performance web applicants with
          great user experiences.
        </p>

        <div className="mt-6 flex gap-4 relative">
          <a href="#project" className="px-6 py-3  bg-purple-600 rounded-lg glow ">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 hover:scale-105  border border-purple-500 rounded-lg  ">
            Contact Me
          </a>

      {/* social media link */}
        <div className="flex gap-6 text-2xl absolute top-20  ">
        <a className="hover:text-purple-400 hover:scale-125 transition" href="http://github.com/Akash-Mourya1728">
          <FaGithub />
        </a>

        <a  className="hover:text-blue-400 hover:scale-125 transition" href="https://linkedin.com/in/akash-mourya1728">
          <FaLinkedin />
        </a>

        <a className="hover:text-cyan-400 hover:scale-125 transition" href="https://Twitter.com/AkashMourya64">
          <FaTwitter />
        </a>

        <a className="hover:text-pink-400 hover:scale-125 transition" href="https://instagram.com/its__akash_mourya">
          <FaInstagram />
        </a>
      </div>

        </div>
      </motion.div>

      {/* right side */}

      <div className="relative">
        <div className="w-72 h-72 bg-purple-500 blur-[120px]  absolute"> </div>
        <img className="relative w-72 rounded-full " src="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
