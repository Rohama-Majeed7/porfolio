"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Star,
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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const HomeSkills = () => {
  return (
    <section className="rounded-xl border border-[#BDC3C7]/30 bg-[#ECF0F1] p-3 text-[#2C3E50] sm:p-6 md:p-8">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-4 py-2 text-sm font-medium text-[#ECF0F1]"
          >
            <Star size={16} />
            Skills &amp; Tools
          </motion.div>

          <h2 className="text-3xl font-bold text-[#2C3E50] md:text-4xl">
            Technical Skills
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#34495E]/70 sm:text-base">
            Technologies I use to build responsive, full-stack, and reliable web
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid w-full w-fit sm:grid-cols-2 gap-3"
        >
          {[{ value: "21+", label: "Projects" }, { value: "4", label: "Skill Areas" }].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-[#BDC3C7]/30 bg-white px-4 py-3 text-center shadow-sm cursor-default"
            >
              <h3 className="text-xl font-bold text-[#34495E]">{stat.value}</h3>
              <p className="text-xs text-[#7F8C8D]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skill Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl border border-[#BDC3C7]/30 bg-white p-5 shadow-sm transition-all hover:border-[#34495E]/40 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#34495E]/10 transition group-hover:bg-[#34495E]/20" />

            <div className="relative">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#7F8C8D]/30 bg-[#34495E]/10 text-[#34495E] p-2"
                  >
                    {group.icon}
                  </motion.div>

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

              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    whileHover={{ scale: 1.08, backgroundColor: "#34495E", color: "#ECF0F1" }}
                    className="rounded-full border border-[#BDC3C7]/30 bg-[#ECF0F1] px-3 py-1.5 text-xs font-medium text-[#34495E] transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeSkills;