"use client";

import React from "react";
import { Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/helper";

const HomeExperience = () => {
  return (
    <section className="rounded-xl border border-[#BDC3C7]/30 bg-[#ECF0F1] px-2 py-6 text-[#2C3E50] sm:px-4 sm:py-6 md:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-8 max-w-3xl">
          <div className="mb-3 mt-2 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-3 py-2 text-sm font-medium text-[#ECF0F1] sm:px-4">
            <Sparkles size={16} />
            My Experience
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#2C3E50] sm:text-4xl md:text-5xl">
            Work Journey
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#34495E]/70 sm:text-base">
            My development, QA, internship, and community experience.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.title}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group rounded-xl border border-[#BDC3C7]/30 bg-white p-3 shadow-sm transition-all hover:-translate-y-1 hover:border-[#34495E]/40 hover:shadow-md sm:p-5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#34495E]/10 text-[#34495E] transition group-hover:bg-[#34495E] group-hover:text-[#ECF0F1]">
                <Briefcase size={20} />
              </div>

              <h3 className="text-lg font-bold leading-tight text-[#2C3E50]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-[#34495E]">
                {item.company}
              </p>

              <p className="mt-1 text-xs text-[#7F8C8D]">{item.duration}</p>

              <p className="mt-4 text-sm leading-relaxed text-[#34495E]/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeExperience;