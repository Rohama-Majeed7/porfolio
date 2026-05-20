"use client";

import React, { useEffect } from "react";
import {
  FaTimes,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
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

    return () => clearTimeout(timeout);
  }, [setScale]);

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl p-3">

      {/* MODAL */}
      <main
        className={`relative w-full max-w-5xl rounded-3xl border border-[#4fced5]/40
        bg-gradient-to-br from-[#0f1b22] via-[#121f27] to-[#0b1419]
        shadow-[0_0_80px_rgba(79,206,213,0.25)]
        overflow-hidden transition-all duration-300
        ${scale ? "scale-90 opacity-0" : "scale-100 opacity-100"}`}
      >

        {/* GLOW BACKGROUND */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#4fced5]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-400/10 blur-3xl rounded-full"></div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => {
            onClose(false);
            setScale(true);
          }}
          className="absolute top-4 right-4 z-10
          w-10 h-10 flex items-center justify-center
          rounded-full bg-white/5 border border-white/10
          text-white hover:bg-[#4fced5] hover:text-black
          transition-all"
        >
          <FaTimes />
        </button>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-8">

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#4fced5]/20 blur-2xl rounded-2xl opacity-40 group-hover:opacity-60 transition"></div>

            <Image
              src={singleProject.proImg}
              alt="project"
              width={600}
              height={400}
              className="relative rounded-2xl object-cover w-full max-h-[320px] md:max-h-[420px]
              border border-[#4fced5]/30 shadow-lg"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center gap-5">

            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Project <span className="text-[#4fced5]">Details</span>
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {singleProject.desc}
            </p>

            {/* LINKS */}
            <div className="flex items-center gap-4 pt-2">

              {singleProject.link && (
                <Link
                  href={singleProject.link}
                  target="_blank"
                  className="flex items-center justify-center w-11 h-11 rounded-xl
                  bg-white/5 border border-white/10 text-white
                  hover:bg-[#4fced5] hover:text-black transition"
                >
                  <CiLink size={22} />
                </Link>
              )}

              {singleProject.gitHub && (
                <Link
                  href={singleProject.gitHub}
                  target="_blank"
                  className="flex items-center justify-center w-11 h-11 rounded-xl
                  bg-white/5 border border-white/10 text-white
                  hover:bg-[#4fced5] hover:text-black transition"
                >
                  <FaGithubSquare size={20} />
                </Link>
              )}

              {singleProject.linkedIn && (
                <Link
                  href={singleProject.linkedIn}
                  target="_blank"
                  className="flex items-center justify-center w-11 h-11 rounded-xl
                  bg-white/5 border border-white/10 text-white
                  hover:bg-[#4fced5] hover:text-black transition"
                >
                  <FaLinkedin size={20} />
                </Link>
              )}
            </div>

          </div>
        </div>
      </main>
    </section>
  );
};

export default SingleProject;