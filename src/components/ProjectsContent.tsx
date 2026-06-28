"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import projectsData, { Project, ProjectType } from "@/project";
import SingleProject from "@/components/SingleProject";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const filters: { label: string; value: "all" | ProjectType }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Client Work", value: "client" },
];

const ProjectsContent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectType>("all");
  const [showProject, setShowProject] = useState(false);
  const [singleProject, setSingleProject] = useState<Project | null>(null);
  const [scale, setScale] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.projectType === activeFilter);

  return (
    <>
      <section className="min-h-screen rounded-3xl border border-white/10 bg-white/[0.04] px-2 py-5 text-white shadow-[0_0_35px_rgba(79,206,213,0.1)] backdrop-blur-xl sm:px-4 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-6xl"
        >
          {/* Heading */}
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 px-3 py-2 text-sm font-medium text-[#4fced5] sm:px-4">
              <Sparkles size={16} />
              My Work
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Featured Projects
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              A selection of full-stack, frontend, and client projects built
              with React, Next.js, Node.js, MongoDB, TypeScript, and modern UI
              tools.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full border px-3 py-2 text-sm transition-all sm:px-4 ${
                  activeFilter === filter.value
                    ? "border-[#4fced5] bg-[#4fced5] text-black"
                    : "border-white/10 bg-white/5 text-white/80 hover:border-[#4fced5] hover:text-[#4fced5]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <p className="mb-6 text-sm text-white/50">
            Showing {filteredProjects.length} project
            {filteredProjects.length > 1 ? "s" : ""}
          </p>

          {/* Project Cards */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="relative h-48 overflow-hidden bg-black/30">
                  <Image
                    src={project.proImg}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {project.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-[#4fced5] px-2 py-1 text-xs font-semibold text-black sm:px-3">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-3 sm:p-5">
                  <h2 className="mb-2 text-xl font-bold transition group-hover:text-[#4fced5]">
                    {project.title}
                  </h2>

                  <p className="line-clamp-3 text-sm leading-relaxed text-white/65">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/75 sm:px-3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSingleProject(project);
                        setShowProject(true);
                        setScale(true);
                      }}
                      className="flex-1 rounded-xl bg-[#4fced5] px-3 py-2 text-sm font-semibold text-black transition hover:scale-[1.02] sm:px-4"
                    >
                      View Details
                    </button>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:border-[#4fced5] hover:text-[#4fced5]"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                    {project.gitHub && (
                      <a
                        href={project.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition hover:border-[#4fced5] hover:text-[#4fced5]"
                        aria-label={`${project.title} GitHub`}
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
      </section>

      {mounted &&
        showProject &&
        singleProject &&
        createPortal(
          <SingleProject
            onClose={setShowProject}
            singleProject={singleProject}
            scale={scale}
            setScale={setScale}
          />,
          document.body
        )}
    </>
  );
};

export default ProjectsContent;