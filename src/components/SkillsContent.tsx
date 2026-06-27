"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & QA",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Manual Testing"],
  },
];

const HomeSkills = () => {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] sm:p-5 p-2.5 backdrop-blur-xl md:p-8">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-semibold text-[#4fced5]">Skills</p>
          <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
            Technologies and tools I use to build full-stack, responsive, and
            maintainable web applications.
          </p>
        </div>

        {/* <Link
          href="/skills"
          className="flex w-fit items-center gap-2 rounded-xl border border-[#4fced5]/40 sm:px-4 px-2 py-2 text-sm font-semibold text-[#4fced5] transition hover:bg-[#4fced5] hover:text-black"
        >
          View Skills
          <ArrowRight size={16} />
        </Link> */}
      </div>

      <div className="grid gap-5 md:grid-cols-2 grid-cols-1">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-3xl border border-white/10 bg-black/20 p-5 transition hover:border-[#4fced5]/40"
          >
            <h3 className="mb-4 text-xl font-bold text-[#4fced5]">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeSkills;