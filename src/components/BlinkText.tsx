"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const BlinkText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center md:text-left flex flex-col gap-2 md:gap-4"
    >
      <span className="text-[#ff6ec7] text-xl font-medium animate-pulse">
        Hello! 👋
      </span>

      <h1 className="md:text-4xl text-2xl font-bold text-white leading-tight">
        I am a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7]">
          <Typewriter
            words={["Frontend Developer", "Mern Developer", "Designer"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <h2 className="md:text-3xl text-xl font-semibold text-gray-300 tracking-wide">
        A Freelancer Web Developer
      </h2>
    </motion.div>
  );
};

export default BlinkText;
