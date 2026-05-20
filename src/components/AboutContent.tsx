"use client";

import React from "react";
import myImg from "@/myImgs/1718159743761-removebg-preview.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutContent = () => {
  return (
    <section
      id="about"
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
      <main className="flex flex-col h-full p-4 sm:p-6 gap-4">
        
        {/* HEADER */}
        <div>
          <p className="text-2xl font-bold text-white">
            About <span className="text-[#4fced5]">Me</span>
          </p>
          <div className="h-1 w-20 bg-[#4fced5] rounded-full mt-1"></div>
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-6 items-center md:items-start "
        >
          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="
              w-[180px]
              sm:w-[220px]
              md:w-[250px]
              flex-shrink-0
              rounded-2xl
              border border-[#4fced5]/40
              shadow-lg
              overflow-hidden
            "
          >
            <Image
              src={myImg}
              alt="About"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 text-sm sm:text-base text-gray-300"
          >
            <p>
              I’m a passionate{" "}
              <span className="text-[#4fced5] font-semibold">
                MERN Stack Developer
              </span>{" "}
              focused on building modern, scalable, and user-friendly web
              applications using clean architecture and best practices.
            </p>

            <p>
              Skilled in{" "}
              <span className="text-[#4fced5]">React</span>,{" "}
              <span className="text-[#4fced5]">Node.js</span>,{" "}
              <span className="text-[#4fced5]">Express</span>,{" "}
              <span className="text-[#4fced5]">MongoDB</span>, and frontend
              technologies like HTML, CSS, and JavaScript.
            </p>

            {/* STATS */}
            <div className="flex items-center gap-3 mt-2">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <h2 className="text-lg font-bold text-white">
                  15+ <span className="text-[#4fced5]">Projects</span>
                </h2>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-3">
              <Link
                href="/myResume/Rohama-Majeed.pdf"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2.5
                  rounded-xl
                  bg-[#4fced5]
                  text-black
                  font-semibold
                  shadow-md
                  hover:shadow-[0_0_20px_rgba(79,206,213,0.5)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </section>
  );
};

export default AboutContent;