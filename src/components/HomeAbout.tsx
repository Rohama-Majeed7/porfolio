"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HomeAbout = () => {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="mb-2 font-semibold text-[#4fced5]">About Me</p>

          <h2 className="text-3xl font-bold text-white">
            I turn ideas into clean and practical web applications.
          </h2>

          <Link
            href="/about"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#4fced5]/40 px-4 py-2 text-sm font-semibold text-[#4fced5] transition hover:bg-[#4fced5] hover:text-black"
          >
            More About Me
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-white/10 bg-black/20 p-5"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4fced5]/30 bg-[#4fced5]/10 px-4 py-2 text-sm text-[#4fced5]">
            <Sparkles size={16} />
            Full Stack Developer
          </div>

          <p className="leading-relaxed text-white/70">
            I’m Rohama Majeed, a Full Stack Developer with experience in React,
            Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, and API
            integration. I enjoy building responsive and user-friendly
            applications with strong attention to UI, performance, and clean
            code.
          </p>

          <p className="mt-4 leading-relaxed text-white/70">
            I have worked on dashboards, LMS platforms, authentication systems,
            admin panels, chat apps, blog platforms, and full-stack CRUD
            applications. My QA experience helps me debug better and deliver
            more reliable software.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;