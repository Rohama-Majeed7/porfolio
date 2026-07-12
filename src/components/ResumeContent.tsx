"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, CalendarDays, Sparkles } from "lucide-react";
import { resumeData } from "@/helper";

const resumeLink =
  "https://drive.google.com/file/d/1nbwdihKZxLB64cDsyM8f2u5_7Qy3n3g-/view?usp=sharing";

const ResumeContent = () => {
  const sortedResumeData = [...resumeData].reverse();

  return (
    <section
      id="resume"
      className="rounded-xl border border-[#BDC3C7]/30 bg-[#ECF0F1] min-h-screen w-full px-2 py-5 text-[#2C3E50] sm:px-4 sm:py-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-3 mt-2 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-4 py-2 text-sm font-medium text-[#ECF0F1]">
            <Sparkles size={16} />
            Resume Timeline
          </div>

          <h1 className="text-3xl font-bold leading-tight text-[#2C3E50] sm:text-4xl md:text-5xl">
            My <span className="text-[#34495E]">Resume</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#34495E]/70 sm:text-base">
            A quick overview of my education, experience, skills, and
            professional journey.
          </p>

          <div className="mt-5">
            <Link
              href={resumeLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2C3E50] px-5 py-3 text-sm font-semibold text-[#ECF0F1] shadow-lg transition hover:scale-105 hover:bg-[#34495E]"
            >
              <Download size={18} />
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="rounded-xl border border-[#BDC3C7]/30 bg-white p-3 shadow-sm sm:p-6 md:p-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#34495E] via-[#7F8C8D] to-transparent sm:left-5" />

            <div className="space-y-4">
              {sortedResumeData.map((item, idx) => (
                <motion.div
                  key={`${item.year}-${item.title}-${idx}`}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[10px] top-5 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#34495E] bg-[#ECF0F1] shadow-sm sm:left-[12px]">
                    <div className="h-2 w-2 rounded-full bg-[#34495E]" />
                  </div>

                  {/* Card */}
                  <div className="group rounded-xl border border-[#BDC3C7]/30 bg-white p-3 transition-all hover:-translate-y-1 hover:border-[#34495E]/40 hover:shadow-md sm:p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/10 px-3 py-1 text-xs font-semibold text-[#34495E]">
                        <CalendarDays size={14} />
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#2C3E50] sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#34495E]/70 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 rounded-xl border border-[#BDC3C7]/30 bg-[#2C3E50] p-3 sm:p-6 text-[#ECF0F1]"
        >
          <h2 className="text-xl font-bold sm:text-2xl">
            Want to know more about my experience?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#BDC3C7]">
            Download my CV to view my complete education, experience, skills,
            and project details.
          </p>

          <div className="mt-5">
            <Link
              href={resumeLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-[#ECF0F1] px-5 py-3 text-sm font-semibold text-[#2C3E50] transition hover:bg-[#BDC3C7] hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeContent;