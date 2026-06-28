"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { navItems } from "@/helper";

const resumeLink =
  "https://drive.google.com/file/d/1nbwdihKZxLB64cDsyM8f2u5_7Qy3n3g-/view?usp=sharing";

const MianHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50">
      <nav className="rounded-3xl border border-white/10 bg-[#071014]/80 px-4 py-3 shadow-[0_0_30px_rgba(79,206,213,0.08)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#4fced5] text-lg font-black text-black shadow-[0_0_20px_rgba(79,206,213,0.3)]">
              R
            </div>

            <div className="leading-tight">
              <h1 className="text-sm font-bold text-white transition group-hover:text-[#4fced5] sm:text-base">
                Rohama Majeed
              </h1>
              <p className="text-xs text-white/50">Full Stack Developer</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center  lg:flex">
            {navItems.map(({ href, label }) => {
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(href));

              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative rounded-2xl xl:px-4 px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#4fced5] text-black"
                      : "text-white/70 hover:bg-white/5 hover:text-[#4fced5]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="https://github.com/Rohama-Majeed7"
              target="_blank"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
            >
              <Github size={18} />
            </Link>

            <Link
              href="https://linkedin.com/in/rohama-majeed-213124282"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
            >
              <Linkedin size={18} />
            </Link>

            <Link
              href={resumeLink}
              target="_blank"
              className="flex items-center gap-2 rounded-2xl bg-[#4fced5] px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
            >
              <Download size={16} />
              Resume
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-[#4fced5] hover:text-[#4fced5] lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
                {navItems.map(({ href, icon: Icon, label }) => {
                  const isActive =
                    pathname === href ||
                    (href !== "/" && pathname.startsWith(href));

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-[#4fced5] text-black"
                          : "bg-white/5 text-white/75 hover:text-[#4fced5]"
                      }`}
                    >
                      <Icon size={18} />
                      {label}
                    </Link>
                  );
                })}

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <Link
                    href="https://github.com/Rohama-Majeed7"
                    target="_blank"
                    className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
                  >
                    <Github size={18} />
                  </Link>

                  <Link
                    href="https://linkedin.com/in/rohama-majeed-213124282"
                    target="_blank"
                    className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-white transition hover:border-[#4fced5] hover:text-[#4fced5]"
                  >
                    <Linkedin size={18} />
                  </Link>

                  <Link
                    href={resumeLink}
                    target="_blank"
                    className="flex items-center justify-center rounded-2xl bg-[#4fced5] px-3 py-3 text-black transition hover:scale-[1.02]"
                  >
                    <Download size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default MianHeader;