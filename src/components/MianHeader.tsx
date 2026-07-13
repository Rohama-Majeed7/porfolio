"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { navItems } from "@/helper";

const MianHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50">
      <nav className="rounded-xl border border-[#BDC3C7]/30 bg-[#2C3E50]/95 backdrop-blur-md px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#ECF0F1] text-lg font-black text-[#2C3E50] shadow-[0_0_20px_rgba(236,240,241,0.3)] transition hover:scale-105">
              R
            </div>

            <div className="leading-tight">
              <h3 className="text-xs text-[#BDC3C7] font-bold">MERN DEVELOPER</h3>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map(({ href, label }) => {
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(href));

              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative rounded-xl xl:px-4 px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#ECF0F1] text-[#2C3E50] font-semibold"
                      : "text-[#BDC3C7] hover:bg-white/10 hover:text-[#ECF0F1]"
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
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7F8C8D]/50 bg-white/5 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1]"
            >
              <Github size={18} />
            </Link>

            <Link
              href="https://linkedin.com/in/rohama-majeed-213124282"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7F8C8D]/50 bg-white/5 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1]"
            >
              <Linkedin size={18} />
            </Link>

            <Link
              href={process.env.resume || "#"}
              target="_blank"
              className="flex items-center gap-2 rounded-xl bg-[#ECF0F1] px-4 py-2 text-sm font-semibold text-[#2C3E50] transition hover:bg-[#BDC3C7] hover:scale-105"
            >
              <Download size={16} />
              Resume
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7F8C8D]/50 bg-white/5 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1] lg:hidden"
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
              <div className="mt-4 grid gap-2 border-t border-[#7F8C8D]/30 pt-4">
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
                          ? "bg-[#ECF0F1] text-[#2C3E50]"
                          : "bg-white/5 text-[#BDC3C7] hover:bg-white/10 hover:text-[#ECF0F1]"
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
                    className="flex items-center justify-center rounded-2xl border border-[#7F8C8D]/50 bg-white/5 px-3 py-3 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1]"
                  >
                    <Github size={18} />
                  </Link>

                  <Link
                    href="https://linkedin.com/in/rohama-majeed-213124282"
                    target="_blank"
                    className="flex items-center justify-center rounded-2xl border border-[#7F8C8D]/50 bg-white/5 px-3 py-3 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1]"
                  >
                    <Linkedin size={18} />
                  </Link>

                  <Link
                    href={process.env.resume || "#"}
                    target="_blank"
                    className="flex items-center justify-center rounded-2xl bg-[#ECF0F1] px-3 py-3 text-[#2C3E50] transition hover:scale-[1.02]"
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