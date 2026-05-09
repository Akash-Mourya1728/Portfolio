import { motion } from "framer-motion";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiGsap,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  const skill = [
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
    },

    {
      name: "Typescript",
      icon: SiTypescript,
      color: "text-blue-400",
    },

    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-600",
    },

    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-white",
    },

    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
    },

    {
      name: "Tailwind",
      icon: SiTailwindcss,
      color: "text-cyan-300",
    },

    {
      name: "Node JS",
      icon: FaNodeJs,
      color: "text-green-500",
    },

    {
      name: "Express",
      icon: SiExpress,
      color: "text-gray-300",
    },

    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-400",
    },

    {
      name: "GSAP",
      icon: SiGsap,
      color: "text-green-400",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black px-6 md:px-12 lg:px-20 py-16 text-white"
    >
      <h3 className="text-purple-600 uppercase font-bold text-xl md:text-2xl text-center mb-5">
        My Skill
      </h3>

      <h1 className="font-semibold text-3xl md:text-5xl text-center leading-tight">
        Technologies I{" "}
        <span className="font-semibold text-purple-600">
          Use
        </span>
      </h1>

      {/* skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 mt-14">
        {skill.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                rotate: 5,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl h-40 md:h-52 flex flex-col items-center justify-center gap-4 md:gap-6 hover:scale-105 hover:rotate-12 hover:border-purple-500/40 transition duration-300 glow"
            >
              <Icon className={`text-4xl md:text-6xl ${skill.color}`} />

              <h1 className="text-lg md:text-2xl font-medium text-center">
                {skill.name}
              </h1>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
