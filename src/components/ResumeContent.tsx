"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { resumeData } from "@/helper";

const ResumeContent = () => {
  return (
    <section
      id="resume"
      className="flex justify-center  bg-gradient-to-tr from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]
       items-center min-h-[90vh]"
    >
      <main className="sm:w-[98vw] w-full md:rounded-lg  max-w-[1050px] bg-[#0a0a0a] gap-3 items-center mx-auto flex flex-col  justify-between p-4">
        <div className="text-center">
          <p className="sm:text-5xl text-4xl font-extrabold text-[#9f70fd]  md:mt-3">
            Resume
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 w-full md:mt-12 mt-5">
          {resumeData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#1a1a1a] h-[200px] p-6 rounded-2xl shadow-md hover:shadow-[#9f70fd]/30 border-2 border-[#9f70fd] transition-all duration-300"
            >
              <h2 className="text-[#9f70fd] font-bold text-xl mb-2">
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
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] text-white font-bold shadow-md hover:scale-105 hover:shadow-[#ff6ec7]/40 transition-all duration-300 w-fit mx-auto mt-6 sm:mb-0 mb-8"
        >
           Download CV
        </Link>
      </main>
    </section>
  );
};

export default ResumeContent;
