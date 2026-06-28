"use client";

import React, { useEffect } from "react";
import { FaTimes, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/project";

interface SingleProjectProps {
  onClose: (value: boolean) => void;
  singleProject: Project;
  scale: boolean;
  setScale: (value: boolean) => void;
}

const SingleProject = ({
  onClose,
  singleProject,
  scale,
  setScale,
}: SingleProjectProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setScale(false);
    }, 10);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, [setScale]);

  return (
    <div className="fixed inset-0 z-50 flex  items-start justify-center overflow-y-auto bg-black/80 px-3 py-5 backdrop-blur-sm sm:items-center sm:px-4 sm:py-8">
      <div
        className={`relative w-full max-w-5xl max-h-[calc(100vh-48px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#081114] text-white shadow-2xl transition-all my-2 duration-300 sm:max-h-[90vh] ${
          scale ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <button
          onClick={() => {
            onClose(false);
            setScale(true);
          }}
          className="sticky top-3 right-3  z-20 ml-auto mr-4 mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:bg-[#4fced5] hover:text-black"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="grid gap-6 p-3 pt-1 sm:p-5 md:grid-cols-2 md:p-7 md:pt-3">
          <div className="relative min-h-[210px] overflow-hidden rounded-2xl border border-white/10 bg-black/30 sm:min-h-[260px] md:min-h-[360px]">
            <Image
              src={singleProject.proImg}
              alt={singleProject.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="pb-3">
            <p className="mb-2 text-sm font-semibold text-[#4fced5]">
              Project Details
            </p>

            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              {singleProject.title}
            </h2>

            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              {singleProject.desc}
            </p>

            <div className="mt-5">
              <h3 className="mb-3 font-semibold">Tech Stack</h3>

              <div className="flex flex-wrap gap-2">
                {singleProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75 sm:px-3"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="mb-3 font-semibold">Main Features</h3>

              <ul className="space-y-2 text-sm text-white/70">
                {singleProject.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#4fced5]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {singleProject.link && (
                <Link
                  href={singleProject.link}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl bg-[#4fced5] px-3 py-2 text-sm font-semibold text-black transition hover:scale-105 sm:px-4"
                >
                  <CiLink size={20} />
                  Live Demo
                </Link>
              )}

              {singleProject.gitHub && (
                <Link
                  href={singleProject.gitHub}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold transition hover:border-[#4fced5] hover:text-[#4fced5] sm:px-4"
                >
                  <FaGithubSquare size={20} />
                  GitHub
                </Link>
              )}

              {singleProject.linkedIn && (
                <Link
                  href={singleProject.linkedIn}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm font-semibold transition hover:border-[#4fced5] hover:text-[#4fced5] sm:px-4"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;