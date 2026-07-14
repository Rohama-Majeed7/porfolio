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
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl border border-[#BDC3C7]/30 bg-[#2C3E50]/95 backdrop-blur-md px-4 py-3 shadow-lg"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/" className="group flex items-center gap-3">
              <span className="text-lg font-bold text-[#ECF0F1] tracking-wide transition group-hover:text-[#BDC3C7]">
                Rohama
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map(({ href, label }, i) => {
              const isActive =
                pathname === href || (href !== "/" && pathname.startsWith(href));

              return (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    href={href}
                    className={`relative rounded-xl xl:px-4 px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#ECF0F1] text-[#2C3E50] font-semibold"
                        : "text-[#BDC3C7] hover:bg-white/10 hover:text-[#ECF0F1]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl bg-[#ECF0F1] -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden items-center gap-2 lg:flex"
          >
            <Link
              href="https://github.com/Rohama-Majeed7"
              target="_blank"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7F8C8D]/50 bg-white/5 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1] hover:scale-110"
            >
              <Github size={18} />
            </Link>

            <Link
              href="https://linkedin.com/in/rohama-majeed-213124282"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7F8C8D]/50 bg-white/5 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1] hover:scale-110"
            >
              <Linkedin size={18} />
            </Link>

            <Link
              href={process.env.NEXT_PUBLIC_RESUME || "#"}
              target="_blank"
              className="flex items-center gap-2 rounded-xl bg-[#ECF0F1] px-4 py-2 text-sm font-semibold text-[#2C3E50] transition hover:bg-[#BDC3C7] hover:scale-105 active:scale-95"
            >
              <Download size={16} />
              Resume
            </Link>
          </motion.div>

          {/* Mobile Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7F8C8D]/50 bg-white/5 text-[#BDC3C7] transition hover:border-[#ECF0F1] hover:text-[#ECF0F1] lg:hidden"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 grid gap-2 border-t border-[#7F8C8D]/30 pt-4">
                {navItems.map(({ href, icon: Icon, label }, i) => {
                  const isActive =
                    pathname === href ||
                    (href !== "/" && pathname.startsWith(href));

                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                    >
                      <Link
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
                    </motion.div>
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
                    href={process.env.NEXT_PUBLIC_RESUME || "#"}
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
      </motion.nav>
    </header>
  );
};

export default MianHeader;