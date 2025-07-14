"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  User,
  FileText,
  FolderKanban,
  Code,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", icon: <Home size={22} />, label: "Home" },
  { href: "/about", icon: <User size={22} />, label: "About" },
  { href: "/resume", icon: <FileText size={22} />, label: "Resume" },
  { href: "/projects", icon: <FolderKanban size={22} />, label: "Projects" },
  { href: "/skills", icon: <Code size={22} />, label: "Skills" },
  { href: "/contact", icon: <Mail size={22} />, label: "Contact" },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = isMobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, [isMobileOpen]);

  return (
    <>
      <div className="flex justify-between items-center p-4 w-full   border-b-2 border-[#9f70fd] shadow-md md:hidden z-50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] bg-clip-text text-transparent">
          Romi.Dev
        </h1>
        <button
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="p-2 z-50 rounded-md border border-[#9f70fd] bg-[#1a1a1a] text-white"
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#0a0a0a6c] bg-opacity-40 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[220px] bg-[#0a0a0a52] backdrop-blur-lg flex flex-col items-start pt-28 px-4 gap-6 z-40"
            >
              {navItems.map(({ href, icon, label }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-4 w-full py-2 hover:bg-[#1a1a1a] rounded-lg transition-all"
                >
                  <div className="p-3 rounded-full border-2 border-[#9f70fd] bg-[#1a1a1a] text-white hover:bg-gradient-to-tr from-[#9f70fd] via-[#c084fc] to-[#ff6ec7] shadow-lg transition-all duration-300">
                    {icon}
                  </div>
                  <span className="text-white">{label}</span>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
