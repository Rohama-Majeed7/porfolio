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
     
        <span className="text-[#50ced6] font-bold">
          <Typewriter
            words={["Software Engineer","Mern Full Stack"]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      

     
    </motion.div>
  );
};

export default BlinkText;
