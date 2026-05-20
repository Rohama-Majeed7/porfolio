"use client";

import React from "react";
import { motion } from "framer-motion";

const SkillGroup = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 rounded-2xl p-4 shadow-md"
    >
      <h3 className="text-[#4fced5] font-bold text-lg mb-3">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full
            bg-black/30 border border-white/10 text-white
            hover:border-[#4fced5] hover:text-[#4fced5]
            transition"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsContent = () => {
  return (
    <section
      id="skills"
      className="h-full w-full rounded-2xl bg-[#1b262c] border border-[#4fced5]/40 shadow-xl overflow-hidden"
    >
      <main className="h-full overflow-y-auto scrollable p-4 sm:p-6 flex flex-col gap-5">

        {/* HEADER */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            My <span className="text-[#4fced5]">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-[#4fced5] rounded-full mt-1"></div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm leading-relaxed">
          I work as a full-stack developer with strong knowledge in frontend,
          backend, software engineering fundamentals, testing, and modern tools.
        </p>

        {/* SKILL GROUPS */}
        <SkillGroup
          title="Frontend Development"
          items={["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"]}
        />

        <SkillGroup
          title="Backend Development"
          items={["Next.js", "Node.js", "Express.js", "MongoDB","PostgreSQL", "REST APIs",]}
        />

        <SkillGroup
          title="Core Software Engineering"
          items={[
            "Data Structures & Algorithms",
            "OOP",
            "DBMS",
            "Software Design & Architecture",
            "Operating Systems",
            "Computer Networks",
          ]}
        />

        <SkillGroup
          title="Software Quality Assurance (SQA)"
          items={[
            "Manual Testing",
            "Unit Testing",
            "Test Case Design",
            "Debugging",
          ]}
        />

        <SkillGroup
          title="Other Tools & Technologies"
          items={[
            "Strapi",
            "Git & GitHub",
            "Responsive Design",
            "Prisma",
            "API Integration",
          ]}
        />

      </main>
    </section>
  );
};

export default SkillsContent;