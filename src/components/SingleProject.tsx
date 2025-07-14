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

    return () => clearTimeout(timeout);
  }, [setScale]);

  return (
    <section className="fixed top-0 left-0 w-full h-full bg-[#0a0a0acc] backdrop-blur-md z-50 flex justify-center items-center p-2 md:p-4">
      <main
        className={`relative w-full max-w-4xl bg-[#1a1a1a] rounded-2xl border border-[#9f70fd] shadow-[0_0_60px_4px_rgba(159,112,253,0.35)] p-4 md:p-6 transition-transform duration-300 ease-in-out ${
          scale ? "scale-50 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <FaTimes
          onClick={() => {
            onClose(false);
            setScale(true);
          }}
          className="absolute top-3 right-4 text-2xl md:text-3xl text-white hover:text-[#ff6ec7] cursor-pointer transition-all duration-200"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
          <div className="w-full rounded-xl overflow-hidden">
            <Image
              src={singleProject.proImg}
              alt="project"
              width={500}
              height={400}
              className="rounded-xl object-cover w-full h-auto max-h-[300px] md:max-h-[400px] shadow-[0_0_40px_4px_rgba(255,110,199,0.3)]"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="text-[#f1f1f1] text-xl md:text-2xl font-bold">
              Project Details
            </h2>

            <div>
              <p className="text-[#c084fc] font-semibold mb-1">Description:</p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {singleProject.desc}
              </p>
            </div>

            <div className="flex gap-4 mt-2 text-xl md:text-2xl">
              {singleProject.link && (
                <Link
                  href={singleProject.link}
                  target="_blank"
                  className="text-[#9f70fd] hover:text-[#ff6ec7] transition-all"
                >
                  <CiLink />
                </Link>
              )}
              {singleProject.gitHub && (
                <Link
                  href={singleProject.gitHub}
                  target="_blank"
                  className="text-[#9f70fd] hover:text-[#ff6ec7] transition-all"
                >
                  <FaGithubSquare />
                </Link>
              )}
              {singleProject.linkedIn && (
                <Link
                  href={singleProject.linkedIn}
                  target="_blank"
                  className="text-[#9f70fd] hover:text-[#ff6ec7] transition-all"
                >
                  <FaLinkedin />
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
