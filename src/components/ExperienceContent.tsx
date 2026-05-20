"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { experiences } from "@/helper";

const ExperienceContent = () => {
  return (
    <section className="bg-[#26333a] border border-[#4fced5]  sm:rounded-lg p-3 h-full overflow-x-hidden scrollable">
      
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-white">
          Work <span className="text-[#4fced5]">Experience</span>
        </h2>
        <div className="w-28 h-1 bg-[#4fced5] rounded"></div>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-[#4fced5]/50 ml-4">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-8 ml-6 relative"
          >
            {/* DOT (FIXED ALIGNMENT) */}
            <span className="absolute -left-[11px] top-2 w-4 h-4 bg-[#4fced5] rounded-full border-2 border-[#1a2328] shadow-[0_0_10px_#4fced5]"></span>

            {/* CARD */}
            <div className="bg-[#1a2328] p-4 rounded-xl border border-[#4fced5]/30 shadow-md hover:shadow-[#4fced5]/30 transition-all">
              
              <h3 className="text-[#4fced5] font-bold text-lg">
                {exp.title}
              </h3>

              <p className="text-white font-semibold">
                {exp.company}
              </p>

              <p className="text-gray-400 text-sm mb-2">
                {exp.duration}
              </p>

              <p className="text-gray-300 text-sm">
                {exp.desc}
              </p>

              {/* Certificate */}
              {exp.certificate && (
                <Link
                  href={exp.certificate}
                  target="_blank"
                  className="inline-block mt-3 text-sm text-black bg-[#4fced5] px-3 py-1 rounded-md font-semibold hover:scale-105 transition"
                >
                  View Certificate
                </Link>
              )}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ExperienceContent;