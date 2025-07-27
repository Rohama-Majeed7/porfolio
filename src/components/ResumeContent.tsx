"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { resumeData } from "@/helper";

const ResumeContent = () => {
  return (
    <section
      id="resume"
      className="flex bg-[#26333a] border-[#4fced5] shadow-[0_0_7px_#4fced5] h-[87%] p-2 sm:rounded-lg"
    >
      <main className="flex flex-col justify-center">
        <div className="text-left">
          <p className=" font-extrabold text-[#fff] text-2xl  ">Resume</p>
          <div className="bg-[#4fced5] h-1 w-24 rounded-lg mb-2"></div>
        </div>

        <div className="flex flex-wrap gap-3 p-2 justify-center overflow-auto scrollable">
          {resumeData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#1a2328] h-[170px] w-[260px] p-4 rounded-2xl shadow-md hover:shadow-[#4fced5]/30 border-2 border-[#4fced5] transition-all duration-300"
            >
              <h2 className="text-[#4fced5] font-bold text-xl mb-2">
                {item.year}
              </h2>
              <p className="text-lg text-white font-semibold mb-1">
                {item.title}
              </p>
              <p className="text-[#a1a1aa]">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <Link
          href="/myResume/Rohama-Resume-2025.pdf"
          download
          className="px-6 py-3 rounded-full bg-gradient-to-b from-[#326E7D] to-[#1E2F39]  text-white font-bold shadow hover:scale-105 hover:shadow-[#4fced5] border-2 border-[#4fced5] /40 transition-all duration-300 self-center mx-auto md:mx-0 sm:mb-0 mb-8 mt-4"
        >
          Download CV
        </Link>
      </main>
    </section>
  );
};

export default ResumeContent;
