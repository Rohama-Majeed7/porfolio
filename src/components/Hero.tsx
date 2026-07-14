"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileUser,
  FolderKanban,
  MessageCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import BlinkText from "./BlinkText";

const socialLinks = [
  {
    icon: <Mail size={18} />,
    href: "mailto:rohamamajeed4@gmail.com",
    label: "Email",
  },
  {
    icon: <FaWhatsapp size={18} />,
    href: "https://wa.me/923481792418",
    label: "WhatsApp",
  },
  {
    icon: <Linkedin size={18} />,
    href: "https://linkedin.com/in/rohama-majeed-213124282",
    label: "LinkedIn",
  },
  {
    icon: <Github size={18} />,
    href: "https://github.com/Rohama-Majeed7",
    label: "GitHub",
  },
];

const stats = [
  { value: "20+", label: "Projects" },
  { value: "2+", label: "Internships" },
  { value: "7+", label: "Months" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-xl border border-[#BDC3C7]/20 bg-[#ECF0F1] sm:p-5 p-3 md:p-8 lg:p-10">

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

        {/* Mobile Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm lg:hidden"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#34495E]/30 bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] sm:p-5 p-2 shadow-xl">
            <div className="absolute inset-x-0 top-0 h-28 bg-[#7F8C8D]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20">
              <Image
                src="/mern.png"
                alt="MERN stack"
                width={500}
                height={180}
                className="h-32 w-full object-cover opacity-70"
                priority
              />
            </div>

            <div className="relative -mt-12 flex justify-center">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/my2img.png"
                  alt="Rohama Majeed"
                  width={115}
                  height={115}
                  className="rounded-full border-4 border-[#BDC3C7] bg-[#2C3E50] shadow-xl"
                  priority
                />
              </motion.div>
            </div>

            <div className="relative mt-4 text-center">
              <h3 className="text-xl font-bold text-[#ECF0F1]">Rohama Majeed</h3>
              <p className="mt-1 text-sm text-[#BDC3C7]">
                Full Stack Developer
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="rounded-2xl border border-[#7F8C8D]/30 bg-white/5 sm:p-3 p-2"
                  >
                    <h4 className="text-xl font-bold text-[#BDC3C7]">{stat.value}</h4>
                    <p className="text-xs text-[#ECF0F1]/70">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7F8C8D]/30 bg-[#34495E]/80 px-4 py-2 text-sm text-[#ECF0F1]"
          >
            <motion.span
              animate={{ rotate: [0, 15, -10, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Star size={16} />
            </motion.span>
            <BlinkText />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl sm:text-4xl text-2xl font-bold leading-tight text-[#2C3E50] sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <span className="text-[#34495E]">Rohama Majeed</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-xl font-semibold text-[#2C3E50]/90 sm:text-2xl"
          >
            Full Stack MERN Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-[#34495E]/80 sm:text-base"
          >
            Full Stack MERN Developer building responsive, scalable, and reliable web
            applications with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl bg-[#2C3E50] px-4 py-3 text-sm font-semibold text-[#ECF0F1] transition hover:bg-[#34495E] hover:scale-105 active:scale-95"
            >
              <FolderKanban size={18} />
              View Projects
              <ArrowRight size={16} />
            </Link>

            <Link
              href={process.env.NEXT_PUBLIC_RESUME || "#"}
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-[#7F8C8D] bg-transparent px-4 py-3 text-sm font-semibold text-[#34495E] transition hover:bg-[#34495E] hover:text-[#ECF0F1] active:scale-95"
            >
              <FileUser size={18} />
              Resume
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-[#7F8C8D] px-4 py-3 text-sm font-semibold text-[#34495E] transition hover:border-[#2C3E50] hover:text-[#2C3E50] active:scale-95"
            >
              <MessageCircle size={18} />
              Contact
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            {socialLinks.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.65 + i * 0.07 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7F8C8D]/50 bg-white/80 text-[#34495E] transition hover:bg-[#2C3E50] hover:text-[#ECF0F1]"
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-xl border border-[#34495E]/30 bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] sm:p-5 p-2 shadow-xl">
            <div className="absolute inset-x-0 top-0 h-28 bg-[#7F8C8D]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <Image
                src="/mern.png"
                alt="MERN stack"
                width={500}
                height={180}
                className="h-32 w-full object-cover opacity-70"
                priority
              />
            </div>

            <div className="relative -mt-12 flex justify-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/my2img.png"
                  alt="Rohama Majeed"
                  width={115}
                  height={115}
                  className="rounded-full border-4 border-[#BDC3C7] bg-[#2C3E50] shadow-xl"
                  priority
                />
              </motion.div>
            </div>

            <div className="relative mt-4 text-center">
              <h3 className="text-xl font-bold text-[#ECF0F1]">Rohama Majeed</h3>
              <p className="mt-1 text-sm text-[#BDC3C7]">
                Full Stack Developer
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl border border-[#7F8C8D]/30 bg-white/5 sm:p-3 p-2 cursor-default"
                  >
                    <h4 className="text-xl font-bold text-[#BDC3C7]">{stat.value}</h4>
                    <p className="text-xs text-[#ECF0F1]/70">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;