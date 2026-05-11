"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SkillProps,
  frontendSkills,
  backendSkills,
  databaseSkills,
  otherToolsData,
} from "@/helper";

const SkillSection = ({
  title,
  data,
}: {
  title: string;
  data: SkillProps[];
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-white text-center md:text-left">
        {title}
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {data.map(({ name, icon: Icon, color }, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="
              flex flex-col items-center justify-center
              p-3
              rounded-xl
              bg-white/5
              border border-[#4fced5]/30
              shadow-sm
              hover:shadow-[0_0_15px_rgba(79,206,213,0.3)]
              transition-all
              duration-300
            "
          >
            <Icon size={20} className={color} />
            <p className="text-[11px] mt-2 text-white text-center">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SkillsContent = () => {
  return (
    <section
      id="skills"
      className="
        h-full
        w-full
        rounded-2xl
        bg-[#1b262c]
        border border-[#4fced5]/40
        shadow-[0_0_15px_rgba(79,206,213,0.15)]
        overflow-hidden
      "
    >
      <main className="flex flex-col h-full p-4 sm:p-6 gap-5 overflow-y-auto scrollable">

        {/* HEADER */}
        <div>
          <p className="text-2xl font-bold text-white">
            My <span className="text-[#4fced5]">Skills</span>
          </p>
          <div className="h-1 w-20 bg-[#4fced5] rounded-full mt-1"></div>
        </div>

        {/* SECTIONS */}
        <SkillSection title="Frontend" data={frontendSkills} />
        <SkillSection title="Backend" data={backendSkills} />
        <SkillSection title="Database" data={databaseSkills} />
        <SkillSection title="Other Tools" data={otherToolsData} />
      </main>
    </section>
  );
};

export default SkillsContent;