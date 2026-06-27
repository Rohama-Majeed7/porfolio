"use client";

import React, { useState } from "react";
import projectsData, { Project, ProjectType } from "@/project";
import SingleProject from "@/components/SingleProject";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const filters: { label: string; value: "all" | ProjectType }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Client Work", value: "client" },
  { label: "Practice", value: "practice" },
];

const ProjectsContent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectType>("all");
  const [showProject, setShowProject] = useState(false);
  const [singleProject, setSingleProject] = useState<Project | null>(null);
  const [scale, setScale] = useState(false);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.projectType === activeFilter);

  return (
    <section className="min-h-screen sm:px-4 sm:py-8 px-2 py-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <p className="text-[#4fced5] font-semibold mb-2">My Work</p>
          <h1 className="text-3xl md:text-5xl font-bold">Featured Projects</h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            A selection of full-stack and frontend projects built with React,
            Next.js, Node.js, MongoDB, TypeScript, and modern UI tools.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`sm:px-4 px-2 py-2 rounded-full border text-sm transition-all ${
                activeFilter === filter.value
                  ? "bg-[#4fced5] text-black border-[#4fced5]"
                  : "bg-white/5 text-white/80 border-white/10 hover:border-[#4fced5] hover:text-[#4fced5]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-white/50 mb-6">
          Showing {filteredProjects.length} project
          {filteredProjects.length > 1 ? "s" : ""}
        </p>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-all hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-black/30">
                <Image
                  src={project.proImg}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {project.featured && (
                  <span className="absolute top-3 left-3 rounded-full bg-[#4fced5] sm:px-3 px-1 py-1 text-xs font-semibold text-black">
                    Featured
                  </span>
                )}
              </div>

              <div className="sm:p-5 p-2.5">
                <h2 className="text-xl font-bold mb-2 group-hover:text-[#4fced5] transition">
                  {project.title}
                </h2>

                <p className="text-white/65 text-sm leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 border border-white/10 sm:px-3 px-1 py-1 text-xs text-white/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-5">
                  <button
                    onClick={() => {
                      setShowProject(true);
                      setScale(true);
                      setSingleProject(project);
                    }}
                    className="flex-1 rounded-xl bg-[#4fced5] sm:px-4 px-2 py-2 text-sm font-semibold text-black hover:scale-[1.02] transition"
                  >
                    View Details
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center hover:text-[#4fced5] hover:border-[#4fced5] transition"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}

                  {project.gitHub && (
                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-xl border border-white/10 flex items-center justify-center hover:text-[#4fced5] hover:border-[#4fced5] transition"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

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