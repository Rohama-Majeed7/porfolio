"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  FileUser,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import BlinkText from "./BlinkText";

const socialLinks = [
  { icon: <Mail size={18} />, href: "mailto:rohamamajeed4@gmail.com" },
  { icon: <Phone size={18} />, href: "tel:+923250336309" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/rohama-majeed-213124282" },
  { icon: <Github size={18} />, href: "https://github.com/Rohama-Majeed7" },
];

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        relative
        h-full
        rounded-3xl
        border border-[#50ced6]/40
        bg-gradient-to-br from-[#0f1720] via-[#1c2a33] to-[#0b1116]
        shadow-[0_0_25px_rgba(80,206,214,0.2)]
        backdrop-blur-xl
        overflow-hidden
      "
    >
      {/* Glow */}
      <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-[#50ced6]/20 blur-2xl"></div>

      {/* Cover */}
      <div className="relative">
        <Image
          src="/mern.png"
          height={200}
          width={800}
          className="h-[150px] sm:h-[170px] w-full object-cover opacity-70"
          alt="mern"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-[#0f1720]" />
      </div>

      {/* Profile */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute left-1/2 top-[90px] sm:top-[110px] -translate-x-1/2"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#50ced6] blur-lg opacity-40"></div>

          <Image
            src="/my2img.png"
            height={100}
            width={100}
            alt="profile"
            className="rounded-full border-4 border-[#50ced6] shadow-lg"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="mt-[55px] sm:mt-[75px] flex flex-col items-center px-4 pb-5 text-center">
        
        {/* Name */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Rohama Majeed
        </h1>

        {/* Role */}
        <div className="flex items-center gap-2 text-[#50ced6] mt-1">
          <Sparkles size={14} />
          <BlinkText />
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-snug max-w-[220px]">
          Full Stack Developer building modern web apps
        </p>

        {/* Social */}
        <div className="mt-4 flex gap-3">
          {socialLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              className="
                h-9 w-9
                flex items-center justify-center
                rounded-xl
                bg-white/5
                border border-white/10
                text-white
                hover:bg-[#50ced6]
                hover:text-black
                transition
              "
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Resume */}
        <Link
          href="/myResume/Rohama-Majeed.pdf"
          target="_blank"
          className="
            mt-5
            flex items-center gap-2
            px-4 py-2
            text-xs sm:text-sm
            rounded-xl
            border border-[#50ced6]/40
            bg-[#50ced6]/10
            text-[#50ced6]
            hover:bg-[#50ced6]
            hover:text-black
            transition
          "
        >
          <FileUser size={16} />
          Resume
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;