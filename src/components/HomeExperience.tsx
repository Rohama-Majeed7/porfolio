"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/helper";

const HomeExperience = () => {
  const latestExperience = experiences.slice(0, 3);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-8">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-semibold text-[#4fced5]">Experience</p>
          <h2 className="text-3xl font-bold text-white">Work Journey</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
            My development, QA, internship, and community experience.
          </p>
        </div>

        <Link
          href="/experience"
          className="flex w-fit items-center gap-2 rounded-xl border border-[#4fced5]/40 px-4 py-2 text-sm font-semibold text-[#4fced5] transition hover:bg-[#4fced5] hover:text-black"
        >
          View Experience
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {latestExperience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.title}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className="rounded-3xl border border-white/10 bg-black/20 p-5 transition hover:border-[#4fced5]/40"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#4fced5]/10 text-[#4fced5]">
              <Briefcase size={20} />
            </div>

            <h3 className="text-lg font-bold text-white">{item.title}</h3>

            <p className="mt-1 text-sm font-semibold text-[#4fced5]">
              {item.company}
            </p>

            <p className="mt-1 text-xs text-white/50">{item.duration}</p>

            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeExperience;