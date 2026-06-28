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
  Sparkles,
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
    href: "https://wa.me/923250336309",
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

const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:p-5 p-3 shadow-[0_0_35px_rgba(79,206,213,0.1)] backdrop-blur-xl md:p-8 lg:p-10">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4fced5]/20 blur-[80px]" />
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#4fced5]/10 blur-[90px]" />

      <div className="relative  grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm md:hidden"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#4fced5]/30 bg-gradient-to-br from-[#0f1720] via-[#1c2a33] to-[#0b1116] sm:p-5 p-2 shadow-[0_0_30px_rgba(79,206,213,0.15)]">
            <div className="absolute inset-x-0 top-0 h-28 bg-[#4fced5]/10 blur-3xl" />

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
              <Image
                src="/my2img.png"
                alt="Rohama Majeed"
                width={115}
                height={115}
                className="rounded-full border-4 border-[#4fced5] bg-[#0f1720] shadow-xl"
                priority
              />
            </div>

            <div className="relative mt-4 text-center">
              <h3 className="text-xl font-bold">Rohama Majeed</h3>
              <p className="mt-1 text-sm text-[#4fced5]">
                Full Stack Developer
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 sm:p-3 p-2">
                  <h4 className="text-xl font-bold text-[#4fced5]">20+</h4>
                  <p className="text-xs text-white/60">Projects</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 sm:p-3 p-2">
                  <h4 className="text-xl font-bold text-[#4fced5]">2+</h4>
                  <p className="text-xs text-white/60">Internships</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 sm:p-3 p-2">
                  <h4 className="text-xl font-bold text-[#4fced5]">7+</h4>
                  <p className="text-xs text-white/60">Months</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 sm:px-4 px-2 py-2 text-sm text-[#4fced5]">
            <Sparkles size={16} />
            <BlinkText />
          </div>

          <h1 className="max-w-3xl sm:text-4xl text-2xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I’m{" "}
            <span className="text-[#4fced5]">Rohama Majeed</span>
          </h1>

          <h2 className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl">
            Full Stack MERN Developer
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Full Stack MERN Developer building responsive, scalable, and reliable web
            applications with modern technologies.
          </p> 

          {/* <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
            Open to Full Stack, Frontend, MERN Stack, and QA opportunities.
          </p>  */}

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-xl bg-[#4fced5] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              <FolderKanban size={18} />
              View Projects
              <ArrowRight size={16} />
            </Link>

            <Link
              href="https://drive.google.com/file/d/1nbwdihKZxLB64cDsyM8f2u5_7Qy3n3g-/view?usp=sharing"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-[#4fced5]/40 bg-[#4fced5]/10 px-5 py-3 text-sm font-semibold text-[#4fced5] transition hover:bg-[#4fced5] hover:text-black"
            >
              <FileUser size={18} />
              Resume
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
            >
              <MessageCircle size={18} />
              Contact
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-[#4fced5] hover:text-black"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm hidden md:block"
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#4fced5]/30 bg-gradient-to-br from-[#0f1720] via-[#1c2a33] to-[#0b1116] sm:p-5 p-2 shadow-[0_0_30px_rgba(79,206,213,0.15)]">
            <div className="absolute inset-x-0 top-0 h-28 bg-[#4fced5]/10 blur-3xl" />

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
              <Image
                src="/my2img.png"
                alt="Rohama Majeed"
                width={115}
                height={115}
                className="rounded-full border-4 border-[#4fced5] bg-[#0f1720] shadow-xl"
                priority
              />
            </div>

            <div className="relative mt-4 text-center">
              <h3 className="text-xl font-bold">Rohama Majeed</h3>
              <p className="mt-1 text-sm text-[#4fced5]">
                Full Stack Developer
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 sm:p-3 p-2">
                  <h4 className="text-xl font-bold text-[#4fced5]">20+</h4>
                  <p className="text-xs text-white/60">Projects</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 sm:p-3 p-2">
                  <h4 className="text-xl font-bold text-[#4fced5]">2+</h4>
                  <p className="text-xs text-white/60">Internships</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 sm:p-3 p-2">
                  <h4 className="text-xl font-bold text-[#4fced5]">7+</h4>
                  <p className="text-xs text-white/60">Months</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;