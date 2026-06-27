"use client";

import React from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[#4fced5]/30 bg-gradient-to-br from-[#0f1720] via-[#142029] to-[#081114] sm:p-5 p-3 text-center shadow-[0_0_35px_rgba(79,206,213,0.12)] md:p-10">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4fced5]/20 blur-[90px]" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative mx-auto max-w-3xl"
      >
        <p className="mb-2 font-semibold text-xl text-[#4fced5]">Let’s Connect</p>

        <h2 className="sm:text-3xl text-xl font-bold text-white md:text-4xl">
          Have a role, internship, or project in mind?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          I’m open to Junior Full Stack Developer, MERN Stack Developer,
          Frontend Developer, QA Engineer roles, and freelance web development
          work.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="mailto:rohamamajeed4@gmail.com?subject=Work Opportunity&body=Hi Rohama, I visited your portfolio and would like to discuss an opportunity with you."
            className="flex items-center gap-2 rounded-xl bg-[#4fced5] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
          >
            <Mail size={18} />
            Email Me
          </Link>

          <Link
            href="https://wa.me/923250336309"
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
          >
            <MessageCircle size={18} />
            Contact Page
          </Link>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="https://github.com/Rohama-Majeed7"
            target="_blank"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-[#4fced5] hover:text-black"
          >
            <Github size={18} />
          </Link>

          <Link
            href="https://linkedin.com/in/rohama-majeed-213124282"
            target="_blank"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-[#4fced5] hover:text-black"
          >
            <Linkedin size={18} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;