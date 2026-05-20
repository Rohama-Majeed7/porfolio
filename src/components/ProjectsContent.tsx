"use client";

import React, { useState } from "react";
import projectsData, { Project } from "@/project";
import { FaAngleDown } from "react-icons/fa";
import SingleProject from "@/components/SingleProject";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsContent: React.FC = () => {
  const [project, setProject] = useState<Project[]>(projectsData);
  const [showProject, setShowProject] = useState<boolean>(false);
  const [singleProject, setSingleProject] = useState<Project | null>(null);
  const [scale, setScale] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("All");

  const allProjects = () => {
    setLabel("All");
    setProject(projectsData);
  };

  const filterProjects = (type: "practical" | "frontend" | "backend") => {
    const newArray = projectsData.filter((pro) => pro.projectType === type);
    setLabel(type);
    setProject(newArray);
  };

  const filters = [
    { label: "All", action: allProjects },
    { label: "Frontend", action: () => filterProjects("frontend") },
    { label: "Backend", action: () => filterProjects("backend") },
    { label: "Practical", action: () => filterProjects("practical") },
  ];

  return (
    <section
      id="projects"
      className="
        h-full
        w-full
        rounded-2xl
        bg-[#1b262c]
        border border-[#4fced5]/40
        shadow-[0_0_15px_rgba(79,206,213,0.15)]
        overflow-hidden
      "
    >
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col h-full p-4 sm:p-6 gap-4"
      >
        {/* HEADER */}
        <div>
          <p className="text-2xl font-bold text-white">
            My <span className="text-[#4fced5]">Projects</span>
          </p>
          <div className="h-1 w-20 bg-[#4fced5] rounded-full mt-1"></div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((btn, idx) => (
            <motion.button
              key={idx}
              onClick={btn.action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-4 py-2
                text-sm
                rounded-xl
                border border-[#4fced5]/50
                bg-white/5
                text-white
                hover:bg-[#4fced5]
                hover:text-black
                transition-all
              "
            >
              {btn.label}
            </motion.button>
          ))}
        </div>

        {/* LABEL */}
        <h1 className="text-white text-sm font-semibold text-center tracking-wider">
          Showing:{" "}
          <span className="text-[#4fced5] uppercase">{label}</span>
        </h1>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="
            flex-1
            overflow-y-auto
            scrollable
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
            pr-1
          "
        >
          {project.map((pro, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ scale: 1.03 }}
              className="
                relative
                h-[200px]
                rounded-2xl
                overflow-hidden

                border border-white/10
                bg-white/5

                shadow-md
                hover:shadow-[0_0_20px_rgba(79,206,213,0.25)]

                cursor-pointer
                group
              "
            >
              {/* IMAGE */}
              <Image
                src={pro.proImg}
                alt="project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/40
                  flex flex-col
                  items-center
                  justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                  text-center
                  p-3
                "
              >
                <p className="text-white font-bold">Project</p>
                <p className="text-xs text-gray-200">
                  Click for details
                </p>

                <FaAngleDown className="text-[#4fced5] animate-bounce mt-2" />

                <button
                  onClick={() => {
                    setShowProject(true);
                    setScale(true);
                    setSingleProject(pro);
                  }}
                  className="
                    mt-3
                    px-4 py-2
                    rounded-xl
                    bg-[#4fced5]
                    text-black
                    text-sm
                    cusror-pointer
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>

      {/* MODAL */}
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

export default ProjectsContent;