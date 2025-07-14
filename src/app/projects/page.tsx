"use client";
import React, { useState } from "react";
import projectsData, { Project } from "@/project";
import { FaAngleDown } from "react-icons/fa";
import SingleProject from "@/components/SingleProject";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsPage: React.FC = () => {
  const [project, setProject] = useState<Project[]>(projectsData);
  const [showProject, setShowProject] = useState<boolean>(false);
  const [singleProject, setSingleProject] = useState<Project | null>(null);
  const [scale, setScale] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");

  const allProjects = () => {
    setLabel("All");
    setProject(projectsData);
  };

  const filterProjects = (type: "practical" | "frontend" | "backend") => {
    const newArray = projectsData.filter((pro) => pro.projectType === type);
    setLabel(type);
    setProject(newArray);
  };

  return (
    <section
      id="projects"
      className="flex justify-center bg-gradient-to-tr from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]
       items-center min-h-screen"
    >
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:w-[98vw] w-full md:rounded-lg max-w-[1050px] flex flex-col gap-2 bg-[#0a0a0a]  mx-auto p-4"
      >
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className=" font-extrabold text-[#9f70fd] sm:text-5xl text-4xl"
          >
            My Projects
          </motion.p>
        </div>

        <div className="flex  flex-wrap items-center justify-center gap-3 my-[20px]">
          {[
            { label: "All", action: allProjects },
            {
              label: "Frontend Projects",
              action: () => filterProjects("frontend"),
            },
            {
              label: "Backend Projects",
              action: () => filterProjects("backend"),
            },
            {
              label: "Practical Projects",
              action: () => filterProjects("practical"),
            },
          ].map((btn, idx) => (
            <motion.button
              key={idx}
              onClick={btn.action || undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 cursor-pointer py-2 rounded-lg border-1 border-[#9f70fd] hover:bg-[#9f70fd] text-white font-semibold transition-all duration-300 "
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        <h1 className="text-white font-bold text-3xl text-ceenter border-1 border-b-[#9f70fd] border-l-0 border-r-0 border-t-0">
          {label.toUpperCase()}
        </h1>
        <motion.div
          layout
          className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 mb-[100px] mt-2"
        >
          {project.map((pro, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ scale: 1.03 }}
              className="group relative h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-[#ff6ec7]/30 transition-all duration-300 cursor-pointer border-3 p-2 border-[#9f70fd]"
            >
              <Image
                src={pro.proImg}
                alt="project-img"
                fill
                className="object-cover p-2 rounded-lg group-hover:opacity-10 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-bold text-lg mb-1">My Project</p>
                <p className="text-sm text-white mb-4">
                  Click for more details
                </p>
                <FaAngleDown className="text-xl text-[#9f70fd] animate-bounce mb-2" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowProject(true);
                    setScale(true);
                    setSingleProject(pro);
                  }}
                  className="py-2 px-3 bg-[#1a1a1a] rounded-full text-white hover:bg-white hover:text-black transition-all"
                >
                  More Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
      {showProject && singleProject && (
        <SingleProject
          onClose={setShowProject}
          singleProject={singleProject}
          scale={scale}
          setScale={setScale}
        />
      )}
    </section>
  );
};

export default ProjectsPage;
