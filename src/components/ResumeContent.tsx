"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { resumeData } from "@/helper";

const ResumeContent = () => {
  return (
    <section
      id="resume"
      className="
        h-full
        w-full
        bg-gradient-to-br from-[#1b262c] to-[#111a20]
        border border-[#4fced5]/30
        rounded-2xl
        shadow-[0_0_25px_rgba(79,206,213,0.12)]
        overflow-hidden
      "
    >
      <main className="flex flex-col h-full p-4 sm:p-5 gap-4">

        {/* HEADER */}
        <div>
          <p className="text-2xl font-extrabold text-white">
            My <span className="text-[#4fced5]">Resume</span>
          </p>
          <div className="h-1 w-24 bg-[#4fced5] rounded-full mt-1"></div>
        </div>

        {/* TIMELINE */}
        <div className="flex-1 relative pl-6 scrollable overflow-x-hidden overflow-y-auto">

          {/* vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-[#4fced5]/30"></div>

          <div className="flex flex-col gap-4 ">
            {resumeData.reverse().map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                {/* dot */}
                <div className="absolute -left-[22px] top-3 w-3 h-3 rounded-full bg-[#4fced5] shadow-[0_0_10px_#4fced5]" />

                {/* card */}
                <div
                  className="
                    bg-[#1a2328]
                    border border-[#4fced5]/40
                    rounded-xl
                    p-4
                    shadow-md
                    hover:shadow-[#4fced5]/20
                    transition-all
                  "
                >
                  <p className="text-[#4fced5] font-bold text-sm">
                    {item.year}
                  </p>

                  <h3 className="text-white font-semibold text-base mt-1">
                    {item.title}
                  </h3>

                  <p className="text-[#a1a1aa] text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <Link
            href="/myResume/Rohama-Majeed.pdf"
            target="_blank"
            className="
              px-6 py-2.5
              rounded-full

              bg-[#4fced5]
              text-black
              font-semibold

              shadow-[0_0_15px_rgba(79,206,213,0.3)]

              hover:scale-105
              transition-all
            "
          >
            Download CV
          </Link>
        </div>

      </main>
    </section>
  );
};

export default ResumeContent;