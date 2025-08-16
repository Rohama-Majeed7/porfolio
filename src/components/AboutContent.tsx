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
      className="bg-[#26333a] h-[87%] sm:rounded-lg border-[#4fced5] shadow-[0_0_7px_#4fced5]"
    >
      <main className="flex flex-col p-2 h-full">
        <div className="text-left">
          <p className=" font-extrabold text-[#4fced5] text-2xl  ">
            <span className="text-white">About</span> Me
          </p>
          <div className="bg-[#4fced5] h-1 w-28 rounded-lg mb-2"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col p-3 gap-3 overflow-auto scrollable h-full"
        >
          <motion.article
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[250px] border-[#4fced5] shadow-[0_0_7px_#4fced5]  rounded-lg"
          >
            <Image
              src={myImg}
              alt="About"
              className="w-full mx-auto object-cover shadow-lg rounded-lg "
            />
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-1"
          >
            <p className="text-white">
              I’m a passionate{" "}
              <span className="text-[#4fced5] font-semibold">
                MERN Stack Developer
              </span>{" "}
              with a strong focus on building{" "}
              <span className="text-[#4fced5] font-semibold">scalable</span> and{" "}
              <span className="text-[#4fced5] font-semibold">user-first</span>{" "}
              web applications. Skilled in{" "}
              <span className="text-[#4fced5] font-semibold">React</span>,{" "}
              <span className="text-[#4fced5] font-semibold">Node.js</span>,{" "}
              <span className="text-[#4fced5] font-semibold">Express</span>,{" "}
              <span className="text-[#4fced5] font-semibold">MongoDB</span>,{" "}
              <span className="text-[#4fced5] font-semibold">HTML</span>,{" "}
              <span className="text-[#4fced5] font-semibold">CSS</span>, and{" "}
              <span className="text-[#4fced5] font-semibold">JavaScript</span>.
              I enjoy turning ideas into interactive digital products that
              combine clean design with efficient code.
            </p>

            <h2 className="text-2xl font-bold text-[#f1f1f1] mt-3">
              🚀 <span className="text-[#4fced5]">15+</span> Projects Completed
            </h2>

            <Link
              href="/myResume/Rohama-Resume-2025.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-b from-[#326E7D] to-[#1E2F39] text-white font-bold shadow hover:scale-105 hover:shadow-[#4fced5] border-2 border-[#4fced5]/40 transition-all duration-300 w-fit mx-auto md:mx-0 sm:mb-0 mb-8"
            >
              Download CV
            </Link>
          </motion.article>
        </motion.div>
      </main>
    </section>
  );
};

export default AboutContent;
