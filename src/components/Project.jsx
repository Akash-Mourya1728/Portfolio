import { motion } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const project = [
    {
      title: "Modern Portfoilo ",
      des: " React + Tailwind css portfoilo website ",
      image: "Screenshot 2026-05-07 155213.png ",
    },
    {
      title: " Obeys.Agency Clone ",
      des: "Build clone of Obeys.Agency using Js, Gsap, Locomotive, Sheryijs ",
      image: " Screenshot 2026-05-07 154956.png ",
    },

    {
      title: " Dashboard UI ",
      des: " Analytics admin dashboard ",
      image: " Screenshot 2025-09-25 003416.png ",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen px-20 py-10 mt-50 bg-[#000000]"
    >
      {/* heading */}

      <h2 className="text-purple-600 uppercase font-bold text-2xl mb-2 flex justify-center">
        My Project
      </h2>
      <h1 className="text-5xl text-white font-semi-bold flex justify-center mb-10">
        Some Of My{" "}
        <span className=" ml-3 text-5xl text-purple-600 font-semibold ">
          Work
        </span>{" "}
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 ">
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
                scale: 0.5,
              }}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:scale-105 transition duration-300 glow"
            >
              {/* image */}
              <img className="w-full h-52 object-cover" src={project.image} />
              {/* content */}
              <div className=" p-5 ">
                <h3 className="text-2xl font-semibold ">{project.title}</h3>
                <p className="text-gray-400 mt-3">{project.des}</p>
                {/* button */}
                <div className="flex gap-5 mt-5">
                  <a className=" px-4 py-2 rounded-lg bg-purple-500 hover:scale-115 transition glow" href="https://akash-mourya1728.github.io/obeys-pr/">Live Demo</a>
                  <a className="flex gap-3 items-center hover:text-purple-400 border-2 px-4 py-2 border-purple-600 rounded-lg glow hover:scale-125 transition" href="http://github.com/Akash-Mourya1728">
                  <span className=" ">Github</span> <FaGithub />
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
