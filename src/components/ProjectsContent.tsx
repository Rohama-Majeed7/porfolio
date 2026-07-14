"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import projectsData, { Project, ProjectType } from "@/project";
import SingleProject from "@/components/SingleProject";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const filters: { label: string; value: "all" | ProjectType }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Client Work", value: "client" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

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
      <section className="min-h-screen rounded-xl border border-[#BDC3C7]/30 bg-[#ECF0F1] px-2 py-5 text-[#2C3E50] sm:px-4 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-6xl"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-3 py-2 text-sm font-medium text-[#ECF0F1] sm:px-4"
            >
              <Star size={16} />
              My Work
            </motion.div>

            <h1 className="text-3xl font-bold leading-tight text-[#2C3E50] sm:text-4xl md:text-5xl">
              Featured Projects
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#34495E]/70 sm:text-base">
              A selection of full-stack, frontend, and client projects built
              with React, Next.js, Node.js, MongoDB, TypeScript, and modern UI
              tools.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8 flex flex-wrap gap-3"
          >
            {filters.map((filter, i) => (
              <motion.button
                key={filter.value}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.06 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-xl border px-3 py-2 text-sm transition-all sm:px-4 ${activeFilter === filter.value
                    ? "border-[#2C3E50] bg-[#2C3E50] text-[#ECF0F1]"
                    : "border-[#BDC3C7]/30 bg-white text-[#34495E] hover:border-[#34495E] hover:bg-[#34495E]/10"
                  }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.35 }}
            className="mb-6 text-sm text-[#34495E]/60"
          >
            Showing {filteredProjects.length} project
            {filteredProjects.length > 1 ? "s" : ""}
          </motion.p>

          {/* Project Cards */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 32, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group flex h-full min-h-[30rem] flex-col overflow-hidden rounded-xl border border-[#BDC3C7]/30 bg-white shadow-sm hover:shadow-md md:min-h-[32rem]"
                >
                  <div className="relative h-48 overflow-hidden bg-[#2C3E50]/10">
                    <Image
                      src={project.proImg}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {project.featured && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute left-3 top-3 rounded-full bg-[#2C3E50] px-2 py-1 text-xs font-semibold text-[#ECF0F1] sm:px-3"
                      >
                        Featured
                      </motion.span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-3 sm:p-5">
                    <h2 className="mb-2 text-xl font-bold text-[#2C3E50] transition group-hover:text-[#34495E]">
                      {project.title}
                    </h2>

                    <p className="line-clamp-3 text-sm leading-relaxed text-[#34495E]/70">
                      {project.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, ti) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25, delay: ti * 0.05 }}
                          className="rounded-full border border-[#BDC3C7]/30 bg-[#ECF0F1] px-2 py-1 text-xs text-[#34495E]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3 pt-5">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          setSingleProject(project);
                          setShowProject(true);
                          setScale(true);
                        }}
                        className="flex-1 rounded-xl bg-[#2C3E50] px-3 py-2 text-sm font-semibold text-[#ECF0F1] transition hover:bg-[#34495E] sm:px-4"
                      >
                        View Details
                      </motion.button>

                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.12, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BDC3C7]/30 text-[#34495E] transition hover:border-[#2C3E50] hover:text-[#2C3E50]"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      )}

                      {project.gitHub && (
                        <motion.a
                          href={project.gitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.12, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BDC3C7]/30 text-[#34495E] transition hover:border-[#2C3E50] hover:text-[#2C3E50]"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
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