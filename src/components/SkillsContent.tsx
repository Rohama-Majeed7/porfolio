"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 size={22} />,
    desc: "Building clean, responsive, and user-friendly interfaces.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={22} />,
    desc: "Creating APIs, authentication, and server-side logic.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication"],
  },
  {
    title: "Database",
    icon: <Database size={22} />,
    desc: "Designing and managing structured application data.",
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools & QA",
    icon: <Wrench size={22} />,
    desc: "Testing, debugging, deployment, and development workflow.",
    skills: ["Git", "GitHub", "Vercel", "Postman", "Manual Testing", "Automated Testing", "Playwright"],
  },
];

const HomeSkills = () => {
  return (
    <section className="rounded-xl border border-[#BDC3C7]/30 bg-[#ECF0F1] p-3 text-[#2C3E50] sm:p-6 md:p-8">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-4 py-2 text-sm font-medium text-[#ECF0F1]">
            <Sparkles size={16} />
            Skills & Tools
          </div>

          <h2 className="text-3xl font-bold text-[#2C3E50] md:text-4xl">
            Technical Skills
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#34495E]/70 sm:text-base">
            Technologies I use to build responsive, full-stack, and reliable web
            applications.
          </p>
        </div>

        <div className="grid w-full w-fit sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#BDC3C7]/30 bg-white px-4 py-3 text-center shadow-sm">
            <h3 className="text-xl font-bold text-[#34495E]">21+</h3>
            <p className="text-xs text-[#7F8C8D]">Projects</p>
          </div>

          <div className="rounded-xl border border-[#BDC3C7]/30 bg-white px-4 py-3 text-center shadow-sm">
            <h3 className="text-xl font-bold text-[#34495E]">4</h3>
            <p className="text-xs text-[#7F8C8D]">Skill Areas</p>
          </div>
        </div>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-xl border border-[#BDC3C7]/30 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#34495E]/40 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#34495E]/10 transition group-hover:bg-[#34495E]/20" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7F8C8D]/30 bg-[#34495E]/10 text-[#34495E] p-2">
                    {group.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#2C3E50]">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#7F8C8D]">
                      {group.skills.length} skills
                    </p>
                  </div>
                </div>

                <CheckCircle2
                  size={20}
                  className="text-[#34495E] opacity-70"
                />
              </div>

              <p className="mb-5 text-sm leading-relaxed text-[#34495E]/70">
                {group.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#BDC3C7]/30 bg-[#ECF0F1] px-3 py-1.5 text-xs font-medium text-[#34495E] transition group-hover:border-[#34495E]/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeSkills;