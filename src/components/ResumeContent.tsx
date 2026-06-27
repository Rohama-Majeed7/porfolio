"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, FileText, CalendarDays } from "lucide-react";
import { resumeData } from "@/helper";

const resumeLink =
  "https://drive.google.com/file/d/13OEUms27Bf2POgTec_3cfdcu7XEN49wk/view?usp=sharing";

const ResumeContent = () => {
  const sortedResumeData = [...resumeData].reverse();

  return (
    <section
      id="resume"
      className="min-h-screen w-full sm:px-4 px-2 sm:py-8 py-4 text-white"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] sm:p-5 p-2 shadow-[0_0_30px_rgba(79,206,213,0.08)] backdrop-blur-xl sm:p-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 sm:px-4 px-2 py-2 text-sm font-medium text-[#4fced5]">
                <FileText size={16} />
                Resume Timeline
              </div>

              <h1 className="text-3xl font-bold md:text-5xl">
                My <span className="text-[#4fced5]">Resume</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
                A quick overview of my education.
              </p>
            </div>

            <Link
              href={resumeLink}
              target="_blank"
              className="flex w-fit items-center gap-2 rounded-xl bg-[#4fced5] sm:px-5 px-2.5 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(79,206,213,0.25)] transition hover:scale-105"
            >
              <Download size={18} />
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] sm:p-4 p-2 shadow-[0_0_30px_rgba(79,206,213,0.08)] backdrop-blur-xl sm:p-6 md:p-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#4fced5] via-[#4fced5]/40 to-transparent sm:left-5" />

            <div className="space-y-5">
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
                  <div className="absolute left-[10px] top-5 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#4fced5] bg-[#071014] shadow-[0_0_14px_rgba(79,206,213,0.8)] sm:left-[12px]">
                    <div className="h-2 w-2 rounded-full bg-[#4fced5]" />
                  </div>

                  {/* Card */}
                  <div className="group rounded-3xl border border-white/10 bg-black/20 sm:p-4 p-2 transition-all hover:-translate-y-1 hover:border-[#4fced5]/50 hover:bg-white/[0.05] sm:p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 px-3 py-1 text-xs font-semibold text-[#4fced5]">
                        <CalendarDays size={14} />
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
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
          className="mt-8 rounded-3xl border border-[#4fced5]/30 bg-gradient-to-br from-[#0f1720] via-[#142029] to-[#081114] sm:p-6 p-3 text-center shadow-[0_0_35px_rgba(79,206,213,0.12)]"
        >
          <h2 className="sm:text-2xl text-xl font-bold text-white">
            Want to know more about my experience?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
            You can download my CV to view my complete education, experience,
            skills, and project details.
          </p>

          <div className="mt-5 flex justify-center">
            <Link
              href={resumeLink}
              target="_blank"
              className="flex items-center gap-2 rounded-xl bg-[#4fced5] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
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