"use client";

import React from "react";
import { Briefcase, Star } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { experiences } from "@/helper";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const HomeExperience = () => {
  return (
    <section className="rounded-xl border border-[#BDC3C7]/30 bg-[#ECF0F1] px-2 py-6 text-[#2C3E50] sm:px-4 sm:py-6 md:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-3 mt-2 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-3 py-2 text-sm font-medium text-[#ECF0F1] sm:px-4"
          >
            <Star size={16} />
            My Experience
          </motion.div>

          <h2 className="text-3xl font-bold leading-tight text-[#2C3E50] sm:text-4xl md:text-5xl">
            Work Journey
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#34495E]/70 sm:text-base">
            My development, QA, internship, and community experience.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {experiences.map((item) => (
            <motion.div
              key={`${item.company}-${item.title}`}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-xl border border-[#BDC3C7]/30 bg-white p-3 shadow-sm hover:border-[#34495E]/40 hover:shadow-md sm:p-5"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#34495E]/10 text-[#34495E] transition group-hover:bg-[#34495E] group-hover:text-[#ECF0F1]"
              >
                <Briefcase size={20} />
              </motion.div>

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
        </motion.div>
      </div>
    </section>
  );
};

export default HomeExperience;