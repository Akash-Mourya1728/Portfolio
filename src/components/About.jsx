import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-14 px-6 md:px-16 lg:px-24 py-16"
    >
      {/* left image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-60 md:w-72 lg:w-80 rounded-2xl glow object-cover"
        />
      </motion.div>

      {/* right content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center md:text-left"
      >
        <h2 className="text-purple-600 uppercase font-bold text-xl md:text-2xl mb-3">
          About me
        </h2>

        <h1 className="text-3xl md:text-5xl text-white mb-5 font-bold leading-tight">
          Who
          <span className="text-purple-600 ml-3">I am</span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base leading-7">
          I am a passionate Full Stack Developer with experience in building web
          applications using React, Nextjs, Nodejs, and modern technologies. I
          love turning ideas into reality.
        </p>

        {/* stats */}
        <div className="flex justify-center md:justify-start gap-10 md:gap-20 mt-8 flex-wrap">
          <div>
            <h3 className="text-2xl text-purple-400 font-bold">1+</h3>
            <p className="text-sm text-gray-300">
              Years of Experience
            </p>
          </div>

          <div>
            <h3 className="text-2xl text-purple-400 font-bold">5+</h3>
            <p className="text-sm text-gray-300">Projects</p>
          </div>
        </div>

        {/* button */}
        <button className="px-6 py-3 border-purple-600 border-2 hover:scale-105 transition rounded-lg mt-8">
          More About Me
        </button>
      </motion.div>
    </section>
  );
};

export default About;