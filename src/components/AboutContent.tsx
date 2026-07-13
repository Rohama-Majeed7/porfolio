"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
  Database,
  Server,
  Bug,
} from "lucide-react";

import myImg from "@/myImgs/1718159743761-removebg-preview.png";

const focusAreas = [
  {
    icon: <Code2 size={20} />,
    title: "Frontend Development",
    desc: "Responsive interfaces with React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: <Server size={20} />,
    title: "Backend Development",
    desc: "APIs, authentication, CRUD systems, and backend logic with Node.js and Express.",
  },
  {
    icon: <Database size={20} />,
    title: "Database & ORM",
    desc: "Working with MongoDB, PostgreSQL, Prisma, and structured data models.",
  },
  {
    icon: <Bug size={20} />,
    title: "QA Mindset",
    desc: "Testing features, finding bugs, writing test cases, and improving reliability.",
  },
];

const AboutContent = () => {
  return (
    <section className="rounded-xl border border-[#BDC3C7]/30 bg-[#ECF0F1] min-h-screen px-2 py-5 text-[#2C3E50] sm:px-4 sm:py-5">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 mt-2 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-4 py-2 text-sm font-medium text-[#ECF0F1]">
            <Sparkles size={16} />
            About Me
          </div>

          <h1 className="text-3xl font-bold leading-tight text-[#2C3E50] sm:text-4xl md:text-5xl">
            Get to Know Me Better
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#34495E]/80 sm:text-base">
            Full Stack Developer focused on building clean, responsive, and
            reliable web applications.
          </p>
        </div>

        {/* Main About Section */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mx-auto flex h-[170px] w-[170px] items-center justify-center sm:h-[220px] sm:w-[220px] md:h-[320px] md:w-[320px] lg:h-[420px] lg:w-[420px]"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-[#34495E] via-[#7F8C8D] to-[#2C3E50] opacity-30 blur-3xl" />
              <div className="absolute inset-0 scale-105 rounded-full bg-[#7F8C8D]/20 blur-2xl" />

              <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-[#2C3E50] via-[#ECF0F1] to-[#34495E] p-[3px] shadow-[0_0_45px_rgba(44,62,80,0.25)]">
                <Image
                  src={myImg}
                  alt="Rohama Majeed"
                  className="h-full w-full rounded-full border-2 border-[#ECF0F1] object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-col justify-center rounded-xl border border-[#BDC3C7]/30 bg-white p-3 shadow-sm sm:p-6 md:p-4"
          >
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-3 py-2 text-sm text-[#ECF0F1]">
              <Sparkles size={16} />
              Developer Profile
            </div>

            <h2 className="text-xl font-semibold leading-tight text-[#2C3E50] sm:text-2xl md:text-3xl">
              I build practical web apps with clean design and reliable
              functionality.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#34495E]/80 sm:text-base">
              I’m Rohama Majeed, a Full Stack Developer experienced in React,
              Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, and API
              integration.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#34495E]/80 sm:text-base">
              I have worked on dashboards, LMS platforms, authentication
              systems, admin panels, chat apps, blogs, e-commerce apps, and
              full-stack CRUD applications.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-xl bg-[#2C3E50] px-4 py-2 text-sm font-semibold text-[#ECF0F1] transition hover:bg-[#34495E] hover:scale-105 sm:px-5"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>

              <Link
                href={process.env.resume || "#"}
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-[#7F8C8D] px-4 py-2.5 text-sm font-semibold text-[#34495E] transition hover:bg-[#34495E] hover:text-[#ECF0F1] sm:px-5"
              >
                <Download size={16} />
                Download CV
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="mt-4 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
              className="rounded-xl border border-[#BDC3C7]/30 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:border-[#34495E]/40 hover:shadow-md sm:p-5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#34495E]/10 text-[#34495E]">
                {area.icon}
              </div>

              <h3 className="text-lg font-bold text-[#2C3E50]">{area.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-[#34495E]/70">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutContent;