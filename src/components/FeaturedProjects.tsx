"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import projectsData from "@/project";

const FeaturedProjects = () => {
  const featuredProjects = projectsData
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-8">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-semibold text-[#4fced5]">Featured Work</p>
          <h2 className="text-3xl font-bold text-white">Best Projects</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
            These are my strongest projects that show my frontend, full-stack,
            API integration, UI, and problem-solving skills.
          </p>
        </div>

        <Link
          href="/projects"
          className="flex w-fit items-center gap-2 rounded-xl border border-[#4fced5]/40 px-4 py-2 text-sm font-semibold text-[#4fced5] transition hover:bg-[#4fced5] hover:text-black"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-black/20 transition hover:-translate-y-1 hover:border-[#4fced5]/40"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.proImg}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />

              <span className="absolute left-3 top-3 rounded-full bg-[#4fced5] px-3 py-1 text-xs font-semibold text-black">
                Featured
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold transition group-hover:text-[#4fced5]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {project.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 rounded-xl bg-[#4fced5] px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Link>
                )}

                {project.gitHub && (
                  <Link
                    href={project.gitHub}
                    target="_blank"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
                  >
                    <Github size={16} />
                    Code
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;