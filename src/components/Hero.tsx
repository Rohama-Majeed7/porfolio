"use client";

import React, { useEffect, useState } from "react";
import BlinkText from "@/components/BlinkText";
import myImg from "@/my-img.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSpin(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex justify-center bg-gradient-to-tr from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]
 items-center min-h-[85vh]"
    >
      <main className="relative w-full sm:w-[98vw] max-w-[1150px] mx-auto flex flex-col text-[#f1f1f1] ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl py-2 md:text-5xl  font-extrabold bg-gradient-to-r text-[#9f70fd]">
            Rohama Majeed
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1aa] my-3">
            Software Engineer
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row max-w-[1050px] w-full mx-auto items-center justify-between gap-10 bg-[#0a0a0a] md:rounded-xl shadow-2xl px-6 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <motion.article
            className="flex flex-col gap-6 md:w-[52%] text-center md:text-left"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <BlinkText />

            <p className="text-[17px]  text-[#a1a1aa]">
              I am a{" "}
              <span className="text-[#c084fc] font-semibold">
                creative developer
              </span>{" "}
              crafting sleek, responsive, and user-centered digital experiences
              with a passion for detail and polish.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] text-white font-semibold rounded-full shadow-md hover:shadow-[0_0_20px_#ff6ec7] transition duration-300 w-fit mx-auto md:mx-0"
            >
              Hire Me
            </motion.button>
          </motion.article>

          <motion.article
            className="md:w-[42%] w-full flex justify-center"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src={myImg}
              alt="Rohama Majeed"
              className={`w-[300px] mb-[65px] sm:m-0 sm:max-w-[250px] rounded-2xl border-[1.5px] border-[#9f70fd] shadow-[0_0_30px_#9f70fd50] object-cover transition-transform duration-500 ${
                spin ? "animate-spin-slow" : "hover:scale-105"
              }`}
            />
          </motion.article>
        </motion.div>
      </main>
    </motion.section>
  );
};

export default Hero;
