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
  CheckCircle2,
} from "lucide-react";

import myImg from "@/myImgs/1718159743761-removebg-preview.png";

const highlights = [
  "MERN stack development",
  "Responsive UI design",
  "REST API integration",
  "MongoDB / PostgreSQL",
  "QA testing",
  "Reusable components",
];

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
    <section className="min-h-screen sm:px-4 px-2 sm:py-8 sm:py-5 text-white">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl"
      >
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="mb-2 font-semibold text-xl text-[#4fced5]">About Me</p>

          <h1 className="sm:text-3xl text-2xl font-bold md:text-5xl">
            Get to Know Me Better
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Full Stack Developer focused on building clean, responsive, and
            reliable web applications.
          </p>
        </div>

        {/* Main About Section */}
        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Gradient glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4fced5] via-cyan-300 to-[#1bffff] opacity-35 blur-3xl scale-110" />

              {/* Extra soft outer shadow */}
              <div className="absolute inset-0 rounded-full bg-[#4fced5]/30 blur-2xl scale-105" />

              {/* Image wrapper */}
              <div className="relative rounded-full bg-gradient-to-tr from-[#4fced5] via-white/30 to-[#4fced5] p-[3px] shadow-[0_0_45px_rgba(79,206,213,0.35)]">
                <Image
                  src={myImg}
                  alt="Rohama Majeed"
                  className="h-[400px] w-[400px] rounded-full border-2 border-[#0f1720] object-cover"
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
            className="flex min-h-[430px] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.04] sm:p-4 p-2.5 shadow-[0_0_30px_rgba(79,206,213,0.08)] backdrop-blur-xl md:p-8"
          >
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 sm:px-3 px-2 py-2 text-sm text-[#4fced5]">
              <Sparkles size={16} />
              Developer Profile
            </div>

            <h2 className="sm:text-2xl text-xl font-bold leading-tight md:text-3xl">
              I build practical web apps with clean design and reliable
              functionality.
            </h2>

            <p className="mt-2 leading-relaxed text-white/70">
              I’m Rohama Majeed, a Full Stack Developer experienced in React,
              Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, and API
              integration.
            </p>

            <p className="mt-2 leading-relaxed text-white/70">
              I have worked on dashboards, LMS platforms, authentication
              systems, admin panels, chat apps, blogs, e-commerce apps, and
              full-stack CRUD applications.
            </p>

            {/* Highlights */}
            {/* <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 sm:p-3 p-2"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-[#4fced5]"
                  />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div> */}

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="flex items-center gap-2 rounded-xl bg-[#4fced5] sm:px-5 px-2.5 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>

              <Link
                href="https://drive.google.com/file/d/1nbwdihKZxLB64cDsyM8f2u5_7Qy3n3g-/view?usp=sharing"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
              >
                <Download size={16} />
                Download CV
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] sm:p-5 p-2 transition hover:-translate-y-1 hover:border-[#4fced5]/40 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#4fced5]/10 text-[#4fced5]">
                {area.icon}
              </div>

              <h3 className="text-lg font-bold text-white">{area.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-white/62">
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