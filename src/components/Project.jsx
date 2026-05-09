import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const project = [
    {
      title: "Modern Portfoilo",
      des: "React + Tailwind css portfoilo website",
      image: "/Screenshot 2026-05-07 155213.png",
    },
    {
      title: "Obeys.Agency Clone",
      des: "Build clone of Obeys.Agency using Js, Gsap, Locomotive, Sheryijs",
      image: "/Screenshot 2026-05-07 154956.png",
    },

    {
      title: "Dashboard UI",
      des: "Analytics admin dashboard",
      image: "/Screenshot 2025-09-25 003416.png",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen px-6 md:px-12 lg:px-20 py-16 bg-[#000000]"
    >
      {/* heading */}

      <h2 className="text-purple-600 uppercase font-bold text-xl md:text-2xl mb-3 text-center">
        My Project
      </h2>

      <h1 className="text-3xl md:text-5xl text-white font-bold text-center mb-12 leading-tight">
        Some Of My
        <span className="ml-3 text-purple-600">Work</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.map((project, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:scale-105 transition duration-300 glow"
            >
              {/* image */}
              <img
                className="w-full h-52 object-cover"
                src={project.image}
                alt={project.title}
              />

              {/* content */}
              <div className="p-5">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm md:text-base">
                  {project.des}
                </p>

                {/* button */}
                <div className="flex flex-wrap gap-4 mt-5">
                  <a
                    className="px-4 py-2 rounded-lg bg-purple-500 hover:scale-105 transition glow"
                    href="https://akash-mourya1728.github.io/obeys-pr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    className="flex gap-2 items-center hover:text-purple-400 border-2 px-4 py-2 border-purple-600 rounded-lg glow hover:scale-105 transition"
                    href="http://github.com/Akash-Mourya1728"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Github</span>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;