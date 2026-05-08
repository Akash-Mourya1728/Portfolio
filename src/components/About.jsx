import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-between mih-h-screen item-center px-20"
    >
      {/* left image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src= "/profile.jpg"
          className="w-72 rounded-xl glow"
        />
      </motion.div>

      {/* right   */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl mr-80"
      >
        <h2 className="text-purple-600 uppercase font-bold text-2xl mb-2 ">
          About me
        </h2>
        <h1 className="text-5xl text-white mb-4 font-semi-bold">
          Who{" "}
          <span className="text-5xl text-purple-600 font-semibold ">I am</span>
        </h1>
        <p className="-w-[30%] text-gray-400 ">
          I am passionate Full Stack Developer with experience in building web
          applications using React,Nextjs,Nodejs, and morden technologies. I
          love turing ideas into reality
        </p>

        <div className="flex gap-20 mt-6 ">
          <div>
            <h3 className="text-2xl text-purple-400">1+</h3>
            <p className="font-sm ">Years of Experience </p>
          </div>

          <div>
            <h3 className="text-2xl text-purple-400 ">5+</h3>
            <p className="text-sm">Project</p>
          </div>
        </div>

        <button className="px-6 py-3 border-purple-600 border-2 hover:scale-105 rounded-lg mt-5 ">
          More About Me
        </button>
      </motion.div>
    </section>
  );
};

export default About;
